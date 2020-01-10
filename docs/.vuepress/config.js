module.exports = {
    title: '路上',
    description: '错把陈醋当成墨 ......',
    // base: '/',
    // cache: true,
    // port: '80',
    // head: [
    //     ['link', { rel: 'icon', href: '/images/favicon.ico' }]  // 增加一个自定义的 favicon(网页标签的图标)
    // ],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebar: 'auto',
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        // repo: 'itianke/itianke.github.io', // 你的 Git 项目地址，添加后会在导航栏的最后追加
        editLinks: true,  // 启用编辑
        editLinkText: '在 GitHub 上编辑此页', // 编辑按钮的 Text
        docsDir: 'docs',  // 编辑文档的所在目录
        docsBranch: 'develop',  // 编辑文档的所在分支
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/introduce' },
            { text: '生活', link: '/life' },
            // { text: '学习', link: '/guide/style' },
            {
                text: '学习',
                items: [
                    {
                        text: 'css',
                        link: '/style/css'

                    },
                    {
                        text: 'html',
                        link: '/style/html'

                    },
                    {
                        text: 'javascript',
                        link: '/style/javascript'

                    },

                    {
                        text: 'vue',
                        link: '/style/vue'

                    },
                ]
            },
            { text: '故事', link: '/story' },
            { text: '关于', link: '/history' },
            // { text: 'GitHub', link: 'https://github.com/DuebassLei' }
        ],
    },
    plugins: ['@vuepress/back-to-top']
}