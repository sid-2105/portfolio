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
  title: "Siddharth Mishra | System Engineer | AI/ML & Big Data",
  description:
    "Portfolio of Siddharth Mishra, a System Engineer at Infosys specializing in Machine Learning, Big Data, and ETL pipelines, with expertise in Python, Java, and building scalable data-driven and intelligent applications.",
  keywords:
    "Siddharth Mishra, System Engineer, Infosys, AI ML Engineer, Machine Learning, Big Data Engineer, ETL Developer, Python Developer, Java Developer, Data Engineering, Data Pipelines, Backend Developer, Software Engineer India, AI Projects, ML Projects, Big Data Processing, ETL Pipelines",
  authors: [{ name: "Siddharth Mishra", url: "https://sidmcodes.com" }],
  creator: "Siddharth Mishra",
  publisher: "Siddharth Mishra",
  openGraph: {
    title: "Siddharth Mishra | System Engineer | AI/ML & Big Data",
    description:
      "Portfolio of Siddharth Mishra, a System Engineer at Infosys with expertise in AI/ML, Big Data, ETL pipelines, and backend development using Python and Java.",
    url: "https://sidmcodes.com",
    siteName: "Siddharth Mishra Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddharth Mishra | System Engineer | AI/ML & Big Data",
    description:
      "Portfolio of Siddharth Mishra, System Engineer at Infosys specializing in AI/ML, Big Data, ETL pipelines, and scalable data-driven systems.",
    creator: "@_sidverse",
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
