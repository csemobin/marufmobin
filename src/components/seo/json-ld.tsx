import { site, socials, seoKeywords } from "@/content/site";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Maruf Mobin",
    alternateName: ["Md Maruf", "MD MARUF", "MarufMobin"],
    url: site.url,
    image: `${site.url}/og.jpg`,
    email: site.email,
    telephone: site.phone,
    jobTitle: ["Flutter Developer", "Mobile Application Developer", "App Developer"],
    description: site.description,
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    knowsAbout: [
      ...seoKeywords,
      "Flutter",
      "Dart",
      "iOS",
      "Android",
      "React",
      "Laravel",
      "Mobile apps",
    ],
    sameAs: socials.map((social) => social.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Maruf Mobin — Flutter Developer Portfolio",
    alternateName: [
      "Maruf Mobin",
      "Flutter Developer Maruf Mobin",
      "Mobile Application Developer Maruf Mobin",
      "App Developer Maruf Mobin",
    ],
    url: site.url,
    description: site.description,
    inLanguage: "en",
    keywords: seoKeywords.join(", "),
    author: {
      "@type": "Person",
      name: "Maruf Mobin",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
