import { ArrowLeftRight, TrendingUp } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between border-b border-border px-6 py-4 shadow-lg bg-card">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-lg bg-primary/10 p-2">
            <ArrowLeftRight className="size-5 text-primary" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">
              Currency Converter
            </h1>
            <p className="text-xs text-muted-foreground">
              Exchange Rate Dashboard
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 md:flex">
            <TrendingUp className="size-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              {"Last updated: Mar, 2026"}
            </span>
          </div>
        </div>
      </header>
    </>
  );
}
