(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{278:function(e,t,n){var content=n(281);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("295b85b1",content,!0,{sourceMap:!1})},279:function(e,t,n){"use strict";n(280);var r=n(8),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{directives:[{name:"font",rawName:"v-font",value:this.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,"ee1123ec",null);t.a=component.exports},280:function(e,t,n){"use strict";n(278)},281:function(e,t,n){(t=n(25)(!1)).push([e.i,".preview-container[data-v-ee1123ec]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-ee1123ec]:first-child{margin-top:0}.preview-container[data-v-ee1123ec]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-ee1123ec]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-ee1123ec]{flex-direction:row}}.preview-container>div[data-v-ee1123ec]{display:flex;align-items:center;justify-content:center;width:100vw;height:50vh}@media (orientation:landscape){.preview-container>div[data-v-ee1123ec]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-ee1123ec]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-ee1123ec]{font-size:2em}.preview-container .preview-container__info p[data-v-ee1123ec]{line-height:1.375;text-align:center}.preview-container .preview-container__info button[data-v-ee1123ec]{width:90%;margin:0 auto}.preview-container .preview-container__preview[data-v-ee1123ec]{font-size:1.125em;--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-ee1123ec]{background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}}.preview-container .preview-container__preview>article[data-v-ee1123ec]{text-align:center}.preview-container .preview-container__preview>article[data-v-ee1123ec],.preview-container .preview-container__preview>div[data-v-ee1123ec]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-ee1123ec]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-ee1123ec]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-ee1123ec]{position:relative;width:100%;height:100%}",""]),e.exports=t},284:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}));var r;n(7);function c(){return r||(r=new Promise((function(t){var img=new e.Image;img.onload=function(){return t(!0)},img.onerror=function(){return t(!1)},img.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"}))),r}function l(element,t){var n={};return e.document&&(n=e.document.createElement(element)),t in n}}).call(this,n(12))},296:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(7),n(20),n(22),n(187),n(18),n(80);var r=n(118),c=function(){function e(){this.map=new Map}return e.prototype.getEntry=function(e){return this.map.has(e)||this.map.set(e,new r.a),this.map.get(e)},e}(),l=n(58),h=n(284),o=new c;function d(e,t,n){var r=Object(l.a)(e.srcset),c=o.getEntry(r);return c.promise.then((function(){return t()})),Object(h.a)("link","imageSrcset")?{link:[w(e,r,c.resolve,n)]}:function(e,t,n){var img=new Image;img.onload=t,img.crossorigin=n,img.srcset=e.srcset}(e,c.resolve,n)}function w(e,t,n,r){return{hid:t,rel:"preload",as:"image",crossorigin:r,callback:n,imageSrcset:e.srcset}}},311:function(e,t,n){e.exports=(()=>{const e=n(312);return{sources:[{srcset:n(313).srcSet,type:"image/webp"},{srcset:e.srcSet,type:"image/jpeg"}],placeholder:(({src:e,preview:t})=>({url:e,base64:t}))(n(314)),width:e.width,height:e.height}})()},312:function(e,t,n){e.exports={srcSet:n.p+"img/5238f49-480.jpg 480w,"+n.p+"img/4c3220c-768.jpg 768w,"+n.p+"img/0467060-960.jpg 960w,"+n.p+"img/13e89ef-1080.jpg 1080w,"+n.p+"img/e26a129-1200.jpg 1200w,"+n.p+"img/f3aa693-1280.jpg 1280w",images:[{path:n.p+"img/5238f49-480.jpg",width:480,height:270},{path:n.p+"img/4c3220c-768.jpg",width:768,height:432},{path:n.p+"img/0467060-960.jpg",width:960,height:540},{path:n.p+"img/13e89ef-1080.jpg",width:1080,height:608},{path:n.p+"img/e26a129-1200.jpg",width:1200,height:675},{path:n.p+"img/f3aa693-1280.jpg",width:1280,height:720}],src:n.p+"img/5238f49-480.jpg",toString:function(){return n.p+"img/5238f49-480.jpg"},width:480,height:270}},313:function(e,t,n){e.exports={srcSet:n.p+"img/21cdd72-480.webp 480w,"+n.p+"img/7a9a549-768.webp 768w,"+n.p+"img/8483d94-960.webp 960w,"+n.p+"img/7bc431b-1080.webp 1080w,"+n.p+"img/cbc6434-1200.webp 1200w,"+n.p+"img/d2e6913-1280.webp 1280w",images:[{path:n.p+"img/21cdd72-480.webp",width:480,height:270},{path:n.p+"img/7a9a549-768.webp",width:768,height:432},{path:n.p+"img/8483d94-960.webp",width:960,height:540},{path:n.p+"img/7bc431b-1080.webp",width:1080,height:608},{path:n.p+"img/cbc6434-1200.webp",width:1200,height:675},{path:n.p+"img/d2e6913-1280.webp",width:1280,height:720}],src:n.p+"img/21cdd72-480.webp",toString:function(){return n.p+"img/21cdd72-480.webp"},width:480,height:270}},314:function(e,t,n){var r={src:n.p+"img/f312213.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cpath fill='%23746d47' d='M0 0h1280v720H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath d='M52.5 242.5l1305 435-1245 120z'/%3E%3Cpath fill='%23ccc3a7' d='M1327.5 497.5l-45-575-1360 180z'/%3E%3Cpath fill='%23ff0' d='M102.5 767.5l-180-100 100-640z'/%3E%3Cpath fill='%23110716' d='M1057.5 117.5l-525 610 655 70z'/%3E%3Cpath fill='%23ff0' d='M1357.5 367.5l-120-425 5 855z'/%3E%3Cpath fill='%23938100' d='M282.5 462.5l480 205-655-10z'/%3E%3Cpath fill='%23ff0' d='M-77.5 377.5l140 420-25-875z'/%3E%3Cpath fill='%23fff1cf' d='M1252.5 12.5l-65 475-115-65z'/%3E%3Cpath fill='%23afa994' d='M182.5 342.5l-55-420 1125 160z'/%3E%3Cpath fill='%234c526d' d='M452.5 407.5l105-255 620 340z'/%3E%3Cpath fill='%231a0e05' d='M247.5 747.5l990-255 10 270z'/%3E%3Cpath fill='%23ff0' d='M1247.5 197.5l110 435-120 165z'/%3E%3Cpath fill='%23adaec2' d='M942.5-77.5l-375 195 385 250z'/%3E%3Cpath fill='%23091221' d='M42.5 442.5l540 50-530-205z'/%3E%3Cpath fill='%23c3bc10' d='M122.5 167.5v-110l415 50z'/%3E%3Cpath fill='%233f1614' d='M1152.5 207.5l-160-45-15 305z'/%3E%3Cpath fill='%23ff0' d='M7.5 797.5l85-245-130-360z'/%3E%3Cpath fill='%23bfae82' d='M982.5 582.5l65 10-20-190z'/%3E%3Cpath fill='%23281d18' d='M972.5 572.5l-370-250-400 255z'/%3E%3Cpath fill='%23b1a303' d='M122.5 497.5l415 5-210 55z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:720,width:1280,type:"jpg"}};e.exports=r.preview,e.exports=Object.assign(e.exports,r)},352:function(e,t,n){e.exports=(()=>{const e=n(353);return{sources:[{srcset:n(354).srcSet,type:"image/webp"},{srcset:e.srcSet,type:"image/jpeg"}],placeholder:(({src:e,preview:t})=>({url:e,base64:t}))(n(355)),width:e.width,height:e.height}})()},353:function(e,t,n){e.exports={srcSet:n.p+"img/989de56-480.jpg 480w,"+n.p+"img/860842d-768.jpg 768w,"+n.p+"img/8ede879-960.jpg 960w,"+n.p+"img/df666a4-1080.jpg 1080w,"+n.p+"img/0683296-1200.jpg 1200w,"+n.p+"img/984bf0c-1280.jpg 1280w",images:[{path:n.p+"img/989de56-480.jpg",width:480,height:270},{path:n.p+"img/860842d-768.jpg",width:768,height:432},{path:n.p+"img/8ede879-960.jpg",width:960,height:540},{path:n.p+"img/df666a4-1080.jpg",width:1080,height:608},{path:n.p+"img/0683296-1200.jpg",width:1200,height:675},{path:n.p+"img/984bf0c-1280.jpg",width:1280,height:720}],src:n.p+"img/989de56-480.jpg",toString:function(){return n.p+"img/989de56-480.jpg"},width:480,height:270}},354:function(e,t,n){e.exports={srcSet:n.p+"img/6e81844-480.webp 480w,"+n.p+"img/000570c-768.webp 768w,"+n.p+"img/542b50c-960.webp 960w,"+n.p+"img/b4b2178-1080.webp 1080w,"+n.p+"img/14fed16-1200.webp 1200w,"+n.p+"img/76320eb-1280.webp 1280w",images:[{path:n.p+"img/6e81844-480.webp",width:480,height:270},{path:n.p+"img/000570c-768.webp",width:768,height:432},{path:n.p+"img/542b50c-960.webp",width:960,height:540},{path:n.p+"img/b4b2178-1080.webp",width:1080,height:608},{path:n.p+"img/14fed16-1200.webp",width:1200,height:675},{path:n.p+"img/76320eb-1280.webp",width:1280,height:720}],src:n.p+"img/6e81844-480.webp",toString:function(){return n.p+"img/6e81844-480.webp"},width:480,height:270}},355:function(e,t,n){var r={src:n.p+"img/36b4356.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cpath fill='%231e2133' d='M0 0h1280v720H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23d1d5e4' d='M512.5 182.5l-285 420 790-320z'/%3E%3Cpath d='M-77.5 702.5l135-780 340 875z'/%3E%3Cpath fill='%2300000b' d='M-77.5 797.5l1395-540-45 540z'/%3E%3Cpath fill='%23164fb8' d='M382.5 317.5l-135-270 445 195z'/%3E%3Cpath fill='%23e0d7de' d='M627.5 297.5l225-135-80 275z'/%3E%3Cpath fill='%23000007' d='M1357.5-42.5l-765-35 590 560z'/%3E%3Cpath fill='%23c9c4c5' d='M202.5 542.5l320-270 30 130z'/%3E%3Cpath fill='%235e5a5d' d='M1012.5 372.5l-100-155-560 350z'/%3E%3Cpath fill='%2300043d' d='M652.5 302.5l85-375-610-5z'/%3E%3Cpath d='M297.5 42.5l-195 755-180-875z'/%3E%3Cpath fill='%233cb0fe' d='M377.5 127.5l45 140 120-10z'/%3E%3Cpath fill='%23e6e0d8' d='M862.5 207.5l-120 10-20 185z'/%3E%3Cpath fill='%232c2b19' d='M662.5 237.5l-85 250-35-115z'/%3E%3Cpath fill='%236e6a76' d='M512.5 377.5l10 215-365-70z'/%3E%3Cpath fill='%23040946' d='M912.5 147.5l240 650 205-420z'/%3E%3Cpath fill='%23cdc9ce' d='M472.5 287.5l-190 210 370-225z'/%3E%3Cpath fill='%230a0701' d='M1062.5 797.5l-215-410-780 355z'/%3E%3Cpath fill='%23ecede5' d='M957.5 382.5l-75 30 85-75z'/%3E%3Cpath fill='%23353539' d='M432.5 437.5l35 65 20-195z'/%3E%3Cpath fill='%234e4e49' d='M967.5 332.5l-145-200 15 265z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:720,width:1280,type:"jpg"}};e.exports=r.preview,e.exports=Object.assign(e.exports,r)},385:function(e,t,n){"use strict";n.r(t);var r=n(330),c=n(279),l={components:{SpeedkitYoutube:r.a,OrganismPreviewContainer:c.a},data:function(){return{iframe:{id:"cLKvbhfVBUU",poster:Object.assign({alt:"Alt Text",title:"Title Text",caption:null},n(311))}}}},h=n(8),o=Object(h.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("div",[n("speedkit-youtube",e._b({},"speedkit-youtube",e.iframe,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("Critical"),n("br"),e._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports,d={components:{SpeedkitYoutube:r.a,OrganismPreviewContainer:c.a},data:function(){return{iframe:{id:"VBafwg16xpU",poster:Object.assign({alt:"Alt Text",title:"Title Text",caption:null},n(352))}}}},w={components:{Critical:o,Lazy:Object(h.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("div",[n("speedkit-youtube",e._b({},"speedkit-youtube",e.iframe,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports}},f=Object(h.a)(w,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("critical",{attrs:{critical:""}}),this._v(" "),t("lazy")],1)}),[],!1,null,null,null);t.default=f.exports}}]);