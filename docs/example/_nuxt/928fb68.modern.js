(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{156:function(t,n,o){var content=o(157);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(7).default)("228ebf61",content,!0,{sourceMap:!1})},157:function(t,n,o){(n=o(6)(!1)).push([t.i,"/*! @license\n * Shaka Player\n * Copyright 2016 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */.shaka-hidden{display:none!important}.shaka-video-container{position:relative;top:0;left:0;display:flex}.shaka-video-container .material-icons-round{font-family:\"Material Icons Round\";font-size:24px}.shaka-video-container *{font-family:Roboto-Regular,Roboto,sans-serif}.shaka-video-container:fullscreen{width:100%;height:100%;background-color:#000}.shaka-video-container:fullscreen .shaka-text-container{font-size:4.4vmin}.shaka-video-container:-webkit-full-screen{width:100%;height:100%;background-color:#000}.shaka-video-container:-webkit-full-screen .shaka-text-container{font-size:4.4vmin}.shaka-video-container:-moz-full-screen{width:100%;height:100%;background-color:#000}.shaka-video-container:-moz-full-screen .shaka-text-container{font-size:4.4vmin}.shaka-video-container:-ms-fullscreen{width:100%;height:100%;background-color:#000}.shaka-video-container:-ms-fullscreen .shaka-text-container{font-size:4.4vmin}.shaka-controls-container{position:absolute;top:0;left:0;right:0;bottom:0;margin:0;padding:0;width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;z-index:1}.shaka-video-container:not([shaka-controls=true]) .shaka-controls-container{display:none}.shaka-controls-container *{flex-shrink:0}.shaka-controls-container[casting=true] .shaka-fullscreen-button{display:none}.shaka-bottom-controls{width:96%;padding:0 0 2.5%;z-index:1}.shaka-controls-button-panel{padding:0;margin:0;display:flex;flex-direction:row;justify-content:flex-end;align-items:center;overflow:hidden;min-width:48px;font-size:12px;font-weight:400;font-style:normal;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;opacity:0;transition:opacity .6s cubic-bezier(.4,0,.6,1)}.shaka-controls-container[casting=true] .shaka-controls-button-panel,.shaka-controls-container[shown=true] .shaka-controls-button-panel{opacity:1}.shaka-controls-button-panel>*{color:#fff;height:32px;margin:1px 6px;padding:0;background:0 0;border:0;cursor:pointer}.shaka-play-button-container{display:flex;justify-content:center;align-items:center}.shaka-play-button-container,.shaka-scrim-container{margin:0;width:100%;height:100%;flex-shrink:1;position:absolute;left:0;right:0;top:0;bottom:0}.shaka-scrim-container{opacity:0;transition:opacity .6s cubic-bezier(.4,0,.6,1);background:linear-gradient(0deg,#000 0,transparent 15%)}.shaka-controls-container[casting=true] .shaka-scrim-container,.shaka-controls-container[shown=true] .shaka-scrim-container{opacity:1}.shaka-text-container{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;min-width:48px;text-align:center;transition:bottom .1s cubic-bezier(.4,0,.6,1);transition-delay:.5s;display:flex;flex-direction:column;align-items:center;justify-content:flex-end}.shaka-text-container,.shaka-text-container *{font-size:20px;line-height:1.4}.shaka-text-container span{background-color:rgba(0,0,0,.8);color:#fff;display:inline-block}.shaka-text-container .shaka-nested-cue:not(:last-of-type):after{content:\" \";white-space:pre}.shaka-controls-container[shown=true]~.shaka-text-container{bottom:15%;transition-delay:0s}.shaka-spinner-container{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;flex-shrink:1;display:flex;justify-content:center;align-items:center}.shaka-video-container:not([shaka-controls=true]) .shaka-spinner-container{display:none}.shaka-spinner{position:relative;top:0;left:0;padding:7.8%;filter:drop-shadow(0 0 2px rgba(255,255,255,.5))}.shaka-play-button,.shaka-spinner{margin:0;box-sizing:border-box;width:0;height:0}.shaka-play-button{padding:7.5%;border-radius:50%;box-shadow:0 0 20px 0 rgba(0,0,0,.1);border:none;background-size:50%;background-repeat:no-repeat;background-position:50%;background-color:hsla(0,0%,100%,.9);opacity:0;transition:opacity .6s cubic-bezier(.4,0,.6,1)}.shaka-controls-container[casting=true] .shaka-play-button,.shaka-controls-container[shown=true] .shaka-play-button{opacity:1}.shaka-play-button[icon=play]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 5v14l11-7z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}.shaka-play-button[icon=pause]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 19h4V5H6v14zm8-14v14h4V5h-4z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}.shaka-current-time{font-size:14px;color:#fff;height:auto;cursor:pointer}.shaka-current-time[disabled]{background-color:transparent;color:#fff;cursor:default}.shaka-controls-container button:focus,.shaka-controls-container input:focus{outline:1px solid Highlight;outline:1px solid -webkit-focus-ring-color}.shaka-controls-container button:-moz-focus-inner,.shaka-controls-container input:-moz-focus-outer{outline:0;border:0}.shaka-controls-container:not(.shaka-keyboard-navigation) button:focus,.shaka-controls-container:not(.shaka-keyboard-navigation) input:focus{outline:0}.shaka-range-container{position:relative;top:0;left:0;margin:4px 6px;height:4px;border-radius:4px;background:#fff}.shaka-volume-bar-container{width:100px}.shaka-range-element{-webkit-appearance:none;background:0 0;position:absolute;top:0;left:0;right:0;bottom:0;margin:0;padding:0;width:100%;height:100%;height:12px;top:-4px;z-index:1}.shaka-range-element::-webkit-slider-runnable-track{width:100%;height:12px;background:0 0;color:transparent;border:none}.shaka-range-element::-webkit-slider-thumb{-webkit-appearance:none;border:none;border-radius:12px;height:12px;width:12px;background:#fff}.shaka-range-element::-moz-range-track{width:100%;height:12px;background:0 0;color:transparent;border:none}.shaka-range-element::-moz-range-thumb{-webkit-appearance:none;border:none;border-radius:12px;height:12px;width:12px;background:#fff}.shaka-range-element::-ms-track{width:100%;height:12px;background:0 0;color:transparent;border:none}.shaka-range-element::-ms-thumb{-webkit-appearance:none;border:none;border-radius:12px;height:12px;width:12px;background:#fff}.shaka-range-element::-ms-fill-lower,.shaka-range-element::-ms-tooltip{display:none}.shaka-range-element::-ms-fill-upper{display:none}.shaka-seek-bar-container{opacity:0;transition:opacity .6s cubic-bezier(.4,0,.6,1)}.shaka-controls-container[casting=true] .shaka-seek-bar-container,.shaka-controls-container[shown=true] .shaka-seek-bar-container{opacity:1}\n/*!\n * @license\n * The SVG/CSS buffering spinner is based on http://codepen.io/jczimm/pen/vEBpoL\n * Some local modifications have been made.\n *\n * Copyright (c) 2016 by jczimm\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n * SOFTWARE.\n */.shaka-ad-markers,.shaka-spinner-svg{position:absolute;top:0;left:0;right:0;bottom:0;margin:0;padding:0;width:100%;height:100%}.shaka-spinner-svg{-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;transform-origin:center center}.shaka-spinner-path{stroke:#202124;stroke-dasharray:20,200;stroke-dashoffset:0;-webkit-animation:dash 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite;stroke-linecap:round}@-webkit-keyframes rotate{to{transform:rotate(1turn)}}@keyframes rotate{to{transform:rotate(1turn)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}.shaka-spacer{cursor:default;flex-shrink:1;flex-grow:1;margin:0}.shaka-settings-menu{overflow-x:hidden;overflow-y:auto;white-space:nowrap;background:#fff;box-shadow:0 1px 9px 0 rgba(0,0,0,.4);border-radius:2px;max-height:250px;min-width:180px;opacity:0;transition:opacity .6s cubic-bezier(.4,0,.6,1);display:flex;flex-direction:column;position:absolute;z-index:2;right:15px;bottom:30px}.shaka-controls-container[casting=true] .shaka-settings-menu,.shaka-controls-container[shown=true] .shaka-settings-menu{opacity:1}.shaka-settings-menu button{font-size:14px;background:0 0;color:#000;border:none;min-height:30px;padding:3.5px 6px;display:flex;align-items:center}.shaka-keyboard-navigation .shaka-settings-menu button:focus,.shaka-settings-menu button:hover{background:#e0e0e0}.shaka-settings-menu i{padding-left:10px;padding-right:10px}.shaka-settings-menu.shaka-low-position{bottom:15px}.shaka-overflow-menu span{text-align:left}.shaka-overflow-button-label{position:relative;display:flex;flex-direction:column}.shaka-current-selection-span{color:rgba(0,0,0,.54)}.shaka-audio-languages span,.shaka-playback-rates span,.shaka-resolutions span,.shaka-text-languages span{margin-left:54px}.shaka-back-to-overflow-button span{margin-left:0}.shaka-back-to-overflow-button i{padding-right:20px}.shaka-auto-span{left:17px}.shaka-captions-on{color:#000}.shaka-captions-off{color:grey}.shaka-server-side-ad-container{width:100%;height:100%}.shaka-server-side-ad-container:not([ad-active=true]){pointer-events:none}.shaka-video-container[shaka-controls=true] .shaka-controls-container iframe{height:92%;z-index:1}.shaka-ad-controls{display:flex;flex-direction:row;z-index:1;padding-bottom:1%}.shaka-video-container:not([shaka-controls=true]) .shaka-ad-controls{display:none}.shaka-ad-controls button,.shaka-ad-controls div{color:#fff;font-size:medium}.shaka-ad-controls div:not(.shaka-skip-ad-counter){margin:1px 6px}.shaka-ad-counter,.shaka-ad-position{display:flex;justify-content:flex-end;flex-direction:column;text-shadow:1px 1px 4px #000}.shaka-skip-ad-container{position:relative;right:-2%;display:flex;flex-direction:row;margin:0}.shaka-skip-ad-button{padding:5px 15px;background:rgba(0,0,0,.7);border:none;cursor:pointer}.shaka-skip-ad-button:disabled{background:rgba(0,0,0,.3)}.shaka-skip-ad-counter{padding:5px;background:rgba(0,0,0,.7);margin:0}@font-face{font-family:Roboto;font-style:normal;font-weight:400;src:local(\"Roboto\"),local(\"Roboto-Regular\"),url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxP.ttf) format(\"truetype\")}@font-face{font-family:\"Material Icons Round\";font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialiconsround/v23/LDItaoyNOAY6Uewc665JcIzCKsKc_M9flwmM.otf) format(\"opentype\")}.material-icons-round{font-family:\"Material Icons Round\";font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr}",""]),t.exports=n}}]);