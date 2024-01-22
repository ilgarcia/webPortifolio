import Image from "next/image";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { HiArrowCircleLeft } from "react-icons/hi";

import { client } from "../../../../../../lib/sanity.client";
import { RichTextComponents } from "../../../../../components/RichTextComponents";
import urlFor from "../../../../../../lib/urlFor";

import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60 * 60 * 12; // revalidate this page every 12h

export async function generateStaticParams() {
  const query = groq`
  *[_type=='post']
  {
    slug
  }
  `;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default async function Page({ params: { slug } }: Props) {
  const query = groq`
  *[_type=='post' && slug.current == $slug][0]
  {
    ...,
    author->,
    categories[]->
  }
  `;

  const post: Post = await client.fetch(query, { slug });

  if (!post) {
    return null;
  }

  return (
    <article className="max-w-6xl my-20 mx-auto">
      <section>
        <div className="relative flex flex-col justify-between ">
          <div className="absolute top-0 left w-full h-full opacity-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
          <section className="py-5 px-10 w-full bg-theme-purple">
            <div className="flex justify-between gap-5">
              <div>
                <h1 className="text-4xl mb-1">{post.title}</h1>
                <p className="text-sm">
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  className="rounded-full mr-1"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />
                <div>
                  <h3>{post.author.name}</h3>
                  <div>{/* TODO Author BIO */}</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="my-4 text-xl font">{post.description}</h2>
              <div className="flex items-center justify-end">
                {post.categories.map((category) => (
                  <p key={category._id} className="text-center bg-theme-orange py-1 px-5 font-bold text-sm rounded-full w-fit">
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="flex flex-col gap-4 max-w-5xl mt-10 mx-auto px-4 lg:px-0 text-slate-200">
        <Link
          href="/blog"
          className="flex items-center gap-1 hover:underline hover:decoration-theme-orange hover:decoration-2"
        >
          <HiArrowCircleLeft className="text-2xl text-theme-orange" />
          See more posts
        </Link>
        <PortableText value={post.body} components={RichTextComponents} />
        <Link
          href="/blog"
          className="flex items-center gap-1 hover:underline hover:decoration-theme-orange hover:decoration-2"
        >
          <HiArrowCircleLeft className="text-2xl text-theme-orange" />
          See more posts
        </Link>
      </section>
    </article>
  );
}
