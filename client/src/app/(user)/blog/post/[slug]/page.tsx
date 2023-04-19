import Image from "next/image";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";

import { client } from "../../../../../../lib/sanity.client";
import { RichTextComponents } from "../../../../../components/RichTextComponents";
import urlFor from "../../../../../../lib/urlFor";

import styles from "./styles.module.scss";

type Props = {
  params: {
    slug: string;
  };
};

const query = groq`
  *[_type=="post" && slug.current == $slug][0]
  {
    ...,
    author->,
    categories[]->
  }
  `;

// export default async function Page({ params: { slug } }: Props) {

export default async function Page({ params: { slug } }: Props) {

  console.log("teste 1");
  console.log(slug);
  const post: Post = await client.fetch(query, { slug });
  console.log(post);
  console.log("teste 1");

  return (
    <article className={styles.article}>
      <section>
        <div className={styles.postHeader}>
          <div className={styles.postHeaderContent}>
            {/* <Image
              className={styles.imageCover}
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            /> */}
          </div>
          <section className={styles.postHeaderBox}>
            <div className={styles.postHeaderInfo}>
              <div className={styles.postHeaderTitle}>
                {/* <h1>{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p> */}
              </div>
              <div className={styles.authorContainer}>
                {/* <Image
                  className={styles.authorImage}
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                /> */}
                <div>
                  {/* <h3>{post.author.name}</h3> */}
                  <div>{/* TODO Author BIO */}</div>
                </div>
              </div>
            </div>
            {/* <div>
              <h2 className={styles.postDescription}>{post.description}</h2>
              <div className={styles.categoryContainer}>
                {post.categories.map((category) => (
                  <p key={category._id} className={styles.category}>{category.title}</p>
                ))}
              </div>
            </div> */}
          </section>
        </div>
      </section>
      <section className={styles.textBody}>
        {/* <PortableText value={post.body} components={RichTextComponents} /> */}
      </section>
    </article>
  );
}
