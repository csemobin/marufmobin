import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { site, socials } from "@/content/site";
import { ContactForm } from "@/features/contact/contact-form";

export function ContactView() {
  return (
    <Container className="grid gap-14 py-16 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)] md:py-24">
      <div>
        <Eyebrow>{site.availability}</Eyebrow>
        <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
          Contact
        </h1>
        <p className="mt-6 max-w-md text-lg leading-8 text-muted">
          Tell me what you are making and where you need help. Email works too.
        </p>
        <ul className="mt-8 grid gap-3 text-sm">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="text-foreground underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </li>
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                className="text-muted underline-offset-4 hover:text-foreground hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ContactForm />
    </Container>
  );
}
