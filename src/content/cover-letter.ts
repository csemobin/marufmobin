import { site, socials } from "@/content/site";

const github =
  socials.find((social) => social.label === "GitHub")?.href ??
  `https://github.com/${site.github}`;

const linkedin =
  socials.find((social) => social.label === "LinkedIn")?.href ?? "";

export const coverLetter = {
  title: "Cover Letter",
  applicant: {
    name: "MD. Maruf",
    role: "Flutter Developer",
    location: site.location,
    email: "appdevmaruf@gmail.com",
    phone: "01936691536 / 01701705515",
    github,
    linkedin,
  },
  greeting: "Dear Hiring Manager,",
  paragraphs: [
    "I am writing to express my interest in software development opportunities within your organization. I am a Flutter and Full-Stack Developer with professional experience in building scalable mobile and web applications using Flutter, Dart, Node.js, Laravel, React.js, and modern backend technologies.",
    "In my professional experience, I have worked on a variety of application domains, including ride-sharing, car rental, e-commerce, learning management systems, and service-based applications. I have hands-on experience developing REST APIs, authentication systems, real-time communication, Google Maps and location-based services, Firebase integrations, push notifications, payment gateways, subscriptions, and other application features.",
    "I have practical experience with state management solutions such as Provider and GetX, and I am currently expanding my knowledge of Riverpod and modern software architecture. I focus on writing reusable, maintainable, and scalable code while following clean architecture principles, design patterns, Git/GitHub workflows, and good development practices.",
    "One of my key strengths is my ability to understand complex requirements, troubleshoot difficult technical problems, and continuously learn new technologies. I have experience working across both frontend and backend development, which allows me to understand applications from end to end and collaborate effectively with different members of a development team.",
    "I have also been involved in application deployment and release processes for both Google Play Console and Apple App Store, giving me practical experience beyond development alone.",
    "I am highly motivated to grow as a professional software engineer and contribute to a team where I can use my existing experience while continuing to learn and take on more challenging responsibilities. I would welcome the opportunity to discuss how my skills and experience could contribute to your organization.",
  ],
  closing: "Thank you for considering my application. I look forward to the opportunity to discuss my qualifications with you.",
  signOff: "Sincerely,",
  fileName: "Maruf-Mobin-Cover-Letter.pdf",
} as const;
