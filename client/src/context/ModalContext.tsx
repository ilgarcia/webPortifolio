'use client';

import React, { createContext, useState, ReactNode, SetStateAction, Dispatch } from "react";

interface providerProps {
  children: ReactNode;
}

interface contextDataProps {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>
}

export const ModalContext = createContext<contextDataProps>(
  {} as contextDataProps
);

export const ModalProvider = ({ children }: providerProps) => {
  const [modal, setModal] = useState(false);

  return (
    <ModalContext.Provider value={{ modal, setModal}}>
      {children}
    </ModalContext.Provider>
  );
};
