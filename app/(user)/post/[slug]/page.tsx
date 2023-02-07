import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import NotFoundImg from "../../../../assets/notfound.png";

import {RichTextComponent} from "../../../components/RichTextComponent";

import { PortableText } from "@portabletext/react";

type Props = {
  params: {
    slug: string;
  };
};
async function Post({ params: { slug } }: Props) {
  const query = groq`
*[_type == "post" && slug.current == $slug][0]{
    ...,
    author->,
    categories[]->
}`;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border border-[#0fbcf9] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={post.mainImage ? urlFor(post.mainImage).url() : NotFoundImg}
              alt={post.author?.name}
              fill
            />
          </div>

          <section className="p-5 bg-[#0fbcf9] w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post?._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div>
                <Image
                  className="rounded-full"
                  src={
                    post.mainImage
                      ? urlFor(post.author?.image).url()
                      : NotFoundImg
                  }
                  alt={post.author?.name}
                  height={40}
                  width={40}
                />
              </div>
              <div className="w-64">
                <h3 className="text-lg font-bold">{post.author?.name}</h3>
                <div>{/* BIO*/}</div>
              </div>

            </div>

            <div>
                <h2 className="italic pt-10">
                    {post.description}
                </h2>
                <div className="flex items-center justify-end mt-auto space-x-2">
                    {post.categories?.map((category) => (
                        <p key={category._id} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">
                            {category.title}
                        </p>
                    ))}
                </div>
            </div>


          </section>
        </div>
      </section>

      <PortableText value={post.body}
      components = {RichTextComponent}
      />

    </article>
  );
}

export default Post;
