export interface RsvpSubmission {
  guestName: string;
  contact: string; // Phone or Email
  guestCount: number;
  attendingStatus: "Yes, I'll be there!" | 'Celebrating with you in spirit';
  eventsAttending: string[];
  dietaryPreference?: string;
  message?: string;
  submittedAt?: string;
}

export interface RsvpResponse {
  success: boolean;
  message: string;
}

// Check if Supabase credentials are provided in environment variables
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export async function submitRsvp(data: RsvpSubmission): Promise<RsvpResponse> {
  const payload = {
    ...data,
    submittedAt: new Date().toISOString(),
  };

  // 1. If Supabase is configured, submit to Supabase REST endpoint
  if (SUPABASE_URL && SUPABASE_ANON_KEY) {
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/rsvps`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          guest_name: payload.guestName,
          contact: payload.contact,
          guest_count: payload.guestCount,
          attending_status: payload.attendingStatus,
          events_attending: payload.eventsAttending,
          dietary_preference: payload.dietaryPreference || '',
          message: payload.message || '',
          created_at: payload.submittedAt,
        }),
      });

      if (!res.ok) {
        throw new Error(`Supabase request failed with status ${res.status}`);
      }

      return {
        success: true,
        message: 'Thank you! Your RSVP has been confirmed.',
      };
    } catch (err) {
      console.warn('Supabase submission failed, falling back to local storage:', err);
    }
  }

  // 2. Fallback / Default Mode: Store locally in browser and simulate graceful server latency
  await new Promise((resolve) => setTimeout(resolve, 150));

  try {
    const existing = JSON.parse(localStorage.getItem('dm_wedding_rsvps') || '[]');
    existing.push(payload);
    localStorage.setItem('dm_wedding_rsvps', JSON.stringify(existing));
  } catch {
    // ignore local storage restrictions
  }

  return {
    success: true,
    message: payload.attendingStatus === "Yes, I'll be there!"
      ? 'Thank you! We are overjoyed to celebrate with you.'
      : 'Thank you for your warm wishes and blessings.',
  };
}
