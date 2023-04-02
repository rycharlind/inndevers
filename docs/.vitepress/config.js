export default {
    title: 'Inndevers',
    description: 'Just dev it',
    head: [
        ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "favicons/apple-touch-icon.png" }],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "favicons/favicon-32x32.png" }],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "favicons/favicon-16x16.png" }],
        ['link', { rel: "manifest", href: "favicons/site.webmanifest" }],
        ['link', { rel: "mask-icon", href: "favicons/safari-pinned-tab.svg", color: "#3a0839" }],
        ['link', { rel: "shortcut icon", href: "favicons/favicon.ico" }],
        ['meta', { name: "msapplication-TileColor", content: "#3a0839" }],
        ['meta', { name: "msapplication-config", content: "favicons/browserconfig.xml" }],
        ['meta', { name: "theme-color", content: "#ffffff" }],
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: '/brand/inndevers_logo_100.svg',
        siteTitle: 'Inndevers',
        footer: {
            message: 'Created by <a target="_new" href="https://github.com/rycharlind">@rycharlind</a> with <a target="_new" href="https://vitepress.vuejs.org">VitePress</a>',
            copyright: 'Copyright © 2022-present'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/rycharlind/inndevers' }
        ]
    }
}