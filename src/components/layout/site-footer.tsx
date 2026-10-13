import { Container } from "@/components/ui/container";
import { site, socials } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <Container className="flex flex-col gap-3 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted">
          © {site.copyrightYear} {site.name}
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="text-muted transition-colors hover:text-foreground"
            >
              {site.email}
            </a>
          </li>
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                className="text-muted transition-colors hover:text-foreground"
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
