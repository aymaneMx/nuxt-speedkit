(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{315:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r={webp:"image/webp",jpg:"image/jpeg",png:"image/png"};function o(e){return r[String(e)]}},316:function(e,t,n){var content=n(324);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("841b0088",content,!0,{sourceMap:!1})},317:function(e,t,n){"use strict";n(323);var r=n(4),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preview-container"},[n("div",{staticClass:"preview-container__preview"},[e._t("default")],2),e._v(" "),n("div",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"preview-container__info"},[e._t("title",[n("p",[e._v("Preview Info")])])],2)])}),[],!1,null,"fa2458f0",null);t.a=component.exports},318:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return d}));n(211);var r,o=!(!(r=e.document.createElement("canvas")).getContext||!r.getContext("2d"))&&0===r.toDataURL("image/webp").indexOf("data:image/webp");function d(){var t=e.document.createElement("link").relList;return function(element,t){var n={};e.document&&(n=e.document.createElement(element));if(t in n)return!0;return!1}("link","imageSrcset")&&!!(t&&t.supports&&t.supports("preload"))}}).call(this,n(18))},319:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(29),n(108),n(10),n(35),n(109),n(110),n(111),n(112),n(113),n(114),n(115),n(116),n(117),n(118),n(119),n(120),n(121),n(36);var r=n(107),o=function(){function e(){this.map=new Map}return e.prototype.getPromise=function(e,t){if(!this.map.has(e)){var n=new r.a;this.map.set(e,n.promise),t(n.resolve,n.reject)}return this.map.get(e)},e}()},322:function(e,t,n){"use strict";(function(e){n(325);e.IntersectionObserver=e.IntersectionObserver||function(){function e(){}var t=e.prototype;return t.observe=function(){},t.unobserve=function(){},e}(),t.a={abstract:!0,props:{root:{type:e.HTMLElement,default:function(){return null}},rootMargin:{type:String,default:function(){return"0px"}},threshold:{type:Array,default:function(){return[0]}},trackVisibility:{type:Boolean,default:function(){return!1}},delay:{type:Number,default:0}},created:function(){var e,t=this;if(!this.$attrs.critical||!this.$options.critical){var n={root:(e=this).root,rootMargin:e.rootMargin,threshold:e.threshold,trackVisibility:e.trackVisibility,delay:e.delay};this.observer=new IntersectionObserver((function(e){var n=e[0];return t.onIntersect(n)}),n)}},mounted:function(){this.observer&&this.observer.observe(this.$el)},destroyed:function(){this.observer&&this.observer.disconnect()},methods:{onIntersect:function(e){e.isIntersecting&&(this.observer.unobserve(this.$el),this.triggerEnter())},triggerEnter:function(e){this.$emit("enter",e)}},render:function(){try{return this.$slots.default[0]}catch(e){throw new Error("IntersectionObserver.vue can only render one, and exactly one child component.")}}}}).call(this,n(18))},323:function(e,t,n){"use strict";n(316)},324:function(e,t,n){var r=n(12)(!1);r.push([e.i,".preview-container[data-v-fa2458f0]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-fa2458f0]:first-child{margin-top:0}.preview-container[data-v-fa2458f0]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-fa2458f0]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-fa2458f0]{flex-direction:row}}.preview-container>div[data-v-fa2458f0]{display:flex;align-items:center;justify-content:center;width:100%;height:50vh;overflow:hidden}@media (orientation:landscape){.preview-container>div[data-v-fa2458f0]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-fa2458f0]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-fa2458f0]{font-size:2em}.preview-container .preview-container__info p[data-v-fa2458f0]{line-height:1.375;text-align:center}.preview-container .preview-container__info button[data-v-fa2458f0]{width:90%;margin:0 auto}.preview-container .preview-container__preview[data-v-fa2458f0]{font-size:1.125em;--bg-opacity:1;background-color:rgb(0 0 0/40%)}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-fa2458f0]{background-color:rgb(255 255 255/40%)}}.preview-container .preview-container__preview>article[data-v-fa2458f0]{text-align:center}.preview-container .preview-container__preview>article[data-v-fa2458f0],.preview-container .preview-container__preview>div[data-v-fa2458f0]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-fa2458f0]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-fa2458f0]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-fa2458f0]{position:relative;width:100%;height:100%}",""]),e.exports=r},340:function(e,t,n){"use strict";var r=n(322).a,o=n(4),component=Object(o.a)(r,undefined,undefined,!1,null,null,null);t.a=component.exports},341:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return d}));n(123),n(29),n(10),n(35),n(36),n(37);var r=n(7);function o(e,t,n){return Promise.all(e.map(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(source){var r,o,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(source);case 2:return r=e.sent,o=r[0].url,d=r[1],f=r[2].placeholder,e.abrupt("return",Object.assign(c(o,l(d)),{dataURI:n&&f}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then(f)}function d(e,t){return Promise.all(e.map(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(source){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(source);case 2:return n=e.sent,r=n[0].url,o=n[1],e.abrupt("return",c(r,l(o)));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then(f)}function c(e,t){var n=t.min;return{size:t,media:n.media,breakpoint:n.breakpoint,width:t.max.width,url:e}}function l(e){var t=Array.from(e).sort((function(a,b){return a.width>b.width?1:-1})),n=t.shift();return{min:n,max:t.pop()||n}}function f(e){return e.sort((function(a,b){return a.width<b.width?1:-1}))}},377:function(e,t,n){var content=n(417);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("df8dc302",content,!0,{sourceMap:!1})},416:function(e,t,n){"use strict";n(377)},417:function(e,t,n){var r=n(12)(!1);r.push([e.i,'div[data-v-5539ad4a]{position:relative;overflow:hidden}.nuxt-speedkit__speedkit-youtube[data-v-5539ad4a]{width:100%}.nuxt-speedkit__speedkit-youtube[data-v-5539ad4a] iframe{position:absolute;top:0;width:100%;height:100%}.nuxt-speedkit__speedkit-youtube .poster[data-v-5539ad4a]{position:relative;display:block;width:100%;padding:0;cursor:pointer;background:transparent;border:none;border-radius:0;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:opacity .2s ease-in}.nuxt-speedkit__speedkit-youtube .poster .icon[data-v-5539ad4a]{position:absolute;top:50%;left:50%;width:68px;transform:translate(-50%,-50%)}.nuxt-speedkit__speedkit-youtube .poster .icon path[data-v-5539ad4a]:first-child{fill:#212121;fill-opacity:.8;transition:fill .1s cubic-bezier(.4,0,1,1),fill-opacity .1s cubic-bezier(.4,0,1,1)}.nuxt-speedkit__speedkit-youtube .poster:hover path[data-v-5539ad4a]:first-child{fill:red;fill-opacity:1;transition:fill .1s cubic-bezier(0,0,.2,1),fill-opacity .1s cubic-bezier(0,0,.2,1)}.nuxt-speedkit__speedkit-youtube svg[data-v-5539ad4a]{transition:opacity .2s linear,transform .2s linear}.nuxt-speedkit__speedkit-youtube.js--playing .poster[data-v-5539ad4a]{pointer-events:none;opacity:0}.nuxt-speedkit__speedkit-youtube .spinner[data-v-5539ad4a]{position:absolute;top:50%;left:50%;z-index:18;width:48px;pointer-events:none;transform:translate(-50%,-50%)}.nuxt-speedkit__speedkit-youtube .spinner[data-v-5539ad4a]:before{display:block;padding-top:100%;content:""}.nuxt-speedkit__speedkit-youtube .spinner .spinner-container[data-v-5539ad4a]{position:absolute;top:50%;left:50%;width:100%;padding-bottom:100%;margin-top:-50%;margin-left:-50%;pointer-events:none;-webkit-animation:spinner-linspin-data-v-5539ad4a 1568.23529647ms linear infinite;animation:spinner-linspin-data-v-5539ad4a 1568.23529647ms linear infinite}.nuxt-speedkit__speedkit-youtube .spinner .spinner-rotator[data-v-5539ad4a]{position:absolute;width:100%;height:100%;-webkit-animation:spinner-easespin-data-v-5539ad4a 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:spinner-easespin-data-v-5539ad4a 5332ms cubic-bezier(.4,0,.2,1) infinite both}.nuxt-speedkit__speedkit-youtube .spinner .spinner-left[data-v-5539ad4a]{position:absolute;top:0;right:49%;bottom:0;left:0;overflow:hidden}.nuxt-speedkit__speedkit-youtube .spinner .spinner-right[data-v-5539ad4a]{position:absolute;top:0;right:0;bottom:0;left:49%;overflow:hidden}.nuxt-speedkit__speedkit-youtube .spinner .spinner-circle[data-v-5539ad4a]{position:absolute;box-sizing:border-box;width:200%;height:100%;border:4px solid #b81c22;border-bottom-color:transparent;border-radius:50%}.nuxt-speedkit__speedkit-youtube .spinner .spinner-left .spinner-circle[data-v-5539ad4a]{border-right-color:transparent;-webkit-animation:spinner-left-spin-data-v-5539ad4a 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:spinner-left-spin-data-v-5539ad4a 1333ms cubic-bezier(.4,0,.2,1) infinite both}.nuxt-speedkit__speedkit-youtube .spinner .spinner-right .spinner-circle[data-v-5539ad4a]{left:-100%;border-left-color:transparent;-webkit-animation:spinner-right-spin-data-v-5539ad4a 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:spinner-right-spin-data-v-5539ad4a 1333ms cubic-bezier(.4,0,.2,1) infinite both}@-webkit-keyframes rotate-data-v-5539ad4a{0%{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@keyframes rotate-data-v-5539ad4a{0%{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@-webkit-keyframes spinner-linspin-data-v-5539ad4a{to{transform:rotate(1turn)}}@keyframes spinner-linspin-data-v-5539ad4a{to{transform:rotate(1turn)}}@-webkit-keyframes spinner-easespin-data-v-5539ad4a{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@keyframes spinner-easespin-data-v-5539ad4a{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@-webkit-keyframes spinner-left-spin-data-v-5539ad4a{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@keyframes spinner-left-spin-data-v-5539ad4a{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@-webkit-keyframes spinner-right-spin-data-v-5539ad4a{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}@keyframes spinner-right-spin-data-v-5539ad4a{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}',""]),e.exports=r},533:function(e,t,n){"use strict";n.r(t);n(37);var r=n(7),o=n(342),d=n.n(o),c=n(107),l=n(340),f=n(343),v={components:{IntersectionObserver:l.a,SpeedkitPicture:f.a},props:{id:{type:String,required:!0},autoplay:{type:Boolean,default:!1}},data:function(){return{playing:!1,loading:!1,player:null,playerReady:new c.a,deferred:new c.a}},computed:{sources:function(){return[{src:"https://img.youtube.com/vi/"+this.id+"/maxresdefault.jpg",sizes:this.sizes}]}},methods:{onClick:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.deferred.resolve(),t.next=3,e.play();case 3:case"end":return t.stop()}}),t)})))()},onEnter:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.deferred.resolve(),!e.autoplay){t.next=4;break}return t.next=4,e.play();case 4:case"end":return t.stop()}}),t)})))()},play:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.playerReady.promise;case 3:e.player.playVideo();case 4:case"end":return t.stop()}}),t)})))()},onLoad:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.deferred.promise;case 2:e.loadPlayer();case 3:case"end":return t.stop()}}),t)})))()},loadPlayer:function(){var e=this;this.player=d()(this.$refs.youtube,{host:"https://www.youtube-nocookie.com",videoId:this.id,playerVars:{playsinline:1,modestbranding:1}}),this.player.on("ready",(function(){e.playerReady.resolve()})),this.player.on("stateChange",(function(t){1===t.data&&(e.loading=!1,e.playing=!0)}))}}},m=(n(416),n(4)),h=Object(m.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("intersection-observer",{attrs:{threshold:[1],"track-visibility":"",delay:350},on:{enter:e.onEnter}},[n("div",{staticClass:"nuxt-speedkit__speedkit-youtube",class:{"js--playing":e.playing,"js--loading":e.loading}},[n("div",{ref:"youtube",attrs:{loading:"lazy"}}),e._v(" "),n("button",{staticClass:"poster",attrs:{"aria-label":"Play"},on:{click:e.onClick}},[n("speedkit-picture",{attrs:{sources:e.sources},on:{load:e.onLoad}}),e._v(" "),e.loading||e.playing?e._e():n("span",{staticClass:"icon"},[n("svg",{attrs:{version:"1.1",viewBox:"0 0 68 48"}},[n("path",{attrs:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",fill:"#f00"}}),n("path",{attrs:{d:"M 45,24 27,14 27,34",fill:"#fff"}})])]),e._v(" "),e.loading?n("div",{staticClass:"spinner"},[n("div",{staticClass:"spinner-container"},[n("div",{staticClass:"spinner-rotator"},[n("div",{staticClass:"spinner-left"},[n("div",{staticClass:"spinner-circle"})]),e._v(" "),n("div",{staticClass:"spinner-right"},[n("div",{staticClass:"spinner-circle"})])])])]):e._e()],1)])])}),[],!1,null,"5539ad4a",null).exports,y=n(317),w={components:{SpeedkitYoutube:h,OrganismPreviewContainer:y.a},data:function(){return{youtube:{id:"cLKvbhfVBUU"}}}},k=Object(m.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("div",[n("speedkit-youtube",e._b({},"speedkit-youtube",e.youtube,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("Critical"),n("br"),e._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports,_={components:{SpeedkitYoutube:h,OrganismPreviewContainer:y.a},data:function(){return{youtube:{id:"cLKvbhfVBUU"}}}},x={components:{Critical:k,Lazy:Object(m.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("div",[n("speedkit-youtube",e._b({},"speedkit-youtube",e.youtube,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports}},C=Object(m.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("critical",{attrs:{critical:""}}),e._v(" "),n("lazy")],1)}),[],!1,null,null,null);t.default=C.exports}}]);