import Modal from "react-modal";
import Image from "next/image";

import { AiOutlineClose } from "react-icons/ai";
import { RiGithubFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";

import urlFor from "../../lib/urlFor";

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
  portfolio: Portfolio;
}

export function PortfolioModal({
  isOpen,
  onRequestClose,
  portfolio,
}: Props) {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="flex items-center justify-center fixed top-0 bottom-0 right-0 left-0 z-50"
      className="relative m-4 py-8 px-4 lg:py-8 lg:px-12 w-full max-w-5xl bg-theme-inky text-white shadow-md rounded focus:outline-0"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="absolute right-6 top-6 bg-transparent text-white text-xl transition-opacity duration-200 hover:opacity-60"
      >
        <AiOutlineClose />
      </button>
      <div className="my-6 lg:grid lg:grid-cols-5 lg:items-center">
        <figure className="relative lg:col-span-3 my-0 mx-auto max-w-lg w-full after:content-[''] after:bg-theme-purple after:bg-opacity-5 after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:z-10">
          <Image
            className="w-full h-full"
            src={urlFor(portfolio.mainImage).url()}
            alt={portfolio.title}
            width={600}
            height={300}
          />
        </figure>

        <div className="flex flex-col lg:col-span-2 justify-center mt-6 items-start gap-4 lg:items-end lg:gap-8 text-slate-300">
          <div>
            <div className="mb-1 text-theme-purple font-medium font-display lg:text-end">
              {portfolio.projectType.title}
            </div>
            <h3 className="text-xl lg:text-3xl">{portfolio.title}</h3>
          </div>
          <div className="flex items-center shadow p-4 h-36 bg-theme-purple rounded-lg z-10 lg:w-[150%] lg:text-end">
            <div>{portfolio.description}</div>
          </div>
          <ol className="flex gap-4 mt-6">
            {portfolio.tools.map((tool) => {
              return <li key={tool._id}>{tool.title}</li>;
            })}
          </ol>
          <ol className="flex fap-4 text-3xl">
            {portfolio.github && (
              <li>
                <a href={portfolio.github} target="_blank">
                  <RiGithubFill />
                </a>
              </li>
            )}
            {portfolio.pageLink && (
              <li>
                <a href={portfolio.pageLink} target="_blank">
                  <BiLinkExternal />
                </a>
              </li>
            )}
          </ol>
        </div>
      </div>
    </Modal>
  );
}
