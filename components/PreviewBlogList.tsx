"use client";

import { usePreview } from "../lib/sanity.preview";
import post from "../schemas/post";
import BlogList from "./BlogList";

type Props = {
    query : string
}


export default function PreviewBlogList({query}: Props){
    const posts = usePreview(null, query);
    // console.log("LOADING postys...",posts);
    return <BlogList posts={posts} />
}