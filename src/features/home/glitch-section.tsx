import { LetterGlitch } from "@/components/letter-glitch";
import { profile } from "@/content/profile";

export function GlitchSection() {
  return (
    <section className="bg-black font-[family-name:var(--font-montserrat),sans-serif] text-white">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] md:py-24">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Services
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#f3f3f398] md:text-lg">
            Flutter apps for many kinds of products, including the domains below.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {profile.services.map((service) => (
              <li key={service} className="text-sm text-[#dfdfdf]">
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center md:ml-16 md:justify-end">
          <div className="size-[290px] pt-3 md:h-[292px] md:w-full md:pt-9">
            <LetterGlitch />
          </div>
        </div>
      </div>
    </section>
  );
}
