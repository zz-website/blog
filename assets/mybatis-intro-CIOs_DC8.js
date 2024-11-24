import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-BvyuMnyR.js";import{u as E,o as g,c,w as i,r as t,g as s,h as e,f as y,p as o}from"./app-boVvO3tb.js";import"./YunComment.vue_vue_type_style_index_0_lang-CrsBtAxv.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CFbN6BoV.js";import"./post-nLiiti9w.js";const C={__name:"mybatis-intro",setup(m,{expose:k}){const l=JSON.parse('{"title":"Mybatis 详解","description":"","frontmatter":{"title":"Mybatis 详解"},"headers":[{"level":2,"title":"构成","slug":"构成","link":"#构成","children":[]},{"level":2,"title":"创建连接","slug":"创建连接","link":"#创建连接","children":[]},{"level":2,"title":"SqlSessionFactory","slug":"sqlsessionfactory","link":"#sqlsessionfactory","children":[]}],"relativePath":"pages/posts/java-stack/mybatis/mybatis-intro.md","path":"/home/runner/work/blog/blog/packages/valaxy-blog/pages/posts/java-stack/mybatis/mybatis-intro.md","lastUpdated":1732447053000}'),r=E(),n=l.frontmatter||{};return r.meta.frontmatter=Object.assign(r.meta.frontmatter||{},l.frontmatter||{}),o("pageData",l),o("valaxy:frontmatter",n),globalThis.$frontmatter=n,k({frontmatter:{title:"Mybatis 详解"}}),(a,h)=>{const p=d;return g(),c(p,{frontmatter:y(n)},{"main-content-md":i(()=>h[0]||(h[0]=[s("ul",null,[s("li",null,[s("a",{href:"https://mybatis.org/mybatis-3/zh_CN/getting-started.html",target:"_blank",rel:"noreferrer"},"mybatis getting-started")])],-1),s("h2",{id:"构成",tabindex:"-1"},[e("构成 "),s("a",{class:"header-anchor",href:"#构成","aria-label":'Permalink to "构成"'},"​")],-1),s("ul",null,[s("li",null,"mybatis-config.xml"),s("li",null,"db.properties")],-1),s("h2",{id:"创建连接",tabindex:"-1"},[e("创建连接 "),s("a",{class:"header-anchor",href:"#创建连接","aria-label":'Permalink to "创建连接"'},"​")],-1),s("p",null,"使用xml配置文件的方式",-1),s("div",{class:"language-java vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"java"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"String resource "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "org/mybatis/example/mybatis-config.xml"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"InputStream inputStream "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Resources."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getResourceAsStream"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(resource);")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"SqlSessionFactory sqlSessionFactory "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," SqlSessionFactoryBuilder"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"build"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(inputStream);")])])]),s("button",{class:"collapse"})],-1),s("p",null,"也可以直接使用java代码创建配置",-1),s("div",{class:"language-java vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"java"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"DataSource dataSource "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," BlogDataSourceFactory."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getBlogDataSource"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"TransactionFactory transactionFactory "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," JdbcTransactionFactory"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"Environment environment "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Environment"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"development"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", transactionFactory, dataSource);")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"Configuration configuration "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Configuration"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(environment);")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"configuration."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"addMapper"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(BlogMapper.class);")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"SqlSessionFactory sqlSessionFactory "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," SqlSessionFactoryBuilder"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"build"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(configuration);")])])]),s("button",{class:"collapse"})],-1),s("h2",{id:"sqlsessionfactory",tabindex:"-1"},[e("SqlSessionFactory "),s("a",{class:"header-anchor",href:"#sqlsessionfactory","aria-label":'Permalink to "SqlSessionFactory"'},"​")],-1),s("ul",null,[s("li",null,[s("a",{href:"https://mybatis.org/mybatis-3/java-api.html#sqlsessions",target:"_blank",rel:"noreferrer"},"sqlsessions")])],-1)])),"main-header":i(()=>[t(a.$slots,"main-header")]),"main-header-after":i(()=>[t(a.$slots,"main-header-after")]),"main-nav":i(()=>[t(a.$slots,"main-nav")]),"main-content":i(()=>[t(a.$slots,"main-content")]),"main-content-after":i(()=>[t(a.$slots,"main-content-after")]),"main-nav-before":i(()=>[t(a.$slots,"main-nav-before")]),"main-nav-after":i(()=>[t(a.$slots,"main-nav-after")]),comment:i(()=>[t(a.$slots,"comment")]),footer:i(()=>[t(a.$slots,"footer")]),aside:i(()=>[t(a.$slots,"aside")]),"aside-custom":i(()=>[t(a.$slots,"aside-custom")]),default:i(()=>[t(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{C as default};