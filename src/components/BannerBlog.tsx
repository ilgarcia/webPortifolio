import Image from "next/image";

import degrade from "./img/degrade.png";

export function BannerBlog() {
  return (
    <section className="bg-black pt-16 h-96">
      <Image
        src={degrade}
        alt={"degrade"}
        className="object-contain object-top z-0 "
        fill
        sizes="100%"
      />
      <div className="relative flex items-center max-w-7xl h-full mx-auto px-8 z-10">
        <div className="flex flex-col gap-8 flex-wrap max-w-4xl">
          <h1 className="title-banner">
            Igor's Daily <span className="text-theme-orange">Blog.</span>
          </h1>
          <p className="max-w-3xl text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
            laoreet arcu. Phasellus congue, libero in bibendum sagittis, erat
            nisl placerat diam, non faucibus arcu nisi vel magna. Aenean ac diam
            dapibus, placerat nunc.
          </p>
        </div>
      </div>
    </section>
  );
}


// .banner {
//   background-color: var(--black);
//   padding-top: 4rem;
//   height: 400px;

//   .degrade {
//     object-fit: contain;
//     object-position: 50% 0%;
//     z-index: 0;
//   }

//   .sun {
//     object-fit: none;
//     object-position: 100% 0;
//     z-index: 0;
//   }

//   .container {
//     position: relative;
//     display: flex;
//     align-items: center;
//     max-width: 1220px;
//     height: 100%;
//     margin: 0 auto;
//     padding: 0 2rem;
//     z-index: 2;

//     .bannerText {
//       display: flex;
//       flex-direction: column;
//       gap: 1.7rem;
//       flex-wrap: wrap;
//       width: 80%;

//       .bannerTitle {
//         span {
//           color: var(--yellow-900);
//         }
//       }
//     }
//   }
// }