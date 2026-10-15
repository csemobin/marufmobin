export const featuredHighlights = [
  {
    key: "lms-ios",
    title: "LMS on iPhone",
    href: "https://apps.apple.com/us/app/lms-official-app/id6761157463",
  },
  {
    key: "lms-android",
    title: "LMS on Android",
    href: "https://play.google.com/store/apps/details?id=com.fondationlms.theofficiallmsapp&hl=en",
  },
  {
    key: "lyfuber",
    title: "Lyfuber",
    href: "https://play.google.com/store/apps/details?id=com.lyfuber.app&hl=en",
  },
] as const;

export const featuredStories = [
  {
    key: "lms",
    title: "LMS Official App",
    body: "A learning app for parents, tutors, and students. Book a session in one step, see which times are open, and message with audio, files, and class resources. Documents, spreadsheets, presentations, PDFs, and images open inside the app.",
    imageFirst: false,
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/lms-official-app/id6761157463",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.fondationlms.theofficiallmsapp&hl=en",
      },
    ],
  },
  {
    key: "lyfuber",
    title: "Lyfuber",
    body: "A ride-sharing app for daily commutes, city trips, and nights out. Riders and drivers each pick a role, book in a few taps, and follow the car on a live map that stays awake for the whole trip.",
    imageFirst: true,
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.lyfuber.app&hl=en",
      },
    ],
  },
] as const;
