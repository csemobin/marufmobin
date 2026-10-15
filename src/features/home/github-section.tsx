import { LetterGlitch } from "@/components/letter-glitch";
import { site } from "@/content/site";
import { GithubChart } from "@/features/home/github-chart";
import {
  getGithubContributions,
  getGithubProfile,
} from "@/features/home/github-contributions";
import { GithubPractice } from "@/features/home/github-practice";

export async function GithubSection() {
  const [data, profile] = await Promise.all([
    getGithubContributions(),
    getGithubProfile(),
  ]);

  return (
    <section className="relative overflow-hidden bg-black font-[family-name:var(--font-montserrat),sans-serif] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div
          aria-hidden="true"
          className="absolute inset-y-[12%] left-0 w-4/5 bg-[#5e4491]/30 blur-3xl"
        />
        <LetterGlitch />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,rgba(0,0,0,0.55)_14%,transparent_36%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,#000_0%,rgba(0,0,0,0.55)_14%,transparent_36%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_left,#000_0%,rgba(0,0,0,0.9)_18%,rgba(0,0,0,0.35)_32%,transparent_48%)]"
        />
      </div>
      <div className="relative z-10 flex flex-wrap items-start justify-between gap-x-16 gap-y-12 px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="w-fit max-w-full bg-black/10 px-8 py-10 backdrop-blur-[2px] sm:px-10 sm:py-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium tracking-[0.18em] text-[#A476FF] uppercase">
                GitHub
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
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
          {data ? (
            <GithubChart
              total={data.total}
              contributions={data.contributions}
              asOf={data.asOf}
            />
          ) : (
            <p className="mt-8 text-sm text-white/60">
              Contribution history is unavailable right now.
            </p>
          )}
        </div>
        <GithubPractice publicRepos={profile?.publicRepos ?? null} />
      </div>
    </section>
  );
}
