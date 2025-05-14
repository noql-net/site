import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DiWindows, DiGithubBadge } from "react-icons/di";
import { FiDownload, FiPlus, FiDownloadCloud } from "react-icons/fi";
import { CopyButton } from "../../components/ui/copy-button";

export default function ScoopRepositoryPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-[var(--color-bg)] text-[var(--color-foreground)] p-4 pt-8">
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
      <div className="container relative flex max-w-3xl flex-col items-center gap-8 text-center pb-16">
        <Link href="/" className="mb-10">
          <h1 className="text-4xl font-bold tracking-tighter text-[var(--color-heading)] sm:text-3xl cursor-pointer">
            noql.net
          </h1>
        </Link>
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4">
            <DiWindows className="h-12 w-12 text-[var(--color-icon)]" />
            <h1 className="text-4xl font-bold tracking-tighter text-[var(--color-heading)]">
              noql.net Scoop Repository
            </h1>
          </div>

          <p className="text-xl text-[var(--color-subheading)] max-w-2xl mx-auto">
            A curated Windows Scoop repository containing cutting-edge tools
            designed to help users bypass internet censorship and protect
            digital freedom.
          </p>
        </div>

        <div className="bg-green-900/30 border border-green-800/50 rounded-lg p-6 space-y-4 w-full max-w-2xl">
          <h2 className="text-2xl font-semibold text-[var(--color-subheading)] mb-4">
            Repository Features
          </h2>
          <ul className="text-[var(--color-foreground)] text-left space-y-2 list-disc pl-5">
            <li>Comprehensive collection of censorship circumvention tools</li>
            <li>
              Regularly updated with the latest anti-censorship technologies
            </li>
            <li>Easy installation via standard Scoop package management</li>
          </ul>
        </div>

        <div className="bg-green-900/30 border border-green-800/50 rounded-lg p-8 w-full max-w-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-[var(--color-subheading)] mb-6 text-center border-b border-green-800/50 pb-3">
            Installation Guide
          </h2>
          <ol className="text-[var(--color-foreground)] text-left space-y-6">
            <li className="flex items-start w-full">
              <div className="bg-green-800/40 rounded-full p-2 mr-4 mt-1">
                <FiDownload className="text-green-200 w-5 h-5" />
              </div>
              <div className="w-full">
                <p className="font-semibold text-[var(--color-heading)] mb-1">
                  Step 1: Install Scoop
                </p>
                <p>
                  Install{" "}
                  <a
                    href="https://scoop.sh"
                    target="_blank"
                    className="text-green-400 hover:text-green-300 font-medium hover:underline transition-colors"
                  >
                    Scoop
                  </a>{" "}
                  on your Windows device
                </p>
              </div>
            </li>
            <li className="flex items-start w-full">
              <div className="bg-green-800/40 rounded-full p-2 mr-4 mt-1">
                <FiPlus className="text-green-200 w-5 h-5" />
              </div>
              <div className="w-full">
                <p className="font-semibold text-[var(--color-heading)] mb-1">
                  Step 2: Add Repository
                </p>
                <div className="bg-black/30 p-2 rounded-md mt-2 flex items-center justify-between w-full">
                  <code className="text-xs text-[var(--color-subheading)] font-mono break-all">
                    scoop bucket add noql https://github.com/noql-net/scoop
                  </code>
                  <CopyButton
                    textToCopy="scoop bucket add noql https://github.com/noql-net/scoop"
                    contentName="Command"
                  />
                </div>
              </div>
            </li>
            <li className="flex items-start w-full">
              <div className="bg-green-800/40 rounded-full p-2 mr-4 mt-1">
                <FiDownloadCloud className="text-green-200 w-5 h-5" />
              </div>
              <div className="w-full">
                <p className="font-semibold text-[var(--color-heading)] mb-1">
                  Step 3: Install Package
                </p>
                <div className="bg-black/30 p-2 rounded-md mt-2 flex items-center justify-between w-full">
                  <code className="text-xs text-[var(--color-subheading)] font-mono break-all">
                    scoop install noql/v2ray-core
                  </code>
                  <CopyButton
                    textToCopy="scoop install noql/v2ray-core"
                    contentName="Command"
                  />
                </div>
              </div>
            </li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
          <Link href="https://github.com/noql-net/scoop" target="_blank">
            <Button className="flex items-center gap-3 p-4 h-auto border-[var(--color-button-border)] bg-[var(--color-button-bg)] text-[var(--color-button-text)] font-semibold hover:border-[var(--color-button-border-hover)] hover:bg-[var(--color-button-bg-hover)] hover:text-[var(--color-button-text-hover)] w-full transition-all backdrop-blur-sm">
              <DiGithubBadge className="h-5 w-5 flex-shrink-0 text-[var(--color-icon)]" />
              <span className="font-medium">View on GitHub</span>
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
