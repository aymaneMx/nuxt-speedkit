(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{124:function(t,e,r){"use strict";(function(t){var n=r(15),o=r(130),c=r(9),l=r(125),f=r(131),d=r(10);const h=new f.a;function m({type:t}){return t===Object(l.a)("webp")}e.a={props:{sources:{type:Array,default:()=>[]},preload:{type:Array,default:()=>[]},alt:{type:String,default:()=>""},title:{type:String,default:()=>""},crossorigin:{type:String,default(){return this.$crossorigin}}},data(){return{imageSources:this.sources,inProgress:!0,visible:!1,style:{}}},head(){let data={};if(this.preload.length&&(this.isCritical||this.visible)){const source=this.getPreloadSource();h.getPromise(Object(d.a)(source.srcset),((e,r)=>{Object(o.a)()?data={link:[Object(c.b)(source,this.crossorigin,e)]}:function({srcset:e,sizes:r},n,o=(()=>{})){{const img=new t.Image;img.onload=o,img.crossorigin=n,img.sizes=r,img.srcset=e}}(source,this.crossorigin,e)})).then((t=>this.onPreload(t)))}return data},watch:{sources(){this.imageSources.length||(this.imageSources=this.sources)}},mounted(){Object(n.a)(this.$el,(t=>{this.visible=!0,this.$emit("enter",t)}))},destroyed(){Object(n.b)(this.$el)},methods:{onPreload(t){this.style.backgroundImage=`url(${this.$refs.image.currentSrc})`,this.imageSources=this.preload,this.inProgress=!1,this.$emit("load")},getPreloadSource(){const t=function(t){return t.filter((source=>!m(source)||m(source)&&o.b))}(this.preload),e=Array.from(new Set(t.map((({type:t})=>t)))).shift(),{srcset:r,sizes:n}=t.filter((source=>source.type===e)).reduce(((t,source)=>(t.srcset.push(source.srcset),t.sizes.push(source.sizes),t)),{srcset:[],sizes:[]});return{srcset:r.join(", "),sizes:n.join(", "),type:e}}}}}).call(this,r(6))},125:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));const n={webp:"image/webp",jpg:"image/jpeg",png:"image/png"};function o(t){return n[String(t)]}},126:function(t,e,r){var content=r(133);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("061ec49c",content,!0,{sourceMap:!1})},127:function(t,e,r){var content=r(135);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("3bcf2470",content,!0,{sourceMap:!1})},130:function(t,e,r){"use strict";(function(t){r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return c}));var n=r(13);const o=function(){const e=t.document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")}();function c(){if(Object(n.a)())return!1;{const e=t.document.createElement("link").relList;return function(element,e){let r={};t.document&&(r=t.document.createElement(element));if(e in r)return!0;return!1}("link","imageSrcset")&&!!(e&&e.supports&&e.supports("preload"))}}}).call(this,r(6))},131:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(19);class o{constructor(){this.map=new Map}getPromise(t,e){if(!this.map.has(t)){const r=new n.a;this.map.set(t,r.promise),e(r.resolve,r.reject)}return this.map.get(t)}}},132:function(t,e,r){"use strict";r(126)},133:function(t,e,r){var n=r(4)(!1);n.push([t.i,"picture[data-v-47bc5e0b]{display:block;height:inherit;overflow:hidden;background-size:cover}picture img[data-v-47bc5e0b]{display:block;width:100%;height:100%;filter:blur(0);transition-duration:.35s;transition-property:filter,transform;transform:scale(1);-o-object-fit:cover;object-fit:cover}picture img.in-progress[data-v-47bc5e0b]{filter:blur(10px);transform:scale(1.1)}",""]),t.exports=n},134:function(t,e,r){"use strict";r(127)},135:function(t,e,r){var n=r(4)(!1);n.push([t.i,".nuxt-speedkit__noscript[data-v-7b49c021]{display:block;height:inherit}",""]),t.exports=n},138:function(t,e,r){"use strict";var n=r(124).a,o=(r(132),r(2)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("picture",{style:t.style},[t._l(t.imageSources,(function(source,t){return r("source",{key:t,attrs:{srcset:source.dataURI||source.srcset||source.url,media:source.media,sizes:source.sizes,type:source.type}})})),t._v(" "),r("img",{ref:"image",class:{"in-progress":t.inProgress},attrs:{loading:"lazy",alt:t.alt,title:t.title,crossorigin:t.crossorigin}})],2)}),[],!1,null,"47bc5e0b",null);e.a=component.exports},139:function(t,e,r){"use strict";r(134);var n=r(2),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var t=this,e=t.$createElement;t._self._c;return t._t("default")},staticRenderFns:[]}})}),[],!1,null,"7b49c021",null);e.a=component.exports},140:function(t,e,r){var content=r(147);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("546f0ade",content,!0,{sourceMap:!1})},144:function(t,e,r){"use strict";function n(t,e){const{media:r,breakpoint:n}=e.min,{width:o}=e.max;return{size:e,media:r,breakpoint:n,width:o,url:t}}function o(t){const e=Array.from(t).sort(((a,b)=>a.width>b.width?1:-1)),r=e.shift();return{min:r,max:e.pop()||r}}function c(t){return t.sort(((a,b)=>a.width<b.width?1:-1))}var l=r(125),f=r(9),d=r(138),h=r(139);function m(t,e){m=function(t,e){return new c(t,void 0,e)};var r=v(RegExp),n=RegExp.prototype,o=new WeakMap;function c(t,e,n){var c=r.call(this,t,e);return o.set(c,n||o.get(t)),c}function l(t,e){var g=o.get(e);return Object.keys(g).reduce((function(e,r){return e[r]=t[g[r]],e}),Object.create(null))}return y(c,r),c.prototype.exec=function(t){var e=n.exec.call(this,t);return e&&(e.groups=l(e,this)),e},c.prototype[Symbol.replace]=function(t,e){if("string"==typeof e){var r=o.get(this);return n[Symbol.replace].call(this,t,e.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+r[e]})))}if("function"==typeof e){var c=this;return n[Symbol.replace].call(this,t,(function(){var t=[];return t.push.apply(t,arguments),"object"!=typeof t[t.length-1]&&t.push(l(t,c)),e.apply(this,t)}))}return n[Symbol.replace].call(this,t,e)},m.apply(this,arguments)}function y(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}function v(t){var e="function"==typeof Map?new Map:void 0;return(v=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return _(t,arguments,S(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),x(n,t)})(t)}function _(t,e,r){return(_=w()?Reflect.construct:function(t,e,r){var a=[null];a.push.apply(a,e);var n=new(Function.bind.apply(t,a));return r&&x(n,r.prototype),n}).apply(null,arguments)}function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function x(t,p){return(x=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t})(t,p)}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var j={components:{CustomPicture:d.a,CustomNoScript:h.a},props:{sources:{type:Array,default:()=>[]},alt:{type:String,default:null},title:{type:String,default:null},crossorigin:{type:String,default(){return this.$crossorigin}}},data(){return{placeholders:[],resolvedSources:this.getSources()}},async fetch(){this.placeholders=await this.fetchMeta()},head:()=>({noscript:[Object(f.c)(".nuxt-speedkit__experimental__speedkit-picture > noscript.nuxt-speedkit__noscript + picture { display:none; } .nuxt-speedkit__experimental__speedkit-picture > noscript.nuxt-speedkit__noscript > picture > img { filter: none; }",!0)],__dangerouslyDisableSanitizers:["noscript"]}),computed:{hasSlot(){return this.$slots.caption}},watch:{async sources(){this.placeholders=await this.fetchMeta()}},methods:{async fetchMeta(){return t=this.sources,e=({src:t,sizes:e})=>Promise.all([this.$img(t,{width:30}),this.$img.sizes(t,e)]),Promise.all(t.map((async source=>{const[{url:t},r]=await e(source);return n(t,o(r))}))).then(c);var t,e},getSources(){return(t=this.sources,Array.from(new Set(["webp"].concat(t.map((source=>function(t){const e=t.match(m(/\.(png|jpe?g)/i,{ext:1}));return e&&e.groups.ext}(source.src)||"jpg"))).map((t=>"jpeg"===t?"jpg":t))))).map((t=>this.sources.map((source=>[source])).map((([{src:e,sizes:r}],n)=>{const o=this.$img.sizes(e,r,{format:t}),c=o.sort(((a,b)=>a.width>b.width?-1:1));return{media:n<this.sources.length-1&&`(min-width: ${o[o.length-1].width}px)`,srcset:c.map((({width:t,url:e})=>t?`${e} ${t}w`:e)).join(", "),sizes:c.map((({width:t,media:e})=>e?`${e} ${t}px`:`${t}px`)).join(", "),type:Object(l.a)(o[0].format)}})))).flat();var t}}},k=(r(146),r(2)),component=Object(k.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{staticClass:"nuxt-speedkit__experimental__speedkit-picture"},[r("custom-no-script",[r("custom-picture",{attrs:{sources:t.resolvedSources,alt:t.alt,title:t.title,crossorigin:t.crossorigin}})],1),t._v(" "),r("custom-picture",t._g({attrs:{sources:t.placeholders,preload:t.resolvedSources,alt:t.alt,title:t.title,crossorigin:t.crossorigin}},t.$listeners)),t._v(" "),t.hasSlot?r("figcaption",[t._t("caption")],2):t._e()],1)}),[],!1,null,"386e2f9d",null);e.a=component.exports},146:function(t,e,r){"use strict";r(140)},147:function(t,e,r){var n=r(4)(!1);n.push([t.i,".nuxt-speedkit__experimental__speedkit-picture[data-v-386e2f9d]{width:100%;height:inherit;margin:0}",""]),t.exports=n},148:function(t,e,r){var content=r(165);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("e7d5ea6e",content,!0,{sourceMap:!1})},164:function(t,e,r){"use strict";r(148)},165:function(t,e,r){var n=r(4)(!1);n.push([t.i,".component-stage[data-v-19b3fba1]{position:relative;height:100vh;max-height:100%;margin:0;overflow:hidden}.component-stage .claim[data-v-19b3fba1]{display:block;font-size:25px;line-height:50px;text-transform:none}.component-stage .headline[data-v-19b3fba1]{display:block;font-size:30px;line-height:60px}@media (min-width:768px){.component-stage .headline[data-v-19b3fba1]{font-size:40px;line-height:80px}}.component-stage h1[data-v-19b3fba1]{position:absolute;bottom:0;left:0;width:100%;padding:20px 0;margin:0;color:#fff;text-align:center;background:rgba(0,0,0,.4)}@media (min-width:768px){.component-stage h1[data-v-19b3fba1]{position:absolute;top:50px;right:0;bottom:auto;left:auto;width:400px}}",""]),t.exports=n},182:function(t,e,r){"use strict";r.r(e);var n={components:{SpeedkitPicture:r(144).a},props:{picture:{type:Object,default:()=>({})},headline:{type:String,default:()=>"Headline"},claim:{type:String,default:()=>"Claim"}}},o=(r(164),r(2)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component-stage"},[t.picture?r("speedkit-picture",t._b({},"speedkit-picture",t.picture,!1)):t._e(),t._v(" "),r("h1",{directives:[{name:"font",rawName:"v-font",value:[t.$getFont("Montserrat Alternates",700,"normal",{selector:".headline"}),t.$getFont("Merriweather",300,"italic",{selector:".claim"})],expression:"[\n      $getFont('Montserrat Alternates', 700, 'normal', {selector: '.headline'}),\n      $getFont('Merriweather', 300, 'italic', {selector: '.claim'})\n    ]"}]},[r("span",{staticClass:"headline"},[t._v(t._s(t.headline))]),t._v(" "),r("span",{staticClass:"claim"},[t._v(t._s(t.claim))])])],1)}),[],!1,null,"19b3fba1",null);e.default=component.exports}}]);