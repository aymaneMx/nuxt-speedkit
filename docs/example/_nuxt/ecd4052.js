(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{279:function(t,e,n){var content=n(285);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("6ff4a064",content,!0,{sourceMap:!1})},280:function(t,e,n){var content=n(287);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("40ede033",content,!0,{sourceMap:!1})},281:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l}));var o;n(7);function r(){return o||(o=new Promise((function(e){var img=new t.Image;img.onload=function(){return e(!0)},img.onerror=function(){return e(!1)},img.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"}))),o}function l(element,e){var n={};return t.document&&(n=t.document.createElement(element)),e in n}}).call(this,n(15))},282:function(t,e,n){var content=n(289);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("7d4e2f69",content,!0,{sourceMap:!1})},283:function(t,e,n){"use strict";var o=n(13),r=n(4),l=n(57),c=n(16),h=n(12),d=n(33),f=n(115),m=n(76),w=n(5),A=n(56),v=n(112).f,E=n(40).f,x=n(17).f,C=n(188).trim,j=r.Number,S=j.prototype,y="Number"==d(A(S)),M=function(t){var e,n,o,r,l,c,h,code,d=m(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=C(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+d}for(c=(l=d.slice(2)).length,h=0;h<c;h++)if((code=l.charCodeAt(h))<48||code>r)return NaN;return parseInt(l,o)}return+d};if(l("Number",!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var H,z=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof z&&(y?w((function(){S.valueOf.call(n)})):"Number"!=d(n))?f(new j(M(e)),n,z):M(e)},I=o?v(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),B=0;I.length>B;B++)h(j,H=I[B])&&!h(z,H)&&x(z,H,E(j,H));z.prototype=S,S.constructor=z,c(r,"Number",z)}},284:function(t,e,n){"use strict";n(279)},285:function(t,e,n){(e=n(24)(!1)).push([t.i,'.nuxt-speedkit__image-container[data-v-cf96f8a0]{position:relative;width:100%;height:100%;margin:0}.nuxt-speedkit__image-container>span.loading[data-v-cf96f8a0]{position:absolute;top:50%;left:50%;display:block;width:10%;transform:translate(-50%,-50%)}.nuxt-speedkit__image-container>span.loading[data-v-cf96f8a0]:before{box-sizing:border-box;display:block;padding-top:100%;content:""}.nuxt-speedkit__image-container>span.loading[data-v-cf96f8a0]:after{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box;display:block;content:"";border:3px solid #ccc;border-top-color:#07d;border-radius:50%;-webkit-animation-name:spinner;animation-name:spinner;-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-delay:.35s;animation-delay:.35s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;will-change:transform}',""]),t.exports=e},286:function(t,e,n){"use strict";n(280)},287:function(t,e,n){(e=n(24)(!1)).push([t.i,".nuxt-speedkit__noscript[data-v-dd0bafc0]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=e},288:function(t,e,n){"use strict";n(282)},289:function(t,e,n){(e=n(24)(!1)).push([t.i,".nuxt-speedkit__custom-image[data-v-e31ed088]{width:100%;height:100%;vertical-align:middle;-o-object-fit:cover;object-fit:cover}",""]),t.exports=e},290:function(t,e,n){"use strict";var o={props:{loading:{type:Boolean,default:function(){return!1}}},computed:{hasSlot:function(){return this.$slots.caption}}},r=(n(284),n(8)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{staticClass:"nuxt-speedkit__image-container"},[this._t("default"),this._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"loading"}),this._v(" "),this.hasSlot?e("figcaption",[this._t("caption")],2):this._e()],2)}),[],!1,null,"cf96f8a0",null);e.a=component.exports},291:function(t,e,n){"use strict";n(114),n(29);var o=n(3),r=n(77),l=n(281),c=n(293);var h={props:{alt:{type:String,default:function(){return null}},preload:{type:Array,default:function(){return null}},crossorigin:{type:String,default:function(){return"anonymous"}}},fetchOnServer:!1,data:function(){return{visible:this.isCritical,preloaded:!1,webpSupport:!1}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!1,e.t0){e.next=5;break}return e.next=4,Object(l.b)();case 4:e.t0=e.sent;case 5:t.webpSupport=e.t0;case 6:case"end":return e.stop()}}),e)})))()},head:function(){var t,e=this;return this.preload&&this.visible&&this.preload&&this.preload.length?Object(c.a)((t=this.preload,this.webpSupport&&t.find((function(source){return"image/webp"===source.type}))||t.find((function(source){return"image/webp"!==source.type}))),(function(){return e.onPreload()}),this.crossorigin):{}},mounted:function(){var t=this;Object(r.a)(this.$el,(function(){t.visible=!0}))},destroyed:function(){Object(r.b)(this.$el)},methods:{onLoad:function(t){this.preloaded&&this.$emit("load",t.target)},onPreload:function(){this.preloaded=!0,this.$emit("preload")}}},d=(n(288),n(8)),component=Object(d.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"nuxt-speedkit__custom-image",attrs:{loading:"lazy",alt:this.alt,crossorigin:this.crossorigin},on:{load:this.onLoad}})}),[],!1,null,"e31ed088",null);e.a=component.exports},292:function(t,e,n){"use strict";n(286);var o=n(8),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var t=this.$createElement;this._self._c;return this._t("default")},staticRenderFns:[]}})}),[],!1,null,"dd0bafc0",null);e.a=component.exports},293:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));n(7),n(20),n(26),n(187),n(19),n(113);var o=n(116),r=function(){function t(){this.map=new Map}return t.prototype.getEntry=function(t){return this.map.has(t)||this.map.set(t,new o.a),this.map.get(t)},t}(),l=n(58),c=n(281),h=new r;function d(t,e,n){var o=Object(l.a)(t.srcset),r=h.getEntry(o);return r.promise.then((function(){return e()})),Object(c.a)("link","imageSrcset")?{link:[f(t,o,r.resolve,n)]}:function(t,e,n){var img=new Image;img.onload=e,img.crossorigin=n,img.srcset=t.srcset}(t,r.resolve,n)}function f(t,e,n,o){return{hid:e,rel:"preload",as:"image",crossorigin:o,callback:n,imageSrcset:t.srcset}}},294:function(t,e,n){"use strict";n(283);var o=n(290),r=n(292),l=n(291),c={components:{ImageContainer:o.a,CustomNoScript:r.a,CustomImage:l.a},props:{sources:{type:Array,default:function(){return[]}},placeholder:{type:Object,default:function(){return{}}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},width:{type:Number,default:function(){return null}},height:{type:Number,default:function(){return null}},crossorigin:{type:String,default:function(){return"anonymous"}}},data:function(){return{preloadedSources:this.noScript&&this.sources||[],loading:!1,webpSupport:!1}},computed:{preparedPlaceholder:function(){return Object.assign({base64:void 0,url:void 0},this.placeholder)},hasSlot:function(){return this.$slots.caption}},mounted:function(){this.loading=!0},methods:{onLoad:function(t){this.loading=!1,this.$emit("load")},onPreload:function(){this.preloadedSources=this.sources}}},h=n(8),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("image-container",{staticClass:"nuxt-speedkit__speedkit-picture",attrs:{loading:t.loading},scopedSlots:t._u([{key:"default",fn:function(){return[n("picture",[t._l(t.preloadedSources,(function(source,e){return n("source",t._b({key:e},"source",source,!1))})),t._v(" "),n("custom-image",t._b({on:{load:t.onLoad,preload:t.onPreload}},"custom-image",{src:t.preparedPlaceholder.base64,preload:t.sources,width:t.width,height:t.height,alt:t.alt,title:t.title,crossorigin:t.crossorigin},!1))],2),t._v(" "),n("custom-no-script",[n("picture",[t._l(t.sources,(function(source,e){return n("source",t._b({key:e},"source",source,!1))})),t._v(" "),n("custom-image",t._b({on:{load:t.onLoad,preload:t.onPreload}},"custom-image",{src:t.preparedPlaceholder.url,width:t.width,height:t.height,alt:t.alt,title:t.title,crossorigin:t.crossorigin},!1))],2)])]},proxy:!0},{key:"caption",fn:function(){return[t._t("caption")]},proxy:!0}],null,!0)})}),[],!1,null,null,null);e.a=component.exports},295:function(t,e,n){var o={src:n.p+"img/3bdc01d.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2400 2400'%3E%3Cpath fill='%23ab8a5c' d='M0 0h2400v2400H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23fffff2' d='M2254.7 1223.4L173.4 2254.7 2311 2545.3z'/%3E%3Cpath fill='%23471800' d='M2020.3 98.4L-51.6 1617.2-89 276.6z'/%3E%3Cpath fill='%233b1500' d='M1279.7 1636l-543.8-103.2 928.2-1678.1z'/%3E%3Cpath fill='%23fbe0a4' d='M389 2545.3L173.5 1289.1l1940.7 1031.2z'/%3E%3Cpath fill='%23cda774' d='M951.6 1382.8l-450-1528.1L60.9 145.3z'/%3E%3Cpath fill='%233d1d02' d='M436 14l1284.3 318.8-112.5 534.4z'/%3E%3Cpath fill='%23efc688' d='M1654.7 145.3l712.5-290.6 178.1 1125z'/%3E%3Cpath fill='%236e3804' d='M370.3 1157.8l1556.3 112.5-900 459.4z'/%3E%3Cpath fill='%23160000' d='M23.4 1467.2l-131.2-787.5 478.1-28.1z'/%3E%3Cpath fill='%23b0a98d' d='M482.8 1111l1884.4 56.2-1171.9-375z'/%3E%3Cpath fill='%23bd7b2a' d='M257.8 867.2l281.3 1678.1-684.4-206.2z'/%3E%3Cpath fill='%23f0f1cf' d='M1851.6 2545.3l450-1012.5-1434.4 525z'/%3E%3Cpath fill='%233d240b' d='M1767.2-23.4l-496.9 1153-243.7-759.3z'/%3E%3Cpath fill='%23ab631f' d='M1101.6 876.6l693.7 684.3-478.1 168.8z'/%3E%3Cpath fill='%23c07f24' d='M1279.7 304.7L407.8 23.4l1406.3-168.7z'/%3E%3Cpath fill='%23703f03' d='M2545.3 1786l-243.7-731.3 75 1462.5z'/%3E%3Cpath fill='%23280c00' d='M1495.3 1570.3l187.5-403.1-140.6-37.5z'/%3E%3Cpath d='M989 1364l18.8-346.8 234.4 562.5z'/%3E%3Cpath fill='%23f4d4a7' d='M1448.4 1373.4l131.3-421.8-103.1-356.3z'/%3E%3Cpath fill='%23e0b577' d='M314 1251.6l-131.2 834.3 787.5 459.4z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:2400,width:2400,type:"jpg"}};t.exports=o.preview,t.exports=Object.assign(t.exports,o)},296:function(t,e,n){var o={src:n.p+"img/41dd76a.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2400 2400'%3E%3Cpath fill='%23a29673' d='M0 0h2400v2400H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23fff' d='M267.2 1570.3l1837.5 806.3-1471.9-2522z'/%3E%3Cpath fill='%23331800' d='M2132.8 1532.8L1017.2 117.2l1528.1-262.5z'/%3E%3Cpath fill='%231f0700' d='M107.8 1223.4L-145.3-14l862.5-9.3z'/%3E%3Cpath fill='%23fff' d='M1007.8 661l871.9 1321.8-1003.1 412.5zm84.4-731.3L454.7 398.4l675 131.3z'/%3E%3Cpath fill='%23533812' d='M2545.3-145.3L1832.8 998.4 726.6 726.6z'/%3E%3Cpath fill='%238c8740' d='M-23.4 2545.3l-122-1903.1 1040.7 993.7z'/%3E%3Cpath fill='%23a59843' d='M2517.2 2545.3l-75-1631.2-1350-112.5z'/%3E%3Cpath fill='%23bcb5a8' d='M454.7 1476.6l1378.1 796.8-1481.2 47z'/%3E%3Cpath fill='%23fffaef' d='M2545.3 2198.4H1476.6l-93.8-431.2z'/%3E%3Cpath fill='%23503c18' d='M951.6-145.3l1509.3 590.6-75 665.6z'/%3E%3Cpath fill='%23fffccf' d='M642.2 211L501.6 595.2 539-117.2z'/%3E%3Cpath fill='%237a6838' d='M1082.8 2189l262.5-234.3 159.4 590.6z'/%3E%3Cpath fill='%238a6142' d='M811 511l271.8 140.6-375 356.2z'/%3E%3Cpath fill='%23fffffe' d='M1307.8 1579.7l-196.9-975-431.2 731.2z'/%3E%3Cpath fill='%23fff' d='M792.2 126.6l262.5-150 84.4 515.6z'/%3E%3Cpath fill='%23584623' d='M2545.3 764l-1350 206.3-65.6-1115.6z'/%3E%3Cpath fill='%23e8eff7' d='M436 1682.8l103 534.4-196.8 328.1z'/%3E%3Cpath fill='%23483a12' d='M-145.3 1120.3L482.8 736 229.7-145.3z'/%3E%3Cpath fill='%23180a00' d='M511 1242.2l84.3 243.7-178.1-46.8z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:2400,width:2400,type:"jpg"}};t.exports=o.preview,t.exports=Object.assign(t.exports,o)},299:function(t,e,n){t.exports={srcSet:n.p+"img/00b4f63-480.webp 480w,"+n.p+"img/7e328ce-768.webp 768w,"+n.p+"img/ff303bf-960.webp 960w,"+n.p+"img/011a37a-1080.webp 1080w,"+n.p+"img/104d21d-1200.webp 1200w,"+n.p+"img/dd4364f-1536.webp 1536w,"+n.p+"img/13f3ee4-2160.webp 2160w,"+n.p+"img/1ab22ac-2400.webp 2400w",images:[{path:n.p+"img/00b4f63-480.webp",width:480,height:480},{path:n.p+"img/7e328ce-768.webp",width:768,height:768},{path:n.p+"img/ff303bf-960.webp",width:960,height:960},{path:n.p+"img/011a37a-1080.webp",width:1080,height:1080},{path:n.p+"img/104d21d-1200.webp",width:1200,height:1200},{path:n.p+"img/dd4364f-1536.webp",width:1536,height:1536},{path:n.p+"img/13f3ee4-2160.webp",width:2160,height:2160},{path:n.p+"img/1ab22ac-2400.webp",width:2400,height:2400}],src:n.p+"img/00b4f63-480.webp",toString:function(){return n.p+"img/00b4f63-480.webp"},placeholder:"data:image/webp;base64,UklGRv4CAABXRUJQVlA4IPICAACwDgCdASooACgAPlEij0UjoiEVXVSsOAUEoAnTK4yZe18qDX144Odt1dx7vKsbg8JfCD6r/zst3dyoHuR1e8z3yYfVHAZIEC4jOSqdWagWrP2JEH2tHObHlZac17xTvvnD9/lEBCcDXrU93rlm9nLgmFzu1uYTMheExe6V1YAA/rhRXFitIlFiUnfkaCxMB3q4+H2j7FJ+uqIBzd2FZXmGQSKbFRJ/APHJXS3+FsIrYXnwsBXhXOqsm/5NcygWAwOy58pW699xO2dmMSRnZ2N66//InVKIsra0tRGQnBnLaG/894gtodAxr77KkJOtr6TMn4+NuQi7eG1E+Z/S67/4vDlI0rgpNxQHuaRpOpl0tUXLn/CP0bt52kUlFH9Fk+38XWsI/aTUyT6uVREShMkiN7Nzi1SiDDdyUBO5YKGVuyhPFO/eFPo46LzK8W7Nwvv3zV1yi1wh4v45wKfdOIv99JRk/eIM0++mOzdLuNY6kEb7F9jYvP58Mz5JfCHXsjqg3EDcXGkXqIrHFKRAxqau7Gk0p857vRKPIL1zaOEJrhyBfIwb3cc0aq431k7OvlFnencXCs+e+5WRS5b+3DBlG7c3AdIiR+OO79Dh8wLLkTujsGEvVvHAy737PA6fM7aYX3M5Rv7H7fMOhEWFcC/RWs9MhGBpf9sWi33oTjLpccFK2HIHa6t50dviHoVKHK7BJvewCErA2qbO61QqJQ1e3vdOHyRv3dtf2JCDtQ9+cSLYVfDi8bKvsr2K+M5PKwGS32rxAB/HDnxstsvlV+m1iudHoxO/s3NcHTpXckxiK0GrrsvPMLwR7tIrRbHtX85AJJ6JtZJYRwAz/asvVFCKPDoxcnPXbvIS7Nauu1EF4ZvidXkvq4oLI74sqIABKbyl6K3ohK9Xzktqq9kbS166PveR0OOTsKXxURZI0T2YWaBW9EQwbuVS3wXSsa38568I11ZSVat1YfwFO9HYoDbB8bYfF6UB8jqtFSrPPivwwAAA",width:480,height:480}},300:function(t,e,n){t.exports={srcSet:n.p+"img/de71c67-480.webp 480w,"+n.p+"img/729de95-768.webp 768w,"+n.p+"img/b9f70ed-960.webp 960w,"+n.p+"img/0d8cbc2-1080.webp 1080w,"+n.p+"img/803a7ac-1200.webp 1200w,"+n.p+"img/5d6bf38-1536.webp 1536w,"+n.p+"img/ad67b53-2160.webp 2160w,"+n.p+"img/84a0d62-2400.webp 2400w",images:[{path:n.p+"img/de71c67-480.webp",width:480,height:480},{path:n.p+"img/729de95-768.webp",width:768,height:768},{path:n.p+"img/b9f70ed-960.webp",width:960,height:960},{path:n.p+"img/0d8cbc2-1080.webp",width:1080,height:1080},{path:n.p+"img/803a7ac-1200.webp",width:1200,height:1200},{path:n.p+"img/5d6bf38-1536.webp",width:1536,height:1536},{path:n.p+"img/ad67b53-2160.webp",width:2160,height:2160},{path:n.p+"img/84a0d62-2400.webp",width:2400,height:2400}],src:n.p+"img/de71c67-480.webp",toString:function(){return n.p+"img/de71c67-480.webp"},placeholder:"data:image/webp;base64,UklGRlgDAABXRUJQVlA4IEwDAAAQDgCdASooACgAPk0ejEQioaEXFZgoBMSgCdMoR2xI7sjVqiZQstuBzsummxubwX8Sa1izDNKVwoz/RUz/vUfsDim0At7R42LgSfd6INzWRVtjLzkthUEbyLx5q+1kdZeB3nGIBi6vPu3O4CwCEHk4QR79nPUSvngAAP756+GOs5Hd0r5vv8Lc/6iV7u8uAAZ/Sr9YDB6yB1HOWm+ZSg7bhxw6W2ddkIrCMjtHyz/UrOtqOZh5zI+F/y+uR+U4HSljRxbZbAWwMebwcikDV81VuiY3E3HjdoNeV+32aPjZA9rU++YsXzww7Ugp+r4nJetS6zFLhP//xRGjZFbFIi38G3RNZVmrJUX7y28NdbI+76ykfzeGZsR23TLLM355T+u6HjxqgiR+G+4sGhxmciK0zDC84fytRbT8pHmrKzE15x01PqJ5xSd5m0cuBgbpXIqe1030U1Tys1AGA5xNiaKlAUO6LYmkdLVVF8hWtclQbvUiqfpUI87dTwmLv8IcQuVlE5zQSuuN7MDwuX315gDrpEKQ256Be+i8TDGWya2+ZsneZS+J+95HvqYSHQsrpHj29ftNP1NZx+NPQjxvbrqWP/xLi42k7Cfnqd0EwxcTsW9ivBAnFBWc4oL5DsVO6OqHRZGOWXGcm3UIQBkvxB8qrJZ5qw8ac+UbJp5g05e6nSRT2GLvew+m6YneVGCIzLVIi3jB5C2cPa+HDs68xpbBiMsAao6t3SVSyT3CWVshNEDcJJkNChVHL4Xzz3C3rzv3N+sCitWxqdF59wYvAmSfF3kBMYFDlwE3CkBYDrC4SnpqiAH5LRVoSbcsfHHVkNHWZqKjnEOBCE79Y+M2tyGjtdvIdxEJ8UVGvKrJ7H642pNGijTAdmi9Iyv5PqnSszKI++MrdUWmPYZ4hTWCqFpf4/Sed8jWrMV+OnduLa41u4TDZWwyv9F3fT3PhGfFXdj7j5GCCr6mQEBy3hrs1sZK11OyuH9wIW3WRg3J8RgaLgus8M2++F1WTSIsu2LiFwmtVgHMg0yLcCSjQpIFeIcHvBufeLSxuQWpKVKwoMTHN5MjzCr/w2qtHSuP3Kqv3O2Y3hzgSZfEuDENNdBeGayFO55oYQVYrrDxAAAA",width:480,height:480}},301:function(t,e,n){t.exports={srcSet:n.p+"img/59e11e9-480.jpg 480w,"+n.p+"img/19da376-768.jpg 768w,"+n.p+"img/7b1d988-960.jpg 960w,"+n.p+"img/bd65a00-1080.jpg 1080w,"+n.p+"img/de250d4-1200.jpg 1200w,"+n.p+"img/d6672be-1536.jpg 1536w,"+n.p+"img/5d6c464-2160.jpg 2160w,"+n.p+"img/b17eca7-2400.jpg 2400w",images:[{path:n.p+"img/59e11e9-480.jpg",width:480,height:480},{path:n.p+"img/19da376-768.jpg",width:768,height:768},{path:n.p+"img/7b1d988-960.jpg",width:960,height:960},{path:n.p+"img/bd65a00-1080.jpg",width:1080,height:1080},{path:n.p+"img/de250d4-1200.jpg",width:1200,height:1200},{path:n.p+"img/d6672be-1536.jpg",width:1536,height:1536},{path:n.p+"img/5d6c464-2160.jpg",width:2160,height:2160},{path:n.p+"img/b17eca7-2400.jpg",width:2400,height:2400}],src:n.p+"img/59e11e9-480.jpg",toString:function(){return n.p+"img/59e11e9-480.jpg"},placeholder:"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAYHBQP/xAAuEAACAQMDAgUDAwUAAAAAAAABAgMEBREAEiEGMQcUQVFhEyIyFXGRUoKhsdH/xAAZAQADAQEBAAAAAAAAAAAAAAADBAUGAQL/xAAgEQACAwACAwADAAAAAAAAAAABAgADEQQSISIxI0HB/9oADAMBAAIRAxEAPwDYsXU0MFrpoBMqSRyFXz/SSSM8j5/jU/8AEG+X2h6lhWzUzBZ843qRGT6kk8YI5yPbSt0f1Pdau4RVEdMklJC+ZN6BhuxheD++ny8U1deZ6KHyjMatgQ+5V2exAJHHYHHbPbWQUEEI42aggYWUxbm8VJ6aL6MGY6gHbuXBXOcHuNbfgbVXusvs1Xd2lqp6lBJHUSylvsPIVc/iBnt750m3bou9LHZ6iaiSKulUO9O5xJDI277WU+mVB/uOql0nYb305VpDUUsK0rVRijkZjlodqfTcd8AkkZPt86YFFVS/j+wJuZz7eJTKao3Vc+9XBXC/fwc9zn/GjSta6ypN0rKyeq+rHPtQD1VkyO/yMfxo1MvJLnYUAZI/4fdI3Gbo52SqFGs05d5F/IAAcAngfv6aaqa801uqPKGkoo5I4kiaOvnYxsyMSrrIoYlTk5UjnAwdPPh1RQPZVpCowhI599bvUXRNFf7a8Qp44a1AfpTxxorcj9v96Yo5D9y85yK1K9G+SD9L9Xz31LW9xjd6mnkWKVjwXVSdr47424Az6DVEh6nu94q7ikVE5jau8vGIaUkywJtZQJQ34FlwQF3cEZHfXak8KYKcJcq0yC7b1p2jjjOySEnG4hRwy5zntxjjvqr9JdH0nTtRF+ntN5Gng2U0MpO5WJyzH3JJJ01SbQ5YDAYLkGgVj9kfyTvqW0PbLLJe5aXytVLMhqVRNiliO+30PoTo08eKUKt0Tdg2WxTs/wA5HOjSt9evs90vqydeHl1j83W08bAJHNtB+ffVWtNQmQwG7PJJPc+2jRoVJxvELyFB2MVHIrKC6rkDvjXRnEalSePQ/wDdGjVhSeshso7ZJ/4rXKKPpu4whwoaAqze2eBo0aNJn2JJlRB1UAT/2Q==",width:480,height:480}},302:function(t,e,n){t.exports={srcSet:n.p+"img/c8f1ba0-480.jpg 480w,"+n.p+"img/d4c360b-768.jpg 768w,"+n.p+"img/64541ee-960.jpg 960w,"+n.p+"img/ddae62c-1080.jpg 1080w,"+n.p+"img/06e8966-1200.jpg 1200w,"+n.p+"img/100d05f-1536.jpg 1536w,"+n.p+"img/5a01275-2160.jpg 2160w,"+n.p+"img/21b757b-2400.jpg 2400w",images:[{path:n.p+"img/c8f1ba0-480.jpg",width:480,height:480},{path:n.p+"img/d4c360b-768.jpg",width:768,height:768},{path:n.p+"img/64541ee-960.jpg",width:960,height:960},{path:n.p+"img/ddae62c-1080.jpg",width:1080,height:1080},{path:n.p+"img/06e8966-1200.jpg",width:1200,height:1200},{path:n.p+"img/100d05f-1536.jpg",width:1536,height:1536},{path:n.p+"img/5a01275-2160.jpg",width:2160,height:2160},{path:n.p+"img/21b757b-2400.jpg",width:2400,height:2400}],src:n.p+"img/c8f1ba0-480.jpg",toString:function(){return n.p+"img/c8f1ba0-480.jpg"},placeholder:"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcGCAEEBQP/xAAuEAABAwMDAgUDBAMAAAAAAAABAgMEBREhAAYSMUETIlFhcQcUgSMyobEIFcH/xAAZAQACAwEAAAAAAAAAAAAAAAAEBQACAwH/xAAlEQACAQMCBQUAAAAAAAAAAAABAgADERITMQQFISJBscHR4fH/2gAMAwEAAhEDEQA/AFAwJSpaHLhbZ4lCQclXHpq5219rwKNt5xyXQU1ipTW4r70R1aAhbrSEBJBVhPGwycY99Vh+nuz5lf3fDpUBDTawrxS4+ohCEIIUokjJwLYznVgtyOz6q5/rYDs2l1RE3lFkoUrg6lGQu4xxPIgpPS3ew0op4gZkRgSx7AYs/wDKj7ym/VJNQPiqYkQ23I61J8iSkWLfIdci+c+b86V8qc8aCzLkJLsmU4pWeiUj09c30yPrttGswt1Rn6kpyXKnRErcfWvkVFJUnj5bJsBboAc51AK/Tpr8ONFaiOlDbQ4njbNz/GdD1lTV6C01TJRve00oVSMqSiK8tTZQLtKx0tkX/kfGjWYdIqbcZtyUy2wQvkoKV5lD/ujVqaKL2nciY9dmiFt/cBrUhspahsPuL4Ni9g2QbaaWzqhQ641Eq1NcUfuWgtCXCAQPjv36aU8CoIfq0cBgIQ++loNOq4+KpQPJIvjva/vrs7ZlO06rwktRTGR43FUdHXiSVCwNrEk3P51OXudPFh5+IK4JJMdO9Nrwt1beTT3iGnm/1Iz1r+Gq39HuNV2rNEeh1VyJIs2/GX4a0qBPmHf47399WMnTX3ZMcw57MVDQAfbUgL5Ej9pzcWuOnrqH/VihPPRI1fCEcwgNTfC6eiVj+vbGteY0M11FHUen1K0qhXtPmJRNGPI+WMu+QAjv8nRrsrUXHnCWrtk3C8gLt0HvjN9GkeZhN2nhsdMWRvSC67wS1GClgIJthJsbHAIxn4139syqLU6oinKkPKlsz0qjOc+TriAQLFXfp39dGjR3C1CgRRsSfaDNteb+/wCuSaduOIxTXHQzELBDbpJWpsp6KOSb9fwNS6sb6gKoyoT8ByY0+wlRKEck8TbBt0z3PS2jRo5q7hmHj9l8AbSA1SfttyG4+qCuPJZADamyf1VWI/acXI7i2jRo0kqVCTtNDP/Z",width:480,height:480}},308:function(t,e,n){t.exports=(()=>{const t=n(309);return{sources:[{srcset:n(310).srcSet,type:"image/webp"},{srcset:t.srcSet,type:"image/jpeg"}],placeholder:(({src:t,preview:e})=>({url:t,base64:e}))(n(311)),width:t.width,height:t.height}})()},309:function(t,e,n){t.exports={srcSet:n.p+"img/5238f49-480.jpg 480w,"+n.p+"img/4c3220c-768.jpg 768w,"+n.p+"img/0467060-960.jpg 960w,"+n.p+"img/13e89ef-1080.jpg 1080w,"+n.p+"img/e26a129-1200.jpg 1200w,"+n.p+"img/f3aa693-1280.jpg 1280w",images:[{path:n.p+"img/5238f49-480.jpg",width:480,height:270},{path:n.p+"img/4c3220c-768.jpg",width:768,height:432},{path:n.p+"img/0467060-960.jpg",width:960,height:540},{path:n.p+"img/13e89ef-1080.jpg",width:1080,height:608},{path:n.p+"img/e26a129-1200.jpg",width:1200,height:675},{path:n.p+"img/f3aa693-1280.jpg",width:1280,height:720}],src:n.p+"img/5238f49-480.jpg",toString:function(){return n.p+"img/5238f49-480.jpg"},width:480,height:270}},310:function(t,e,n){t.exports={srcSet:n.p+"img/21cdd72-480.webp 480w,"+n.p+"img/7a9a549-768.webp 768w,"+n.p+"img/8483d94-960.webp 960w,"+n.p+"img/7bc431b-1080.webp 1080w,"+n.p+"img/cbc6434-1200.webp 1200w,"+n.p+"img/d2e6913-1280.webp 1280w",images:[{path:n.p+"img/21cdd72-480.webp",width:480,height:270},{path:n.p+"img/7a9a549-768.webp",width:768,height:432},{path:n.p+"img/8483d94-960.webp",width:960,height:540},{path:n.p+"img/7bc431b-1080.webp",width:1080,height:608},{path:n.p+"img/cbc6434-1200.webp",width:1200,height:675},{path:n.p+"img/d2e6913-1280.webp",width:1280,height:720}],src:n.p+"img/21cdd72-480.webp",toString:function(){return n.p+"img/21cdd72-480.webp"},width:480,height:270}},311:function(t,e,n){var o={src:n.p+"img/f312213.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cpath fill='%23746d47' d='M0 0h1280v720H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath d='M102.5 797.5l-35-550 1290 430z'/%3E%3Cpath fill='%23ccc3a8' d='M1357.5 502.5l-90-580-1345 185z'/%3E%3Cpath fill='%23ff0' d='M-77.5 577.5l100-610 85 830z'/%3E%3Cpath fill='%230f0515' d='M1052.5 127.5l-485 570 620 100z'/%3E%3Cpath fill='%23ff0' d='M1252.5 797.5l-20-855 125 425z'/%3E%3Cpath fill='%23b4a700' d='M477.5 687.5l-365-105 585-5z'/%3E%3Cpath fill='%23ffefd2' d='M1182.5 497.5l70-455-180 355z'/%3E%3Cpath fill='%23afa994' d='M122.5-77.5l1170 150-1090 270z'/%3E%3Cpath fill='%23ff0' d='M2.5 82.5l90 590-170 125z'/%3E%3Cpath fill='%234e536e' d='M572.5 157.5l-130 245 770 95z'/%3E%3Cpath fill='%2319130b' d='M442.5 517.5l795 280v-295z'/%3E%3Cpath fill='%230c1122' d='M42.5 262.5l545 245-540-75z'/%3E%3Cpath fill='%23ff0' d='M1252.5 232.5l105 395-125 170zm-1330-10l125 430-10-730z'/%3E%3Cpath fill='%23bba600' d='M312.5 477.5l230 70h-490z'/%3E%3Cpath fill='%234d342f' d='M982.5 157.5l15 485 150-445z'/%3E%3Cpath fill='%23c7c7db' d='M747.5 337.5l-5-405 200 125z'/%3E%3Cpath fill='%23c3bb18' d='M82.5 57.5l80 115 400-70z'/%3E%3Cpath fill='%23ff0' d='M1357.5 237.5l-105-315-10 630z'/%3E%3Cpath fill='%23100000' d='M92.5 652.5l460 20-520 125z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:720,width:1280,type:"jpg"}};t.exports=o.preview,t.exports=Object.assign(t.exports,o)},313:function(t,e,n){var content=n(327);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("06c14ebb",content,!0,{sourceMap:!1})},314:function(t,e,n){var content=n(329);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("05fc700b",content,!0,{sourceMap:!1})},326:function(t,e,n){"use strict";n(313)},327:function(t,e,n){(e=n(24)(!1)).push([t.i,'.component-stage[data-v-c3a95a0a]{position:relative;height:100vh;max-height:100%;margin:0;overflow:hidden}.component-stage .claim[data-v-c3a95a0a]{display:block;font-size:25px;line-height:50px;text-transform:none}.component-stage .headline[data-v-c3a95a0a]{display:block;font-size:30px;line-height:60px}@media (min-width:768px){.component-stage .headline[data-v-c3a95a0a]{font-size:40px;line-height:80px}}.component-stage[data-v-c3a95a0a] picture:before{display:block;padding-top:56.25%;content:""}.component-stage[data-v-c3a95a0a] picture img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.component-stage h1[data-v-c3a95a0a]{position:absolute;bottom:0;left:0;width:100%;padding:20px 0;margin:0;color:#fff;text-align:center;background:rgba(0,0,0,.4)}@media (min-width:768px){.component-stage h1[data-v-c3a95a0a]{position:absolute;top:50px;right:0;bottom:auto;left:auto;width:400px}}',""]),t.exports=e},328:function(t,e,n){"use strict";n(314)},329:function(t,e,n){(e=n(24)(!1)).push([t.i,".page-full-example-with-components[data-v-09be17f0]{font-size:1.25em}.page-full-example-with-components>*[data-v-09be17f0]{margin:25px 0}.page-full-example-with-components[data-v-09be17f0]>:first-child{margin-top:0}.page-full-example-with-components[data-v-09be17f0]>:last-child{margin-bottom:0}",""]),t.exports=e},368:function(t,e,n){"use strict";n.r(e);var o={components:{SpeedkitPicture:n(294).a},props:{picture:{type:Object,default:function(){return{}}},headline:{type:String,default:function(){return"Headline"}},claim:{type:String,default:function(){return"Claim"}}}},r=(n(326),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-stage"},[n("speedkit-picture",t._b({},"speedkit-picture",t.picture,!1)),t._v(" "),n("h1",{directives:[{name:"font",rawName:"v-font",value:[t.$getFont("Montserrat Alternates",700,"normal",{selector:".headline"}),t.$getFont("Comic Neue",300,"italic",{selector:".claim"})],expression:"[\n      $getFont('Montserrat Alternates', 700, 'normal', {selector: '.headline'}),\n      $getFont('Comic Neue', 300, 'italic', {selector: '.claim'})\n    ]"}]},[n("span",{staticClass:"headline"},[t._v(t._s(t.headline))]),t._v(" "),n("span",{staticClass:"claim"},[t._v(t._s(t.claim))])])],1)}),[],!1,null,"c3a95a0a",null);e.default=component.exports},392:function(t,e,n){"use strict";n.r(e);n(7);var o="image/webp",r="image/jpeg",l={asyncData:function(){var t,e,l,c=n(299),h=n(301),d=n(295),f=n(300),m=n(302),w=n(296);return{contentA:"<p>This is a basic test with single font variant.</p>",stage:{critical:!0,headline:"Stage Headline",claim:"Stage Claim",picture:{sources:[{srcset:c.srcSet,type:o},{srcset:h.srcSet,type:r}],placeholder:(l=d,{url:l.src,base64:l.preview}),width:h.width,height:h.height,alt:"Stage Alt Text",title:"Stage Title Text",caption:null}},youtubePlayer:{poster:Object.assign({alt:"Youtube Alt Text",title:"Youtube Title Text",caption:null},n(308))},videoPlayer:{poster:{sources:[{srcset:c.srcSet,type:o},{srcset:h.srcSet,type:r}],placeholder:(e=d,{url:e.src,base64:e.preview}),width:h.width,height:h.height,alt:"Video Player Alt Text",title:"Video Player Title Text",caption:null}},textA:{text:"<h2>Text Headline</h2><p>Aliqua odit <strong>anim vehicula</strong> varius eget feugiat beatae. <em><strong>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</strong></em>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"},imageTextA:{text:"<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>",picture:{sources:[{srcset:f.srcSet,type:o},{srcset:m.srcSet,type:r}],placeholder:(t=w,{url:t.src,base64:t.preview}),width:m.width,height:m.height,alt:"Image Text A Alt Text",title:"Image Text A Title Text",caption:null}},textB:{text:"<h2>Text Headline</h2><p>Aliqua odit <strong>anim vehicula</strong> varius eget feugiat beatae. <em><strong>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</strong></em>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"}}},speedkitComponents:{ComponentStage:function(){return Promise.resolve().then(n.bind(null,368))},ComponentTextA:function(){return n.e(0).then(n.bind(null,397))},ComponentTextImage:function(){return n.e(33).then(n.bind(null,398))},ComponentTextB:function(){return n.e(34).then(n.bind(null,399))}},methods:{onLoadFont:function(t){}}},c=(n(328),n(8)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-full-example-with-components"},[n("component-stage",t._b({on:{"load:font":t.onLoadFont}},"component-stage",t.stage,!1)),t._v(" "),n("component-text-a",t._b({on:{"load:font":t.onLoadFont}},"component-text-a",t.textA,!1)),t._v(" "),n("component-text-image",t._b({},"component-text-image",t.imageTextA,!1)),t._v(" "),n("component-text-b",t._b({},"component-text-b",t.textB,!1))],1)}),[],!1,null,"09be17f0",null);e.default=component.exports}}]);