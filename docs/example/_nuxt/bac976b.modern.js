(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{130:function(e,t,r){var content=r(140);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(4).default)("841b0088",content,!0,{sourceMap:!1})},131:function(e,t,r){"use strict";r(139);var n=r(2),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"preview-container"},[r("div",{staticClass:"preview-container__preview"},[e._t("default")],2),e._v(" "),r("div",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"preview-container__info"},[e._t("title",[r("p",[e._v("Preview Info")])])],2)])}),[],!1,null,"fa2458f0",null);t.a=component.exports},138:function(e,t,r){"use strict";(function(e){e.IntersectionObserver=e.IntersectionObserver||class{observe(){}unobserve(){}},t.a={abstract:!0,props:{root:{type:e.HTMLElement,default:()=>null},rootMargin:{type:String,default:()=>"0px"},threshold:{type:Array,default:()=>[0]},trackVisibility:{type:Boolean,default:()=>!1},delay:{type:Number,default:0}},created(){if(!this.$attrs.critical||!this.$options.critical){const e=(({root:e,rootMargin:t,threshold:r,trackVisibility:n,delay:o})=>({root:e,rootMargin:t,threshold:r,trackVisibility:n,delay:o}))(this);this.observer=new IntersectionObserver((([e])=>this.onIntersect(e)),e)}},mounted(){this.observer&&this.observer.observe(this.$el)},destroyed(){this.observer&&this.observer.disconnect()},methods:{onIntersect(e){e.isIntersecting&&(this.observer.unobserve(this.$el),this.triggerEnter())},triggerEnter(e){this.$emit("enter",e)}},render(){try{return this.$slots.default[0]}catch(e){throw new Error("IntersectionObserver.vue can only render one, and exactly one child component.")}}}}).call(this,r(6))},139:function(e,t,r){"use strict";r(130)},140:function(e,t,r){var n=r(3)(!1);n.push([e.i,".preview-container[data-v-fa2458f0]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-fa2458f0]:first-child{margin-top:0}.preview-container[data-v-fa2458f0]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-fa2458f0]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-fa2458f0]{flex-direction:row}}.preview-container>div[data-v-fa2458f0]{display:flex;align-items:center;justify-content:center;width:100%;height:50vh;overflow:hidden}@media (orientation:landscape){.preview-container>div[data-v-fa2458f0]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-fa2458f0]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-fa2458f0]{font-size:2em}.preview-container .preview-container__info p[data-v-fa2458f0]{line-height:1.375;text-align:center}.preview-container .preview-container__info button[data-v-fa2458f0]{width:90%;margin:0 auto}.preview-container .preview-container__preview[data-v-fa2458f0]{font-size:1.125em;--bg-opacity:1;background-color:rgb(0 0 0/40%)}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-fa2458f0]{background-color:rgb(255 255 255/40%)}}.preview-container .preview-container__preview>article[data-v-fa2458f0]{text-align:center}.preview-container .preview-container__preview>article[data-v-fa2458f0],.preview-container .preview-container__preview>div[data-v-fa2458f0]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-fa2458f0]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-fa2458f0]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-fa2458f0]{position:relative;width:100%;height:100%}",""]),e.exports=n},165:function(e,t,r){"use strict";var n=r(138).a,o=r(2),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);t.a=component.exports},316:function(e,t,r){"use strict";r.r(t);var n={components:{IntersectionObserver:r(165).a},props:{title:{type:String,default:()=>null},src:{type:String,default:()=>null}},data:()=>({lazySrc:null}),methods:{onLoad(e){this.$emit("load",e)},onEnter(e){this.lazySrc=this.src,this.$emit("enter",e)}}},o=r(2),c=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("intersection-observer",{on:{enter:e.onEnter}},[r("iframe",e._b({staticClass:"nuxt-speedkit__speedkit-iframe",attrs:{src:e.lazySrc,loading:"lazy",title:e.title},on:{load:e.onLoad}},"iframe",e.$attrs,!1))])}),[],!1,null,null,null).exports,l=r(131),d={components:{SpeedkitIframe:c,OrganismPreviewContainer:l.a},data:()=>({iframe:{src:"https://grabarzundpartner.de"}})},v=Object(o.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[r("speedkit-iframe",e._b({},"speedkit-iframe",e.iframe,!1))]},proxy:!0},{key:"title",fn:function(){return[r("p",[e._v("Critical"),r("br"),e._v("SpeedkitIframe")])]},proxy:!0}])})}),[],!1,null,null,null).exports,f={components:{SpeedkitIframe:c,OrganismPreviewContainer:l.a},data:()=>({iframe:{src:"https://grabarzundpartner.de"}})},h={components:{Critical:v,Lazy:Object(o.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("organism-preview-container",{attrs:{id:"lazyContainer"},scopedSlots:e._u([{key:"default",fn:function(){return[r("speedkit-iframe",e._b({},"speedkit-iframe",e.iframe,!1))]},proxy:!0},{key:"title",fn:function(){return[r("p",[e._v("SpeedkitIframe")])]},proxy:!0}])})}),[],!1,null,null,null).exports}},w=Object(o.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("critical",{attrs:{critical:""}}),e._v(" "),r("lazy")],1)}),[],!1,null,null,null);t.default=w.exports}}]);