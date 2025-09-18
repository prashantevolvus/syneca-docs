/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  functionalSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/overview', 'getting-started/user-personas'],
    },
  ],
};

module.exports = sidebars;
