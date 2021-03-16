__NUXT_JSONP__("/components/speedkit-layer", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW){return {data:[{document:{slug:Y,description:"",title:"SpeedkitLayer",position:"003000300000",category:"Components",solutions:["reduced bandwidth","weak hardware","unsupported browser"],hideLayerFeatures:["Schließmechanik benötigt kein Javascript."],toc:[{id:al,depth:B,text:am},{id:an,depth:B,text:ao},{id:ap,depth:B,text:aq},{id:ar,depth:B,text:as},{id:at,depth:B,text:au},{id:av,depth:B,text:aw},{id:ax,depth:B,text:P},{id:ay,depth:B,text:Z}],body:{type:"root",children:[{type:b,tag:t,props:{className:[J,K]},children:[{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"The loading behavior of webpages based on nuxtjs is designed in such a way that all necessary Javascript resources are preloaded and directly initialized with the initial load of the page. However, this behavior creates a negative impact on the Lighthouse Performance Score (TTI) for larger pages that have an increased initial load of additional resources, such as fonts, images, plugins, modules (nuxt-i18n, ...)."}]},{type:a,value:g},{type:b,tag:C,props:{id:al},children:[{type:b,tag:z,props:{href:"#excursus"},children:[{type:a,value:am}]}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"The Lighthouse Test is not a tool to make a general statement about the quality of a website programming. Lighthouse rather tries to map a metric for the usability of a page from the user's point of view. This includes accessibility, best practices, SEO and of course performance."}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"This last point is often misinterpreted by developers. If you want to implement features that increase usability for the user (interactions\u002Fmore complex animations, ...), this will always have an impact on performance in the Lighthouse Test for larger website projects, as the corresponding Javascript must be loaded for this. Finally, Lighthouse does also not rate the design, but the accessibility (size of click areas, etc.) of a website.\nYou should therefore not ask yourself the following question: \"How can I fully optimize my JavaScript to achieve a Lighthouse score of 100\u002F100?\". You have to ask yourself much more the question: \"What is especially important to a user with low bandwidth or weak hardware on my site?\"."}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"The answer to this is relatively simple: the site must first and foremost work and you must be able to get to the information you need quickly."}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"No more and no less."}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"The user doesn't need any fancy slider animations and parallax effects that can only be implemented with certain libraries. Or a softload mechanism to get to more pages in a more elegant and animated way, but which initially needs an increased amount of javascript logic. All he wants is that information is retrievable reasonably fast and he can click through the presence. Among other things, he doesn't need full retina images, which simply take a long time to load with 3G."}]},{type:a,value:g},{type:b,tag:C,props:{id:an},children:[{type:b,tag:z,props:{href:"#solution"},children:[{type:a,value:ao}]}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"For this reason, we pause the initialization of the javascript in the following cases:"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:az,props:{":items":"solutions",type:aA},children:[{type:a,value:g}]},{type:a,value:g},{type:b,tag:t,props:{className:[J,K]},children:[{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"In these cases, a layer will be displayed that allows the user to decide whether he wants to initialize the full experience and download further resources despite the physical impairment or whether he wants to visit the website with a reduced UX (without Javascript).\nThe layer is also displayed with a corresponding message when Javascript is deactivated."}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:b,tag:F,props:{to:"\u002Fconcept"},children:[{type:a,value:"Learn more in Concept."}]}]},{type:a,value:g},{type:b,tag:C,props:{id:ap},children:[{type:b,tag:z,props:{href:"#usage"},children:[{type:a,value:aq}]}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"Ist der SpeedkitLayer implementiert, erfolgt automatisch die Überwachung der Javascript-Initialisierung. Tritt eines der oben beschriebenen Ereignisse ein, wird der Ablauf pausiert und erst nach einer Benutzer-Interaktion im Layer entsprechend fortgesetzt bzw. abgebrochen."}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"Platziert wird der Layer einmalig im Layout der Seite.\nDieser dient als Wrapper und muss anhand des "},{type:b,tag:F,props:{to:"\u002Fcomponents\u002Fspeedkit-layer#template"},children:[{type:a,value:Z}]},{type:a,value:" befüllt werden, "},{type:b,tag:z,props:{href:"https:\u002F\u002Fgithub.com\u002FGrabarzUndPartner\u002Fnuxt-speedkit\u002Fblob\u002Fmain\u002Fexample\u002Fcomponents\u002FInfoLayer.vue",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"siehe Beispiel Komponente"}]},{type:a,value:"."}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"Der Inhalt besteht aus Mitteilungen und Buttons, die im jeweiligen Ereignis eingeblendet werden."}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"Mitteilungen und Buttons werden mit einer "},{type:b,tag:i,props:{},children:[{type:a,value:u}]},{type:a,value:" definiert, diese sind default per CSS auf "},{type:b,tag:i,props:{},children:[{type:a,value:_}]},{type:a,value:" gesetzt."}]},{type:a,value:g},{type:b,tag:$,props:{},children:[{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:aB},{type:b,tag:i,props:{},children:[{type:a,value:L}]},{type:a,value:" für Mitteilung"}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:aB},{type:b,tag:i,props:{},children:[{type:a,value:M}]},{type:a,value:" für Button"}]},{type:a,value:g}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:aC,props:{},children:[{type:a,value:"\nFür die Schließmechanik des Layers, siehe \n"},{type:b,tag:F,props:{to:aD},children:[{type:a,value:P}]},{type:a,value:"\n.\n"}]},{type:a,value:g},{type:b,tag:t,props:{className:[J,K]},children:[{type:a,value:g},{type:b,tag:C,props:{id:ar},children:[{type:b,tag:z,props:{href:"#messages"},children:[{type:a,value:as}]}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"Die Mitteilungen sind Elemente, die zu den jeweiligen Ereignissen eingeblendet werden."}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"Initial sind alle IDs auf "},{type:b,tag:i,props:{},children:[{type:a,value:_}]},{type:a,value:" gesetzt, somit ist keine Mitteilung sichtbar."},{type:b,tag:aa,props:{},children:[]},{type:a,value:"\nWenn ein Ereigniss eintritt, wird über die ID die jewelige Mitteilung per Style Attribute "},{type:b,tag:i,props:{},children:[{type:a,value:aE}]},{type:a,value:aF}]},{type:a,value:aG},{type:b,tag:ab,props:{},children:[{type:b,tag:ac,props:{},children:[{type:b,tag:v,props:{},children:[{type:b,tag:D,props:{},children:[{type:a,value:aH}]},{type:b,tag:D,props:{},children:[{type:a,value:ad}]}]}]},{type:b,tag:ae,props:{},children:[{type:b,tag:v,props:{},children:[{type:b,tag:l,props:{},children:[{type:b,tag:G,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:L}]}]}]},{type:b,tag:l,props:{},children:[{type:a,value:"Benutzer Browser wird von der "},{type:b,tag:F,props:{to:"\u002Foptions#browsersupport"},children:[{type:b,tag:i,props:{},children:[{type:a,value:"Browserslist"}]}]},{type:a,value:" nicht unterstützt."}]}]},{type:b,tag:v,props:{},children:[{type:b,tag:l,props:{},children:[{type:b,tag:G,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:aI}]}]}]},{type:b,tag:l,props:{},children:[{type:a,value:"Benutzer Hardware (Anzahl Prozessor & Arbeitsspeicher) sind nicht ausreichend."}]}]},{type:b,tag:v,props:{},children:[{type:b,tag:l,props:{},children:[{type:b,tag:G,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:aJ}]}]}]},{type:b,tag:l,props:{},children:[{type:a,value:"Verbindungsgeschwindigkeit ist zu niedrig."}]}]}]}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:b,tag:af,props:{},children:[{type:a,value:aK}]}]},{type:a,value:g},{type:b,tag:t,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,T]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\u003C!-- initial --\u003E"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\u003C!-- active --\u003E"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,aN]},children:[{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,U,aO]},children:[{type:b,tag:c,props:{className:[d,ag]},children:[{type:a,value:"display"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ah}]},{type:a,value:" block"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ai}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:C,props:{id:at},children:[{type:b,tag:z,props:{href:"#buttons"},children:[{type:a,value:au}]}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"Die Buttons sind die Interkation Elemente für den Benutzer.\nJe nach Ereignis, muss der Benutzer über diese seine Wahl treffen."}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"Initial sind alle IDs bis auf "},{type:b,tag:i,props:{},children:[{type:a,value:aj}]},{type:a,value:aP},{type:b,tag:i,props:{},children:[{type:a,value:_}]},{type:a,value:" gesetzt.\nWenn ein Ereigniss eintritt, wird über die ID der jewelige Button per Style Attribute "},{type:b,tag:i,props:{},children:[{type:a,value:aE}]},{type:a,value:aF}]},{type:a,value:aG},{type:b,tag:ab,props:{},children:[{type:b,tag:ac,props:{},children:[{type:b,tag:v,props:{},children:[{type:b,tag:D,props:{},children:[{type:a,value:aH}]},{type:b,tag:D,props:{},children:[{type:a,value:ad}]}]}]},{type:b,tag:ae,props:{},children:[{type:b,tag:v,props:{},children:[{type:b,tag:l,props:{},children:[{type:b,tag:G,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:aj}]}]}]},{type:b,tag:l,props:{},children:[{type:a,value:"Sichtbar bei deaktivierten Javascript, wird benötigt damit der User den Layer ausblenden kann. Benötigt die "},{type:b,tag:F,props:{to:aD},children:[{type:a,value:P}]},{type:a,value:" implementation."}]}]},{type:b,tag:v,props:{},children:[{type:b,tag:l,props:{},children:[{type:b,tag:G,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:V}]}]}]},{type:b,tag:l,props:{},children:[{type:a,value:"Wird eingesetzt um dem Benutzer die Möglichkeit zu bieten nur mit aktivierten Schriften die Seite zu besuchen. Weitere Initialisierung des Javascript und laden der Bilder wird unterbunden."}]}]},{type:b,tag:v,props:{},children:[{type:b,tag:l,props:{},children:[{type:b,tag:G,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:M}]}]}]},{type:b,tag:l,props:{},children:[{type:a,value:"Dient zum aktiveren aller Features. Die initialisierung des Javascripts wird gestartet, Bilder werden geladen."}]}]}]}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:aC,props:{type:aA},children:[{type:a,value:"\nEs wird empfohlen bei den Buttons \n"},{type:b,tag:i,props:{},children:[{type:a,value:V}]},{type:a,value:"\n und \n"},{type:b,tag:i,props:{},children:[{type:a,value:M}]},{type:a,value:"\n ein \n"},{type:b,tag:af,props:{},children:[{type:a,value:"Inline Click-Event"}]},{type:a,value:"\n zu registrieren.\n"},{type:b,tag:aa,props:{},children:[]},{type:a,value:g},{type:b,tag:aa,props:{},children:[]},{type:a,value:"\nMore information under \n"},{type:b,tag:F,props:{to:"\u002Fcomponents\u002Fspeedkit-layer#force-app-initialization-or-font-load"},children:[{type:a,value:"Force App initialization or Font load"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:t,props:{className:[J,K]},children:[{type:a,value:g},{type:b,tag:C,props:{id:av},children:[{type:b,tag:z,props:{href:"#force-initialization-app-font"},children:[{type:a,value:aw}]}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"Für die Fälle Unsupported-Browser und nicht ausreichender Hardware, muss mit der "},{type:b,tag:i,props:{},children:[{type:a,value:u}]},{type:a,value:" auch ein "},{type:b,tag:i,props:{},children:[{type:a,value:N}]},{type:a,value:" Event gesetzt werden."}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"In dem Event muss die globale Variable "},{type:b,tag:i,props:{},children:[{type:a,value:ak}]},{type:a,value:" oder "},{type:b,tag:i,props:{},children:[{type:a,value:ak}]},{type:a,value:aP},{type:b,tag:i,props:{},children:[{type:a,value:"true"}]},{type:a,value:" gesetzt werden."}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"Diese werden benötigt, wenn der Benutzer schon reagiert hat bevor das initiale Javascript geladen wurden ist. Nach erfolgreichem Laden des Javascripts, wird die App automatisch initialisiert."}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:ab,props:{},children:[{type:b,tag:ac,props:{},children:[{type:b,tag:v,props:{},children:[{type:b,tag:D,props:{},children:[{type:a,value:"Variable"}]},{type:b,tag:D,props:{},children:[{type:a,value:"Type"}]},{type:b,tag:D,props:{},children:[{type:a,value:ad}]},{type:b,tag:D,props:{},children:[{type:a,value:"Default"}]}]}]},{type:b,tag:ae,props:{},children:[{type:b,tag:v,props:{},children:[{type:b,tag:l,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:ak}]}]},{type:b,tag:l,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:aQ}]}]},{type:b,tag:l,props:{},children:[{type:a,value:"Wenn gesetzt, werden nur die Schriften initialisiert."}]},{type:b,tag:l,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:aR}]}]}]},{type:b,tag:v,props:{},children:[{type:b,tag:l,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"__NUXT_SPEEDKIT_AUTO_INIT__"}]}]},{type:b,tag:l,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:aQ}]}]},{type:b,tag:l,props:{},children:[{type:a,value:"Wenn gesetzt, wird nach vollständigen laden des Javascript initialisierung weitergeführt."}]},{type:b,tag:l,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:aR}]}]}]}]}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:b,tag:af,props:{},children:[{type:a,value:aK}]}]},{type:a,value:g},{type:b,tag:t,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,T]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:x}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:aS},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aT},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:x}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:aU},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aT},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:C,props:{id:ax},children:[{type:b,tag:z,props:{href:"#hide-layer"},children:[{type:a,value:P}]}]},{type:a,value:g},{type:b,tag:t,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,T]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:H}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n  Close Layer\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"Der Layer kann über ein "},{type:b,tag:i,props:{},children:[{type:a,value:W}]},{type:a,value:" Attribute mit der "},{type:b,tag:i,props:{},children:[{type:a,value:u}]},{type:a,value:q},{type:b,tag:i,props:{},children:[{type:a,value:X}]},{type:a,value:" geschlossen werden."}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:az,props:{":items":"hideLayerFeatures"},children:[{type:a,value:g}]},{type:a,value:g},{type:b,tag:t,props:{className:[J,K]},children:[{type:a,value:g},{type:b,tag:C,props:{id:ay},children:[{type:b,tag:z,props:{href:"#template"},children:[{type:a,value:Z}]}]},{type:a,value:g},{type:b,tag:t,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,T]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"Sorry, but you will have a limited user experience due to a…"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:$}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,aN]},children:[{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,U,aO]},children:[{type:b,tag:c,props:{className:[d,ag]},children:[{type:a,value:"padding"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ah}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"0"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ai}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,ag]},children:[{type:a,value:"list-style"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ah}]},{type:a,value:" none"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ai}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\u003C!-- Displayed when javascript is disabled. --\u003E"}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:w}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"nuxt-speedkit__message__nojs"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n        disabled javascript\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\u003C!-- Displayed when browser does not support. --\u003E"}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:w}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n        outdated browser\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\u003C!-- Displayed when user hardware is not sufficient. --\u003E"}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:w}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n        outdated device\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\u003C!-- Displayed when connection is too slow. --\u003E"}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:w}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:aJ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n        slow connection\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\u003C!-- Button to hide the layer with no javascript --\u003E"}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:x}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:H}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n        Apply without js\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\u003C!-- Button for use without javascript and with fonts --\u003E"}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:x}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:aS},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:H}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n        Apply with Fonts\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\u003C!-- Button for activate javascript by bad connection or browser support --\u003E"}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:x}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:aU},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n      Apply with all Features\n    "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n\n  "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g}]}]}]},{type:a,value:g}]}]},dir:"\u002Fen\u002Fcomponents",path:"\u002Fen\u002Fcomponents\u002Fspeedkit-layer",extension:".md",createdAt:aV,updatedAt:aV,to:"\u002Fcomponents\u002Fspeedkit-layer",language:"en",draft:false},prev:{slug:aW,title:aW,to:"\u002Fdirectives\u002Fv-font"},next:{slug:"experimental-speedkit-picture",title:"SpeedkitPicture (Experimental)",to:"\u002Fcomponents\u002Fexperimental-speedkit-picture"}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation","tag","\n","\"","code","\u003E","p","td","attr-name","attr-value","attr-equals","="," ","\u003C","\u003C\u002F","div","id","tr","li","button","\n      ","a","comment",2,"h2","th","\n  ","nuxt-link","nobr","label","\n    ","prose","dark:prose-dark","nuxt-speedkit__message__unsupported-browser","nuxt-speedkit__button__init-app","onclick","\n\n    ","Hide Layer","nuxt-content-highlight","pre","language-html","line-numbers","style","nuxt-speedkit__button__init-font","for","nuxt-speedkit__speedkit-layer__close","speedkit-layer","Template","display: none;","ul","br","table","thead","Description","tbody","strong","property",":",";","nuxt-speedkit__button__init-nojs","__NUXT_SPEEDKIT_FONT_INIT__","excursus","Excursus","solution","Solution","usage","Usage","messages","Messages","buttons","Buttons","force-initialization-app-font","Force initialization (App, Font)","hide-layer","template","list","info","e.g. ","alert","\u002Fcomponents\u002Fspeedkit-layer#hide-layer","display: block;"," eingeblendet.","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","ID","nuxt-speedkit__message__outdated-device","nuxt-speedkit__message__slow-connection","Example","\n  Your browser is not supported!\n","\n\n","style-attr","language-css"," auf ","Boolean","false","window.__NUXT_SPEEDKIT_FONT_INIT__ = true;","…","window.__NUXT_SPEEDKIT_AUTO_INIT__ = true;","2021-03-16T16:34:18.346Z","v-font")));