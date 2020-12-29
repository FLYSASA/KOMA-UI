module.exports = {
  // 部署的仓库名
  base: '/KOMA-UI/',
  title: 'KOMA-UI',
  description: '一个基于vue的UI框架',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/install' },
      { text: 'github', link: 'https://github.com/FLYSASA/KOMA-UI' },
    ],
    sidebar: {
      // 组件
      '/components/': [
        {
          title: '基础',
          collapsable: false,
          children: [
            '/components/install',
            '/components/get-started',
          ]
        },
        {
          title: '组件',
          collapsable: false,
          children: [
            '/components/icon',
            '/components/button',
            '/components/tabs',
            '/components/input',
            '/components/grid',
            '/components/layout',
            '/components/toast',
            '/components/popover',
            '/components/collapse',
            '/components/carousel',
          ]
        },
      ]
    }
  }
}