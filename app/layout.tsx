import type { Metadata } from "next";
import { Inter as FontSans, Rammetto_One as FontDisplay } from "next/font/google";  // Renamed for clarity
import "./globals.css";
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Configuration for 'Rammetto One' font
const fontDisplay = FontDisplay({
  subsets: ["latin"],  // Adjust subsets as needed
  variable: "--font-display",  // Use a different variable for this font
  weight: "400",  // Adjust weight as needed
});

export const metadata: Metadata = {
  title: "Skill Scout",
  description: "helping developers find in demand skills in minutes, not hours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
        fontDisplay.variable,
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Hero />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
