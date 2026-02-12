export function Footer() {
  return (
    <footer className="border-border border-t py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-1">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-sm border-2 border-foreground">
                <span className="font-mono text-[10px]">B</span>
              </div>
              <span className="font-serif">Bitwork.</span>
            </div>
            <p className="font-mono text-muted-foreground text-xs">
              SKILL EXCHANGE
              <br />
              NETWORK V1.0
            </p>
            <p className="mt-4 font-mono text-muted-foreground text-xs">
              ◆ COMMUNITY POWERED
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-muted-foreground text-xs">
              DIRECTORY
            </h4>
            <ul className="space-y-2">
              {[
                "How_It_Works",
                "Mission",
                "For_Workers",
                "For_Communities",
              ].map((link) => (
                <li key={link}>
                  <a
                    className="text-sm transition-colors hover:text-primary"
                    href="#directory"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-muted-foreground text-xs">
              COMMUNITY
            </h4>
            <ul className="space-y-2">
              {[
                "Privacy_Policy",
                "Terms_of_Service",
                "Code_of_Conduct",
                "Contact_Us",
              ].map((link) => (
                <li key={link}>
                  <a
                    className="text-sm transition-colors hover:text-primary"
                    href="#community"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-4 font-mono text-muted-foreground text-xs">
              OUR MISSION
            </h4>
            <div className="rounded-xl bg-secondary/50 p-4 font-mono text-xs">
              <div className="space-y-1">
                <p className="text-primary">FAIR • TRANSPARENT • LOCAL</p>
                <p className="text-muted-foreground">
                  Enabling dignity through skill exchange. No exploitation. No
                  barriers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-border border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-xs">©2025 BITWORK NETWORK</p>
          <p className="text-muted-foreground text-xs">
            BUILDING FAIR LOCAL ECONOMIES.
          </p>
        </div>
      </div>
    </footer>
  );
}
