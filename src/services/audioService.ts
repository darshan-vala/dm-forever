// Audio service supporting optional external URL or procedural calming Indian meditative wedding ambient sound via Web Audio API

class WeddingAudioController {
  private audioContext: AudioContext | null = null;
  private isPlaying: boolean = false;
  private audioElement: HTMLAudioElement | null = null;
  private synthInterval: number | null = null;
  private listeners: Array<(playing: boolean) => void> = [];

  constructor() {
    // Lazy initialized on user gesture
  }

  public subscribe(callback: (playing: boolean) => void): () => void {
    this.listeners.push(callback);
    callback(this.isPlaying);
    return () => {
      this.listeners = this.listeners.filter((cb) => cb !== callback);
    };
  }

  private notify() {
    this.listeners.forEach((cb) => cb(this.isPlaying));
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public async toggle(externalUrl?: string): Promise<boolean> {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      await this.play(externalUrl);
      return true;
    }
  }

  public async play(externalUrl?: string): Promise<void> {
    if (externalUrl && externalUrl.trim().length > 0) {
      try {
        if (!this.audioElement) {
          this.audioElement = new Audio(externalUrl);
          this.audioElement.loop = true;
        }
        await this.audioElement.play();
        this.isPlaying = true;
        this.notify();
        return;
      } catch (err) {
        console.warn('External audio failed, falling back to ambient generator:', err);
      }
    }

    // Procedural Ambient Indian Raga Synthesizer (Raag Yaman / Bhupali inspired peaceful tanpura & chime notes)
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!this.audioContext || this.audioContext.state === 'closed') {
        this.audioContext = new AudioCtx();
      }
      if (this.audioContext.state === 'suspended') {
        await this.audioContext.resume();
      }

      this.isPlaying = true;
      this.notify();
      this.startAmbientDrone();
    } catch (e) {
      console.error('AudioContext initialization failed', e);
      this.isPlaying = false;
      this.notify();
    }
  }

  public pause(): void {
    this.isPlaying = false;
    if (this.audioElement) {
      this.audioElement.pause();
    }
    if (this.synthInterval) {
      window.clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
    if (this.audioContext && this.audioContext.state === 'running') {
      this.audioContext.suspend();
    }
    this.notify();
  }

  private startAmbientDrone() {
    if (!this.audioContext) return;

    // Raag frequencies (C, D, E, G, A pentatonic scale)
    const baseFreq = 130.81; // C3
    const notes = [
      baseFreq, // C
      baseFreq * (9 / 8), // D
      baseFreq * (5 / 4), // E
      baseFreq * (3 / 2), // G (Pancham)
      baseFreq * (5 / 3), // A
      baseFreq * 2, // C4
      baseFreq * (9 / 4), // D4
      baseFreq * (5 / 2), // E4
      baseFreq * 3, // G4
    ];

    const playHarmonicPluck = () => {
      if (!this.audioContext || !this.isPlaying) return;

      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      const filter = this.audioContext.createBiquadFilter();

      // Soft warm lowpass filter like a bansuri / sitar resonating chamber
      filter.type = 'lowpass';
      filter.frequency.value = 1200;

      // Pick a harmonic note from the ragam scale
      const note = notes[Math.floor(Math.random() * notes.length)];
      osc.type = 'sine';
      osc.frequency.setValueAtTime(note, this.audioContext.currentTime);

      // Micro-vibrato
      const vibrato = this.audioContext.createOscillator();
      const vibratoGain = this.audioContext.createGain();
      vibrato.frequency.value = 4.5;
      vibratoGain.gain.value = 2;
      vibrato.connect(osc.frequency);
      vibrato.start();

      // Gentle envelope: slow attack, long serene decay
      const now = this.audioContext.currentTime;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.08, now + 1.2);
      gain.gain.exponentialRampToValueAtTime(0.00001, now + 4.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioContext.destination);

      osc.start(now);
      osc.stop(now + 4.6);
      vibrato.stop(now + 4.6);
    };

    // Play immediate warm chord
    playHarmonicPluck();
    setTimeout(playHarmonicPluck, 600);
    setTimeout(playHarmonicPluck, 1800);

    // Continue gentle melodic pacing
    this.synthInterval = window.setInterval(() => {
      if (this.isPlaying) {
        playHarmonicPluck();
      }
    }, 2800);
  }
}

export const weddingAudio = new WeddingAudioController();
