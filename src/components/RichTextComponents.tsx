import Image from "next/image";
import Link from "next/link";

import urlFor from "../../lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-80 my-10 mx-auto">
          <Image
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      );
    },
    // code:({ children }: any)=><pre><code>{children}</code></pre>
  },
  list: {
    bullet: ({ children }: any) => <ul>{children}</ul>,
  },
  block: {
    h1: ({ children }: any) => <h1 className="title-h1">{children}</h1>,
    h2: ({ children }: any) => <h2 className="title-h2">{children}</h2>,
    h3: ({ children }: any) => <h3 className="title-h3">{children}</h3>,
    h4: ({ children }: any) => <h4 className="title-h4">{children}</h4>,
    blockquote: ({ children }: any) => (

      <blockquote className="my-5 p-5 border-l-4 border-solid border-theme-orange">{children}</blockquote>
    ),
  },
  marks: { 
    link: ({ children, value }: any) => {
      // const rel = !value.href.starsWith("/")
      //   ? "noreferrer noopener"
      //   : undefined;

      const rel = undefined;

      return (
        <Link href={value.href} rel={rel} className="font-bold underline decoration-2 decoration-theme-orange hover:decoration-theme-purple">
          {children}
        </Link>
      );
    },
  },
};

