import { ArrowRight, FileText, Mail, Send, Users, Zap } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 md:p-16">
          <div className="absolute top-8 left-8 flex h-10 w-10 items-center justify-center rounded-lg border border-border">
            <Mail className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="absolute top-8 right-8 flex h-10 w-10 items-center justify-center rounded-lg border border-border">
            <Zap className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="absolute bottom-8 left-8 flex h-10 w-10 items-center justify-center rounded-lg border border-border">
            <FileText className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="absolute right-8 bottom-8 flex h-10 w-10 items-center justify-center rounded-lg border border-border">
            <Users className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="absolute top-1/2 right-16 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-border">
            <Send className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="absolute bottom-1/3 left-16 flex h-10 w-10 items-center justify-center rounded-lg border border-border">
            <span className="text-lg text-muted-foreground">+</span>
          </div>

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-serif text-4xl leading-tight md:text-5xl">
              Your skills,
              <br />
              your economy.
            </h2>
            <p className="mb-8 text-muted-foreground">
              Join thousands of informal workers, students, and communities
              building fair, local skill exchanges.
            </p>
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary/90"
              href="/app"
            >
              Join Bitwork
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
