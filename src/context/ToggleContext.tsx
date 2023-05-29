"use client";

import React, {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

interface providerProps {
  children: ReactNode;
}

interface contextDataProps {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}

export const ToggleContext = createContext<contextDataProps>(
  {} as contextDataProps
);

export const ToggleProvider = ({ children }: providerProps) => {
  const [modal, setModal] = useState(false);

  return (
    <ToggleContext.Provider value={{ modal, setModal}}>
      {children}
    </ToggleContext.Provider>
  );
};
