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

export async function getGithubProfile(): Promise<GithubProfile | null> {
  "use cache";

  try {
    const response = await fetch(`https://api.github.com/users/${site.github}`, {
      headers: { Accept: "application/vnd.github+json" },
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
