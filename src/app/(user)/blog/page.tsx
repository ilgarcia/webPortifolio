import { draftMode } from "next/headers";

import { groq } from "next-sanity";

import { client } from "../../../../lib/sanity.client";

import PreviewSuspense from "../../../components/PreviewSuspense";
import PreviewBlogList from "../../../components/PreviewBlogList";
import { BannerBlog } from "../../../components/BannerBlog";
import { BlogList } from "../../../components/BlogList";

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function Page() {
  const { isEnabled } = draftMode();

  if (isEnabled) {
    return (
      <section>
        <BannerBlog />
        <PreviewSuspense
          fallback={
            <div role="status">
              <p>Loading Preview Data...</p>
            </div>
          }
        >
          <PreviewBlogList query={query} />
        </PreviewSuspense>
      </section>
    );
  }

  const posts = await client.fetch(query);

  return (
    <section>
      <BannerBlog />
      <BlogList posts={posts} />
    </section>
  );
}
