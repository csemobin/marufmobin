import type { GithubLanguage } from "@/features/home/github-contributions";

type GithubLanguagesProps = {
  languages: GithubLanguage[];
};

export function GithubLanguages({ languages }: GithubLanguagesProps) {
  const items = languages.slice(0, 5);

  return (
    <div>
      <p className="text-[0.65rem] font-medium tracking-[0.18em] text-[#A476FF] uppercase">
        Stack mix
      </p>
      <h3 className="mt-1 text-lg font-bold tracking-tight">Language share</h3>

      <div
        className="mt-3 flex h-1.5 overflow-hidden rounded-full bg-white/5"
        aria-hidden="true"
      >
        {items.map((language) => (
          <span
            key={language.name}
            className="h-full"
            style={{
              width: `${language.percent}%`,
              backgroundColor: language.color,
            }}
            title={`${language.name} ${language.percent}%`}
          />
        ))}
      </div>

      <ul className="mt-4 space-y-2.5">
        {items.map((language) => (
          <li key={language.name}>
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-2">
                <span
                  className="size-2 shrink-0 rounded-full"
                  style={{ backgroundColor: language.color }}
                  aria-hidden="true"
                />
                <span className="truncate text-sm text-white/85">
                  {language.name}
                </span>
              </div>
              <span className="shrink-0 text-sm tabular-nums text-white/90">
                {language.percent % 1 === 0
                  ? `${language.percent}%`
                  : `${language.percent.toFixed(1)}%`}
              </span>
            </div>
            <div className="mt-1.5 h-0.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${language.percent}%`,
                  backgroundColor: language.color,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
