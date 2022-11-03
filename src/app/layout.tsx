import { Raleway } from '@next/font/google';

import "../styles/globals.scss";

const raleway = Raleway();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={raleway.className}>
      <head>
        <title>l.garcia</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
