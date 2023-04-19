import { inter, firaCode } from "./fonts";

import { ToggleProvider } from "../../context/ToggleContext";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <body className={`${inter.className} ${firaCode.variable}`} id="__next">
        <ToggleProvider>
          <Header />
          {children}
          <Footer />
        </ToggleProvider>
      </body>
  );
}
