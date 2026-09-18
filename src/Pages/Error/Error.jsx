import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="relative flex items-center justify-center min-h-screen px-6 py-12 overflow-hidden bg-base-100 text-base-content">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full -left-32 -top-32 h-80 w-80 bg-success/10 blur-3xl" />

        <div className="absolute rounded-full -bottom-40 -right-40 h-96 w-96 bg-success/10 blur-3xl" />

        <div className="absolute left-[12%] top-[22%] h-3 w-3 rounded-full bg-success/30" />

        <div className="absolute right-[15%] top-[20%] h-2 w-2 rounded-full bg-success/40" />

        <div className="absolute bottom-[18%] left-[20%] h-2 w-2 rounded-full bg-success/30" />
      </div>

      {/* Content */}
      <section className="relative z-10 w-full max-w-5xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text */}
          <div className="text-center md:text-left">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border rounded-full mb-7 border-success/20 bg-success/5">
              <span className="w-2 h-2 rounded-full bg-success" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-success">
                Page not found
              </span>
            </div>

            {/* 404 */}
            <h1 className="font-serif text-[clamp(7rem,18vw,12rem)] font-bold leading-[0.75] tracking-[-0.08em]">
              <span className="text-base-content">4</span>
              <span className="text-success">0</span>
              <span className="text-base-content">4</span>
            </h1>

            {/* Heading */}
            <h2 className="mt-12 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Oops, this page
              <br />
              <span className="text-success">wandered away.</span>
            </h2>

            {/* Description */}
            <p className="max-w-md mx-auto mt-6 text-base leading-7 text-base-content/60 md:mx-0">
              We couldn't find the page you're looking for. Maybe it was moved,
              removed, or the link took a little wrong turn.
            </p>

            {/* Single CTA */}
            <div className="mt-8">
              <Link
                to="/"
                className="font-semibold transition-all rounded-full shadow-sm btn btn-success px-7 hover:shadow-md"
              >
                Back to Home
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Book illustration */}
          <div className="relative flex items-center justify-center min-h-100">
            {/* Decorative circle */}
            <div className="absolute border rounded-full h-72 w-72 border-success/10 bg-success/5 md:h-96 md:w-96" />

            {/* Glow */}
            <div className="absolute rounded-full h-52 w-52 bg-success/10 blur-3xl" />

            <div className="relative h-80 w-90">
              {/* Floating page */}
              <div className="absolute right-[3%] top-[18%] h-16 w-24 rotate-12 rounded-lg border border-base-content/10 bg-base-100 p-4 shadow-lg">
                <div className="space-y-2 opacity-20">
                  <div className="w-10 h-1 rounded-full bg-base-content" />
                  <div className="h-1 rounded-full w-14 bg-base-content" />
                  <div className="h-1 rounded-full w-9 bg-base-content" />
                </div>
              </div>

              {/* Back book */}
              <div className="absolute bottom-12 left-[8%] h-28 w-64 -rotate-6 rounded-xl border border-base-content/10 bg-base-200 shadow-xl">
                {/* Spine */}
                <div className="absolute top-0 left-0 w-8 h-full rounded-l-xl bg-success/15" />

                {/* Cover details */}
                <div className="absolute space-y-3 left-14 top-7 opacity-40">
                  <div className="w-24 h-2 rounded-full bg-base-content/10" />
                  <div className="h-1.5 w-32 rounded-full bg-base-content/10" />
                  <div className="h-1.5 w-20 rounded-full bg-base-content/10" />
                </div>
              </div>

              {/* Open book */}
              <div className="absolute z-10 h-40 -translate-x-1/2 bottom-14 left-1/2 w-72 rotate-2 md:h-48 md:w-80">
                {/* Left page */}
                <div className="absolute top-0 left-0 w-1/2 h-full origin-right border shadow-lg -rotate-3 rounded-l-2xl border-base-content/10 bg-base-100">
                  <div className="absolute space-y-3 left-7 top-10 opacity-30">
                    <div className="h-1.5 w-20 rounded-full bg-base-content" />
                    <div className="w-24 h-1 rounded-full bg-base-content" />
                    <div className="w-20 h-1 rounded-full bg-base-content" />
                    <div className="w-24 h-1 rounded-full bg-base-content" />
                    <div className="w-16 h-1 rounded-full bg-base-content" />
                  </div>

                  <span className="absolute font-serif text-xs -translate-x-1/2 bottom-5 left-1/2 text-base-content/30">
                    42
                  </span>
                </div>

                {/* Right page */}
                <div className="absolute top-0 right-0 w-1/2 h-full origin-left border shadow-lg rotate-3 rounded-r-2xl border-base-content/10 bg-base-100">
                  <div className="absolute space-y-3 right-7 top-10 opacity-30">
                    <div className="ml-auto h-1.5 w-20 rounded-full bg-base-content" />
                    <div className="w-24 h-1 ml-auto rounded-full bg-base-content" />
                    <div className="w-20 h-1 ml-auto rounded-full bg-base-content" />
                    <div className="w-24 h-1 ml-auto rounded-full bg-base-content" />
                    <div className="w-16 h-1 ml-auto rounded-full bg-base-content" />
                  </div>

                  <span className="absolute font-serif text-xs -translate-x-1/2 bottom-5 left-1/2 text-base-content/30">
                    43
                  </span>
                </div>

                {/* Book binding */}
                <div className="absolute left-1/2 top-1 h-[calc(100%-2px)] w-2 -translate-x-1/2 rounded-full bg-base-300" />
              </div>

              {/* Bookmark */}
              <div className="absolute bottom-16 left-[55%] z-20 h-28 w-7 rotate-2 bg-success shadow-[0_6px_20px_rgba(16,185,129,0.25)]">
                <div className="absolute bottom-0 left-0 border-b-12 border-l-14 border-r-14 border-b-base-100 border-l-transparent border-r-transparent" />
              </div>

              {/* Decorative dots */}
              <div className="absolute bottom-[20%] left-[8%] h-3 w-3 rounded-full bg-success/40" />

              <div className="absolute bottom-[35%] right-[7%] h-2 w-2 rounded-full bg-success/50" />

              {/* Ground shadow */}
              <div className="absolute h-5 -translate-x-1/2 rounded-full bottom-5 left-1/2 w-60 bg-base-content/10 blur-xl" />
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="flex items-center justify-center gap-3 mt-10 text-xs text-base-content/30">
          <span>404</span>

          <span className="w-8 h-px bg-success/30" />

          <span>Looks like this chapter is missing.</span>
        </div>
      </section>
    </main>
  );
}
