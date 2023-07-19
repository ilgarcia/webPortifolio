import { ToggleProvider } from "../../context/ToggleContext";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import SplashScreen from "../../components/SplashScreen";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body id="__next">
      {/* <SplashScreen /> */}
      <Header />
      <ToggleProvider>{children}</ToggleProvider>
      <Footer />
    </body>
  );
}
