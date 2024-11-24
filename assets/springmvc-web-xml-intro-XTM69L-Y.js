import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-BvyuMnyR.js";import{u as g,o,c,w as a,r as t,g as i,h as s,f as y,p as r}from"./app-boVvO3tb.js";import"./YunComment.vue_vue_type_style_index_0_lang-CrsBtAxv.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CFbN6BoV.js";import"./post-nLiiti9w.js";const F={__name:"springmvc-web-xml-intro",setup(m,{expose:E}){const e=JSON.parse('{"title":"SpringMVC-web-xml详解","description":"","frontmatter":{"title":"SpringMVC-web-xml详解"},"headers":[{"level":2,"title":"web.xml","slug":"web-xml","link":"#web-xml","children":[]},{"level":2,"title":"DispatcherServlet","slug":"dispatcherservlet","link":"#dispatcherservlet","children":[]},{"level":2,"title":"load-on-startup","slug":"load-on-startup","link":"#load-on-startup","children":[]},{"level":2,"title":"contextConfigLocation","slug":"contextconfiglocation","link":"#contextconfiglocation","children":[]},{"level":2,"title":"url-pattern","slug":"url-pattern","link":"#url-pattern","children":[]},{"level":2,"title":"CharacterEncodingFilter","slug":"characterencodingfilter","link":"#characterencodingfilter","children":[]},{"level":2,"title":"解决乱码思路","slug":"解决乱码思路","link":"#解决乱码思路","children":[]}],"relativePath":"pages/posts/java-stack/spring-mvc/springmvc-web-xml-intro.md","path":"/home/runner/work/blog/blog/packages/valaxy-blog/pages/posts/java-stack/spring-mvc/springmvc-web-xml-intro.md","lastUpdated":1732447053000}'),n=g(),h=e.frontmatter||{};return n.meta.frontmatter=Object.assign(n.meta.frontmatter||{},e.frontmatter||{}),r("pageData",e),r("valaxy:frontmatter",h),globalThis.$frontmatter=h,E({frontmatter:{title:"SpringMVC-web-xml详解"}}),(l,k)=>{const p=d;return o(),c(p,{frontmatter:y(h)},{"main-content-md":a(()=>k[0]||(k[0]=[i("h2",{id:"web-xml",tabindex:"-1"},[s("web.xml "),i("a",{class:"header-anchor",href:"#web-xml","aria-label":'Permalink to "web.xml"'},"​")],-1),i("div",{class:"language-xml vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"xml"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<?"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"xml"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," version"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"1.0"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," encoding"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"UTF-8"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"?>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"web-app"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," xmlns"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"http://xmlns.jcp.org/xml/ns/javaee"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"         xmlns:xsi"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"http://www.w3.org/2001/XMLSchema-instance"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"         xsi:schemaLocation"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"         version"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"4.0"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    <!--springmvc配置DispatcherServlet接管servlet并做处理-->")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"servlet"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"servlet-name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">app</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"servlet-name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"servlet-class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">org.springframework.web.servlet.DispatcherServlet</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"servlet-class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"init-param"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"param-name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">contextConfigLocation</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"param-name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"param-value"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">classpath:springmvc-servlet.xml</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"param-value"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"init-param"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"load-on-startup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">1</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"load-on-startup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"servlet"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"servlet-mapping"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"servlet-name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">app</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"servlet-name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"         <!--如果没有index.jsp，匹配到根路径就会交给DispatcherServlet处理-->")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"url-pattern"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">/</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"url-pattern"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"servlet-mapping"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"web-app"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])]),i("button",{class:"collapse"})],-1),i("h2",{id:"dispatcherservlet",tabindex:"-1"},[s("DispatcherServlet "),i("a",{class:"header-anchor",href:"#dispatcherservlet","aria-label":'Permalink to "DispatcherServlet"'},"​")],-1),i("p",null,"org.springframework.web.servlet.DispatcherServlet",-1),i("h2",{id:"load-on-startup",tabindex:"-1"},[s("load-on-startup "),i("a",{class:"header-anchor",href:"#load-on-startup","aria-label":'Permalink to "load-on-startup"'},"​")],-1),i("p",null,"oad-on-startup标签可以设置servlet的加载优先级别和容器是否在启动时加载该servlet。",-1),i("p",null,"当值为0或者大于0时，代表容器启动时加载该servlet。正数的值越小，启动时加载该servlet的优先级越高。如果为负数，则容器启动时不会加载该servlet，只有该servlet被选择时才会加载。",-1),i("h2",{id:"contextconfiglocation",tabindex:"-1"},[s("contextConfigLocation "),i("a",{class:"header-anchor",href:"#contextconfiglocation","aria-label":'Permalink to "contextConfigLocation"'},"​")],-1),i("p",null,[s("如果不指定contextConfigLocation，默认会读取"),i("code",null,"<servlet-name>"),s("定义的xml配置文件。")],-1),i("div",{class:"language-xml vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"xml"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"init-param"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"param-name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">contextConfigLocation</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"param-name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"param-value"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">classpath:springmvc-servlet.xml</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"param-value"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"init-param"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])]),i("button",{class:"collapse"})],-1),i("h2",{id:"url-pattern",tabindex:"-1"},[s("url-pattern "),i("a",{class:"header-anchor",href:"#url-pattern","aria-label":'Permalink to "url-pattern"'},"​")],-1),i("div",{class:"language-xml vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"xml"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"servlet-mapping"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"servlet-name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">app</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"servlet-name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"url-pattern"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">/</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"url-pattern"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"servlet-mapping"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])]),i("button",{class:"collapse"})],-1),i("ul",null,[i("li",null,'"/" 表示除*.jsp之外的这些请求都交给DispatcherServlet处理。'),i("li",null,'"/*" 表示所有的请求都交给DispatcherServlet处理。')],-1),i("h2",{id:"characterencodingfilter",tabindex:"-1"},[s("CharacterEncodingFilter "),i("a",{class:"header-anchor",href:"#characterencodingfilter","aria-label":'Permalink to "CharacterEncodingFilter"'},"​")],-1),i("p",null,"设置过滤器防止字符乱码",-1),i("div",{class:"language-xml vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"xml"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"filter"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"filter-name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">encoding</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"filter-name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"filter-class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">org.springframework.web.filter.CharacterEncodingFilter</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"filter-class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"init-param"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"param-name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">encoding</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"param-name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"param-value"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">utf-8</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"param-value"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"init-param"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"filter"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"filter-mapping"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"filter-name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">encoding</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"filter-name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"url-pattern"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">/*</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"url-pattern"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"filter-mapping"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])]),i("button",{class:"collapse"})],-1),i("h2",{id:"解决乱码思路",tabindex:"-1"},[s("解决乱码思路 "),i("a",{class:"header-anchor",href:"#解决乱码思路","aria-label":'Permalink to "解决乱码思路"'},"​")],-1),i("ul",null,[i("li",null,"tomcat server.xml增加utf-8编码"),i("li",null,"web.xml增加CharacterEncodingFilter过滤器"),i("li",null,"IDEA 设置编码格式"),i("li",null,'resp.setCharacterEncoding("UTF-8")'),i("li",null,'resp.setContentType("text/html;charset=UTF-8")'),i("li",null,'req.setCharacterEncoding("UTF-8");'),i("li",null,'jsp 页面上设置编码格式, <%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>'),i("li",null,'java 编码 String name = new String("用户".getBytes(), StandardCharsets.UTF_8);对字符串进行编码解码')],-1)])),"main-header":a(()=>[t(l.$slots,"main-header")]),"main-header-after":a(()=>[t(l.$slots,"main-header-after")]),"main-nav":a(()=>[t(l.$slots,"main-nav")]),"main-content":a(()=>[t(l.$slots,"main-content")]),"main-content-after":a(()=>[t(l.$slots,"main-content-after")]),"main-nav-before":a(()=>[t(l.$slots,"main-nav-before")]),"main-nav-after":a(()=>[t(l.$slots,"main-nav-after")]),comment:a(()=>[t(l.$slots,"comment")]),footer:a(()=>[t(l.$slots,"footer")]),aside:a(()=>[t(l.$slots,"aside")]),"aside-custom":a(()=>[t(l.$slots,"aside-custom")]),default:a(()=>[t(l.$slots,"default")]),_:3},8,["frontmatter"])}}};export{F as default};