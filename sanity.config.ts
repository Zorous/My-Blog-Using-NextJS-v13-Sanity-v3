import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemas';
import { myTheme } from './theme';



export default defineConfig({

  basePath: "/studio",
  name: 'Oussama_Blog_Studio',
  title: 'Oussama Blog Studio',

  projectId: 'y3h7iy2t',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components : {
      
    }
  },
  theme : myTheme
})
