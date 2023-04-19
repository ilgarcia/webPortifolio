import Image from "next/image";
import Link from "next/link";

import urlFor from "../../../lib/urlFor";

import styles from "./styles.module.scss";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className={styles.imageContainer}>
          <Image src={urlFor(value).url()} alt="Blog Post Image" fill sizes="100%" className={styles.image}/>
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => <ul className={styles.list}>{children}</ul>,
  },
  block: {
    h1: ({ children }: any) => <h1 className={styles.titleOne}>{children}</h1>,
    h2: ({ children }: any) => <h2 className={styles.titleTwo}>{children}</h2>,
    h3: ({ children }: any) => <h3 className={styles.titleThree}>{children}</h3>,
    h4: ({ children }: any) => <h4 className={styles.titleFour}>{children}</h4>,
    blockquote: ({ children }: any) => <blockquote className={styles.blockquote}>{children}</blockquote>,
  },
  marks: {
    link: ({ children, value }: any) => {
      // const rel = !value.href.starsWith("/")
      //   ? "noreferrer noopener"
      //   : undefined;

      const rel = undefined;

      return (
        <Link href={value.href} rel={rel} className={styles.link}>
          {children}
        </Link>
      );
    },
  },
};
