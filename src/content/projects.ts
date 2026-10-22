import type { Project } from "@/content/types";

export const projects = [
  {
    slug: "lms-official-app",
    title: "LMS Official App",
    summary:
      "A learning management app I developed for parents, tutors, and students — session booking, messaging, and in-app documents in one place.",
    year: "2025",
    role: "Flutter Developer",
    tags: [
      "Flutter",
      "Node.js",
      "MongoDB",
      "Firebase",
      "REST API",
      "Push Notifications",
      "Audio Messaging",
    ],
    featured: true,
    problem:
      "Students, educators, and parents needed one place to manage availability, book appointments, communicate, and share class materials without jumping between tools.",
    approach:
      "I developed the Flutter client with clean booking and messaging flows, including audio messages and in-app viewing for documents, spreadsheets, presentations, PDFs, and images. Backed by Node.js, MongoDB, Firebase authentication, and push notifications.",
    outcome:
      "I shipped it on the App Store and Google Play as Official LMS App, supporting STEM-focused learning environments with scheduling, communication, and resource sharing in a single product.",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/lms-official-app/id6761157463",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.fondationlms.theofficiallmsapp&pli=1",
      },
    ],
  },
  {
    slug: "lyfuber",
    title: "Lyfuber",
    summary:
      "A ride-sharing and car rental app I developed with live tracking, role-based rider and driver flows, and secure API-backed trip management.",
    year: "2025",
    role: "Flutter Developer",
    tags: [
      "Flutter",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Maps",
      "Socket.IO",
      "Firebase",
      "JWT",
      "Payments",
    ],
    featured: true,
    problem:
      "Riders and drivers needed a reliable way to book trips, follow the car in real time, and manage fares, notifications, and authentication across daily commutes and city rides.",
    approach:
      "I developed the Flutter app with Google Maps, geolocation, Socket.IO real-time updates, Firebase Auth and FCM, JWT-secured APIs, and payment gateway integration on a Node.js / Express / MongoDB backend.",
    outcome:
      "I published it on Google Play with ride booking, driver management, live tracking, fare calculation, trip management, and secure API communication for riders and drivers.",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.lyfuber.app&hl=en",
      },
    ],
  },
  {
    slug: "sleeknit",
    title: "Sleeknit",
    summary:
      "A merchant dashboard app I developed for products, orders, revenue, and recent order tracking.",
    year: "2025",
    role: "Flutter Developer",
    tags: ["Flutter", "REST API", "Dashboard", "E-commerce"],
    featured: true,
    problem:
      "Merchants needed a focused mobile view of catalog, orders, and revenue without digging through a heavy desktop admin panel on the go.",
    approach:
      "I built a Flutter merchant experience centered on products, orders, revenue summaries, and recent order tracking with clear lists and status-focused UI.",
    outcome:
      "I shipped Sleeknit on the App Store and Google Play for day-to-day store operations from a phone.",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/sleeknit/id6779087355",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.sleeknit.app&hl=en",
      },
    ],
  },
  {
    slug: "court-connect",
    title: "Court Connect",
    summary:
      "A sports session booking app I developed with search, filters, and court details in one place.",
    year: "2024",
    role: "Flutter Developer",
    tags: ["Flutter", "Booking", "Search", "Filters"],
    featured: false,
    problem:
      "Players needed a simple way to find courts, compare session options, and book without bouncing between messages and separate listings.",
    approach:
      "I designed booking flows around search, filters, and court detail screens so users can move from discovery to reservation in a few steps.",
    outcome:
      "I delivered a focused sports booking experience that keeps session discovery and court information together.",
    links: [],
  },
] satisfies Project[];
