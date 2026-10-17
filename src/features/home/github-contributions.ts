import { site } from "@/content/site";

export type Contribution = {
  date: string;
  count: number;
  level: number;
};

export type GithubContributions = {
  total: Record<string, number>;
  contributions: Contribution[];
  asOf: string;
};

export type GithubProfile = {
  publicRepos: number;
};

export type GithubLanguage = {
  name: string;
  percent: number;
  color: string;
  repos: number;
};

const LANGUAGE_COLORS: Record<string, string> = {
  Dart: "#00B4AB",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  PHP: "#4F5D95",
  Python: "#3572A5",
  "C++": "#f34b7d",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  Ruby: "#701516",
  C: "#555555",
  Other: "#6b7280",
};

const SKIP_LANGUAGES = new Set([
  "HTML",
  "CSS",
  "SCSS",
  "Less",
  "Makefile",
  "CMake",
  "Dockerfile",
  "Shell",
  "PowerShell",
  "Batchfile",
  "Procfile",
]);

/** Snapshot used when GitHub API is rate-limited or unreachable. */
const FALLBACK_LANGUAGES: GithubLanguage[] = [
  { name: "JavaScript", percent: 48.5, repos: 33, color: LANGUAGE_COLORS.JavaScript },
  { name: "C++", percent: 16.2, repos: 11, color: LANGUAGE_COLORS["C++"] },
  { name: "Dart", percent: 13.2, repos: 9, color: LANGUAGE_COLORS.Dart },
  { name: "PHP", percent: 10.3, repos: 7, color: LANGUAGE_COLORS.PHP },
  { name: "TypeScript", percent: 5.9, repos: 4, color: LANGUAGE_COLORS.TypeScript },
  { name: "Python", percent: 2.9, repos: 2, color: LANGUAGE_COLORS.Python },
  { name: "Other", percent: 3, repos: 2, color: LANGUAGE_COLORS.Other },
];

function githubHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": `${site.github}-portfolio`,
  };
  const token = process.env.GITHUB_TOKEN;

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

function toLanguageShare(
  counts: Map<string, number>,
): GithubLanguage[] | null {
  const total = [...counts.values()].reduce((sum, count) => sum + count, 0);

  if (total === 0) {
    return null;
  }

  const ranked = [...counts.entries()]
    .map(([name, reposCount]) => ({ name, repos: reposCount }))
    .sort((left, right) => right.repos - left.repos);

  const top = ranked.slice(0, 6);
  const otherRepos = ranked
    .slice(6)
    .reduce((sum, item) => sum + item.repos, 0);

  const display =
    otherRepos > 0
      ? [...top, { name: "Other", repos: otherRepos }]
      : top;

  return display.map((item) => ({
    name: item.name,
    repos: item.repos,
    percent: Math.round((item.repos / total) * 1000) / 10,
    color: LANGUAGE_COLORS[item.name] ?? "#A476FF",
  }));
}

export async function getGithubProfile(): Promise<GithubProfile | null> {
  "use cache";

  try {
    const response = await fetch(`https://api.github.com/users/${site.github}`, {
      headers: githubHeaders(),
    });

    if (!response.ok) {
      return null;
    }

    const body = (await response.json()) as { public_repos?: number };

    if (typeof body.public_repos !== "number") {
      return null;
    }

    return { publicRepos: body.public_repos };
  } catch {
    return null;
  }
}

export async function getGithubLanguages(): Promise<GithubLanguage[]> {
  "use cache";

  try {
    const response = await fetch(
      `https://api.github.com/users/${site.github}/repos?per_page=100&type=owner&sort=updated`,
      { headers: githubHeaders() },
    );

    if (!response.ok) {
      return FALLBACK_LANGUAGES;
    }

    const repos = (await response.json()) as Array<{
      fork?: boolean;
      language?: string | null;
    }>;

    if (!Array.isArray(repos)) {
      return FALLBACK_LANGUAGES;
    }

    const counts = new Map<string, number>();

    for (const repo of repos) {
      if (repo.fork || !repo.language || SKIP_LANGUAGES.has(repo.language)) {
        continue;
      }

      counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
    }

    return toLanguageShare(counts) ?? FALLBACK_LANGUAGES;
  } catch {
    return FALLBACK_LANGUAGES;
  }
}

export async function getGithubContributions(): Promise<GithubContributions | null> {
  "use cache";

  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${site.github}`,
    );

    if (!response.ok) {
      return null;
    }

    const body = (await response.json()) as Omit<GithubContributions, "asOf">;

    return {
      total: body.total,
      contributions: body.contributions,
      asOf: new Date().toISOString().slice(0, 10),
    };
  } catch {
    return null;
  }
}
