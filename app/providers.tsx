"use client";

import { ProgressProvider } from "@bprogress/next/app";
import { ThemeProvider } from "@/hooks/use-theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <ProgressProvider
        height="4px"
        color="var(--foreground)"
        options={{ showSpinner: false }}
        shallowRouting
      >
        {children}
      </ProgressProvider>
    </ThemeProvider>
  );
};

export default Providers;
