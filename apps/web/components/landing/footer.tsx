import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background pb-0">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-linear-to-t from-primary/30 via-primary/10 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-12">
        <div className="mb-16 flex items-center justify-between">
          <Link
            className="font-mono text-muted-foreground text-xs uppercase tracking-widest transition-colors hover:text-foreground"
            href="#about"
          >
            About
          </Link>

          <p className="hidden font-mono text-[10px] text-muted-foreground/50 uppercase tracking-[0.3em] md:block">
            © 2025 Bitwork Network
          </p>

          <Link
            className="font-mono text-muted-foreground text-xs uppercase tracking-widest transition-colors hover:text-foreground"
            href="#contact"
          >
            Contact
          </Link>
        </div>

        <p className="mb-8 text-center font-mono text-[10px] text-muted-foreground/50 uppercase tracking-[0.3em] md:hidden">
          © 2025 Bitwork Network
        </p>

        <h2 className="pb-1 text-center font-serif text-[16vw] text-foreground/80 leading-[0.85] tracking-tight md:text-[12vw]">
          BITWORK
        </h2>
      </div>
    </footer>
  );
}
