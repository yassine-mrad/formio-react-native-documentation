import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'getting-started/installation',
    'getting-started/prerequisites',
    'getting-started/basic-setup',
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/translation-guide',
        'guides/styling-guide',
        'guides/rtl-implementation-guide',
        'guides/typescript-guide',
        'guides/code-playground',
      ],
    },
    'contributing',
    'migration-guide',
    'faq',
    'changelog',
  ],
  apiSidebar: [
    {
      type: 'category',
      label: 'API Documentation',
      items: [
        'api/components',
        'api/core-apis',
      ],
    },
    'components-reference',
  ],
  examplesSidebar: [
    {
      type: 'category',
      label: 'Examples & Recipes',
      items: [
        'examples/basic-examples',
        'examples/advanced-examples',
        'examples/rtl-examples',
      ],
    },
  ],
};

export default sidebars;