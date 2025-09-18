/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  developerSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Platform',
      items: ['platform/architecture', 'platform/environment-setup'],
    },
  ],
};

module.exports = sidebars;
