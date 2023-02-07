import { previewData } from "next/headers"
import {groq} from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";

const query = groq`
//get me all the available posts
*[_type == 'post']{
    //select all the fields
    ...,

//expand those fields
    author->,
    categories[]->

    //pipping
} | order(_createdAt desc)

`


export default async function HomePage(){
    if(previewData()){
        return <PreviewSuspense
        fallback={
            <div className="status">
                <p className="text-center text-lg animate-pulse text-[#0fbcf9]">
                    Loading Preview Data ...
                </p>
            </div>
        }>
            <PreviewBlogList query={query} />
        </PreviewSuspense>
    }

    const posts = await client.fetch(query);
    console.log(posts);
    return (
   <BlogList Posts = {posts} />
    )
}