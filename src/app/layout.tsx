import { Inter, Fira_Code, Nunito } from "next/font/google";


export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter-font",
});

export const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--fira-font",
});

export const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--nunito-font",
});

import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${firaCode.variable} ${nunito.variable}`}>
      {children}
    </html>
  );
}
