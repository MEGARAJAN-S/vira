import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import { TRPCReactProvider } from "@/trpc/client";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { NuqsAdapter } from "nuqs/adapters/next";

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vira",
  description: "Vira: Because every mind deserves care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NuqsAdapter>
      <TRPCReactProvider>
        <html lang="en" suppressHydrationWarning className="scroll-smooth">
          <body
            className={`${funnelDisplay.className}`}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <Toaster />
              {children}
            </ThemeProvider>
          </body>
        </html>
      </TRPCReactProvider>
    </NuqsAdapter>
  );
}
