import { site, socials } from "@/content/site";

const github =
  socials.find((social) => social.label === "GitHub")?.href ??
  `https://github.com/${site.github}`;

const linkedin =
  socials.find((social) => social.label === "LinkedIn")?.href ?? "";

export const applicant = {
  name: "MD Maruf",
  role: "Flutter Developer",
  location: site.location,
  email: "appdevmaruf@gmail.com",
  phone: "01936691536 / 01701705515",
  github,
  linkedin,
  portfolio: site.url,
} as const;

export const coverLetterDoc = {
  id: "cover" as const,
  title: "Cover Letter",
  shortTitle: "Cover Letter",
  blurb:
    "A short introduction for hiring managers — interest, strengths, and why you should talk next.",
  fileName: "Maruf-Mobin-Cover-Letter.pdf",
  greeting: "Dear Hiring Manager,",
  paragraphs: [
    "I am writing to express my interest in software development opportunities within your organization. I am a Flutter and Full-Stack Developer with professional experience in building scalable mobile and web applications using Flutter, Dart, Node.js, Laravel, React.js, and modern backend technologies.",
    "In my professional experience, I have worked on a variety of application domains, including ride-sharing, car rental, e-commerce, learning management systems, and service-based applications. I have hands-on experience developing REST APIs, authentication systems, real-time communication, Google Maps and location-based services, Firebase integrations, push notifications, payment gateways, subscriptions, and other application features.",
    "I have practical experience with state management solutions such as Provider and GetX, and I am currently expanding my knowledge of Riverpod and modern software architecture. I focus on writing reusable, maintainable, and scalable code while following clean architecture principles, design patterns, Git/GitHub workflows, and good development practices.",
    "One of my key strengths is my ability to understand complex requirements, troubleshoot difficult technical problems, and continuously learn new technologies. I have experience working across both frontend and backend development, which allows me to understand applications from end to end and collaborate effectively with different members of a development team.",
    "I have also been involved in application deployment and release processes for both Google Play Console and Apple App Store, giving me practical experience beyond development alone.",
    "I am highly motivated to grow as a professional software engineer and contribute to a team where I can use my existing experience while continuing to learn and take on more challenging responsibilities. I would welcome the opportunity to discuss how my skills and experience could contribute to your organization.",
  ],
  closing:
    "Thank you for considering my application. I look forward to the opportunity to discuss my qualifications with you.",
  signOff: "Sincerely,",
} as const;

export const curriculumVitae = {
  id: "cv" as const,
  title: "Curriculum Vitae",
  shortTitle: "CV",
  blurb:
    "Structured resume — summary, projects, skills, education, courses, and experience.",
  fileName: "Maruf-Mobin-Curriculum-Vitae.pdf",
  summary: [
    "Mid-Level Flutter & Full-Stack Developer experienced in building scalable mobile and web applications using Flutter, Dart, Node.js, Laravel, and React.js. Skilled in developing ride-sharing, car rental, e-commerce, LMS, and service-based applications with REST APIs, Firebase, authentication, real-time communication, Google Maps, payment gateways, in-app purchases, subscriptions, and push notifications.",
    "Experienced with Provider and GetX for state management and currently expanding knowledge of Riverpod. Strong understanding of reusable components, clean and maintainable architecture, API-driven development, Git/GitHub workflows, code quality, CI/CD, and application deployment to Google Play Console and Apple App Store.",
    "Currently exploring software architecture, design patterns, and modern state-management solutions to improve scalability and maintainability.",
  ],
  projects: [
    {
      title: "Lyfuber — Ride-Sharing & Car Rental Application",
      body: "A ride-sharing and car rental application developed using Flutter and Node.js. The application provides ride booking, driver management, real-time ride tracking, location-based services, fare calculation, trip management, notifications, user authentication, and secure API communication.",
      technologies: [
        "Flutter",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "REST APIs",
        "Google Maps API",
        "Geolocation",
        "Firebase Cloud Messaging (FCM)",
        "Firebase Authentication",
        "Socket.IO",
        "WebSockets",
        "JWT",
        "Payment Gateway",
        "Cloud Storage",
        "Git",
        "GitHub",
      ],
      links: [
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.lyfuber.app&hl=en",
        },
      ],
    },
    {
      title: "Official LMS App — Learning Management Application",
      body: "Official LMS App is a modern Learning Management System designed to streamline educational services, communication, scheduling, and appointment management in a single platform. The application enables students, educators, and professionals to manage availability, book appointments, communicate efficiently, and share audio messages. Built with a clean and intuitive user experience, the app supports educational institutions and STEM-focused learning environments by improving communication, organization, scheduling, and overall learning management.",
      technologies: [
        "Flutter",
        "Node.js",
        "MongoDB",
        "REST API",
        "Firebase",
        "Authentication",
        "Push Notifications",
        "Audio Messaging",
      ],
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
  ],
  programmingLanguages: [
    "Dart",
    "C",
    "C++",
    "JavaScript",
    "PHP",
    "Python",
    "TypeScript",
    "SQL",
    "NoSQL",
  ],
  frameworks: [
    "Flutter",
    "React.js",
    "Laravel",
    "Bootstrap",
    "Material UI",
    "Firebase",
    "MongoDB",
    "Flask",
    "Django",
    "Node.js",
    "Mongoose",
    "Express",
  ],
  tools: [
    "AI",
    "ESLint",
    "Prettier",
    "Husky",
    "lint-staged",
    "Heroku",
    "MongoDB Compass",
    "Postman",
    "Git",
    "GitHub",
    "Jira",
    "VS Code",
    "Chrome DevTools",
    "CI/CD",
    "App Store",
    "Play Console",
  ],
  education: [
    {
      school: "Ideal Institute of Science and Technology",
      detail:
        "Diploma in Computer Engineering — Dhaka, Bangladesh. Graduated 2024.",
    },
    {
      school: "Govt. Bangabandhu University",
      detail: "BSS Degree — Dhaka, Bangladesh. Graduated 2025.",
    },
  ],
  courses: [
    "Complete Web Development — Programming Hero (MERN Stack)",
    "Phitron (CSE) — 1.5 Years",
    "Level 2 Web Developer (Next Level Web Developer)",
    "Ostad Flutter Application Development",
  ],
  experience: [
    {
      company: "Shikhbe Shobai",
      detail: "Support Mentor — 4 months",
    },
    {
      company: "Awebon Ltd, India",
      detail: "Laravel and Flutter Developer — 8 months",
    },
  ],
  spokenLanguages: ["Bangla", "English", "Urdu"],
} as const;

export type ApplicationDocId =
  | typeof coverLetterDoc.id
  | typeof curriculumVitae.id;
