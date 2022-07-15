// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EarthMC',
  tagline: 'A Geopolitical Sandbox',
  url: 'https://earthmc.net',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'EarthMC', // Usually your GitHub org/user name.
  projectName: 'earthmc-docs', // Usually your repo name.
  scripts: [{src: 'https://plausible.io/js/plausible.js', async: true, defer: true, 'data-domain': 'earthmc.net'}],

  themes: [
    [
      '@docusaurus/theme-classic',
      /** @type {import('@docusaurus/theme-classic').Options} */
    ({
      theme: {
        customCss: require.resolve('./src/css/custom.css')
      },
    }),
  ]
  ],

  plugins: [
    ['@docusaurus/plugin-content-docs',
    {
      path: 'src/docs',
      routeBasePath: '/'
    }],
    ['@docusaurus/plugin-sitemap',
    {
      changefreq: 'weekly',
      priority: 0.5,
    }
    ]
  ],

  themeConfig:
    ({
      navbar: {
        title: 'EarthMC docs',
        // logo: {
        //   alt: 'EarthMC Logo',
        //   src: 'img/logo.svg',
        // },
        items: [],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'IP: play.earthmc.net',
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/TFVYpWQ',
              },
              {
                label: 'Wiki',
                href: 'https://earthmc.fandom.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/EarthMC/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EarthMC.net.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
