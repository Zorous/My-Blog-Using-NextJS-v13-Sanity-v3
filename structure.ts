import Iframe from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/desk";


export const getDefaultDocumentNode : DefaultDocumentNodeResolver = (
    //S : Structure builder
    S, {schemaType}

) => {
    if(schemaType === "post"){
        return S.document().views([
        S.view.form(),
        S.view
        .component(Iframe)
        .options({
            // Required : Accepts an async function
            //OR a String

            //make it work either with the deployed version or the localhost
            url : `${
                process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
            }/api/preview`,
            //Optional : set the default size
            defaultSize : "desktop",
            //Optional : Add a reload button, or reload on new document revisions
            reload:{
                button : true, 
            },
            //Optional : Pass attributes to the underlying 'iframe'
            attributes : {}

        }).title("Preview")  
     ]);
    }
         
}