if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const t=e=>i(e,o),f={module:{uri:o},exports:r,require:t};s[o]=Promise.all(n.map((e=>f[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-c1760cce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.0cd18c03.css",revision:null},{url:"assets/index.ba647c19.js",revision:null},{url:"index.html",revision:"54579624360dff83fbaf4fa524c92ea6"},{url:"assets/icons/pwa-192x192.png",revision:"41f20fded272b733a4332ebe4f43e74c"},{url:"assets/icons/apple-touch-icon.png",revision:"61611365b11be882953ae4ed1cdef6f4"},{url:"assets/icons/favicon.ico",revision:"9bccfc17d26e51f243a0af48bcdb69b3"},{url:"assets/icons/mask-icon.svg",revision:"f6bac8e89a71462fa8f3a4d1ad81f8f8"},{url:"assets/icons/pwa-512x512.png",revision:"5f70a6e5599654bc9ae4fe98c12e6808"},{url:"manifest.webmanifest",revision:"5e62b9533e02df69e0e699b633c4f562"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
