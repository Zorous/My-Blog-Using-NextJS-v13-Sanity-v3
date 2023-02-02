import { previewData } from "next/headers"
import {groq} from "next-sanity";
import { client } from "../../lib/sanity.client";

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


export default function HomePage(){
    if(previewData()){
        return <div>Preview Mode</div>
    }

    const posts = client.fetch(query);
    console.log(posts);
    return (
        <div>
            <h1>Not in Preview Mode</h1>
        </div>
    )
}