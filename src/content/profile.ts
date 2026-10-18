import type { Experience } from "@/content/types";

export const profile = {
  eyebrow: "Maruf Mobin · Flutter Developer",
  headline: "Crafting Pixel-Perfect Mobile Apps & Next-Gen Digital Products",
  lede: "Maruf Mobin is a Flutter Developer and Mobile Application Developer building cross-platform apps. An App Developer with a full-stack foundation in MERN and Laravel, now expanding into AI Engineering for intelligent, high-performance products.",
  intro:
    "I am Maruf Mobin, a Flutter Developer and Mobile Application Developer. I build apps with Flutter and support them with a full-stack background in React, Node.js, and Laravel.",
  bio: [
    "I am Maruf Mobin, a mobile application developer and Flutter Developer. My main work is cross-platform apps with careful interfaces and performance that holds up in daily use.",
    "As an App Developer I also bring a full-stack practice in React, Node.js, Laravel, PHP, JavaScript, Python, Django, C/C++, and Mongoose. I am studying AI engineering so those apps can grow smarter without losing clarity.",
  ],
  services: [
    "Ride sharing",
    "Service provider",
    "E-commerce",
    "Fleet management",
    "Tutor applications",
  ],
  skills: [
    "Flutter",
    "Mobile apps",
    "React",
    "Node.js",
    "Laravel",
    "PHP",
    "JavaScript",
    "Python",
    "Django",
    "C/C++",
    "Mongoose",
    "AI Engineering",
  ],
  experience: [
    {
      company: "Awebon Technologies Private Limited",
      place: "Chennai, India",
      role: "Laravel & React Developer",
      period: "Nov 2021 – Sep 2022",
      points: [
        "Built websites with React, Laravel, Bootstrap, and JavaScript.",
        "Kept pages responsive across screen sizes and devices.",
        "Tested and tuned sites for Chrome, Firefox, and Safari.",
        "Tracked changes with Git and GitHub.",
        "Used PHP and WordPress, including themes, plugins, and content updates.",
        "Worked through 200+ JavaScript challenges and published small JavaScript projects on GitHub.",
        "Communicated in English throughout the role.",
      ],
      link: {
        label: "View Project",
        href: "https://date-kori.netlify.app/",
      },
    },
    {
      company: "Shikbe Shobai",
      place: "Banani, Bangladesh",
      role: "Laravel Support Mentor",
      period: "Sep 2022 – Jan 2023",
      points: [
        "Taught HTML, CSS, SASS, Bootstrap, JavaScript, and jQuery.",
        "Solved PHP and Laravel problems for students and walked them through the fix.",
        "Taught people who came to learn web and app development.",
      ],
      link: {
        label: "View Shikhbe Shobai",
        href: "https://shikhbeshobai.com/",
      },
    },
    {
      company: "Ixony Engineering Limited",
      place: "Banasree, Rampura, Dhaka, Bangladesh",
      role: "Laravel Developer",
      period: "March 2023 – May 2023",
      points: [
        "Worked as a Laravel developer on a team that also used Flutter and React Native.",
        "Designed databases, built REST APIs, and handled the Laravel backend.",
      ],
      link: {
        label: "View Company",
        href: "https://www.facebook.com/ixony.info",
      },
    },
    {
      company: "Freelance and local client projects",
      place: "Upwork and local clients",
      role: "Flutter Developer",
      period: "May 2023 – Present",
      points: [
        "Still taking freelance work and local client projects.",
        "Built a large number of Flutter applications across many different domains.",
        "Shipped apps for ride sharing, service providers, e-commerce, fleet management, and tutoring.",
        "Talk with clients to understand what they need, including projects outside Bangladesh.",
      ],
    },
  ] satisfies Experience[],
};
