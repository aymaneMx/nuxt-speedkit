(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{105:function(t,e,n){var content=n(110);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("6ff4a064",content,!0,{sourceMap:!1})},106:function(t,e,n){var content=n(112);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("40ede033",content,!0,{sourceMap:!1})},107:function(t,e,n){"use strict";(function(t){let o;function l(){return o||(o=new Promise(e=>{const img=new t.Image;img.onload=()=>e(!0),img.onerror=()=>e(!1),img.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"})),o}function r(element,e){let n={};return t.document&&(n=t.document.createElement(element)),e in n}n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return r}))}).call(this,n(3))},108:function(t,e,n){var content=n(114);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("7d4e2f69",content,!0,{sourceMap:!1})},109:function(t,e,n){"use strict";n(105)},110:function(t,e,n){(e=n(5)(!1)).push([t.i,'.nuxt-speedkit__image-container[data-v-cf96f8a0]{position:relative;width:100%;height:100%;margin:0}.nuxt-speedkit__image-container>span.loading[data-v-cf96f8a0]{position:absolute;top:50%;left:50%;display:block;width:10%;transform:translate(-50%,-50%)}.nuxt-speedkit__image-container>span.loading[data-v-cf96f8a0]:before{box-sizing:border-box;display:block;padding-top:100%;content:""}.nuxt-speedkit__image-container>span.loading[data-v-cf96f8a0]:after{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box;display:block;content:"";border:3px solid #ccc;border-top-color:#07d;border-radius:50%;-webkit-animation-name:spinner;animation-name:spinner;-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-delay:.35s;animation-delay:.35s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;will-change:transform}',""]),t.exports=e},111:function(t,e,n){"use strict";n(106)},112:function(t,e,n){(e=n(5)(!1)).push([t.i,".nuxt-speedkit__noscript[data-v-dd0bafc0]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=e},113:function(t,e,n){"use strict";n(108)},114:function(t,e,n){(e=n(5)(!1)).push([t.i,".nuxt-speedkit__custom-image[data-v-e31ed088]{width:100%;height:100%;vertical-align:middle;-o-object-fit:cover;object-fit:cover}",""]),t.exports=e},115:function(t,e,n){"use strict";var o={props:{loading:{type:Boolean,default:()=>!1}},computed:{hasSlot(){return this.$slots.caption}}},l=(n(109),n(2)),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{staticClass:"nuxt-speedkit__image-container"},[this._t("default"),this._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"loading"}),this._v(" "),this.hasSlot?e("figcaption",[this._t("caption")],2):this._e()],2)}),[],!1,null,"cf96f8a0",null);e.a=component.exports},116:function(t,e,n){"use strict";var o=n(12),l=n(107),r=n(118);var c={props:{alt:{type:String,default:()=>null},preload:{type:Array,default:()=>null},crossorigin:{type:String,default:()=>"anonymous"}},fetchOnServer:!1,data(){return{visible:this.isCritical,preloaded:!1,webpSupport:!1}},async fetch(){this.webpSupport=await Object(l.b)()},head(){return this.preload&&this.visible&&this.preload&&this.preload.length?Object(r.a)((t=this.preload,this.webpSupport&&t.find(source=>"image/webp"===source.type)||t.find(source=>"image/webp"!==source.type)),()=>this.onPreload(),this.crossorigin):{};var t},mounted(){Object(o.a)(this.$el,()=>{this.visible=!0})},destroyed(){Object(o.b)(this.$el)},methods:{onLoad(t){this.preloaded&&this.$emit("load",t.target)},onPreload(){this.preloaded=!0,this.$emit("preload")}}},h=(n(113),n(2)),component=Object(h.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"nuxt-speedkit__custom-image",attrs:{loading:"lazy",alt:this.alt,crossorigin:this.crossorigin},on:{load:this.onLoad}})}),[],!1,null,"e31ed088",null);e.a=component.exports},117:function(t,e,n){"use strict";n(111);var o=n(2),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var t=this.$createElement;this._self._c;return this._t("default")},staticRenderFns:[]}})}),[],!1,null,"dd0bafc0",null);e.a=component.exports},118:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var o=n(16);var l=n(10),r=n(107);const c=new class{constructor(){this.map=new Map}getEntry(t){return this.map.has(t)||this.map.set(t,new o.a),this.map.get(t)}};function h(t,e,n){const o=Object(l.a)(t.srcset),h=c.getEntry(o);return h.promise.then(()=>e()),Object(r.a)("link","imageSrcset")?{link:[d(t,o,h.resolve,n)]}:function(t,e,n){const img=new Image;img.onload=e,img.crossorigin=n,img.srcset=t.srcset}(t,h.resolve,n)}function d(t,e,n,o){return{hid:e,rel:"preload",as:"image",crossorigin:o,callback:n,imageSrcset:t.srcset}}},119:function(t,e,n){"use strict";var o=n(115),l=n(117),r=n(116),c={components:{ImageContainer:o.a,CustomNoScript:l.a,CustomImage:r.a},props:{sources:{type:Array,default:()=>[]},placeholder:{type:Object,default:()=>({})},alt:{type:String,default:()=>""},title:{type:String,default:()=>""},width:{type:Number,default:()=>null},height:{type:Number,default:()=>null},crossorigin:{type:String,default:()=>"anonymous"}},data(){return{preloadedSources:this.noScript&&this.sources||[],loading:!1,webpSupport:!1}},computed:{preparedPlaceholder(){return Object.assign({base64:void 0,url:void 0},this.placeholder)},hasSlot(){return this.$slots.caption}},mounted(){this.loading=!0},methods:{onLoad(t){this.loading=!1,this.$emit("load")},onPreload(){this.preloadedSources=this.sources}}},h=n(2),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("image-container",{staticClass:"nuxt-speedkit__speedkit-picture",attrs:{loading:t.loading},scopedSlots:t._u([{key:"default",fn:function(){return[n("picture",[t._l(t.preloadedSources,(function(source,e){return n("source",t._b({key:e},"source",source,!1))})),t._v(" "),n("custom-image",t._b({on:{load:t.onLoad,preload:t.onPreload}},"custom-image",{src:t.preparedPlaceholder.base64,preload:t.sources,width:t.width,height:t.height,alt:t.alt,title:t.title,crossorigin:t.crossorigin},!1))],2),t._v(" "),n("custom-no-script",[n("picture",[t._l(t.sources,(function(source,e){return n("source",t._b({key:e},"source",source,!1))})),t._v(" "),n("custom-image",t._b({on:{load:t.onLoad,preload:t.onPreload}},"custom-image",{src:t.preparedPlaceholder.url,width:t.width,height:t.height,alt:t.alt,title:t.title,crossorigin:t.crossorigin},!1))],2)])]},proxy:!0},{key:"caption",fn:function(){return[t._t("caption")]},proxy:!0}],null,!0)})}),[],!1,null,null,null);e.a=component.exports},120:function(t,e,n){var o={src:n.p+"img/3bdc01d.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2400 2400'%3E%3Cpath fill='%23ab8a5c' d='M0 0h2400v2400H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23fffff2' d='M2264 2545.3l9.4-1331.2-2100 1040.6z'/%3E%3Cpath fill='%23441500' d='M2039 89L-145.2 1664-4.7 323.5z'/%3E%3Cpath fill='%233b1400' d='M1617.2-145.3L764 1514l543.7 121.8z'/%3E%3Cpath fill='%23fbdfa4' d='M407.8 2545.3l1734.4-215.6L164 1270.3z'/%3E%3Cpath fill='%23351d05' d='M970.3 782.8l909.4-18.7L539-98.4z'/%3E%3Cpath fill='%23ca9e66' d='M42.2 379.7l234.4-525L1289 1242.2z'/%3E%3Cpath fill='%23f1c788' d='M2545.3 979.7l-168.7-1125-703.2 290.6z'/%3E%3Cpath fill='%237d440c' d='M1382.8 1720.3l459.4-581.2-1921.9 131.2z'/%3E%3Cpath fill='%23180000' d='M-145.3 689v1153.2L370.3 651.6z'/%3E%3Cpath fill='%23b4a080' d='M1936 811l431.2 637.4-1950-543.7z'/%3E%3Cpath fill='%233a1d04' d='M1739-51.6l-412.4 328.2 271.8 618.7z'/%3E%3Cpath fill='%23f1efcb' d='M979.7 2254.7l1237.5-1021.9-215.6 1312.5z'/%3E%3Cpath fill='%23c07f2e' d='M557.8 2545.3L267.2 932.8l-412.5 1396.9z'/%3E%3Cpath fill='%237e4b08' d='M2545.3 1036l-300 168.7 159.4 1003.1z'/%3E%3Cpath fill='%23040000' d='M970.3 1373.4l281.3 187.5-243.8-553z'/%3E%3Cpath fill='%23a47239' d='M1495.3 1579.7L1898.4 989l-196.8 750z'/%3E%3Cpath fill='%238e4e11' d='M286 2545.3H-89L23.3 1279.7z'/%3E%3Cpath fill='%23deb475' d='M379.7 1167.2l-225 862.5 778.1 515.6z'/%3E%3Cpath fill='%23b2d5db' d='M1401.6 886l309.3 281.2 168.8-225z'/%3E%3Cpath fill='%23d2b193' d='M1767.2 42.2l403.1-187.5-262.5 1293.7z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:2400,width:2400,type:"jpg"}};t.exports=o.preview,t.exports=Object.assign(t.exports,o)},121:function(t,e,n){var o={src:n.p+"img/41dd76a.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2400 2400'%3E%3Cpath fill='%23a29673' d='M0 0h2400v2400H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23fff' d='M304.7 1223.4L717.2-117.2l1443.7 2662.5z'/%3E%3Cpath fill='%232c0e00' d='M726.6 707.8L2264-145.3l281.2 1275z'/%3E%3Cpath fill='%231d0900' d='M154.7 1411l-300-1556.3 731.2 225z'/%3E%3Cpath fill='%23fff' d='M1945.3 2086L979.7 595.2l-93.8 1800z'/%3E%3Cpath fill='%23533b08' d='M1279.7 1139L2545.3 79.8l-1462.5-225z'/%3E%3Cpath fill='%23fff' d='M1120.3 642.2L473.4 360.9l628.2-421.8z'/%3E%3Cpath fill='%23715e2f' d='M1570.3 2545.3l-262.5-590.6-225 337.5z'/%3E%3Cpath fill='%239b8a3a' d='M876.6 557.8l1218.7 1481.3 450-965.7z'/%3E%3Cpath fill='%23908f3d' d='M642.2 1373.4l-787.5-693.7L98.4 2545.3z'/%3E%3Cpath fill='%23eef6ff' d='M351.6 2498.4L548.4 2236 436 1617.2z'/%3E%3Cpath fill='%23fffffc' d='M1157.8 895.3L2011 2198.4 529.7 1214.1z'/%3E%3Cpath fill='%23f5e5cb' d='M2395.3 2170.3l-375-196.9-675 309.4z'/%3E%3Cpath fill='%23a39275' d='M811 1101.6l150-909.4-403.2 562.5z'/%3E%3Cpath fill='%23f8f7f2' d='M1195.3 473.4L998.4-14l-553 572z'/%3E%3Cpath fill='%23857a29' d='M2226.6 2545.3l-572-318.7 853.2 75z'/%3E%3Cpath fill='%23dfe7e4' d='M1120.3 2217.2l-675-346.9 600 675z'/%3E%3Cpath fill='%23e9f7ff' d='M539 679.7L332.9 885.9l65.6 647z'/%3E%3Cpath fill='%23443411' d='M-145.3 342.2l693.7-487.5-121.8 937.5z'/%3E%3Cpath fill='%23270000' d='M661 154.7l93.7-300L595.3 23.4z'/%3E%3Cpath fill='%239c773c' d='M1307.8 1561l-131.2 65.6 393.7 93.7z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:2400,width:2400,type:"jpg"}};t.exports=o.preview,t.exports=Object.assign(t.exports,o)},124:function(t,e,n){t.exports={srcSet:n.p+"img/00b4f63-480.webp 480w,"+n.p+"img/7e328ce-768.webp 768w,"+n.p+"img/ff303bf-960.webp 960w,"+n.p+"img/011a37a-1080.webp 1080w,"+n.p+"img/104d21d-1200.webp 1200w,"+n.p+"img/dd4364f-1536.webp 1536w,"+n.p+"img/13f3ee4-2160.webp 2160w,"+n.p+"img/1ab22ac-2400.webp 2400w",images:[{path:n.p+"img/00b4f63-480.webp",width:480,height:480},{path:n.p+"img/7e328ce-768.webp",width:768,height:768},{path:n.p+"img/ff303bf-960.webp",width:960,height:960},{path:n.p+"img/011a37a-1080.webp",width:1080,height:1080},{path:n.p+"img/104d21d-1200.webp",width:1200,height:1200},{path:n.p+"img/dd4364f-1536.webp",width:1536,height:1536},{path:n.p+"img/13f3ee4-2160.webp",width:2160,height:2160},{path:n.p+"img/1ab22ac-2400.webp",width:2400,height:2400}],src:n.p+"img/00b4f63-480.webp",toString:function(){return n.p+"img/00b4f63-480.webp"},placeholder:"data:image/webp;base64,UklGRv4CAABXRUJQVlA4IPICAACwDgCdASooACgAPlEij0UjoiEVXVSsOAUEoAnTK4yZe18qDX144Odt1dx7vKsbg8JfCD6r/zst3dyoHuR1e8z3yYfVHAZIEC4jOSqdWagWrP2JEH2tHObHlZac17xTvvnD9/lEBCcDXrU93rlm9nLgmFzu1uYTMheExe6V1YAA/rhRXFitIlFiUnfkaCxMB3q4+H2j7FJ+uqIBzd2FZXmGQSKbFRJ/APHJXS3+FsIrYXnwsBXhXOqsm/5NcygWAwOy58pW699xO2dmMSRnZ2N66//InVKIsra0tRGQnBnLaG/894gtodAxr77KkJOtr6TMn4+NuQi7eG1E+Z/S67/4vDlI0rgpNxQHuaRpOpl0tUXLn/CP0bt52kUlFH9Fk+38XWsI/aTUyT6uVREShMkiN7Nzi1SiDDdyUBO5YKGVuyhPFO/eFPo46LzK8W7Nwvv3zV1yi1wh4v45wKfdOIv99JRk/eIM0++mOzdLuNY6kEb7F9jYvP58Mz5JfCHXsjqg3EDcXGkXqIrHFKRAxqau7Gk0p857vRKPIL1zaOEJrhyBfIwb3cc0aq431k7OvlFnencXCs+e+5WRS5b+3DBlG7c3AdIiR+OO79Dh8wLLkTujsGEvVvHAy737PA6fM7aYX3M5Rv7H7fMOhEWFcC/RWs9MhGBpf9sWi33oTjLpccFK2HIHa6t50dviHoVKHK7BJvewCErA2qbO61QqJQ1e3vdOHyRv3dtf2JCDtQ9+cSLYVfDi8bKvsr2K+M5PKwGS32rxAB/HDnxstsvlV+m1iudHoxO/s3NcHTpXckxiK0GrrsvPMLwR7tIrRbHtX85AJJ6JtZJYRwAz/asvVFCKPDoxcnPXbvIS7Nauu1EF4ZvidXkvq4oLI74sqIABKbyl6K3ohK9Xzktqq9kbS166PveR0OOTsKXxURZI0T2YWaBW9EQwbuVS3wXSsa38568I11ZSVat1YfwFO9HYoDbB8bYfF6UB8jqtFSrPPivwwAAA",width:480,height:480}},125:function(t,e,n){t.exports={srcSet:n.p+"img/de71c67-480.webp 480w,"+n.p+"img/729de95-768.webp 768w,"+n.p+"img/b9f70ed-960.webp 960w,"+n.p+"img/0d8cbc2-1080.webp 1080w,"+n.p+"img/803a7ac-1200.webp 1200w,"+n.p+"img/5d6bf38-1536.webp 1536w,"+n.p+"img/ad67b53-2160.webp 2160w,"+n.p+"img/84a0d62-2400.webp 2400w",images:[{path:n.p+"img/de71c67-480.webp",width:480,height:480},{path:n.p+"img/729de95-768.webp",width:768,height:768},{path:n.p+"img/b9f70ed-960.webp",width:960,height:960},{path:n.p+"img/0d8cbc2-1080.webp",width:1080,height:1080},{path:n.p+"img/803a7ac-1200.webp",width:1200,height:1200},{path:n.p+"img/5d6bf38-1536.webp",width:1536,height:1536},{path:n.p+"img/ad67b53-2160.webp",width:2160,height:2160},{path:n.p+"img/84a0d62-2400.webp",width:2400,height:2400}],src:n.p+"img/de71c67-480.webp",toString:function(){return n.p+"img/de71c67-480.webp"},placeholder:"data:image/webp;base64,UklGRlgDAABXRUJQVlA4IEwDAAAQDgCdASooACgAPk0ejEQioaEXFZgoBMSgCdMoR2xI7sjVqiZQstuBzsummxubwX8Sa1izDNKVwoz/RUz/vUfsDim0At7R42LgSfd6INzWRVtjLzkthUEbyLx5q+1kdZeB3nGIBi6vPu3O4CwCEHk4QR79nPUSvngAAP756+GOs5Hd0r5vv8Lc/6iV7u8uAAZ/Sr9YDB6yB1HOWm+ZSg7bhxw6W2ddkIrCMjtHyz/UrOtqOZh5zI+F/y+uR+U4HSljRxbZbAWwMebwcikDV81VuiY3E3HjdoNeV+32aPjZA9rU++YsXzww7Ugp+r4nJetS6zFLhP//xRGjZFbFIi38G3RNZVmrJUX7y28NdbI+76ykfzeGZsR23TLLM355T+u6HjxqgiR+G+4sGhxmciK0zDC84fytRbT8pHmrKzE15x01PqJ5xSd5m0cuBgbpXIqe1030U1Tys1AGA5xNiaKlAUO6LYmkdLVVF8hWtclQbvUiqfpUI87dTwmLv8IcQuVlE5zQSuuN7MDwuX315gDrpEKQ256Be+i8TDGWya2+ZsneZS+J+95HvqYSHQsrpHj29ftNP1NZx+NPQjxvbrqWP/xLi42k7Cfnqd0EwxcTsW9ivBAnFBWc4oL5DsVO6OqHRZGOWXGcm3UIQBkvxB8qrJZ5qw8ac+UbJp5g05e6nSRT2GLvew+m6YneVGCIzLVIi3jB5C2cPa+HDs68xpbBiMsAao6t3SVSyT3CWVshNEDcJJkNChVHL4Xzz3C3rzv3N+sCitWxqdF59wYvAmSfF3kBMYFDlwE3CkBYDrC4SnpqiAH5LRVoSbcsfHHVkNHWZqKjnEOBCE79Y+M2tyGjtdvIdxEJ8UVGvKrJ7H642pNGijTAdmi9Iyv5PqnSszKI++MrdUWmPYZ4hTWCqFpf4/Sed8jWrMV+OnduLa41u4TDZWwyv9F3fT3PhGfFXdj7j5GCCr6mQEBy3hrs1sZK11OyuH9wIW3WRg3J8RgaLgus8M2++F1WTSIsu2LiFwmtVgHMg0yLcCSjQpIFeIcHvBufeLSxuQWpKVKwoMTHN5MjzCr/w2qtHSuP3Kqv3O2Y3hzgSZfEuDENNdBeGayFO55oYQVYrrDxAAAA",width:480,height:480}},126:function(t,e,n){t.exports={srcSet:n.p+"img/59e11e9-480.jpg 480w,"+n.p+"img/19da376-768.jpg 768w,"+n.p+"img/7b1d988-960.jpg 960w,"+n.p+"img/bd65a00-1080.jpg 1080w,"+n.p+"img/de250d4-1200.jpg 1200w,"+n.p+"img/d6672be-1536.jpg 1536w,"+n.p+"img/5d6c464-2160.jpg 2160w,"+n.p+"img/b17eca7-2400.jpg 2400w",images:[{path:n.p+"img/59e11e9-480.jpg",width:480,height:480},{path:n.p+"img/19da376-768.jpg",width:768,height:768},{path:n.p+"img/7b1d988-960.jpg",width:960,height:960},{path:n.p+"img/bd65a00-1080.jpg",width:1080,height:1080},{path:n.p+"img/de250d4-1200.jpg",width:1200,height:1200},{path:n.p+"img/d6672be-1536.jpg",width:1536,height:1536},{path:n.p+"img/5d6c464-2160.jpg",width:2160,height:2160},{path:n.p+"img/b17eca7-2400.jpg",width:2400,height:2400}],src:n.p+"img/59e11e9-480.jpg",toString:function(){return n.p+"img/59e11e9-480.jpg"},placeholder:"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAYHBQP/xAAuEAACAQMDAgUDAwUAAAAAAAABAgMEBREAEiEGMQcUQVFhEyIyFXGRUoKhsdH/xAAZAQADAQEBAAAAAAAAAAAAAAADBAUGAQL/xAAgEQACAwACAwADAAAAAAAAAAABAgADEQQSISIxI0HB/9oADAMBAAIRAxEAPwDYsXU0MFrpoBMqSRyFXz/SSSM8j5/jU/8AEG+X2h6lhWzUzBZ843qRGT6kk8YI5yPbSt0f1Pdau4RVEdMklJC+ZN6BhuxheD++ny8U1deZ6KHyjMatgQ+5V2exAJHHYHHbPbWQUEEI42aggYWUxbm8VJ6aL6MGY6gHbuXBXOcHuNbfgbVXusvs1Xd2lqp6lBJHUSylvsPIVc/iBnt750m3bou9LHZ6iaiSKulUO9O5xJDI277WU+mVB/uOql0nYb305VpDUUsK0rVRijkZjlodqfTcd8AkkZPt86YFFVS/j+wJuZz7eJTKao3Vc+9XBXC/fwc9zn/GjSta6ypN0rKyeq+rHPtQD1VkyO/yMfxo1MvJLnYUAZI/4fdI3Gbo52SqFGs05d5F/IAAcAngfv6aaqa801uqPKGkoo5I4kiaOvnYxsyMSrrIoYlTk5UjnAwdPPh1RQPZVpCowhI599bvUXRNFf7a8Qp44a1AfpTxxorcj9v96Yo5D9y85yK1K9G+SD9L9Xz31LW9xjd6mnkWKVjwXVSdr47424Az6DVEh6nu94q7ikVE5jau8vGIaUkywJtZQJQ34FlwQF3cEZHfXak8KYKcJcq0yC7b1p2jjjOySEnG4hRwy5zntxjjvqr9JdH0nTtRF+ntN5Gng2U0MpO5WJyzH3JJJ01SbQ5YDAYLkGgVj9kfyTvqW0PbLLJe5aXytVLMhqVRNiliO+30PoTo08eKUKt0Tdg2WxTs/wA5HOjSt9evs90vqydeHl1j83W08bAJHNtB+ffVWtNQmQwG7PJJPc+2jRoVJxvELyFB2MVHIrKC6rkDvjXRnEalSePQ/wDdGjVhSeshso7ZJ/4rXKKPpu4whwoaAqze2eBo0aNJn2JJlRB1UAT/2Q==",width:480,height:480}},127:function(t,e,n){t.exports={srcSet:n.p+"img/c8f1ba0-480.jpg 480w,"+n.p+"img/d4c360b-768.jpg 768w,"+n.p+"img/64541ee-960.jpg 960w,"+n.p+"img/ddae62c-1080.jpg 1080w,"+n.p+"img/06e8966-1200.jpg 1200w,"+n.p+"img/100d05f-1536.jpg 1536w,"+n.p+"img/5a01275-2160.jpg 2160w,"+n.p+"img/21b757b-2400.jpg 2400w",images:[{path:n.p+"img/c8f1ba0-480.jpg",width:480,height:480},{path:n.p+"img/d4c360b-768.jpg",width:768,height:768},{path:n.p+"img/64541ee-960.jpg",width:960,height:960},{path:n.p+"img/ddae62c-1080.jpg",width:1080,height:1080},{path:n.p+"img/06e8966-1200.jpg",width:1200,height:1200},{path:n.p+"img/100d05f-1536.jpg",width:1536,height:1536},{path:n.p+"img/5a01275-2160.jpg",width:2160,height:2160},{path:n.p+"img/21b757b-2400.jpg",width:2400,height:2400}],src:n.p+"img/c8f1ba0-480.jpg",toString:function(){return n.p+"img/c8f1ba0-480.jpg"},placeholder:"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcGCAEEBQP/xAAuEAABAwMDAgUDBAMAAAAAAAABAgMEBREhAAYSMUETIlFhcQcUgSMyobEIFcH/xAAZAQACAwEAAAAAAAAAAAAAAAAEBQACAwH/xAAlEQACAQMCBQUAAAAAAAAAAAABAgADERITMQQFISJBscHR4fH/2gAMAwEAAhEDEQA/AFAwJSpaHLhbZ4lCQclXHpq5219rwKNt5xyXQU1ipTW4r70R1aAhbrSEBJBVhPGwycY99Vh+nuz5lf3fDpUBDTawrxS4+ohCEIIUokjJwLYznVgtyOz6q5/rYDs2l1RE3lFkoUrg6lGQu4xxPIgpPS3ew0op4gZkRgSx7AYs/wDKj7ym/VJNQPiqYkQ23I61J8iSkWLfIdci+c+b86V8qc8aCzLkJLsmU4pWeiUj09c30yPrttGswt1Rn6kpyXKnRErcfWvkVFJUnj5bJsBboAc51AK/Tpr8ONFaiOlDbQ4njbNz/GdD1lTV6C01TJRve00oVSMqSiK8tTZQLtKx0tkX/kfGjWYdIqbcZtyUy2wQvkoKV5lD/ujVqaKL2nciY9dmiFt/cBrUhspahsPuL4Ni9g2QbaaWzqhQ641Eq1NcUfuWgtCXCAQPjv36aU8CoIfq0cBgIQ++loNOq4+KpQPJIvjva/vrs7ZlO06rwktRTGR43FUdHXiSVCwNrEk3P51OXudPFh5+IK4JJMdO9Nrwt1beTT3iGnm/1Iz1r+Gq39HuNV2rNEeh1VyJIs2/GX4a0qBPmHf47399WMnTX3ZMcw57MVDQAfbUgL5Ej9pzcWuOnrqH/VihPPRI1fCEcwgNTfC6eiVj+vbGteY0M11FHUen1K0qhXtPmJRNGPI+WMu+QAjv8nRrsrUXHnCWrtk3C8gLt0HvjN9GkeZhN2nhsdMWRvSC67wS1GClgIJthJsbHAIxn4139syqLU6oinKkPKlsz0qjOc+TriAQLFXfp39dGjR3C1CgRRsSfaDNteb+/wCuSaduOIxTXHQzELBDbpJWpsp6KOSb9fwNS6sb6gKoyoT8ByY0+wlRKEck8TbBt0z3PS2jRo5q7hmHj9l8AbSA1SfttyG4+qCuPJZADamyf1VWI/acXI7i2jRo0kqVCTtNDP/Z",width:480,height:480}},133:function(t,e,n){t.exports=(()=>{const t=n(134);return{sources:[{srcset:n(135).srcSet,type:"image/webp"},{srcset:t.srcSet,type:"image/jpeg"}],placeholder:(({src:t,preview:e})=>({url:t,base64:e}))(n(136)),width:t.width,height:t.height}})()},134:function(t,e,n){t.exports={srcSet:n.p+"img/5238f49-480.jpg 480w,"+n.p+"img/4c3220c-768.jpg 768w,"+n.p+"img/0467060-960.jpg 960w,"+n.p+"img/13e89ef-1080.jpg 1080w,"+n.p+"img/e26a129-1200.jpg 1200w,"+n.p+"img/f3aa693-1280.jpg 1280w",images:[{path:n.p+"img/5238f49-480.jpg",width:480,height:270},{path:n.p+"img/4c3220c-768.jpg",width:768,height:432},{path:n.p+"img/0467060-960.jpg",width:960,height:540},{path:n.p+"img/13e89ef-1080.jpg",width:1080,height:608},{path:n.p+"img/e26a129-1200.jpg",width:1200,height:675},{path:n.p+"img/f3aa693-1280.jpg",width:1280,height:720}],src:n.p+"img/5238f49-480.jpg",toString:function(){return n.p+"img/5238f49-480.jpg"},width:480,height:270}},135:function(t,e,n){t.exports={srcSet:n.p+"img/21cdd72-480.webp 480w,"+n.p+"img/7a9a549-768.webp 768w,"+n.p+"img/8483d94-960.webp 960w,"+n.p+"img/7bc431b-1080.webp 1080w,"+n.p+"img/cbc6434-1200.webp 1200w,"+n.p+"img/d2e6913-1280.webp 1280w",images:[{path:n.p+"img/21cdd72-480.webp",width:480,height:270},{path:n.p+"img/7a9a549-768.webp",width:768,height:432},{path:n.p+"img/8483d94-960.webp",width:960,height:540},{path:n.p+"img/7bc431b-1080.webp",width:1080,height:608},{path:n.p+"img/cbc6434-1200.webp",width:1200,height:675},{path:n.p+"img/d2e6913-1280.webp",width:1280,height:720}],src:n.p+"img/21cdd72-480.webp",toString:function(){return n.p+"img/21cdd72-480.webp"},width:480,height:270}},136:function(t,e,n){var o={src:n.p+"img/f312213.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cpath fill='%23746d47' d='M0 0h1280v720H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath d='M47.5 247.5l1310 430-1235 120z'/%3E%3Cpath fill='%23ccc2a8' d='M1352.5 502.5l-80-580-1350 185z'/%3E%3Cpath fill='%23ff0' d='M107.5 797.5l-185-165 95-615z'/%3E%3Cpath fill='%230f0515' d='M1157.5 712.5l-685 85 580-675z'/%3E%3Cpath fill='%23ff0' d='M1357.5 347.5l-115 425v-850z'/%3E%3Cpath fill='%238a7b00' d='M852.5 657.5l-725 10 45-215z'/%3E%3Cpath fill='%23ffeec9' d='M1242.5 17.5l-170 410 125 55z'/%3E%3Cpath fill='%23ff0' d='M7.5 17.5l85 680-170-85z'/%3E%3Cpath fill='%239fa4b8' d='M962.5 472.5l-35-550h-605z'/%3E%3Cpath fill='%23c3b179' d='M167.5 332.5l-20-410 400 375z'/%3E%3Cpath fill='%2343475d' d='M1067.5 602.5l-190-355-575 80z'/%3E%3Cpath fill='%231a0d03' d='M1242.5 492.5l-865 215 855 90z'/%3E%3Cpath fill='%23ff0' d='M42.5-77.5l-10 660-110-390zm1200 875v-670l115 375z'/%3E%3Cpath fill='%232d0e18' d='M1042.5 127.5l-60 320 150-170z'/%3E%3Cpath fill='%23090f1e' d='M492.5 492.5l-445-45-5-155z'/%3E%3Cpath fill='%23100000' d='M122.5 652.5l-170 145 565-115z'/%3E%3Cpath fill='%23fdffff' d='M787.5 92.5l180-30-210-55z'/%3E%3Cpath fill='%23bcaf84' d='M992.5 577.5l60 5-25-200z'/%3E%3Cpath fill='%2324180e' d='M947.5 572.5l-780 5 515-210z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:720,width:1280,type:"jpg"}};t.exports=o.preview,t.exports=Object.assign(t.exports,o)},138:function(t,e,n){var content=n(151);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("06c14ebb",content,!0,{sourceMap:!1})},139:function(t,e,n){var content=n(153);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("05fc700b",content,!0,{sourceMap:!1})},150:function(t,e,n){"use strict";n(138)},151:function(t,e,n){(e=n(5)(!1)).push([t.i,'.component-stage[data-v-c3a95a0a]{position:relative;height:100vh;max-height:100%;margin:0;overflow:hidden}.component-stage .claim[data-v-c3a95a0a]{display:block;font-size:25px;line-height:50px;text-transform:none}.component-stage .headline[data-v-c3a95a0a]{display:block;font-size:30px;line-height:60px}@media (min-width:768px){.component-stage .headline[data-v-c3a95a0a]{font-size:40px;line-height:80px}}.component-stage[data-v-c3a95a0a] picture:before{display:block;padding-top:56.25%;content:""}.component-stage[data-v-c3a95a0a] picture img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.component-stage h1[data-v-c3a95a0a]{position:absolute;bottom:0;left:0;width:100%;padding:20px 0;margin:0;color:#fff;text-align:center;background:rgba(0,0,0,.4)}@media (min-width:768px){.component-stage h1[data-v-c3a95a0a]{position:absolute;top:50px;right:0;bottom:auto;left:auto;width:400px}}',""]),t.exports=e},152:function(t,e,n){"use strict";n(139)},153:function(t,e,n){(e=n(5)(!1)).push([t.i,".page-full-example-with-components[data-v-09be17f0]{font-size:1.25em}.page-full-example-with-components>*[data-v-09be17f0]{margin:25px 0}.page-full-example-with-components[data-v-09be17f0]>:first-child{margin-top:0}.page-full-example-with-components[data-v-09be17f0]>:last-child{margin-bottom:0}",""]),t.exports=e},188:function(t,e,n){"use strict";n.r(e);var o={components:{SpeedkitPicture:n(119).a},props:{picture:{type:Object,default:()=>({})},headline:{type:String,default:()=>"Headline"},claim:{type:String,default:()=>"Claim"}}},l=(n(150),n(2)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-stage"},[n("speedkit-picture",t._b({},"speedkit-picture",t.picture,!1)),t._v(" "),n("h1",{directives:[{name:"font",rawName:"v-font",value:[t.$getFont("Montserrat Alternates",700,"normal",{selector:".headline"}),t.$getFont("Comic Neue",300,"italic",{selector:".claim"})],expression:"[\n      $getFont('Montserrat Alternates', 700, 'normal', {selector: '.headline'}),\n      $getFont('Comic Neue', 300, 'italic', {selector: '.claim'})\n    ]"}]},[n("span",{staticClass:"headline"},[t._v(t._s(t.headline))]),t._v(" "),n("span",{staticClass:"claim"},[t._v(t._s(t.claim))])])],1)}),[],!1,null,"c3a95a0a",null);e.default=component.exports},212:function(t,e,n){"use strict";n.r(e);const o="image/webp",l="image/jpeg";var r={asyncData(){const t=n(124),e=n(126),r=n(120),c=n(125),h=n(127),d=n(121);return{contentA:"<p>This is a basic test with single font variant.</p>",stage:{critical:!0,headline:"Stage Headline",claim:"Stage Claim",picture:{sources:[{srcset:t.srcSet,type:o},{srcset:e.srcSet,type:l}],placeholder:(({src:t,preview:e})=>({url:t,base64:e}))(r),width:e.width,height:e.height,alt:"Stage Alt Text",title:"Stage Title Text",caption:null}},youtubePlayer:{poster:Object.assign({alt:"Youtube Alt Text",title:"Youtube Title Text",caption:null},n(133))},videoPlayer:{poster:{sources:[{srcset:t.srcSet,type:o},{srcset:e.srcSet,type:l}],placeholder:(({src:t,preview:e})=>({url:t,base64:e}))(r),width:e.width,height:e.height,alt:"Video Player Alt Text",title:"Video Player Title Text",caption:null}},textA:{text:"<h2>Text Headline</h2><p>Aliqua odit <strong>anim vehicula</strong> varius eget feugiat beatae. <em><strong>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</strong></em>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"},imageTextA:{text:"<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>",picture:{sources:[{srcset:c.srcSet,type:o},{srcset:h.srcSet,type:l}],placeholder:(({src:t,preview:e})=>({url:t,base64:e}))(d),width:h.width,height:h.height,alt:"Image Text A Alt Text",title:"Image Text A Title Text",caption:null}},textB:{text:"<h2>Text Headline</h2><p>Aliqua odit <strong>anim vehicula</strong> varius eget feugiat beatae. <em><strong>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</strong></em>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"}}},speedkitComponents:{ComponentStage:()=>Promise.resolve().then(n.bind(null,188)),ComponentTextA:()=>n.e(0).then(n.bind(null,217)),ComponentTextImage:()=>n.e(33).then(n.bind(null,218)),ComponentTextB:()=>n.e(34).then(n.bind(null,219))},methods:{onLoadFont(t){}}},c=(n(152),n(2)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-full-example-with-components"},[n("component-stage",t._b({on:{"load:font":t.onLoadFont}},"component-stage",t.stage,!1)),t._v(" "),n("component-text-a",t._b({on:{"load:font":t.onLoadFont}},"component-text-a",t.textA,!1)),t._v(" "),n("component-text-image",t._b({},"component-text-image",t.imageTextA,!1)),t._v(" "),n("component-text-b",t._b({},"component-text-b",t.textB,!1))],1)}),[],!1,null,"09be17f0",null);e.default=component.exports}}]);