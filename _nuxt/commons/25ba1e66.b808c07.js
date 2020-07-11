(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{217:function(t,e,r){"use strict";(function(t){t.IntersectionObserver=t.IntersectionObserver||function(){function t(){}var e=t.prototype;return e.observe=function(){},e.unobserve=function(){},t}(),e.a={abstract:!0,props:{root:{type:t.HTMLElement,default:function(){return null}},rootMargin:{type:String,default:function(){return"0px"}},threshold:{type:Array,default:function(){return[0]}}},created:function(){var t,e=this;if(!this.$attrs.critical||!this.$options.critical){var r={root:(t=this).root,rootMargin:t.rootMargin,threshold:t.threshold};this.observer=new IntersectionObserver((function(t){var r=t[0];return e.onIntersect(r)}),r)}},mounted:function(){this.observer&&this.observer.observe(this.$el)},destroyed:function(){this.observer&&this.observer.disconnect()},methods:{onIntersect:function(t){t.isIntersecting&&(this.observer.unobserve(this.$el),this.triggerEnter())},triggerEnter:function(t){this.$emit("enter",t)}},render:function(){try{return this.$slots.default[0]}catch(t){throw new Error("IntersectionObserver.vue can only render one, and exactly one child component.")}}}}).call(this,r(23))},221:function(t,e,r){var content=r(229);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("80409e3c",content,!0,{sourceMap:!1})},223:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(58);function n(t){return[].concat(t).sort((function(a,b){return a.density-b.density||a.width-b.width}))}},224:function(t,e,r){"use strict";var n=r(217).a,o=r(22),component=Object(o.a)(n,void 0,void 0,!1,null,null,null);e.a=component.exports},225:function(t,e,r){"use strict";r.r(e);r(9),r(31);var n=r(6);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l=new Map;function f(t){if("undefined"==typeof IntersectionObserver)return null;var e=JSON.stringify(t);if(l.has(e))return l.get(e);var r=new IntersectionObserver((function(t){t.forEach((function(t){(t.isIntersecting||t.intersectionRatio>0)&&t.target.hydrate&&t.target.hydrate()}))}),t);return l.set(e,r),r}function h(t,e){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){o(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({render:function(e){var r=this.$el?this.$el.tagName:"div";return this.$el||t._resolve(),e(r)}},e)}function d(component){var t,e=new Promise((function(e){t=e}));return e._resolve=function(){t("function"==typeof component?component():component)},e}var m="undefined"==typeof window;Boolean,Boolean,Boolean,Boolean,Boolean;var v=r(226),y=r.n(v),w=r(224),O=(r(227),r(32),r(33),r(223)),_=new Map;function x(t,e){return Array.isArray(t)?function(t,e){return j(Object(O.a)(t)[0].url,e)}(t,e):j(t,e)}function j(t,e){return $.apply(this,arguments)}function $(){return($=Object(n.a)(regeneratorRuntime.mark((function t(e,r){var n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(_.has(e)){t.next=7;break}return t.next=3,r(e);case 3:n=t.sent,o=n.width,c=n.height,_.set(e,{width:o,height:c});case 7:return t.abrupt("return",_.get(e));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var I=r(22),S=Object(I.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{inlineTemplate:{render:function(){var t=this.$createElement;this._self._c;return this._t("default")},staticRenderFns:[]}})}),[],!1,null,null,null).exports,k={components:{IntersectionObserver:w.a,CustomNoScript:S,CustomImage:function(component){if(m)return component;var t=d(component),e=h(t);return function(){return{component:t,delay:0,loading:e}}}((function(){return r.e(0).then(r.bind(null,277))}))},props:{src:{type:String,default:function(){return null}},srcset:{type:Array,default:function(){return null}},seo:{type:Boolean,default:function(){return!0}}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t.src||t.srcset,t.$getImageSizeFromUrl);case 2:r=e.sent,t.width=r.width,t.height=r.height;case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{width:0,height:0,lazy:{src:null,srcset:null}}},computed:{preparedSrcset:function(){return y.a.stringify(Object(O.a)(this.srcset||[]))||null},hasSlot:function(){return this.$slots.caption}},created:function(){},methods:{load:function(){this.lazy.src=this.src,this.lazy.srcset=this.srcset},onEnter:function(){this.load()}}},E=(r(228),Object(I.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("intersection-observer",{on:{enter:t.onEnter}},[r("figure",[t._t("default",[r("custom-image",t._b({},"custom-image",Object.assign({},t.$attrs,{width:t.width,height:t.height,src:t.src,srcset:t.preparedSrcset}),!1))]),t._v(" "),r("custom-no-script",[r("custom-image",t._b({},"custom-image",Object.assign({},t.$attrs,{width:t.width,height:t.height,src:t.src,srcset:t.preparedSrcset}),!1))],1),t._v(" "),t.hasSlot?r("figcaption",[t._t("caption")],2):t._e()],2)])}),[],!1,null,"7bea74bb",null));e.default=E.exports},226:function(t,e,r){"use strict";const n=/^\d+$/;e.parse=t=>{return(e=t.split(",").map(t=>{const e={};return t.trim().split(/\s+/).forEach((element,t)=>{if(0===t)return void(e.url=element);const r=element.slice(0,element.length-1),o=element[element.length-1],c=parseInt(r,10),l=parseFloat(r);if("w"===o&&n.test(r))e.width=c;else if("h"===o&&n.test(r))e.height=c;else{if("x"!==o||Number.isNaN(l))throw new Error("Invalid srcset descriptor: "+element);e.density=l}}),e})).sort().filter((element,t)=>JSON.stringify(element)!==JSON.stringify(e[t-1]));var e},e.stringify=t=>[...new Set(t.map(element=>{if(!element.url)throw new Error("URL is required");const t=[element.url];return element.width&&t.push(element.width+"w"),element.height&&t.push(element.height+"h"),element.density&&t.push(element.density+"x"),t.join(" ")}))].join(", ")},227:function(t,e,r){"use strict";var n=r(155),o=r(156);t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},228:function(t,e,r){"use strict";var n=r(221);r.n(n).a},229:function(t,e,r){(e=r(56)(!1)).push([t.i,"figure[data-v-7bea74bb]{margin:0}",""]),t.exports=e},234:function(t,e,r){"use strict";r.r(e);r(16);var n=r(263),o=r.n(n);function c(t){return t=t.map((function(source){return source.media=source.media||"all",source})),o()(t,"media").reverse()}var l=r(277),f=r(226),h=r.n(f),d=r(223),m={props:{srcset:{type:Array,default:function(){return null}}},computed:{preparedSrcset:function(){return h.a.stringify(Object(d.a)(this.srcset||[]))||null}}},v=(r(267),r(22)),y=Object(v.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("source",this._b({attrs:{srcset:this.preparedSrcset}},"source",this.$attrs,!1))}),[],!1,null,"61ed09b6",null).exports,w=r(225),O={components:{CustomImage:l.default,CustomSource:y,LazyImage:w.default},props:{sources:{type:Array,default:function(){return[]}}},computed:{fallbackImage:function(){var t=c(this.sources)[0];return{src:t.src,srcset:t.srcset}},sortedSources:function(){return t=c(this.sources),e="image/webp",t.sort((function(a,b){return a.media===b.media&&a.type===e?-1:null}));var t,e}}},_=(r(269),Object(v.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("lazy-image",t._b({attrs:{src:t.fallbackImage.src,srcset:t.fallbackImage.srcset},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.width,o=e.height;return[r("picture",[t._l(t.sortedSources,(function(source,e){return r("custom-source",t._b({key:e},"custom-source",source,!1))})),t._v(" "),r("custom-image",t._b({attrs:{src:t.fallbackImage.src,srcset:t.fallbackImage.srcset,width:n,height:o}},"custom-image",t.$attrs,!1))],2)]}},{key:"caption",fn:function(){return[t._t("caption")]},proxy:!0}],null,!0)},"lazy-image",t.$attrs,!1))}),[],!1,null,"4fc46199",null));e.default=_.exports},246:function(t,e,r){var content=r(266);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("39a00948",content,!0,{sourceMap:!1})},247:function(t,e,r){var content=r(268);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("03907b63",content,!0,{sourceMap:!1})},248:function(t,e,r){var content=r(270);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("5d244eae",content,!0,{sourceMap:!1})},263:function(t,e,r){var n=r(264),o=["blank","all","minWidth","minHeight","maxWidth","maxHeight","print"];function c(t){return function(a,b){var e=a.sortVal,r=b.sortVal,n=a.item.__media,o=b.item.__media;if(t=void 0!==t&&t,e===r){if(n.match(/print/))return 1;if(o.match(/print/))return-1}return t?r-e:e-r}}function l(t,e,r){switch(function(t,e,r){return t&&t.length&&"string"!=typeof t?("object"!==e||r&&"string"==typeof r)&&function(t,e,r){for(var n=!0,i=0,o=t.length;i<o;i++)if(typeof t[i]!==e||r&&!t[i].hasOwnProperty(r)){n=!1;break}return n}(t,e,r)?"all":"some":"none"}(t,e,r)){case"none":return[];case"some":return t}var l=function(){for(var t={},i=0,e=o.length;i<e;i++)t[o[i]]=[];return t}();return t=function(t,e,r){for(var o=[],c={},i=0,l=t.length;i<l;i++)"string"===e?c=n({},{__media:t[i]}):(c=n({},t[i])).__media=t[i][r],o.push(c);return o}(t,e,r),function(t,e){for(var i=0,r=e.length;i<r;i++){var n=e[i],o=n.__media,c="blank",l=o.match(/\d+/g);o.match(/min-width/)?c="minWidth":o.match(/min-height/)?c="minHeight":o.match(/max-width/)?c="maxWidth":o.match(/max-height/)?c="maxHeight":o.match(/print/)?c="print":o.match(/all/)&&(c="all"),t[c].push({item:n,sortVal:l?l[0]:0})}}(l,t),function(t){var e;for(var r in t)t.hasOwnProperty(r)&&(e=c(!1),"maxWidth"!==r&&"maxHeight"!==r||(e=c(!0)),t[r].sort(e))}(l),function(t,e,r){var n=[];function c(t){for(var r,i=0,o=t.length;i<o;i++)"string"===e?r=t[i].item.__media:delete(r=t[i].item).__media,n.push(r)}for(var i=0,l=o.length;i<l;i++)c(t[o[i]]);return n}(l,e)}t.exports=function(t,e){return t?e?l(t,"object",e):l(t,"string"):[]}},264:function(t,e){t.exports=function(){for(var t={},i=0;i<arguments.length;i++){var source=arguments[i];for(var e in source)r.call(source,e)&&(t[e]=source[e])}return t};var r=Object.prototype.hasOwnProperty},265:function(t,e,r){"use strict";var n=r(246);r.n(n).a},266:function(t,e,r){(e=r(56)(!1)).push([t.i,"img[data-v-be5dc6da]{display:block}",""]),t.exports=e},267:function(t,e,r){"use strict";var n=r(247);r.n(n).a},268:function(t,e,r){(e=r(56)(!1)).push([t.i,"",""]),t.exports=e},269:function(t,e,r){"use strict";var n=r(248);r.n(n).a},270:function(t,e,r){(e=r(56)(!1)).push([t.i,"",""]),t.exports=e},277:function(t,e,r){"use strict";r.r(e);var n={computed:{loading:function(){return this.isCritical?"eager":"lazy"}},methods:{onLoad:function(t){this.$emit("load",t.target)}}},o=(r(265),r(22)),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("img",{attrs:{loading:this.loading},on:{load:this.onLoad}})}),[],!1,null,"be5dc6da",null);e.default=component.exports}}]);