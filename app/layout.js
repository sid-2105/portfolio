import { Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "./globals.css";

// Load font with subsets and display strategy
const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Praises Tula | Software Engineer & Web Developer",
  description:
    "Portfolio of Praises Tula, a Software Engineer specializing in UI creation, animations, and dynamic user experiences with expertise in JavaScript, TypeScript, React, and NextJS.",
  keywords:
    "Praises Musa, Praises Tula, Software Engineer, Frontend Developer, Web Developer, NextJS, React, JavaScript, TypeScript, Nigeria, Portfolio",
  authors: [{ name: "Praises Tula", url: "https://praisestula.com.ng" }],
  creator: "Praises Tula",
  publisher: "Praises Tula",
  openGraph: {
    title: "Praises Tula | Software Engineer & Web Developer",
    description:
      "Portfolio of Praises Tula, a Software Engineer specializing in UI creation, animations, and dynamic user experiences.",
    url: "https://praisestula.com",
    siteName: "Praises Tula Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praises Tula | Software Engineer & Web Developer",
    description:
      "Portfolio of Praises Tula, a Software Engineer specializing in UI creation, animations, and dynamic user experiences.",
    creator: "@PraisesTula",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2d2d2d",
  colorScheme: "dark light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={firaCode.className}>
      <body
        suppressHydrationWarning
        className="w-full min-h-screen bg-secondary flex flex-col antialiased"
      >
        <ThemeProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
