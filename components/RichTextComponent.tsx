import Link from "next/link";
import Image from "next/image";
import urlFor from "../lib/urlFor";

export const RichTextComponent = ()=>{
types : {
    image : ({value} : any) =>{
        return(
            <div className="">
                <Image
                className="object-contain"
                src={urlFor(value).url()}
                alt="Blog Post Image"
                />
            </div>
        )
    }
}

}