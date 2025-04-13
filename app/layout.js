import { Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata = {
  title: "Praises Tula",
  description: "Portfolio of Praises Tula",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} bg-secondary antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
