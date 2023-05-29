import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";
import urlFor from "../../lib/urlFor";
import { TbArrowUpRight } from "react-icons/tb";

type Props = {
  posts: Post[];
};

export function BlogList({ posts }: Props) {
  return (
    <section className="max-w-5xl grid grid-cols-2 gap-8 mt-16 mb-24 mx-auto p-6">
      {posts.map((post) => (
        <ClientSideRoute
          key={post._id}
          route={`/blog/post/${post.slug.current}`}
        >
          <div className="group flex flex-col cursor-pointer">
            <div className="relative h-80 w-full group-hover:scale-105">
              <Image
                className="object-cover object-left rounded-lg"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
              <div className="flex justify-between items-center absolute bottom-0 w-full bg-theme-dark bg-opacity-95 opacity-20 backdrop:blur p-5 rounded-b-lg">
                <div>
                  <p className="font-bold mb-1">{post.title}</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                  {post.categories.map((category) => (
                    <div
                      key={category._id}
                      className="text-center bg-theme-orange text-theme-dark py-1 px-3 text-sm rounded-full"
                    >
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-xl font-bold underline">{post.title}</p>
              <p className="line-clamp-2 overflow-hidden mt-4 text-slate-300">
                {post.description}
              </p>
            </div>
            <p className="flex item mt-3 font-bold group-hover:underline">
              Read Post <TbArrowUpRight className="ml-1" />
            </p>
          </div>
        </ClientSideRoute>
      ))}
    </section>
  );
}

//     &:hover .postCard {
//       transform: scale(1.05);
//     }

//     &:hover .readPost {
//       text-decoration-line: underline;
//     }

//       transition: all 400ms ease-out;

//     }
