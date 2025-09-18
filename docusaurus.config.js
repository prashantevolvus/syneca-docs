// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Syneca Documentation',
  tagline: 'Master hub for Syneca knowledge',
  url: 'https://example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',

  organizationName: 'syneca',
  projectName: 'syneca-docs',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'functional',
        path: 'functional-docs',
        routeBasePath: 'functional',
        sidebarPath: require.resolve('./sidebarsFunctional.js'),
        editUrl: 'https://github.com/syneca/syneca-docs/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'developer',
        path: 'developer-docs',
        routeBasePath: 'developer',
        sidebarPath: require.resolve('./sidebarsDeveloper.js'),
        editUrl: 'https://github.com/syneca/syneca-docs/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'channel-partner',
        path: 'channel-partner-docs',
        routeBasePath: 'channel-partner',
        sidebarPath: require.resolve('./sidebarsChannelPartner.js'),
        editUrl: 'https://github.com/syneca/syneca-docs/edit/main/',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Syneca Docs',
        logo: {
          alt: 'Syneca Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/functional/intro',
            label: 'Functional Documentation',
            position: 'left',
          },
          {
            to: '/developer/intro',
            label: 'Developer',
            position: 'left',
          },
          {
            to: '/channel-partner/intro',
            label: 'Channel Partner',
            position: 'left',
          },
          {
            href: 'https://github.com/syneca/syneca-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Functional Documentation',
                to: '/functional/intro',
              },
              {
                label: 'Developer',
                to: '/developer/intro',
              },
              {
                label: 'Channel Partner',
                to: '/channel-partner/intro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Syneca.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

