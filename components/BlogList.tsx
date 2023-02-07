import Image from "next/image";
import urlFor from "../lib/urlFor";
import NotFoundImg from "../assets/notfound.png";
import ClientSideRoute from "../components/ClientSideRoute";
import {ArrowUpRightIcon} from "@heroicons/react/24/solid";

type Props = {
  posts: Post[];
};
function BlogList({ posts }: Props) {
  console.log(urlFor(posts[1].mainImage).url());
  return (
    <div>
      <hr className="border-[#0fbcf9]" />

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts
          ? posts.map((post) => (
                <div
                  key={post?._id}
                  className="flex flex-col group cursor-pointer"
                >
                  <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                    <Image
                      className="object-cover object-left lg-object-center"
                      src={
                        post.mainImage
                          ? urlFor(post.mainImage).url()
                          : NotFoundImg
                      }
                      alt={post.author?.name}
                      fill
                    />
                  </div>
                  <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                    <p className="font-bold">{post.title}</p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-y-2 md-gap-y-2 md:gap-x-2 items-center">
                    {post.categories?.map(category =>(
                        <div className="bg-[#0fbcf9] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                            {category.title}
                        </div>
                    ))}
                  </div>
                  <div className="mt-5 flex-1">
                    <p className="underline text-lg font-bold">{post.title}</p>
                    <p className="line-clamp-2 text-gray-500">{post.description}</p>
                  </div>

                  <p className='mt-5 font-bold flex items-center group-hover:underline'>
                    <ArrowUpRightIcon className='ml-2 h-4 w-4' />
                  </p>
                </div>
            ))
          : "Nothing Found"}
      </div>
    </div>
  );
}

export default BlogList;
