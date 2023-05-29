"use client";

import Image from "next/image";
import format from "date-fns/format";
import { useContext, useState } from "react";
import Modal from "react-modal";

import * as Si from "react-icons/si";

import { PortfolioModal } from "./PortfolioModal";
import { ToggleContext } from "../context/ToggleContext";
import urlFor from "../../lib/urlFor";

Modal.setAppElement("#__next");

type Props = {
  portfolio: Portfolio;
};

export function PortfolioCard({ portfolio }: Props) {
  const { setModal } = useContext(ToggleContext);

  const [isPortfolioModalOpen, setPortfolioModalOpen] = useState(false);

  function handleOpenPortfolioModal() {
    document.body.classList.toggle("toggleBlur")
    setModal(true);
    setPortfolioModalOpen(true);
  }

  function handleClosePortfolioModal() {
    document.body.classList.toggle("toggleBlur")
    setModal(false);
    setPortfolioModalOpen(false);
  }

  function dynamicIcon(icon: string): JSX.Element {
    const IconComponent = Si[icon as keyof typeof Si];
    return <IconComponent />;
  }

  return (
    <>
      <a
        onClick={handleOpenPortfolioModal}
        className="group flex flex-col lg:flex-row max-w-sm mb-2 w-full transition ease-in-out duration-500 hover:scale-110 lg:hover:shadow-lg lg:hover:shadow-theme-purple "
      >
        <div className="relative flex flex-col items-center justify-center gap-2.5 w-full h-52 rounded lg:group-hover:rounded-b-none border-b border-solid border-theme-orange">
          <Image
            src={urlFor(portfolio.mainImage).url()}
            alt={portfolio.title}
            className="absolute object-cover rounded brightness-[.4] lg:group-hover:brightness-100 lg:group-hover:rounded-b-none lg:-z-10 lg:group-hover:z-50"
            fill
            sizes="100%"
          />
          <h3 className="font-medium text-slate-100 text-lg z-20 group-hover:opacity-0">
            {portfolio.title}
          </h3>
          <div className="flex gap-2 text-3xl text-theme-orange z-20 group-hover:opacity-0">
            {portfolio.skill.map((icon) => {
              return (
                <div key={icon._id}>{dynamicIcon(icon.icon)}</div>
              );
            })}
          </div>
        </div>
        <div className="flex lg:hidden lg:absolute lg:bottom-0 text-xs items-center justify-between w-full py-1.5 px-8 rounded-b-3xl bg-theme-inky border-b-2 border-solid border-theme-orange lg:group-hover:flex lg:group-hover:animate-slideDown lg:group-hover:z-40">
          <p>{format(new Date(portfolio._createdAt), "dd MMMM yyyy")}</p>
          <p className="bg-theme-purple text-white my-1 py-1 px-3 rounded-2xl font-medium">
            See more
          </p>
        </div>
      </a>
      <PortfolioModal
        isOpen={isPortfolioModalOpen}
        onRequestClose={handleClosePortfolioModal}
        portfolio={portfolio}
      />
    </>
  );
}
