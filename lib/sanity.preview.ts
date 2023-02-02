"use client";

import {definePreview} from "next-sanity/preview";
import {projectId, dataset} from "./sanity.client";

function OnPublicAccessOnly(){
    throw new Error('Unable to load preview as you are not logged interface');
}

if(!projectId || !dataset){
    throw new Error('Missing projected or dataset. Check your sanity.json or .env');
}

export const usePreview = definePreview({ 
    projectId,
    dataset,
    OnPublicAccessOnly,
}
);