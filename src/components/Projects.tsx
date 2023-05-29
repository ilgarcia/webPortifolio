import { PortfolioCard } from "./PortfolioCard";

type Props = {
  portfolios: Portfolio[];
};

export function Projects({ portfolios }: Props) {
  // const [show, setShow] = useState(1);

  // function handleClick() {
  //   setShow(show + 1);
  // }

  return (
    <section className="mx-auto min-h-[80vh] pt-24 px-4 lg:px-0">
      <h2 className="title-h2 title-numbered">Some Things I've Built</h2>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center mx-auto px-8 lg:px-16 gap-8">
          {/* {portfolios.slice(0, (show + 1) * 3).map((project) => { */}

          {portfolios.map((portfolio) => {
            return <PortfolioCard key={portfolio._id} portfolio={portfolio} />;
          })}
        </div>

        {/* See More */}

        {/* {portfolios.length > 6 && (
          <button
            type="button"
            className="bg-transparent max-w-sm w-full border border-solid border-theme-orange text-theme-orange rounded font-display text-lg py-4 px-7 mt-8 mx-4 mb-0 transition-colors ease-in-out bg-theme-inky"
            onClick={handleClick}
          >
            Show More
          </button>
        )} */}
      </div>
    </section>
  );
}
