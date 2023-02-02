import { inter, firaCode } from "./fonts";

import { ModalProvider } from "../context/ModalContext";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";

import "../styles/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={[inter.className, firaCode.variable].join(" ")}
        id="__next"
      >
        <ModalProvider>
            <Header />
            <Banner />
            {children}
            <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
