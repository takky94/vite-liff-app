import{r as f,o as a,c as u,a as c,t as d,F as g,b as p,d as _,l as n}from"./vendor.bb585897.js";const m=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}};m();var v="./assets/logo.03d6d6da.png";var y=(s,t)=>{const l=s.__vccOpts||s;for(const[r,e]of t)l[r]=e;return l};const h={props:{msg:String},setup(s){const t=f(0);return(l,r)=>(a(),u(g,null,[c("h1",null,d(s.msg),1),c("button",{type:"button",onClick:r[0]||(r[0]=e=>t.value++)},"count is: "+d(t.value),1)],64))}};var L=y(h,[["__scopeId","data-v-429d8639"]]);const b=c("img",{alt:"Vue logo",src:v},null,-1),V={setup(s){return(t,l)=>(a(),u(g,null,[b,p(L,{msg:"Hello Vue 3 + Vite"})],64))}};async function I(){_(V).mount("#app"),await n.init({liffId:"1656795481-GomBd7X9"}),n.isLoggedIn()?(console.log(n.getLanguage()),console.log(n.getVersion()),console.log(n.isInClient()),console.log(n.isLoggedIn()),console.log(n.getOS()),console.log(n.getLineVersion())):n.login()}I();
