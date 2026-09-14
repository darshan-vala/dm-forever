import type { WeddingConfig } from '../types/wedding';

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: 'Darshan',
    bride: 'Mansi',
    displayNames: 'Mansi & Darshan',
    tagline: 'Two hearts. One beautiful beginning.',
    heroSubtext: 'Together with their families, they invite you to celebrate their journey of love.',
    invitationText: 'We invite you to celebrate the beginning of our forever.',
  },

  wedding: {
    startDate: '25 November 2026',
    endDate: '26 November 2026',
    countdownTarget: '2026-11-26T00:00:00+05:30',
    timezone: 'Asia/Kolkata',
    displayDates: '25 — 26 NOVEMBER 2026',
  },

  venue: {
    name: 'Bai Dayakor Hindu Aarogya Bhavan',
    street: 'Karimbag, Dumas',
    area: 'Dumas',
    city: 'Surat',
    state: 'Gujarat',
    pincode: '394550',
    fullAddress: 'Bai Dayakor Hindu Aarogya Bhavan, Karimbag, Dumas, Surat, Gujarat – 394550',
    googleMapsUrl: 'https://maps.google.com/?q=Bai+Dayakor+Hindu+Aarogya+Bhavan+Karimbag+Dumas+Surat+Gujarat+394550',
    embedMapQuery: 'Bai Dayakor Hindu Aarogya Bhavan, Dumas, Surat, Gujarat 394550',
  },

  story: {
    heading: 'Our Story',
    quote: [
      'Some stories begin with a moment.',
      'Some grow through countless little moments.',
      '',
      'Ours brought us here — to the beginning of forever.',
    ],
    chapters: [
      {
        title: 'The First Spark',
        subtitle: 'When paths crossed',
        text: 'A serendipitous connection that felt like coming home. In each other, we found laughter, calm, and an effortless sense of belonging.',
        image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'The Journey Together',
        subtitle: 'A tapestry of memories',
        text: 'From long conversations under starlit skies to shared dreams for the future, every chapter deepened the bond we share today.',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'The Beginning of Forever',
        subtitle: 'Surat, November 2026',
        text: 'Surrounded by our loved ones and the warmth of tradition, we step forward together into a lifetime of love, laughter, and endless adventure.',
        image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },

  events: [
    {
      id: 'mandap-muhurt',
      name: 'Mandap Muhurt',
      date: '25 November 2026',
      day: '25 Nov',
      dayNumber: 1,
      period: 'Morning',
      person: "Darshan's Family Side",
      subtitle: 'Auspicious Rituals & Mandap Blessing',
      description: 'An auspicious beginning as we prepare the mandap for the celebrations that follow.',
      theme: 'sacred-gold',
      image: '/mandap.png',
      iconName: 'SunMedium',
    },
    {
      id: 'celebration-of-love',
      name: 'Celebration of Love',
      date: '25 November 2026',
      day: '25 Nov',
      dayNumber: 1,
      period: 'Afternoon',
      subtitle: 'Festive Music, Laughter & Joyful Togetherness',
      description: 'An afternoon filled with laughter, colors, music, joy and all the little moments that make celebrations unforgettable.',
      theme: 'vibrant-festive',
      image: '/ChatGPT Image Sep 14, 2026, 11_39_57 AM.png',
      iconName: 'Sparkles',
    },
    {
      id: 'dj-night',
      name: 'A Night to Remember',
      date: '25 November 2026',
      day: '25 Nov',
      dayNumber: 1,
      period: 'Evening',
      subtitle: 'Music, Lights & Unfiltered Energy',
      description: 'When the sun goes down, the celebration turns up.',
      theme: 'nocturne-glow',
      image: '/dj night.png',
      iconName: 'Music',
    },
    {
      id: 'grah-shanti',
      name: 'Grah Shanti',
      date: '26 November 2026',
      day: '26 Nov',
      dayNumber: 2,
      period: 'Morning',
      person: "Mansi's Family Side",
      subtitle: 'Sacred Peace, Chants & Blessings',
      description: 'An auspicious ceremony filled with blessings, peace and good wishes for the journey ahead.',
      theme: 'serene-blessings',
      image: '/grah shanti.png',
      iconName: 'Flame',
    },
    {
      id: 'the-wedding',
      name: 'Vivah Sanskar',
      date: '26 November 2026',
      day: '26 Nov',
      dayNumber: 2,
      period: 'Evening',
      subtitle: 'Sacred Pheras & Royal Union',
      description: 'The sacred pheras around the holy fire, uniting two souls and two families in love, cherished vows, and lifelong togetherness.',
      theme: 'royal-climax',
      image: '/marriage.png',
      iconName: 'HeartHandshake',
    },
  ],

  gallery: {
    heading: 'Our Moments',
    categories: ['All', 'Us', 'The Celebrations', 'Family & Friends', 'The Wedding'],
    images: [
      {
        id: 'gal-1',
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
        title: 'Eternal Bond',
        category: 'Us',
        orientation: 'portrait',
        caption: 'A quiet glance before the celebrations begin.',
      },
      {
        id: 'gal-2',
        url: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1200&auto=format&fit=crop',
        title: 'Colors of Joy',
        category: 'The Celebrations',
        orientation: 'landscape',
        caption: 'Vibrant flowers and golden sunlight.',
      },
      {
        id: 'gal-3',
        url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
        title: 'Cherished Laughter',
        category: 'Family & Friends',
        orientation: 'landscape',
        caption: 'Surrounded by the ones who mean the world to us.',
      },
      {
        id: 'gal-4',
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
        title: 'Together in Grace',
        category: 'Us',
        orientation: 'portrait',
        caption: 'Hand in hand towards our new tomorrow.',
      },
      {
        id: 'gal-5',
        url: 'https://images.unsplash.com/photo-1545232979-fbf68fe9b1af?q=80&w=1200&auto=format&fit=crop',
        title: 'Auspicious Glow',
        category: 'The Celebrations',
        orientation: 'portrait',
        caption: 'Sacred lamps and ancient chants.',
      },
      {
        id: 'gal-6',
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
        title: 'The Sacred Vows',
        category: 'The Wedding',
        orientation: 'landscape',
        caption: 'Two souls bound by timeless promises.',
      },
      {
        id: 'gal-7',
        url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
        title: 'Night of Stars',
        category: 'The Celebrations',
        orientation: 'landscape',
        caption: 'Dancing under the warm evening lights.',
      },
      {
        id: 'gal-8',
        url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop',
        title: 'Forever & Always',
        category: 'The Wedding',
        orientation: 'portrait',
        caption: 'The beginning of our lifelong adventure.',
      },
    ],
  },

  cinematicVideo: {
    heading: 'A Little Glimpse of Us',
    subheading: 'Moments captured in motion, laughter preserved in time.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-an-indian-bride-and-groom-41584-large.mp4',
    posterImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop',
  },

  family: {
    heading: 'With the Blessings of Our Families',
    subheading: 'Their unconditional love, wisdom, and blessings have shaped our lives and brought us together.',
    mansiFamilyTitle: "MANSI'S FAMILY",
    mansiFamilyMembers: ["Smitaben and Kalpeshbhai Khalasi's daughter"],
    darshanFamilyTitle: "DARSHAN'S FAMILY",
    darshanFamilyMembers: ["Arunaben and Rameshbhai Vala's son"],
  },

  rsvp: {
    heading: 'Will You Join Us?',
    subheading: 'Your presence will make our celebrations even more special.',
    googleFormUrl: 'https://forms.google.com/PLACEHOLDER', // Replace with your actual Google Form URL
    events: [
      { id: 'mandap-muhurt', name: 'Mandap Muhurt', date: '25 November 2026', period: 'Morning' },
      { id: 'celebration-of-love', name: 'Celebration of Love', date: '25 November 2026', period: 'Afternoon' },
      { id: 'dj-night', name: 'A Night to Remember', date: '25 November 2026', period: 'Evening' },
      { id: 'grah-shanti', name: 'Grah Shanti', date: '26 November 2026', period: 'Morning' },
      { id: 'the-wedding', name: 'Vivah Sanskar', date: '26 November 2026', period: 'Evening' },
    ],
    attendanceOptions: ["Yes, I'll be there!", 'Celebrating with you in spirit'],
  },

  faq: {
    heading: 'Information & Travel',
    subheading: 'Everything you need to plan your journey to celebrate with us.',
    items: [
      {
        question: 'Where is the wedding?',
        answer: 'Bai Dayakor Hindu Aarogya Bhavan, Karimbag, Dumas, Surat, Gujarat – 394550.',
      },
      {
        question: 'How do I get to the venue?',
        answer: 'The venue is conveniently located in Dumas, Surat, approximately 8 km from Surat International Airport (STV) and 20 km from Surat Railway Station. Taxis and app-based cabs are readily available.',
        linkText: 'Open in Google Maps',
        linkUrl: 'https://maps.google.com/?q=Bai+Dayakor+Hindu+Aarogya+Bhavan+Karimbag+Dumas+Surat+Gujarat+394550',
      },
      {
        question: 'Where should I stay?',
        answer: 'Accommodation recommendations and partner stay details will be updated here shortly.',
      },
      {
        question: 'Is parking available?',
        answer: 'Valet and dedicated parking instructions for guests will be provided closer to the event.',
      },
      {
        question: 'Who can I contact for help?',
        answer: 'Family hospitality liaisons and event coordinators will be listed here prior to the wedding week.',
      },
    ],
  },

  share: {
    heading: 'Share Our Joy',
    subheading: 'Spread the word and celebrate the love with our friends and family.',
    title: 'Mansi & Darshan | Our Wedding',
    text: 'Join us as Mansi & Darshan celebrate their wedding on 25–26 November 2026 ❤️',
    url: typeof window !== 'undefined' ? window.location.href : 'https://mansi-darshan.wedding',
  },

  audio: {
    enabled: false,
    title: 'Ambient Wedding Sitar & Flute',
    audioUrl: '', // Supported: if blank, synthesizes gentle acoustic ambient harmonium & harp chimes
  },
};
