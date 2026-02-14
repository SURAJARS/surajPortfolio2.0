import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Lenis } from "@/components/Lenis";
import { AudioProvider } from "@/context/AudioContext";

export const metadata: Metadata = {
  title: "Suraj ARS - Full Stack Developer",
  description:
    "Premium portfolio of Suraj ARS - Full Stack Developer. Develop solutions that matter.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf8f3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#faf8f3" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%23d4a574'>S</text></svg>"
        />
      </head>
      <body className="bg-primary text-primary antialiased">
        <AudioProvider>
          <Lenis>{children}</Lenis>
        </AudioProvider>
      </body>
    </html>
  );
}
