(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{282:function(t,e,n){var content=n(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("6ff4a064",content,!0,{sourceMap:!1})},283:function(t,e,n){var content=n(290);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("40ede033",content,!0,{sourceMap:!1})},284:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c}));var o;n(7);function r(){return o||(o=new Promise((function(e){var img=new t.Image;img.onload=function(){return e(!0)},img.onerror=function(){return e(!1)},img.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"}))),o}function c(element,e){var n={};return t.document&&(n=t.document.createElement(element)),e in n}}).call(this,n(12))},285:function(t,e,n){var content=n(292);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("64109a53",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";var o=n(14),r=n(4),c=n(57),l=n(16),h=n(13),d=n(35),A=n(117),m=n(79),f=n(5),w=n(56),E=n(115).f,v=n(44).f,x=n(17).f,B=n(188).trim,C=r.Number,S=C.prototype,j="Number"==d(w(S)),Q=function(t){var e,n,o,r,c,l,h,code,d=m(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=B(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+d}for(l=(c=d.slice(2)).length,h=0;h<l;h++)if((code=c.charCodeAt(h))<48||code>r)return NaN;return parseInt(c,o)}return+d};if(c("Number",!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var y,I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(j?f((function(){S.valueOf.call(n)})):"Number"!=d(n))?A(new C(Q(e)),n,I):Q(e)},H=o?E(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;H.length>M;M++)h(C,y=H[M])&&!h(I,y)&&x(I,y,v(C,y));I.prototype=S,S.constructor=I,l(r,"Number",I)}},287:function(t,e,n){"use strict";n(282)},288:function(t,e,n){(e=n(25)(!1)).push([t.i,'.nuxt-speedkit__image-container[data-v-cf96f8a0]{position:relative;width:100%;height:100%;margin:0}.nuxt-speedkit__image-container>span.loading[data-v-cf96f8a0]{position:absolute;top:50%;left:50%;display:block;width:10%;transform:translate(-50%,-50%)}.nuxt-speedkit__image-container>span.loading[data-v-cf96f8a0]:before{box-sizing:border-box;display:block;padding-top:100%;content:""}.nuxt-speedkit__image-container>span.loading[data-v-cf96f8a0]:after{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box;display:block;content:"";border:3px solid #ccc;border-top-color:#07d;border-radius:50%;-webkit-animation-name:spinner;animation-name:spinner;-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-delay:.35s;animation-delay:.35s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;will-change:transform}',""]),t.exports=e},289:function(t,e,n){"use strict";n(283)},290:function(t,e,n){(e=n(25)(!1)).push([t.i,".nuxt-speedkit__noscript[data-v-dd0bafc0]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=e},291:function(t,e,n){"use strict";n(285)},292:function(t,e,n){(e=n(25)(!1)).push([t.i,".nuxt-speedkit__custom-image[data-v-f068eaf6]{width:100%;height:100%;vertical-align:middle;-o-object-fit:cover;object-fit:cover}",""]),t.exports=e},293:function(t,e,n){"use strict";var o={props:{loading:{type:Boolean,default:function(){return!1}}},computed:{hasSlot:function(){return this.$slots.caption}}},r=(n(287),n(8)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{staticClass:"nuxt-speedkit__image-container"},[this._t("default"),this._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"loading"}),this._v(" "),this.hasSlot?e("figcaption",[this._t("caption")],2):this._e()],2)}),[],!1,null,"cf96f8a0",null);e.a=component.exports},294:function(t,e,n){"use strict";n(116),n(29);var o=n(3),r=n(81),c=n(284),l=n(296);var h={props:{preload:{type:Array,default:function(){return null}},crossorigin:{type:String,default:function(){return"anonymous"}}},fetchOnServer:!1,data:function(){return{visible:this.isCritical,preloaded:!1,webpSupport:!1}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!1,e.t0){e.next=5;break}return e.next=4,Object(c.b)();case 4:e.t0=e.sent;case 5:t.webpSupport=e.t0;case 6:case"end":return e.stop()}}),e)})))()},head:function(){var t,e=this;return this.preload&&this.visible&&this.preload&&this.preload.length?Object(l.a)((t=this.preload,this.webpSupport&&t.find((function(source){return"image/webp"===source.type}))||t.find((function(source){return"image/webp"!==source.type}))),(function(){return e.onPreload()}),this.crossorigin):{}},mounted:function(){var t=this;Object(r.a)(this.$el,(function(){t.visible=!0}))},destroyed:function(){Object(r.b)(this.$el)},methods:{onLoad:function(t){this.preloaded&&this.$emit("load",t.target)},onPreload:function(){this.preloaded=!0,this.$emit("preload")}}},d=(n(291),n(8)),component=Object(d.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"nuxt-speedkit__custom-image",attrs:{loading:"lazy",crossorigin:this.crossorigin},on:{load:this.onLoad}})}),[],!1,null,"f068eaf6",null);e.a=component.exports},295:function(t,e,n){"use strict";n(289);var o=n(8),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var t=this.$createElement;this._self._c;return this._t("default")},staticRenderFns:[]}})}),[],!1,null,"dd0bafc0",null);e.a=component.exports},296:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));n(7),n(20),n(22),n(187),n(18),n(80);var o=n(118),r=function(){function t(){this.map=new Map}return t.prototype.getEntry=function(t){return this.map.has(t)||this.map.set(t,new o.a),this.map.get(t)},t}(),c=n(58),l=n(284),h=new r;function d(t,e,n){var o=Object(c.a)(t.srcset),r=h.getEntry(o);return r.promise.then((function(){return e()})),Object(l.a)("link","imageSrcset")?{link:[A(t,o,r.resolve,n)]}:function(t,e,n){var img=new Image;img.onload=e,img.crossorigin=n,img.srcset=t.srcset}(t,r.resolve,n)}function A(t,e,n,o){return{hid:e,rel:"preload",as:"image",crossorigin:o,callback:n,imageSrcset:t.srcset}}},297:function(t,e,n){"use strict";n(286);var o=n(293),r=n(295),c=n(294),l={components:{ImageContainer:o.a,CustomNoScript:r.a,CustomImage:c.a},props:{sources:{type:Array,default:function(){return[]}},placeholder:{type:Object,default:function(){return{}}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},width:{type:Number,default:function(){return null}},height:{type:Number,default:function(){return null}},crossorigin:{type:String,default:function(){return"anonymous"}}},data:function(){return{preloadedSources:this.noScript&&this.sources||[],loading:!1,webpSupport:!1}},computed:{preparedPlaceholder:function(){return Object.assign({base64:void 0,url:void 0},this.placeholder)},hasSlot:function(){return this.$slots.caption}},mounted:function(){this.loading=!0},methods:{onLoad:function(t){this.loading=!1,this.$emit("load")},onPreload:function(){this.preloadedSources=this.sources}}},h=n(8),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("image-container",{staticClass:"nuxt-speedkit__speedkit-picture",attrs:{loading:t.loading},scopedSlots:t._u([{key:"default",fn:function(){return[n("picture",[t._l(t.preloadedSources,(function(source,e){return n("source",t._b({key:e},"source",source,!1))})),t._v(" "),n("custom-image",t._b({on:{load:t.onLoad,preload:t.onPreload}},"custom-image",{src:t.preparedPlaceholder.base64,preload:t.sources,width:t.width,height:t.height,alt:t.alt,title:t.title,crossorigin:t.crossorigin},!1))],2),t._v(" "),n("custom-no-script",[n("picture",[t._l(t.sources,(function(source,e){return n("source",t._b({key:e},"source",source,!1))})),t._v(" "),n("custom-image",t._b({on:{load:t.onLoad,preload:t.onPreload}},"custom-image",{src:t.preparedPlaceholder.url,width:t.width,height:t.height,alt:t.alt,title:t.title,crossorigin:t.crossorigin},!1))],2)])]},proxy:!0},{key:"caption",fn:function(){return[t._t("caption")]},proxy:!0}],null,!0)})}),[],!1,null,null,null);e.a=component.exports},298:function(t,e,n){var o={src:n.p+"img/3bdc01d.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2400 2400'%3E%3Cpath fill='%23ab8a5c' d='M0 0h2400v2400H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23fffff4' d='M2254.7 1223.4L201.6 2254.7l2090.6 290.6z'/%3E%3Cpath fill='%23461e00' d='M1120.3 1814L-145.3 717.3l2006.2-862.5z'/%3E%3Cpath fill='%23320000' d='M14 1832.8L332.9 726.6-126.6-51.6z'/%3E%3Cpath fill='%23fbe2a8' d='M407.8 2545.3L211 1392.2l2118.8 778.1z'/%3E%3Cpath fill='%23361a05' d='M961 792.2L473.3-145.3l1425 918.7z'/%3E%3Cpath fill='%23b7b094' d='M445.3 1186l646.9-431.3 1181.2 356.2z'/%3E%3Cpath fill='%236b2500' d='M1814 1129.7l-890.6 206.2 450 412.5z'/%3E%3Cpath fill='%23f1c889' d='M2432.8-145.3L1692.2 51.6l853.1 918.7z'/%3E%3Cpath fill='%231f0900' d='M1129.7 370.3l187.5 609.4 328.1-937.5z'/%3E%3Cpath fill='%23c89662' d='M689 1317.2L679.8-61l-572-18.7z'/%3E%3Cpath fill='%23bf7d2c' d='M-145.3 2292.2L295.3 839l234.4 1706.2z'/%3E%3Cpath fill='%23eff0ce' d='M1945.3 2545.3l-984.4-375 1218.8-778.1z'/%3E%3Cpath d='M1120.3 1298.4l-112.5-290.6-65.6 525z'/%3E%3Cpath fill='%23d1902c' d='M1945.3-145.3l-815.6 421.9-778.1-422z'/%3E%3Cpath fill='%231f0300' d='M-145.3 1823.4l65.6-1003L342.2 689z'/%3E%3Cpath fill='%2384520d' d='M2217.2 1064l328.1 112.6-103.1 1153z'/%3E%3Cpath fill='%2386510f' d='M576.6 857.8l-722-984.4 450 1472z'/%3E%3Cpath fill='%23e2bb82' d='M1289 1654.7l-834.3 890.6-318.8-937.5z'/%3E%3Cpath fill='%23f7d6a7' d='M1448.4 1382.8l28.2-806.2 103 421.8z'/%3E%3Cpath fill='%23a5753d' d='M1701.6 1729.7L1907.8 989l-412.5 571.8z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:2400,width:2400,type:"jpg"}};t.exports=o.preview,t.exports=Object.assign(t.exports,o)},301:function(t,e,n){t.exports={srcSet:n.p+"img/00b4f63-480.webp 480w,"+n.p+"img/7e328ce-768.webp 768w,"+n.p+"img/ff303bf-960.webp 960w,"+n.p+"img/011a37a-1080.webp 1080w,"+n.p+"img/104d21d-1200.webp 1200w,"+n.p+"img/dd4364f-1536.webp 1536w,"+n.p+"img/13f3ee4-2160.webp 2160w,"+n.p+"img/1ab22ac-2400.webp 2400w",images:[{path:n.p+"img/00b4f63-480.webp",width:480,height:480},{path:n.p+"img/7e328ce-768.webp",width:768,height:768},{path:n.p+"img/ff303bf-960.webp",width:960,height:960},{path:n.p+"img/011a37a-1080.webp",width:1080,height:1080},{path:n.p+"img/104d21d-1200.webp",width:1200,height:1200},{path:n.p+"img/dd4364f-1536.webp",width:1536,height:1536},{path:n.p+"img/13f3ee4-2160.webp",width:2160,height:2160},{path:n.p+"img/1ab22ac-2400.webp",width:2400,height:2400}],src:n.p+"img/00b4f63-480.webp",toString:function(){return n.p+"img/00b4f63-480.webp"},placeholder:"data:image/webp;base64,UklGRv4CAABXRUJQVlA4IPICAACwDgCdASooACgAPlEij0UjoiEVXVSsOAUEoAnTK4yZe18qDX144Odt1dx7vKsbg8JfCD6r/zst3dyoHuR1e8z3yYfVHAZIEC4jOSqdWagWrP2JEH2tHObHlZac17xTvvnD9/lEBCcDXrU93rlm9nLgmFzu1uYTMheExe6V1YAA/rhRXFitIlFiUnfkaCxMB3q4+H2j7FJ+uqIBzd2FZXmGQSKbFRJ/APHJXS3+FsIrYXnwsBXhXOqsm/5NcygWAwOy58pW699xO2dmMSRnZ2N66//InVKIsra0tRGQnBnLaG/894gtodAxr77KkJOtr6TMn4+NuQi7eG1E+Z/S67/4vDlI0rgpNxQHuaRpOpl0tUXLn/CP0bt52kUlFH9Fk+38XWsI/aTUyT6uVREShMkiN7Nzi1SiDDdyUBO5YKGVuyhPFO/eFPo46LzK8W7Nwvv3zV1yi1wh4v45wKfdOIv99JRk/eIM0++mOzdLuNY6kEb7F9jYvP58Mz5JfCHXsjqg3EDcXGkXqIrHFKRAxqau7Gk0p857vRKPIL1zaOEJrhyBfIwb3cc0aq431k7OvlFnencXCs+e+5WRS5b+3DBlG7c3AdIiR+OO79Dh8wLLkTujsGEvVvHAy737PA6fM7aYX3M5Rv7H7fMOhEWFcC/RWs9MhGBpf9sWi33oTjLpccFK2HIHa6t50dviHoVKHK7BJvewCErA2qbO61QqJQ1e3vdOHyRv3dtf2JCDtQ9+cSLYVfDi8bKvsr2K+M5PKwGS32rxAB/HDnxstsvlV+m1iudHoxO/s3NcHTpXckxiK0GrrsvPMLwR7tIrRbHtX85AJJ6JtZJYRwAz/asvVFCKPDoxcnPXbvIS7Nauu1EF4ZvidXkvq4oLI74sqIABKbyl6K3ohK9Xzktqq9kbS166PveR0OOTsKXxURZI0T2YWaBW9EQwbuVS3wXSsa38568I11ZSVat1YfwFO9HYoDbB8bYfF6UB8jqtFSrPPivwwAAA",width:480,height:480}},302:function(t,e,n){t.exports={srcSet:n.p+"img/de71c67-480.webp 480w,"+n.p+"img/729de95-768.webp 768w,"+n.p+"img/b9f70ed-960.webp 960w,"+n.p+"img/0d8cbc2-1080.webp 1080w,"+n.p+"img/803a7ac-1200.webp 1200w,"+n.p+"img/5d6bf38-1536.webp 1536w,"+n.p+"img/ad67b53-2160.webp 2160w,"+n.p+"img/84a0d62-2400.webp 2400w",images:[{path:n.p+"img/de71c67-480.webp",width:480,height:480},{path:n.p+"img/729de95-768.webp",width:768,height:768},{path:n.p+"img/b9f70ed-960.webp",width:960,height:960},{path:n.p+"img/0d8cbc2-1080.webp",width:1080,height:1080},{path:n.p+"img/803a7ac-1200.webp",width:1200,height:1200},{path:n.p+"img/5d6bf38-1536.webp",width:1536,height:1536},{path:n.p+"img/ad67b53-2160.webp",width:2160,height:2160},{path:n.p+"img/84a0d62-2400.webp",width:2400,height:2400}],src:n.p+"img/de71c67-480.webp",toString:function(){return n.p+"img/de71c67-480.webp"},placeholder:"data:image/webp;base64,UklGRlgDAABXRUJQVlA4IEwDAAAQDgCdASooACgAPk0ejEQioaEXFZgoBMSgCdMoR2xI7sjVqiZQstuBzsummxubwX8Sa1izDNKVwoz/RUz/vUfsDim0At7R42LgSfd6INzWRVtjLzkthUEbyLx5q+1kdZeB3nGIBi6vPu3O4CwCEHk4QR79nPUSvngAAP756+GOs5Hd0r5vv8Lc/6iV7u8uAAZ/Sr9YDB6yB1HOWm+ZSg7bhxw6W2ddkIrCMjtHyz/UrOtqOZh5zI+F/y+uR+U4HSljRxbZbAWwMebwcikDV81VuiY3E3HjdoNeV+32aPjZA9rU++YsXzww7Ugp+r4nJetS6zFLhP//xRGjZFbFIi38G3RNZVmrJUX7y28NdbI+76ykfzeGZsR23TLLM355T+u6HjxqgiR+G+4sGhxmciK0zDC84fytRbT8pHmrKzE15x01PqJ5xSd5m0cuBgbpXIqe1030U1Tys1AGA5xNiaKlAUO6LYmkdLVVF8hWtclQbvUiqfpUI87dTwmLv8IcQuVlE5zQSuuN7MDwuX315gDrpEKQ256Be+i8TDGWya2+ZsneZS+J+95HvqYSHQsrpHj29ftNP1NZx+NPQjxvbrqWP/xLi42k7Cfnqd0EwxcTsW9ivBAnFBWc4oL5DsVO6OqHRZGOWXGcm3UIQBkvxB8qrJZ5qw8ac+UbJp5g05e6nSRT2GLvew+m6YneVGCIzLVIi3jB5C2cPa+HDs68xpbBiMsAao6t3SVSyT3CWVshNEDcJJkNChVHL4Xzz3C3rzv3N+sCitWxqdF59wYvAmSfF3kBMYFDlwE3CkBYDrC4SnpqiAH5LRVoSbcsfHHVkNHWZqKjnEOBCE79Y+M2tyGjtdvIdxEJ8UVGvKrJ7H642pNGijTAdmi9Iyv5PqnSszKI++MrdUWmPYZ4hTWCqFpf4/Sed8jWrMV+OnduLa41u4TDZWwyv9F3fT3PhGfFXdj7j5GCCr6mQEBy3hrs1sZK11OyuH9wIW3WRg3J8RgaLgus8M2++F1WTSIsu2LiFwmtVgHMg0yLcCSjQpIFeIcHvBufeLSxuQWpKVKwoMTHN5MjzCr/w2qtHSuP3Kqv3O2Y3hzgSZfEuDENNdBeGayFO55oYQVYrrDxAAAA",width:480,height:480}},304:function(t,e,n){t.exports={srcSet:n.p+"img/59e11e9-480.jpg 480w,"+n.p+"img/19da376-768.jpg 768w,"+n.p+"img/7b1d988-960.jpg 960w,"+n.p+"img/bd65a00-1080.jpg 1080w,"+n.p+"img/de250d4-1200.jpg 1200w,"+n.p+"img/d6672be-1536.jpg 1536w,"+n.p+"img/5d6c464-2160.jpg 2160w,"+n.p+"img/b17eca7-2400.jpg 2400w",images:[{path:n.p+"img/59e11e9-480.jpg",width:480,height:480},{path:n.p+"img/19da376-768.jpg",width:768,height:768},{path:n.p+"img/7b1d988-960.jpg",width:960,height:960},{path:n.p+"img/bd65a00-1080.jpg",width:1080,height:1080},{path:n.p+"img/de250d4-1200.jpg",width:1200,height:1200},{path:n.p+"img/d6672be-1536.jpg",width:1536,height:1536},{path:n.p+"img/5d6c464-2160.jpg",width:2160,height:2160},{path:n.p+"img/b17eca7-2400.jpg",width:2400,height:2400}],src:n.p+"img/59e11e9-480.jpg",toString:function(){return n.p+"img/59e11e9-480.jpg"},placeholder:"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAYHBQP/xAAuEAACAQMDAgUDAwUAAAAAAAABAgMEBREAEiEGMQcUQVFhEyIyFXGRUoKhsdH/xAAZAQADAQEBAAAAAAAAAAAAAAADBAUGAQL/xAAgEQACAwACAwADAAAAAAAAAAABAgADEQQSISIxI0HB/9oADAMBAAIRAxEAPwDYsXU0MFrpoBMqSRyFXz/SSSM8j5/jU/8AEG+X2h6lhWzUzBZ843qRGT6kk8YI5yPbSt0f1Pdau4RVEdMklJC+ZN6BhuxheD++ny8U1deZ6KHyjMatgQ+5V2exAJHHYHHbPbWQUEEI42aggYWUxbm8VJ6aL6MGY6gHbuXBXOcHuNbfgbVXusvs1Xd2lqp6lBJHUSylvsPIVc/iBnt750m3bou9LHZ6iaiSKulUO9O5xJDI277WU+mVB/uOql0nYb305VpDUUsK0rVRijkZjlodqfTcd8AkkZPt86YFFVS/j+wJuZz7eJTKao3Vc+9XBXC/fwc9zn/GjSta6ypN0rKyeq+rHPtQD1VkyO/yMfxo1MvJLnYUAZI/4fdI3Gbo52SqFGs05d5F/IAAcAngfv6aaqa801uqPKGkoo5I4kiaOvnYxsyMSrrIoYlTk5UjnAwdPPh1RQPZVpCowhI599bvUXRNFf7a8Qp44a1AfpTxxorcj9v96Yo5D9y85yK1K9G+SD9L9Xz31LW9xjd6mnkWKVjwXVSdr47424Az6DVEh6nu94q7ikVE5jau8vGIaUkywJtZQJQ34FlwQF3cEZHfXak8KYKcJcq0yC7b1p2jjjOySEnG4hRwy5zntxjjvqr9JdH0nTtRF+ntN5Gng2U0MpO5WJyzH3JJJ01SbQ5YDAYLkGgVj9kfyTvqW0PbLLJe5aXytVLMhqVRNiliO+30PoTo08eKUKt0Tdg2WxTs/wA5HOjSt9evs90vqydeHl1j83W08bAJHNtB+ffVWtNQmQwG7PJJPc+2jRoVJxvELyFB2MVHIrKC6rkDvjXRnEalSePQ/wDdGjVhSeshso7ZJ/4rXKKPpu4whwoaAqze2eBo0aNJn2JJlRB1UAT/2Q==",width:480,height:480}},305:function(t,e,n){t.exports={srcSet:n.p+"img/c8f1ba0-480.jpg 480w,"+n.p+"img/d4c360b-768.jpg 768w,"+n.p+"img/64541ee-960.jpg 960w,"+n.p+"img/ddae62c-1080.jpg 1080w,"+n.p+"img/06e8966-1200.jpg 1200w,"+n.p+"img/100d05f-1536.jpg 1536w,"+n.p+"img/5a01275-2160.jpg 2160w,"+n.p+"img/21b757b-2400.jpg 2400w",images:[{path:n.p+"img/c8f1ba0-480.jpg",width:480,height:480},{path:n.p+"img/d4c360b-768.jpg",width:768,height:768},{path:n.p+"img/64541ee-960.jpg",width:960,height:960},{path:n.p+"img/ddae62c-1080.jpg",width:1080,height:1080},{path:n.p+"img/06e8966-1200.jpg",width:1200,height:1200},{path:n.p+"img/100d05f-1536.jpg",width:1536,height:1536},{path:n.p+"img/5a01275-2160.jpg",width:2160,height:2160},{path:n.p+"img/21b757b-2400.jpg",width:2400,height:2400}],src:n.p+"img/c8f1ba0-480.jpg",toString:function(){return n.p+"img/c8f1ba0-480.jpg"},placeholder:"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcGCAEEBQP/xAAuEAABAwMDAgUDBAMAAAAAAAABAgMEBREhAAYSMUETIlFhcQcUgSMyobEIFcH/xAAZAQACAwEAAAAAAAAAAAAAAAAEBQACAwH/xAAlEQACAQMCBQUAAAAAAAAAAAABAgADERITMQQFISJBscHR4fH/2gAMAwEAAhEDEQA/AFAwJSpaHLhbZ4lCQclXHpq5219rwKNt5xyXQU1ipTW4r70R1aAhbrSEBJBVhPGwycY99Vh+nuz5lf3fDpUBDTawrxS4+ohCEIIUokjJwLYznVgtyOz6q5/rYDs2l1RE3lFkoUrg6lGQu4xxPIgpPS3ew0op4gZkRgSx7AYs/wDKj7ym/VJNQPiqYkQ23I61J8iSkWLfIdci+c+b86V8qc8aCzLkJLsmU4pWeiUj09c30yPrttGswt1Rn6kpyXKnRErcfWvkVFJUnj5bJsBboAc51AK/Tpr8ONFaiOlDbQ4njbNz/GdD1lTV6C01TJRve00oVSMqSiK8tTZQLtKx0tkX/kfGjWYdIqbcZtyUy2wQvkoKV5lD/ujVqaKL2nciY9dmiFt/cBrUhspahsPuL4Ni9g2QbaaWzqhQ641Eq1NcUfuWgtCXCAQPjv36aU8CoIfq0cBgIQ++loNOq4+KpQPJIvjva/vrs7ZlO06rwktRTGR43FUdHXiSVCwNrEk3P51OXudPFh5+IK4JJMdO9Nrwt1beTT3iGnm/1Iz1r+Gq39HuNV2rNEeh1VyJIs2/GX4a0qBPmHf47399WMnTX3ZMcw57MVDQAfbUgL5Ej9pzcWuOnrqH/VihPPRI1fCEcwgNTfC6eiVj+vbGteY0M11FHUen1K0qhXtPmJRNGPI+WMu+QAjv8nRrsrUXHnCWrtk3C8gLt0HvjN9GkeZhN2nhsdMWRvSC67wS1GClgIJthJsbHAIxn4139syqLU6oinKkPKlsz0qjOc+TriAQLFXfp39dGjR3C1CgRRsSfaDNteb+/wCuSaduOIxTXHQzELBDbpJWpsp6KOSb9fwNS6sb6gKoyoT8ByY0+wlRKEck8TbBt0z3PS2jRo5q7hmHj9l8AbSA1SfttyG4+qCuPJZADamyf1VWI/acXI7i2jRo0kqVCTtNDP/Z",width:480,height:480}},311:function(t,e,n){t.exports=(()=>{const t=n(312);return{sources:[{srcset:n(313).srcSet,type:"image/webp"},{srcset:t.srcSet,type:"image/jpeg"}],placeholder:(({src:t,preview:e})=>({url:t,base64:e}))(n(314)),width:t.width,height:t.height}})()},312:function(t,e,n){t.exports={srcSet:n.p+"img/5238f49-480.jpg 480w,"+n.p+"img/4c3220c-768.jpg 768w,"+n.p+"img/0467060-960.jpg 960w,"+n.p+"img/13e89ef-1080.jpg 1080w,"+n.p+"img/e26a129-1200.jpg 1200w,"+n.p+"img/f3aa693-1280.jpg 1280w",images:[{path:n.p+"img/5238f49-480.jpg",width:480,height:270},{path:n.p+"img/4c3220c-768.jpg",width:768,height:432},{path:n.p+"img/0467060-960.jpg",width:960,height:540},{path:n.p+"img/13e89ef-1080.jpg",width:1080,height:608},{path:n.p+"img/e26a129-1200.jpg",width:1200,height:675},{path:n.p+"img/f3aa693-1280.jpg",width:1280,height:720}],src:n.p+"img/5238f49-480.jpg",toString:function(){return n.p+"img/5238f49-480.jpg"},width:480,height:270}},313:function(t,e,n){t.exports={srcSet:n.p+"img/21cdd72-480.webp 480w,"+n.p+"img/7a9a549-768.webp 768w,"+n.p+"img/8483d94-960.webp 960w,"+n.p+"img/7bc431b-1080.webp 1080w,"+n.p+"img/cbc6434-1200.webp 1200w,"+n.p+"img/d2e6913-1280.webp 1280w",images:[{path:n.p+"img/21cdd72-480.webp",width:480,height:270},{path:n.p+"img/7a9a549-768.webp",width:768,height:432},{path:n.p+"img/8483d94-960.webp",width:960,height:540},{path:n.p+"img/7bc431b-1080.webp",width:1080,height:608},{path:n.p+"img/cbc6434-1200.webp",width:1200,height:675},{path:n.p+"img/d2e6913-1280.webp",width:1280,height:720}],src:n.p+"img/21cdd72-480.webp",toString:function(){return n.p+"img/21cdd72-480.webp"},width:480,height:270}},314:function(t,e,n){var o={src:n.p+"img/f312213.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cpath fill='%23746d47' d='M0 0h1280v720H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath d='M1357.5 667.5l-1280-400 20 530z'/%3E%3Cpath fill='%23ccc2a8' d='M1357.5 502.5l-90-580-1345 190z'/%3E%3Cpath fill='%23ff0' d='M102.5 797.5l-180-175 105-615z'/%3E%3Cpath fill='%23100615' d='M1177.5 797.5h-700l585-680z'/%3E%3Cpath fill='%23ff0' d='M1232.5-77.5l125 435-110 440z'/%3E%3Cpath fill='%23908200' d='M162.5 467.5l-20 200 660-10z'/%3E%3Cpath fill='%23ffedd1' d='M1067.5 402.5l120 100 65-450z'/%3E%3Cpath fill='%23ff0' d='M-77.5 247.5l120-325-10 750z'/%3E%3Cpath fill='%23999aa5' d='M932.5-77.5l-830 365 855 100z'/%3E%3Cpath fill='%23383d4d' d='M482.5 507.5l75-340 705 365z'/%3E%3Cpath fill='%231b0e04' d='M317.5 722.5l920-225 5 300z'/%3E%3Cpath fill='%23b8ab6b' d='M762.5-77.5h-650l90 440z'/%3E%3Cpath fill='%2311131e' d='M622.5 522.5l-580-90v-180z'/%3E%3Cpath fill='%23ff0' d='M-2.5 787.5l5-530 95 345zm1250-575l-10 585 120-185z'/%3E%3Cpath fill='%23d2cfd3' d='M742.5 327.5v-375l200 95z'/%3E%3Cpath fill='%234d342e' d='M1137.5 192.5l-185 25 55 475z'/%3E%3Cpath fill='%23ff0' d='M1247.5-77.5l5 690 105-400z'/%3E%3Cpath fill='%23d5c993' d='M1042.5 582.5l-15-175-35 160z'/%3E%3Cpath d='M157.5 547.5l315 10-170 45z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:720,width:1280,type:"jpg"}};t.exports=o.preview,t.exports=Object.assign(t.exports,o)},316:function(t,e,n){var content=n(333);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("06c14ebb",content,!0,{sourceMap:!1})},317:function(t,e,n){var content=n(335);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("0501e014",content,!0,{sourceMap:!1})},331:function(t,e,n){var o={src:n.p+"img/0d2f83e.jpg",preSrc:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAoACgMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APsyw/YIi+Mv/BPDQfhX8NPiiyat+z5rh8bap4ct/D9gLzxNqPiLSPiJe+JPEMGt6c39oX89lb68f7HWa9isZdG8KWul3Vpdavb6M9x/PNaEs04MjnGCwuHrSw9PCZlicDUw3LipckZVcc41o0Jc0VhoQ5U43nToyp+1cnQpL9Kw+ZLDY+2IjXh7SNejQxKrPkp04XhRg6LeknXbqNpR5ZT9oouLqVH+XMP7B3iGOGKM/EiSQxxohka2SVpCihS7SvveRmxuLs7M5O5mYkk/mi4sy+y/4TMPsvt0V+HsVb0srdj2/rb61at+vuz36/bP2n+DWu65ongrwheaLrOq6ReL4js4lutL1G8sLkRv8ANdunjE9pNFKEe5u7q4ZA21p7m4mIMk0jN91wxiMRTyLCKnXrU1GtSpx5Ks4ctN8PYebpx5ZK0HOcpOK93mlKVrts+UowjUnWVSMZpUqLSmlJJ/WZq6TT1tGK9IxXRHCS3t5JJJJJd3Mkkju7u88rO7sxZndmcszMxJZiSSSSTmvzCbcpSlJttybbbu222223q23q29z7FUqVl+6p7L7Ef8j//Z",palette:["#64512d","#d9cebc","#a8a55c","#e5cda7","#605a09","#944414"]};t.exports=o.preSrc,t.exports=Object.assign(t.exports,o)},332:function(t,e,n){"use strict";n(316)},333:function(t,e,n){(e=n(25)(!1)).push([t.i,'.component-stage[data-v-c3a95a0a]{position:relative;height:100vh;max-height:100%;margin:0;overflow:hidden}.component-stage .claim[data-v-c3a95a0a]{display:block;font-size:25px;line-height:50px;text-transform:none}.component-stage .headline[data-v-c3a95a0a]{display:block;font-size:30px;line-height:60px}@media (min-width:768px){.component-stage .headline[data-v-c3a95a0a]{font-size:40px;line-height:80px}}.component-stage[data-v-c3a95a0a] picture:before{display:block;padding-top:56.25%;content:""}.component-stage[data-v-c3a95a0a] picture img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.component-stage h1[data-v-c3a95a0a]{position:absolute;bottom:0;left:0;width:100%;padding:20px 0;margin:0;color:#fff;text-align:center;background:rgba(0,0,0,.4)}@media (min-width:768px){.component-stage h1[data-v-c3a95a0a]{position:absolute;top:50px;right:0;bottom:auto;left:auto;width:400px}}',""]),t.exports=e},334:function(t,e,n){"use strict";n(317)},335:function(t,e,n){(e=n(25)(!1)).push([t.i,".page-full-example-with-components[data-v-5c2f4c88]{font-size:1.25em}.page-full-example-with-components>*[data-v-5c2f4c88]{margin:25px 0}.page-full-example-with-components[data-v-5c2f4c88]>:first-child{margin-top:0}.page-full-example-with-components[data-v-5c2f4c88]>:last-child{margin-bottom:0}",""]),t.exports=e},378:function(t,e,n){"use strict";n.r(e);var o={components:{SpeedkitPicture:n(297).a},props:{picture:{type:Object,default:function(){return{}}},headline:{type:String,default:function(){return"Headline"}},claim:{type:String,default:function(){return"Claim"}}}},r=(n(332),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-stage"},[n("speedkit-picture",t._b({},"speedkit-picture",t.picture,!1)),t._v(" "),n("h1",{directives:[{name:"font",rawName:"v-font",value:[t.$getFont("Montserrat Alternates",700,"normal",{selector:".headline"}),t.$getFont("Comic Neue",300,"italic",{selector:".claim"})],expression:"[\n      $getFont('Montserrat Alternates', 700, 'normal', {selector: '.headline'}),\n      $getFont('Comic Neue', 300, 'italic', {selector: '.claim'})\n    ]"}]},[n("span",{staticClass:"headline"},[t._v(t._s(t.headline))]),t._v(" "),n("span",{staticClass:"claim"},[t._v(t._s(t.claim))])])],1)}),[],!1,null,"c3a95a0a",null);e.default=component.exports},403:function(t,e,n){"use strict";n.r(e);n(7);var o={asyncData:function(){var t,e,o,r=n(301),c=n(304),l=n(298),h=n(302),d=n(305),A=n(331);return{contentA:"<p>This is a basic test with single font variant.</p>",stage:{critical:!0,headline:"Stage Headline",claim:"Stage Claim",picture:{sources:[{srcset:r.srcSet,type:"image/webp"},{srcset:c.srcSet,type:"image/jpeg"}],placeholder:(o=l,{url:o.src,base64:o.preview}),width:c.width,height:c.height,alt:"Alt Text",title:"Title Text",caption:null}},youtubePlayer:{poster:Object.assign({alt:"Alt Text",title:"Title Text",caption:null},n(311))},videoPlayer:{poster:{sources:[{srcset:r.srcSet,type:"image/webp"},{srcset:c.srcSet,type:"image/jpeg"}],placeholder:(e=l,{url:e.src,base64:e.preview}),width:c.width,height:c.height,alt:"Alt Text",title:"Title Text",caption:null}},textA:{text:"<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"},imageTextA:{text:"<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>",picture:{sources:[{srcset:h.srcSet,type:"image/webp"},{srcset:d.srcSet,type:"image/jpeg"}],placeholder:(t=A,{url:t.src,base64:t.preview}),width:d.width,height:d.height,alt:"Alt Text",title:"Title Text",caption:null}},textB:{text:"<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"}}},speedkitComponents:{ComponentStage:function(){return Promise.resolve().then(n.bind(null,378))},ComponentTextA:function(){return n.e(1).then(n.bind(null,408))},ComponentTextImage:function(){return n.e(35).then(n.bind(null,409))},ComponentTextB:function(){return n.e(36).then(n.bind(null,410))}},methods:{onLoadFont:function(t){}}},r=(n(334),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-full-example-with-components"},[n("component-stage",t._b({on:{"load:font":t.onLoadFont}},"component-stage",t.stage,!1)),t._v(" "),n("component-text-a",t._b({on:{"load:font":t.onLoadFont}},"component-text-a",t.textA,!1)),t._v(" "),n("component-text-image",t._b({},"component-text-image",t.imageTextA,!1)),t._v(" "),n("component-text-b",t._b({},"component-text-b",t.textB,!1))],1)}),[],!1,null,"5c2f4c88",null);e.default=component.exports}}]);