// sanity.config.js
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes'; // Updated import path

export default defineConfig({
  name: 'default',
  title: 'BNU-Barber',

  projectId: 'h8ykgze8',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
