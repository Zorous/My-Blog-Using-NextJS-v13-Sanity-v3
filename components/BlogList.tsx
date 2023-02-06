import Image from "next/image";
// import { use, useEffect, useState } from "react";
import urlFor from "../lib/urlFor";
import NotFoundImg from "../assets/notfound.png";

type Props = {
    posts : Post[];
}
function BlogList({posts} : Props) {
// const [postsS,setPostsS] = useState();
    console.log(urlFor(posts[1].mainImage).url());
    // useEffect(()=>setPostsS(posts),[posts]);
  return (
    <div>
        <hr className="border-[#0fbcf9]"/>

        <div>
        {posts? posts.map(post =>(
                <div key={post?._id}>
                    <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                        <Image className = "object-cover object-left lg-object-center"
                        src = {post.mainImage?urlFor(post.mainImage).url():NotFoundImg}
                        alt={post.author?.name}
                        fill
                        />
                    </div>


                </div>
            )):"Nothing Found"}
        </div>
    </div>
  )
}

export default BlogList