import { StarIcon } from "@heroicons/react/24/outline";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { source } from "@/lib/source";
import { baseOptions } from "./layout.config";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <DocsLayout
            tree={source.pageTree}
            {...baseOptions}
            sidebar={{
              banner: (
                <div className="px-4 py-2 bg-gradient-to-b from-brand/25 to-[#2563EB]/25 text-neutral-800 dark:text-neutral-200 ring-1 ring-inset ring-black/15 dark:ring-white/15 rounded-lg">
                  <h3 className="text-sm font-medium">Support this project</h3>
                  <p className="text-xs mt-1.5 mb-3">
                    Your support is very much
                    <br />
                    appreciated
                  </p>
                  <div className="flex space-x-4">
                    {[
                      {
                        href: "https://github.com/zayminmaw/dynawind",
                        icon: (
                          <StarIcon className="w-4 text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100" />
                        ),
                        label: "Github",
                      },
                    ].map(({ href, icon, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-grow items-center text-sm space-x-1"
                      >
                        {icon}
                        <span className="group-hover:text-black dark:group-hover:text-white">
                          {label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              ),
              collapsible: true,
              defaultOpenLevel: 1,
            }}
            githubUrl="https://github.com/zayminmaw/dynawind"
          >
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
