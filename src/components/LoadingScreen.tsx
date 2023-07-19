"use client";

import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import SplashScreen from "./SplashScreen";
import Spinner from "./Spinner";
import { Header } from "./Header";

export function LoadingScreen() {
  const pathname = usePathname();

  const isHome = pathname === "/";

  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 5000);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && isHome ? (
        // <Suspense fallback={<Spinner />}>
        <SplashScreen />
      ) : (
        // </Suspense>
        <Header />
      )}
    </>
  );
}
