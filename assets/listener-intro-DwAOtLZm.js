import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-BvyuMnyR.js";import{u as f,o as d,c as v,w as t,r as s,g as e,h as S,f as c,p as i}from"./app-boVvO3tb.js";import"./YunComment.vue_vue_type_style_index_0_lang-CrsBtAxv.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CFbN6BoV.js";import"./post-nLiiti9w.js";const j={__name:"listener-intro",setup(h,{expose:m}){const l=JSON.parse('{"title":"监听器详解","description":"","frontmatter":{"title":"监听器详解"},"headers":[{"level":2,"title":"作用","slug":"作用","link":"#作用","children":[]}],"relativePath":"pages/posts/java-stack/java-web/listener/listener-intro.md","path":"/home/runner/work/blog/blog/packages/valaxy-blog/pages/posts/java-stack/java-web/listener/listener-intro.md","lastUpdated":1732447053000}'),r=f(),a=l.frontmatter||{};return r.meta.frontmatter=Object.assign(r.meta.frontmatter||{},l.frontmatter||{}),i("pageData",l),i("valaxy:frontmatter",a),globalThis.$frontmatter=a,m({frontmatter:{title:"监听器详解"}}),(n,o)=>{const u=p;return d(),v(u,{frontmatter:c(a)},{"main-content-md":t(()=>o[0]||(o[0]=[e("ul",null,[e("li",null,"ServletContextAttributeListener 用来感知ServlerContext对象属性变化，比如添加或删除属性变化"),e("li",null,"ServletContextListener 用来感知ServlerContext对象的创建和销毁的"),e("li",null,"ServletRequestListener 可以用来监听感知ServletRequest对象的创建和销毁的"),e("li",null,"ServletRequestAttributeListener 用来感知ServletRequest属性变化，如何添加或删除属性还是替换"),e("li",null,"HttpSessionListener监听session的变化，常用于统计在线人数"),e("li",null,"HttpSessionAttributeListener用来监听Session属性变化"),e("li",null,"HttpSessionBindingListener 用来监听把一个数据绑定到Session对象 感知监听器"),e("li",null,"HttpSessionActivationListener用来监听session绑定的对象钝化(把对象持久化磁盘)")],-1),e("h2",{id:"作用",tabindex:"-1"},[S("作用 "),e("a",{class:"header-anchor",href:"#作用","aria-label":'Permalink to "作用"'},"​")],-1),e("p",null,"通过监听器，我们可以监听某个对象，如果被监听的对象发生某些改变，那么我们的监听器就可以立即知道，从而可以做出一些处理操作。",-1),e("p",null,"在整个Servlet规范中，主要定义了【8类监听器】，但是在实际开发中，使用最多的可能就只有下面这三个，分别是：",-1),e("ul",null,[e("li",null,"用于监听ServletContext上下文的监听器。"),e("li",null,"用于监听HttpSession会话的监听器。"),e("li",null,"用于监听ServletRequest请求对象的监听器。")],-1),e("p",null,"Servlet组件中，可以利用上面三个监听器实现【对象创建和销毁】、【属性变化】、【session状态变化】的监听功能。",-1),e("ul",null,[e("li",null,"对象的创建和销毁"),e("li",null,"属性变化（添加属性、移除属性、替换属性）"),e("li",null,"session状态变化（绑定session、解绑session，不常用）")],-1)])),"main-header":t(()=>[s(n.$slots,"main-header")]),"main-header-after":t(()=>[s(n.$slots,"main-header-after")]),"main-nav":t(()=>[s(n.$slots,"main-nav")]),"main-content":t(()=>[s(n.$slots,"main-content")]),"main-content-after":t(()=>[s(n.$slots,"main-content-after")]),"main-nav-before":t(()=>[s(n.$slots,"main-nav-before")]),"main-nav-after":t(()=>[s(n.$slots,"main-nav-after")]),comment:t(()=>[s(n.$slots,"comment")]),footer:t(()=>[s(n.$slots,"footer")]),aside:t(()=>[s(n.$slots,"aside")]),"aside-custom":t(()=>[s(n.$slots,"aside-custom")]),default:t(()=>[s(n.$slots,"default")]),_:3},8,["frontmatter"])}}};export{j as default};
