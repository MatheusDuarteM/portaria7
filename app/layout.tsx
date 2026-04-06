import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../public/fonts/Inter/static/Inter_18pt-Black.ttf",
  variable: "--font-inter",
});

const playfair = localFont({
  src: "../public/fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf",
  variable: "--font-playfair",
});

const jetbrainsMono = localFont({
  src: "../public/fonts/JetBrains_Mono/static/JetBrainsMono-ExtraBold.ttf",
  variable: "--font-jetbrainsMono",
});

const jura = localFont({
  src: "../public/fonts/Jura/static/Jura-Bold.ttf",
  variable: "--font-jura",
});

const leagueSpartan = localFont({
  src: "../public/fonts/League_Spartan/static/LeagueSpartan-Bold.ttf",
  variable: "--font-league-spartan",
});

const geistSans = localFont({
  src: "../public/fonts/Geist/static/Geist-Bold.ttf",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "../public/fonts/Geist/static/Geist-ExtraBold.ttf",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Portaria 7",
  description: "Portaria 7 - o melhor conteúdo da guarita cinematográfica.",
  icons: {
    icon: "/portaria7.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} ${jura.variable} ${leagueSpartan.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
