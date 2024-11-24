import{_ as u}from"./ValaxyMain.vue_vue_type_style_index_0_lang-BvyuMnyR.js";import{u as h,o as p,c as v,w as l,r,g as e,h as a,f as b,p as c}from"./app-boVvO3tb.js";import"./YunComment.vue_vue_type_style_index_0_lang-CrsBtAxv.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CFbN6BoV.js";import"./post-nLiiti9w.js";const $={__name:"jdbc-connection",setup(f,{expose:d}){const s=JSON.parse('{"title":"jdbc连接","description":"","frontmatter":{"title":"jdbc连接"},"headers":[{"level":2,"title":"mysql8.0以前","slug":"mysql8-0以前","link":"#mysql8-0以前","children":[]},{"level":2,"title":"mysql8.0之后","slug":"mysql8-0之后","link":"#mysql8-0之后","children":[]},{"level":2,"title":"参数介绍","slug":"参数介绍","link":"#参数介绍","children":[{"level":3,"title":"zeroDateTimeBehavior","slug":"zerodatetimebehavior","link":"#zerodatetimebehavior","children":[]},{"level":3,"title":"characterEncoding","slug":"characterencoding","link":"#characterencoding","children":[]},{"level":3,"title":"useSSL","slug":"usessl","link":"#usessl","children":[]},{"level":3,"title":"allowPublicKeyRetrieval","slug":"allowpublickeyretrieval","link":"#allowpublickeyretrieval","children":[]},{"level":3,"title":"useServerPrepStmts","slug":"useserverprepstmts","link":"#useserverprepstmts","children":[]}]}],"relativePath":"pages/posts/java-stack/jdbc/jdbc-connection.md","path":"/home/runner/work/blog/blog/packages/valaxy-blog/pages/posts/java-stack/jdbc/jdbc-connection.md","lastUpdated":1732447053000}'),i=h(),n=s.frontmatter||{};return i.meta.frontmatter=Object.assign(i.meta.frontmatter||{},s.frontmatter||{}),c("pageData",s),c("valaxy:frontmatter",n),globalThis.$frontmatter=n,d({frontmatter:{title:"jdbc连接"}}),(t,o)=>{const m=u;return p(),v(m,{frontmatter:b(n)},{"main-content-md":l(()=>o[0]||(o[0]=[e("p",null,"不同版本可能连接参数不同，主要表现是驱动不同。",-1),e("h2",{id:"mysql8-0以前",tabindex:"-1"},[a("mysql8.0以前 "),e("a",{class:"header-anchor",href:"#mysql8-0以前","aria-label":'Permalink to "mysql8.0以前"'},"​")],-1),e("div",{class:"language-text vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",null,"driverClassName=com.mysql.jdbc.Driver")]),a(`
`),e("span",{class:"line"},[e("span",null,"url=jdbc:mysql://192.168.200.253:3306/jdbc?characterEncoding=utf-8&zeroDateTimeBehavior=CONVERT_TO_NULL")])])]),e("button",{class:"collapse"})],-1),e("h2",{id:"mysql8-0之后",tabindex:"-1"},[a("mysql8.0之后 "),e("a",{class:"header-anchor",href:"#mysql8-0之后","aria-label":'Permalink to "mysql8.0之后"'},"​")],-1),e("div",{class:"language-text vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",null,"driverClassName=com.mysql.cj.jdbc.Driver")]),a(`
`),e("span",{class:"line"},[e("span",null,"url=jdbc:mysql://192.168.200.253:3306/jdbc?characterEncoding=utf-8&zeroDateTimeBehavior=CONVERT_TO_NULL")])])]),e("button",{class:"collapse"})],-1),e("h2",{id:"参数介绍",tabindex:"-1"},[a("参数介绍 "),e("a",{class:"header-anchor",href:"#参数介绍","aria-label":'Permalink to "参数介绍"'},"​")],-1),e("h3",{id:"zerodatetimebehavior",tabindex:"-1"},[a("zeroDateTimeBehavior "),e("a",{class:"header-anchor",href:"#zerodatetimebehavior","aria-label":'Permalink to "zeroDateTimeBehavior"'},"​")],-1),e("ul",null,[e("li",null,[e("code",null,"convertToNull"),a("：将日期时间类型转换为"),e("code",null,"null")]),e("li",null,[e("code",null,"exception"),a("：抛出异常")]),e("li",null,[e("code",null,"round"),a("：将日期时间类型四舍五入")])],-1),e("h3",{id:"characterencoding",tabindex:"-1"},[a("characterEncoding "),e("a",{class:"header-anchor",href:"#characterencoding","aria-label":'Permalink to "characterEncoding"'},"​")],-1),e("p",null,[a("指定字符编码，默认是"),e("code",null,"utf-8"),a("。")],-1),e("h3",{id:"usessl",tabindex:"-1"},[a("useSSL "),e("a",{class:"header-anchor",href:"#usessl","aria-label":'Permalink to "useSSL"'},"​")],-1),e("p",null,[a("是否使用SSL加密连接，默认是"),e("code",null,"false"),a("。")],-1),e("h3",{id:"allowpublickeyretrieval",tabindex:"-1"},[a("allowPublicKeyRetrieval "),e("a",{class:"header-anchor",href:"#allowpublickeyretrieval","aria-label":'Permalink to "allowPublicKeyRetrieval"'},"​")],-1),e("p",null,[a("是否允许从证书中获取公钥，默认是"),e("code",null,"false"),a("。")],-1),e("h3",{id:"useserverprepstmts",tabindex:"-1"},[a("useServerPrepStmts "),e("a",{class:"header-anchor",href:"#useserverprepstmts","aria-label":'Permalink to "useServerPrepStmts"'},"​")],-1),e("p",null,[a("是否使用服务器端准备好的语句，默认是"),e("code",null,"true"),a("。")],-1)])),"main-header":l(()=>[r(t.$slots,"main-header")]),"main-header-after":l(()=>[r(t.$slots,"main-header-after")]),"main-nav":l(()=>[r(t.$slots,"main-nav")]),"main-content":l(()=>[r(t.$slots,"main-content")]),"main-content-after":l(()=>[r(t.$slots,"main-content-after")]),"main-nav-before":l(()=>[r(t.$slots,"main-nav-before")]),"main-nav-after":l(()=>[r(t.$slots,"main-nav-after")]),comment:l(()=>[r(t.$slots,"comment")]),footer:l(()=>[r(t.$slots,"footer")]),aside:l(()=>[r(t.$slots,"aside")]),"aside-custom":l(()=>[r(t.$slots,"aside-custom")]),default:l(()=>[r(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{$ as default};