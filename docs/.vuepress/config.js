module.exports = {
  // 部署的仓库名
  base: '/KOMA-UI/',
  title: 'KOMA-UI1',
  description: '一个好用的UI框架',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: ['/components/Button']
      },
    ]
  }
}