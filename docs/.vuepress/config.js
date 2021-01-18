module.exports = {
  // 部署的仓库名
  base: '/KOMA-UI/',
  title: 'KOMA-UI',
  description: '一个基于vue的UI框架',
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: 'Last Updated',
    nav: [
      { text: '首页', link: '/' },
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
            {
              title: 'Basic',
              collapsable: false,
              children: [
                '/components/icon',
                '/components/button',
              ]
            },
            {
              title: 'Layout',
              collapsable: false,
              children: [
                '/components/grid',
                '/components/layout',
              ]
            },
            {
              title: 'Data Entry',
              collapsable: false,
              children: [
                '/components/input',
                '/components/cascader',
                '/components/datePicker',
                '/components/nav',
                '/components/uploader',
                '/components/form',
              ]
            },
            {
              title: 'Data Display',
              collapsable: false,
              children: [
                '/components/tabs',
                '/components/toast',
                '/components/popover',
                '/components/collapse',
                '/components/carousel',
                '/components/sticky',
                '/components/pager',
                '/components/scroll',
                '/components/table',
              ]
            },

          ]
        },
      ]
    }
  }
}