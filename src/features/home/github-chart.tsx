"use client";

import { useMemo, useState } from "react";
import type { Contribution } from "@/features/home/github-contributions";

const LEVELS = ["#161616", "#3a2468", "#5e4491", "#8a62d6", "#A476FF"] as const;

type GithubChartProps = {
  total: Record<string, number>;
  contributions: Contribution[];
  asOf: string;
};

function yearCells(year: string, contributions: Contribution[], asOf: string) {
  const byDate = new Map(
    contributions
      .filter((item) => item.date.startsWith(year))
      .map((item) => [item.date, item]),
  );
  const start = new Date(Date.UTC(Number(year), 0, 1));
  const endOfYear = new Date(Date.UTC(Number(year), 11, 31));
  const today = new Date(`${asOf}T00:00:00.000Z`);
  const end =
    Number(year) === today.getUTCFullYear() && endOfYear > today
      ? today
      : endOfYear;
  const cells: Array<Contribution | null> = Array.from(
    { length: start.getUTCDay() },
    () => null,
  );

  for (let day = new Date(start); day <= end; day.setUTCDate(day.getUTCDate() + 1)) {
    const date = day.toISOString().slice(0, 10);
    cells.push(byDate.get(date) ?? { date, count: 0, level: 0 });
  }

  const weeks: Array<Array<Contribution | null>> = [];

  for (let index = 0; index < cells.length; index += 7) {
    weeks.push(cells.slice(index, index + 7));
  }

  return weeks;
}

export function GithubChart({ total, contributions, asOf }: GithubChartProps) {
  const years = Object.keys(total).sort((left, right) => Number(right) - Number(left));
  const [year, setYear] = useState(years[0] ?? "");
  const weeks = useMemo(
    () => (year ? yearCells(year, contributions, asOf) : []),
    [asOf, contributions, year],
  );
  const count = year ? (total[year] ?? 0) : 0;

  return (
    <div className="mt-8">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {years.map((item) => {
          const selected = item === year;

          return (
            <button
              key={item}
              type="button"
              onClick={() => setYear(item)}
              aria-pressed={selected}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selected
                  ? "bg-[#A476FF] text-black"
                  : "bg-white/5 text-white/75 hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
      <p className="mt-5 text-sm text-[#f3f3f3]/80">
        <span className="text-lg font-semibold text-white">
          {count.toLocaleString()}
        </span>{" "}
        commits in {year}
      </p>
      <div className="mt-5 overflow-x-auto">
          <div className="flex w-max gap-1" aria-hidden="true">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="grid gap-1">
                {week.map((day, dayIndex) => (
                  <span
                    key={day?.date ?? `empty-${weekIndex}-${dayIndex}`}
                    title={
                      day
                        ? `${day.count} commit${day.count === 1 ? "" : "s"} on ${day.date}`
                        : undefined
                    }
                    className="size-3 rounded-[2px]"
                    style={{
                      backgroundColor: day
                        ? LEVELS[Math.min(day.level, LEVELS.length - 1)]
                        : "transparent",
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}
