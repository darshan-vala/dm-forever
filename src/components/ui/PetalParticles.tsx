import React, { useEffect, useRef } from 'react';

export const PetalParticles: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect user's motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Discrete, subtle particles (gold dust & soft blush petal flakes)
    interface Particle {
      x: number;
      y: number;
      radiusX: number;
      radiusY: number;
      rotation: number;
      speedY: number;
      speedX: number;
      rotationSpeed: number;
      opacity: number;
      color: string;
      type: 'petal' | 'dust';
    }

    const count = window.innerWidth < 768 ? 16 : 28;
    const particles: Particle[] = [];

    const colors = [
      'rgba(184, 151, 88, ', // muted gold
      'rgba(232, 223, 208, ', // champagne
      'rgba(242, 227, 225, ', // soft blush
    ];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radiusX: Math.random() * 4 + 2,
        radiusY: Math.random() * 6 + 3,
        rotation: Math.random() * Math.PI * 2,
        speedY: Math.random() * 0.4 + 0.15,
        speedX: (Math.random() - 0.5) * 0.25,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
        opacity: Math.random() * 0.45 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: Math.random() > 0.4 ? 'petal' : 'dust',
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.005) * 0.3 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.type === 'petal') {
          ctx.beginPath();
          ctx.ellipse(0, 0, p.radiusX, p.radiusY, 0, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.opacity})`;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.radiusX * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity * 0.8})`;
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-10 opacity-70 ${className}`}
    />
  );
};
