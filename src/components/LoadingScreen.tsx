"use client";

import { usePathname } from "next/navigation";
import {  useEffect, useState } from "react";

import SplashScreen from "./SplashScreen";
import { Header } from "./Header";

export function LoadingScreen() {
  const pathname = usePathname();

  const isHome = pathname === "/";

  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 6000);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && isHome ? (
        <SplashScreen />
      ) : (
        <Header />
      )}
    </>
  );
}
