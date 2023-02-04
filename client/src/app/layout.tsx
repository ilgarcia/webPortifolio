import { inter, firaCode } from "./fonts";

import { ToggleProvider } from "../context/ToggleContext";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import "../styles/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${firaCode.variable}`} id="__next">
        <ToggleProvider>
          <Header />
          {children}
          <Footer />
        </ToggleProvider>
      </body>
    </html>
  );
}
