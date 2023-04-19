import Image from "next/image";
import ClientSideRoute from "../ClientSideRoute";
import urlFor from "../../../lib/urlFor";
import { TbArrowUpRight } from "react-icons/tb";

import styles from "./styles.module.scss";

type Props = {
  posts: Post[];
};

export function BlogList({ posts }: Props) {
  return (
    <section className={styles.container}>
      {posts.map((post) => (
        <ClientSideRoute
          key={post._id}
          route={`/blog/post/${post.slug.current}`}
        >
          <div className={styles.postGroup}>
            <div className={styles.postCard}>
              <Image
                className={styles.imageCover}
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />

              <div className={styles.postTitle}>
                <div>
                  <p className={styles.title}>{post.title}</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className={styles.categoryGroup}>
                  {post.categories.map((category) => (
                    <div key={category._id} className={styles.category}>
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionTitle}>{post.title}</p>
              <p className={styles.descriptionText}>{post.description}</p>
            </div>

            <p className={styles.readPost}>
              Read Post <TbArrowUpRight className={styles.descriptionSVG} />
            </p>
          </div>
        </ClientSideRoute>
      ))}
    </section>
  );
}
