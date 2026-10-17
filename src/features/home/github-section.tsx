import { LetterGlitch } from "@/components/letter-glitch";
import { site } from "@/content/site";
import { GithubChart } from "@/features/home/github-chart";
import {
  getGithubContributions,
  getGithubLanguages,
} from "@/features/home/github-contributions";
import { GithubLanguages } from "@/features/home/github-languages";

export async function GithubSection() {
  const [data, languages] = await Promise.all([
    getGithubContributions(),
    getGithubLanguages(),
  ]);

  return (
    <section className="bg-black px-6 py-10 font-[family-name:var(--font-montserrat),sans-serif] text-white sm:px-10 md:py-14">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden border border-white/10 bg-black/70">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <LetterGlitch />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#000_78%)]"
          />
        </div>

        <div className="relative z-10 px-5 py-7 sm:px-8 sm:py-8 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-medium tracking-[0.18em] text-[#A476FF] uppercase">
                GitHub
              </p>
              <h2 className="mt-1 text-3xl font-bold tracking-tight md:text-4xl">
                Contributions
              </h2>
            </div>
            <a
              href={`https://github.com/${site.github}`}
              className="text-sm text-white/70 transition-colors hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              {site.github}
            </a>
          </div>

          <div className="mt-6 grid items-start gap-7 lg:grid-cols-[minmax(0,1.45fr)_minmax(15rem,0.7fr)] lg:gap-10">
            <div className="min-w-0">
              {data ? (
                <GithubChart
                  total={data.total}
                  contributions={data.contributions}
                  asOf={data.asOf}
                />
              ) : (
                <p className="text-sm text-white/60">
                  Contribution history is unavailable right now.
                </p>
              )}
            </div>

            <div className="min-w-0 border-t border-white/10 pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              <GithubLanguages languages={languages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
