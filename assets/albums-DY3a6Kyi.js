import{d as i,o as s,c as m,w as c,g as u,f as a,t as f,E as Y,e as r,F as b,y as L,D as A,W as C,a2 as k,ab as x,ac as w,j as B,q as n,ad as F,A as P,ae as V,af as D,z as E}from"./app-boVvO3tb.js";import{o as W}from"./index-Brk05QJm.js";import{_ as z}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-CFbN6BoV.js";import"./animation-A1-3EmnV.js";const I=["title"],N=["src","alt","on-error"],R={class:"yun-album-caption yun-title-effects text-$va-c-text inline-flex"},S=i({__name:"YunAlbum",props:{album:{}},setup(_){return(e,t)=>{const o=Y;return s(),m(o,{class:"yun-album-list-item",to:e.album.url},{default:c(()=>[u("figure",{class:"m-10",flex:"~ col",title:e.album.desc},[u("img",{loading:"lazy",class:"yun-album-list-cover",src:e.album.cover,alt:e.album.caption,"on-error":a(W)},null,40,N),u("figcaption",R,f(e.album.caption),1)],8,I)]),_:1},8,["to"])}}}),T={class:"yun-album-list mb-4"},j=i({__name:"YunAlbumList",props:{albums:{}},setup(_){return(e,t)=>{const o=S;return s(),r("div",T,[(s(!0),r(b,null,L(e.albums,l=>(s(),m(o,{key:l.url,album:l},null,8,["album"]))),128))])}}}),q={text:"center",class:"yun-text-light",p:"2"},Q=i({__name:"albums",setup(_){const{t:e}=A(),t=C(),o=k(t);x([w({"@type":"CollectionPage"})]);const l=B(()=>t.value.albums||[]);return(H,O)=>{const d=F,g=z,y=j,p=P("RouterView"),h=D,v=E;return s(),r(b,null,[n(h,null,{default:c(()=>[n(d),n(p,null,{default:c(({Component:$})=>[(s(),m(V($),null,{"main-header":c(()=>[n(g,{title:a(o)||a(e)("title.album"),icon:a(t).icon||"i-ri-gallery-line",color:a(t).color,"page-title-class":a(t).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":c(()=>[u("div",q,f(a(e)("counter.albums",l.value.length)),1),n(y,{albums:l.value},null,8,["albums"]),n(p)]),_:2},1024))]),_:1})]),_:1}),n(v)],64)}}});export{Q as default};