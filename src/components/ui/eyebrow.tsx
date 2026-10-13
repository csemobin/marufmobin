import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
};

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
      {children}
    </p>
  );
}
