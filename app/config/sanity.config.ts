import type { WorkspaceOptions } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from '~/cms/schemas';
import { visionTool } from '@sanity/vision';

const config: WorkspaceOptions = {
  plugins: [deskTool(), visionTool()],
  basePath: '/studio',
  projectId: '50q1ng6a',
  dataset: 'production',
  name: 'portfolio',
  title: 'Federico Minaya',
  schema: {
    types: schemaTypes
  }
};

export default config;
