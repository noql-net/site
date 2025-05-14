"use client";

import { DiAndroid, DiWindows, DiUbuntu, DiGithubBadge } from "react-icons/di";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[var(--color-bg)] text-[var(--color-foreground)]">
      {/* Magical forest mist effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(134, 239, 172, 0.15), transparent 80%)`,
        }}
      />

      {/* Enchanted forest decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Vine-like borders */}
        <div className="absolute left-0 top-0 h-32 w-32">
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-green-600/40 to-transparent" />
          <div className="absolute h-[1px] w-full bg-gradient-to-r from-green-600/40 to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 h-32 w-32">
          <div className="absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-green-600/40 to-transparent" />
          <div className="absolute bottom-0 h-[1px] w-full bg-gradient-to-l from-green-600/40 to-transparent" />
        </div>
      </div>

      <div className="container relative flex max-w-3xl flex-col items-center justify-center gap-8 px-4 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter text-[var(--color-heading)] sm:text-5xl">
            noql.net
          </h1>
          <p className="text-xl text-[var(--color-subheading)]">
            Censorship Circumvention Tools and Resources
          </p>
        </div>

        {/* <p className="max-w-[600px] text-green-200/80 md:text-lg">From Years of Research & Development: Solving Open Internet Challenges in Heavily Censored Regions.</p> */}

        <div className="flex flex-col gap-4 items-center max-w-md w-full">
          <Link href="/apt-repository" className="w-full">
            <Button className="w-full flex items-start gap-3 p-4 h-auto border-[var(--color-button-border)] bg-[var(--color-button-bg)] text-[var(--color-button-text)] font-semibold hover:border-[var(--color-button-border-hover)] hover:bg-[var(--color-button-bg-hover)] hover:text-[var(--color-button-text-hover)] transition-all backdrop-blur-sm">
              <DiUbuntu className="h-5 w-5 flex-shrink-0 text-[var(--color-icon)]" />
              <div className="flex flex-col items-start text-left flex-1 overflow-hidden">
                <span className="font-medium">
                  Debian/Ubuntu APT Repository
                </span>
                <span className="text-xs text-[var(--color-subheading)] break-words overflow-wrap-anywhere">
                  Censorship circumvention tools for Debian and Ubuntu
                </span>
              </div>
            </Button>
          </Link>
          <Link href="/fdroid-repository" className="w-full">
            <Button className="w-full flex items-start gap-3 p-4 h-auto border-[var(--color-button-border)] bg-[var(--color-button-bg)] text-[var(--color-button-text)] font-semibold hover:border-[var(--color-button-border-hover)] hover:bg-[var(--color-button-bg-hover)] hover:text-[var(--color-button-text-hover)] transition-all backdrop-blur-sm">
              <DiAndroid className="h-5 w-5 flex-shrink-0 text-[var(--color-icon)]" />
              <div className="flex flex-col items-start text-left flex-1 overflow-hidden">
                <span className="font-medium">Android F-droid Repository</span>
                <span className="text-xs text-[var(--color-subheading)] break-words overflow-wrap-anywhere">
                  Censorship circumvention apps for Android.
                </span>
              </div>
            </Button>
          </Link>
          <Link href="/scoop-repository" className="w-full">
            <Button className="w-full flex items-start gap-3 p-4 h-auto border-[var(--color-button-border)] bg-[var(--color-button-bg)] text-[var(--color-button-text)] font-semibold hover:border-[var(--color-button-border-hover)] hover:bg-[var(--color-button-bg-hover)] hover:text-[var(--color-button-text-hover)] transition-all backdrop-blur-sm">
              <DiWindows className="h-5 w-5 flex-shrink-0 text-[var(--color-icon)]" />
              <div className="flex flex-col items-start text-left flex-1 overflow-hidden">
                <span className="font-medium">Windows Scoop Repository</span>
                <span className="text-xs text-[var(--color-subheading)] break-words overflow-wrap-anywhere">
                  Censorship circumvention apps for Windows.
                </span>
              </div>
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="https://github.com/noql-net" className="w-full">
            <Button className="group border-[var(--color-button-border)] bg-[var(--color-button-bg)] text-[var(--color-button-text)] hover:border-[var(--color-button-border-hover)] hover:bg-[var(--color-button-bg-hover)] hover:text-[var(--color-button-text-hover)] transition-all backdrop-blur-sm">
              <DiGithubBadge className="h-5 w-5 transition-transform group-hover:scale-110 text-[var(--color-icon)]" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
        </div>
      </div>

      <footer className="absolute bottom-4 text-sm text-[var(--color-footer)]">
        © {new Date().getFullYear()} Mark Pashmfouroush. Made for Iranians,
        useful for everyone.
      </footer>
    </div>
  );
}
