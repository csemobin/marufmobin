"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>,0123456789";
const COLORS = ["#5e4491", "#A476FF", "#241a38"] as const;
const SPEED_MS = 33;

type Rgb = { r: number; g: number; b: number };

type Cell = {
  char: string;
  from: Rgb;
  color: Rgb;
  target: Rgb;
  progress: number;
};

function randomGlyph(): string {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)] ?? "A";
}

function randomColor(): Rgb {
  const hex = COLORS[Math.floor(Math.random() * COLORS.length)] ?? COLORS[0];
  return {
    r: Number.parseInt(hex.slice(1, 3), 16),
    g: Number.parseInt(hex.slice(3, 5), 16),
    b: Number.parseInt(hex.slice(5, 7), 16),
  };
}

function mix(from: Rgb, to: Rgb, progress: number): Rgb {
  return {
    r: Math.round(from.r + (to.r - from.r) * progress),
    g: Math.round(from.g + (to.g - from.g) * progress),
    b: Math.round(from.b + (to.b - from.b) * progress),
  };
}

function toFill(color: Rgb): string {
  return `rgb(${color.r}, ${color.g}, ${color.b})`;
}

export function LetterGlitch() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const context = canvas?.getContext("2d");

    if (!canvas || !parent || !context) {
      return;
    }

    let frame = 0;
    let cells: Cell[] = [];
    let columns = 0;
    let lastTick = 0;
    let lastWidth = 0;
    let lastHeight = 0;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      context.clearRect(0, 0, width, height);
      context.font = "16px monospace";
      context.textBaseline = "top";

      cells.forEach((cell, index) => {
        const x = (index % columns) * 10;
        const y = Math.floor(index / columns) * 20;
        context.fillStyle = toFill(cell.color);
        context.fillText(cell.char, x, y);
      });
    };

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);

      if (Math.abs(width - lastWidth) < 0.5 && Math.abs(height - lastHeight) < 0.5) {
        return;
      }

      lastWidth = width;
      lastHeight = height;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      columns = Math.ceil(width / 10);
      const rows = Math.ceil(height / 20);
      cells = Array.from({ length: columns * rows }, () => {
        const color = randomColor();
        return {
          char: randomGlyph(),
          from: color,
          color,
          target: color,
          progress: 1,
        };
      });
      draw();
    };

    const glitch = () => {
      const count = Math.max(1, Math.floor(cells.length * 0.05));

      for (let index = 0; index < count; index += 1) {
        const cell = cells[Math.floor(Math.random() * cells.length)];
        if (!cell) {
          continue;
        }

        cell.char = randomGlyph();
        cell.from = cell.color;
        cell.target = randomColor();
        cell.progress = 0;
      }
    };

    const smooth = () => {
      let changed = false;

      for (const cell of cells) {
        if (cell.progress >= 1) {
          continue;
        }

        cell.progress = Math.min(1, cell.progress + 0.05);
        cell.color = mix(cell.from, cell.target, cell.progress);
        changed = true;
      }

      return changed;
    };

    const tick = (now: number) => {
      if (now - lastTick >= SPEED_MS) {
        glitch();
        lastTick = now;
      }

      if (smooth()) {
        draw();
      }

      frame = window.requestAnimationFrame(tick);
    };

    resize();

    if (!reducedMotion) {
      frame = window.requestAnimationFrame(tick);
    }

    const observer = new ResizeObserver(() => resize());
    observer.observe(parent);
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <canvas ref={canvasRef} className="block h-full w-full" aria-hidden="true" />
    </div>
  );
}
