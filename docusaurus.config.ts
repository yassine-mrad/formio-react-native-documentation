import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'React Native Formio',
  tagline: 'Powerful Form.io renderer for React Native with full TypeScript support, i18n, and RTL',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: 'https://yassine-mrad.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/formio-react-native-documentation/',

  // GitHub pages deployment config.
  organizationName: 'yassine-mrad', // Your GitHub org/user name.
  projectName: 'formio-react-native-documentation', // Your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/test-user/formio-react-native/tree/main/doc/',
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          lastVersion: "current",
          versions: {
            current: {
              label: "Next",
              badge: true,
              path: "next",
            },
          },
        },
        blog: false, // Disable blog for now
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'React Native Formio',
      logo: {
        alt: 'React Native Formio Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },
        {
          type: 'docSidebar',
          sidebarId: 'examplesSidebar',
          position: 'left',
          label: 'Examples',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://www.npmjs.com/package/formio-react-native',
          label: 'NPM',
          position: 'right',
        },
        {
          href:  'https://github.com/test-user/formio-react-native',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started/installation',
            },
            {
              label: 'API Reference',
              to: '/docs/api/components',
            },
            {
              label: 'Examples',
              to: '/docs/examples/basic',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/test-user/formio-react-native/discussions',
            },
            {
              label: 'Issues',
              href: 'https://github.com/test-user/formio-react-native/issues',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/formio',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'NPM Package',
              href: 'https://www.npmjs.com/package/formio-react-native',
            },
            {
              label: 'GitHub',
              href:'https://github.com/yassine-mrad/formio-react-native',
            },
            {
              label: 'Support this project ❤️',
              href: 'https://www.buymeacoffee.com/test-user',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} React Native Formio. Built with ❤️ using Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript', 'jsx', 'tsx'],
    },
    algolia: {
      // You'll need to set this up later with Algolia DocSearch
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
