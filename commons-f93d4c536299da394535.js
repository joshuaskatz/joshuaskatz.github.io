"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[351],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,s=new RegExp("^"+o.source),l=new RegExp(o.source+r.source,"gu"),i=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):o(e);return e!==o(e)&&(e=((e,n,r)=>{let o=!1,s=!1,l=!1;for(let i=0;i<e.length;i++){const c=e[i];o&&t.test(c)?(e=e.slice(0,i)+"-"+e.slice(i),o=!1,l=s,s=!0,i++):s&&l&&a.test(c)?(e=e.slice(0,i-1)+"-"+e.slice(i-1),l=s,s=!1,o=!0):(o=n(c)===c&&r(c)!==c,l=s,s=r(c)===c&&n(c)!==c)}return e})(e,o,c)),e=e.replace(s,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,o):o(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,i.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(i,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return R},L:function(){return f},M:function(){return k},P:function(){return x},_:function(){return l},a:function(){return s},b:function(){return d},c:function(){return c},g:function(){return m},h:function(){return i}});var n=a(7294),r=(a(3204),a(5697)),o=a.n(r);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(a=o[n])>=0||(r[a]=e[a]);return r}const i=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),s({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},r,{opacity:t?1:0})})}function m(e,t,a,n,r,o,l,i){const c={};o&&(c.backgroundColor=o,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=o,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),i&&(c.objectPosition=i);const u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const g=["children"],p=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,a=l(e,g);return n.createElement(n.Fragment,null,n.createElement(p,s({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){let{src:t,srcSet:a,loading:r,alt:o="",shouldLoad:i}=e,c=l(e,h);return n.createElement("img",s({},c,{decoding:"async",loading:r,src:i?t:void 0,"data-src":i?void 0:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,alt:o}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,o=l(e,y);const i=o.sizes||(null==t?void 0:t.sizes),c=n.createElement(v,s({},o,t,{sizes:i,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:o}=e;return n.createElement("source",{key:t+"-"+o+"-"+a,type:o,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:i})})),c):c};var E;v.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},b.displayName="Picture",b.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const w=["fallback"],x=function(e){let{fallback:t}=e,a=l(e,w);return t?n.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},a))};x.displayName="Placeholder",x.propTypes={fallback:r.string,sources:null==(E=b.propTypes)?void 0:E.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return n.createElement(n.Fragment,null,n.createElement(b,s({},e)),n.createElement("noscript",null,n.createElement(b,s({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],L=["style","className"],N=e=>e.replace(/\n/g,""),I=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),s=3;s<n;s++)r[s-3]=arguments[s];return e.alt||""===e.alt?o().string.apply(o(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:o().object.isRequired,alt:I},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],_=["style","className"],j=new Set;let q,O;const M=function(e){let{as:t="div",image:r,style:o,backgroundColor:c,className:d,class:m,onStartLoad:g,onLoad:p,onError:f}=e,h=l(e,T);const{width:y,height:v,layout:b}=r,E=u(y,v,b),{style:w,className:x}=E,k=l(E,_),C=(0,n.useRef)(),L=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);m&&(d=m);const N=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,y,v);return(0,n.useEffect)((()=>{q||(q=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&i())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(L);if(O&&j.has(L))return;let t,n;return q.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;C.current&&(C.current.innerHTML=a(s({isLoading:!0,isLoaded:j.has(L),image:r},h)),j.has(L)||(t=requestAnimationFrame((()=>{C.current&&(n=l(C.current,L,j,o,g,p,f))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{j.has(L)&&O&&(C.current.innerHTML=O(s({isLoading:j.has(L),isLoaded:j.has(L),image:r},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[r]),(0,n.createElement)(t,s({},k,{style:s({},w,o,{backgroundColor:c}),className:x+(d?" "+d:""),ref:C,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},R=(0,n.memo)((function(e){return e.image?(0,n.createElement)(M,e):null}));R.propTypes=S,R.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function Z(e){return function(t){let{src:a,__imageData:r,__error:o}=t,i=l(t,P);return o&&console.warn(o),r?n.createElement(e,s({image:r},i)):(console.warn("Image not loaded",a),null)}}const z=Z((function(e){let{as:t="div",className:a,class:r,style:o,image:i,loading:c="lazy",imgClassName:g,imgStyle:p,backgroundColor:h,objectFit:y,objectPosition:v}=e,b=l(e,C);if(!i)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),p=s({objectFit:y,objectPosition:v,backgroundColor:h},p);const{width:E,height:w,layout:I,images:S,placeholder:T,backgroundColor:_}=i,j=u(E,w,I),{style:q,className:O}=j,M=l(j,L),R={fallback:void 0,sources:[]};return S.fallback&&(R.fallback=s({},S.fallback,{srcSet:S.fallback.srcSet?N(S.fallback.srcSet):void 0})),S.sources&&(R.sources=S.sources.map((e=>s({},e,{srcSet:N(e.srcSet)})))),n.createElement(t,s({},M,{style:s({},q,o,{backgroundColor:h}),className:O+(a?" "+a:"")}),n.createElement(f,{layout:I,width:E,height:w},n.createElement(x,s({},m(T,!1,I,E,w,_,y,v))),n.createElement(k,s({"data-gatsby-image-ssr":"",className:g},b,d("eager"===c,!1,R,c,p)))))})),A=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),F={src:o().string.isRequired,alt:I,width:A,height:A,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};z.displayName="StaticImage",z.propTypes=F;const U=Z(R);U.displayName="StaticImage",U.propTypes=F},8718:function(e,t,a){var n=a(1151),r=a(7294),o=a(275),s=a(644);const l=function(e){let{index:t=0,className:a="",...l}=e;const i=Object.assign({div:"div"},(0,n.ah)());return l.frontmatter?r.createElement(i.div,{className:a,id:""+l.frontmatter.title.replace(" ","_").toLowerCase()},r.createElement(o.Z,{featuredImage:l.frontmatter.featuredImage}),r.createElement(s.Z,{title:l.frontmatter.title,description:l.frontmatter.description,sub:l.frontmatter.sub})):null};function i(e){return r.createElement(r.Fragment)}t.Z=function(e){return void 0===e&&(e={}),r.createElement(l,e,r.createElement(i,e))}},275:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(8032);function o(e){let{featuredImage:t}=e;if(!t)return null;const a=(0,r.c)(t.childImageSharp.gatsbyImageData),o=(0,n.useMemo)((()=>{const e=Math.floor(46*Math.random())-45;return(e<0?"-":"")+"rotate-"+Math.abs(e)}),[]);return console.log(o),n.createElement("div",{className:"m-2 md:mx-5 max-w-940 transform "+o},n.createElement(r.G,{image:a,alt:"alt",className:"rounded transform "+o}))}},644:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294);function r(e){let{title:t,description:a,sub:r}=e;return n.createElement("div",{className:"mx-2 mb-8 md:mx-5 w-fit"},n.createElement("div",{className:"text-5xl font-extralight"},t),n.createElement("div",{className:"text-xl"},a),r&&n.createElement("div",{className:"text-lg"},r))}},8607:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(4160);function o(){return n.createElement("div",{className:"p-2 flex flex-col md:flex-row md:p-5 md:sticky top-0 z-50 bg-white"},n.createElement("div",{className:"flex flex-col md:flex-row md:items-center"},n.createElement(r.rU,{to:"/"},"about"),n.createElement(r.rU,{to:"/photography",className:"md:m-5"},"photography"),n.createElement(r.rU,{to:"/software-development"},"software development")),n.createElement("div",{className:"flex flex-col md:flex-row md:items-center xl:hidden"},n.createElement("a",{href:(0,r.dq)("Joshua_Katz_Resume.pdf"),download:!0,className:"md:m-5"},"résumé"),n.createElement("a",{href:"https://github.com/joshuaskatz",target:"_blank",rel:"noopenner noreferrer"},"github")))}},316:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(4593),o=a(4160);const s=()=>(0,o.K2)("1946181227").site.siteMetadata;function l(e){let{children:t}=e;const a=s(),{title:o,description:l,siteUrl:i,image:c}=a,u={title:o,description:l,image:c,url:i},d=c||"/public/header.jpg";return n.createElement(r.q,null,n.createElement("title",null,u.title),n.createElement("meta",{name:"description",content:u.description}),n.createElement("meta",{name:"image",content:d}),n.createElement("meta",{name:"og:card",content:"summary_large_image"}),n.createElement("meta",{name:"og:title",content:u.title}),n.createElement("meta",{name:"og:url",content:u.url}),n.createElement("meta",{name:"og:description",content:u.description}),n.createElement("meta",{name:"og:image",content:d}),n.createElement("meta",{"http-equiv":"cache-control",content:"no-cache"}),n.createElement("meta",{"http-equiv":"expires",content:"0"}),n.createElement("meta",{"http-equiv":"pragma",content:"no-cache"}),t)}},8521:function(e,t,a){a.r(t),a.d(t,{Head:function(){return g},default:function(){return m},shortcodes:function(){return d}});var n=a(7294),r=a(4160),o=a(1151),s=a(8718),l=a(275),i=a(644),c=a(8607),u=a(316);const d={Link:r.rU,ImageText:i.Z,Image:l.Z};var m=()=>{const e=(0,r.K2)("2643098246").mdx,t=(0,n.useMemo)((()=>n.createElement(s.Z,Object.assign({className:"flex flex-col lg:flex-row"},e))),[e]);return n.createElement("div",null,n.createElement(c.Z,null),n.createElement(o.Zo,{components:d},t))};const g=()=>n.createElement(u.Z,null)},1151:function(e,t,a){a.d(t,{Zo:function(){return l},ah:function(){return o}});var n=a(7294);const r=n.createContext({});function o(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function l({components:e,children:t,disableParentContext:a}){let l;return l=a?"function"==typeof e?e({}):e||s:o(e),n.createElement(r.Provider,{value:l},t)}}}]);
//# sourceMappingURL=commons-f93d4c536299da394535.js.map