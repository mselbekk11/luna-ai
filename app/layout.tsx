import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "@/components/ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClerkUserSync from "@/components/ConvexClerkUserSync";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://www.luna-ai.app"),
  title: "Luna AI",
  description:
    "Meet Luna AI, Your Intelligent R&D AssistantYour Intelligent R&D Assistant",
  icons: {
    icon: "/favicon-two.svg",
  },
  openGraph: {
    type: "website",
    title: "Luna AI",
    description:
      "Meet Luna AI, Your Intelligent R&D AssistantYour Intelligent R&D Assistant",
    images: [{ url: "https://www.luna-ai.app/og-image.png" }],
    url: "https://www.luna-ai.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luna AI",
    description:
      "Meet Luna AI, Your Intelligent R&D AssistantYour Intelligent R&D Assistant",
    images: [{ url: "https://www.luna-ai.app/og-image-twitter.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="theme-mode"
          disableTransitionOnChange
          forcedTheme="dark"
        >
          <ClerkProvider
            dynamic
            appearance={{
              baseTheme: dark,
            }}
          >
            <ConvexClientProvider>
              <ConvexClerkUserSync />
              {children}
              <Toaster position="bottom-center" theme="dark" />
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
