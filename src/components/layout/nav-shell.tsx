import type { ReactNode, Ref } from "react";

type NavShellProps = {
  children: ReactNode;
  scrolled?: boolean;
  navRef?: Ref<HTMLElement>;
};

export function navShellClassName(scrolled: boolean): string {
  return [
    "font-[family-name:var(--font-montserrat),sans-serif]",
    "fixed left-1/2 z-40 flex w-full items-center border border-white/10 bg-black/95 px-3 py-3 backdrop-blur-xl",
    "bottom-0 rounded-t-2xl transition-[opacity,transform,background-color,border-color,border-radius,width] duration-300 ease-in-out",
    "md:bottom-auto md:top-6 md:w-[80%] md:rounded-full md:border-white/10 md:bg-black/85",
    scrolled
      ? "[transform:translateX(-50%)] opacity-100"
      : "pointer-events-none opacity-0 [transform:translate(-50%,120%)] md:[transform:translate(-50%,-140%)]",
  ].join(" ");
}

export function NavShell({ children, scrolled = false, navRef }: NavShellProps) {
  return (
    <nav
      ref={navRef}
      id="main-nav"
      aria-label="Primary"
      aria-hidden={scrolled ? undefined : true}
      inert={scrolled ? undefined : true}
      className={navShellClassName(scrolled)}
    >
      {children}
    </nav>
  );
}
