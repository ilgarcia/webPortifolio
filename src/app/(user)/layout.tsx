import { ToggleProvider } from "../../context/ToggleContext";

import { Footer } from "../../components/Footer";
import { LoadingScreen } from "../../components/LoadingScreen";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body id="__next">
      <LoadingScreen />
      <ToggleProvider>{children}</ToggleProvider>
      <Footer />
    </body>
  );
}
