(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"0c18":function(t,e,n){},"4b85":function(t,e,n){},"4ec9":function(t,e,n){"use strict";var i=n("6d61"),r=n("6566");t.exports=i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},"63b7":function(t,e,n){},6566:function(t,e,n){"use strict";var i=n("9bf2").f,r=n("7c73"),o=n("e2cc"),s=n("0366"),a=n("19aa"),l=n("2266"),c=n("7dd0"),u=n("2626"),d=n("83ab"),h=n("f183").fastKey,f=n("69f3"),v=f.set,p=f.getterFor;t.exports={getConstructor:function(t,e,n,c){var u=t((function(t,i){a(t,u,e),v(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=i&&l(i,t[c],t,n)})),f=p(e),m=function(t,e,n){var i,r,o=f(t),s=g(t,e);return s?s.value=n:(o.last=s={index:r=h(e,!0),key:e,value:n,previous:i=o.last,next:void 0,removed:!1},o.first||(o.first=s),i&&(i.next=s),d?o.size++:t.size++,"F"!==r&&(o.index[r]=s)),t},g=function(t,e){var n,i=f(t),r=h(e);if("F"!==r)return i.index[r];for(n=i.first;n;n=n.next)if(n.key==e)return n};return o(u.prototype,{clear:function(){var t=this,e=f(t),n=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=f(e),i=g(e,t);if(i){var r=i.next,o=i.previous;delete n.index[i.index],i.removed=!0,o&&(o.next=r),r&&(r.previous=o),n.first==i&&(n.first=r),n.last==i&&(n.last=o),d?n.size--:e.size--}return!!i},forEach:function(t){var e,n=f(this),i=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!g(this,t)}}),o(u.prototype,n?{get:function(t){var e=g(this,t);return e&&e.value},set:function(t,e){return m(this,0===t?0:t,e)}}:{add:function(t){return m(this,t=0===t?0:t,t)}}),d&&i(u.prototype,"size",{get:function(){return f(this).size}}),u},setStrong:function(t,e,n){var i=e+" Iterator",r=p(e),o=p(i);c(t,e,(function(t,e){v(this,{type:i,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(e)}}},"6d61":function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),o=n("94ca"),s=n("6eeb"),a=n("f183"),l=n("2266"),c=n("19aa"),u=n("861d"),d=n("d039"),h=n("1c7e"),f=n("d44e"),v=n("7156");t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),m=-1!==t.indexOf("Weak"),g=p?"set":"add",b=r[t],w=b&&b.prototype,y=b,C={},_=function(t){var e=w[t];s(w,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(m&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return m&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(m&&!u(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(o(t,"function"!=typeof b||!(m||w.forEach&&!d((function(){(new b).entries().next()})))))y=n.getConstructor(e,t,p,g),a.REQUIRED=!0;else if(o(t,!0)){var x=new y,T=x[g](m?{}:-0,1)!=x,j=d((function(){x.has(1)})),S=h((function(t){new b(t)})),$=!m&&d((function(){var t=new b,e=5;while(e--)t[g](e,e);return!t.has(-0)}));S||(y=e((function(e,n){c(e,y,t);var i=v(new b,e,y);return void 0!=n&&l(n,i[g],i,p),i})),y.prototype=w,w.constructor=y),(j||$)&&(_("delete"),_("has"),p&&_("get")),($||T)&&_(g),m&&w.clear&&delete w.clear}return C[t]=y,i({global:!0,forced:y!=b},C),f(y,t),m||n.setStrong(y,t,p),y}},"8ce9":function(t,e,n){},"9d65":function(t,e,n){"use strict";var i=n("d9bd"),r=n("2b0e");e["a"]=r["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(i["d"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent&&t?t():[this.$createElement()]}}})},bb51:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Aviso"),n("Carrossel"),n("InfoPizza")],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-2",attrs:{align:"center"}},[n("v-alert",{attrs:{dismissible:"",prominent:"",type:"warning",color:"#F9A825",dark:""},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"grow"},[t._v(" A Cia das Pizzas agora esta em novo endereço. "),n("br"),n("strong",[t._v("Rua Marechal Floriano, 2069, Centro, próximo ao CFC São Luiz.")])])],1)],1)],1)},s=[],a={data:function(){return{alert:!0}}},l=a,c=n("2877"),u=n("6544"),d=n.n(u),h=(n("caad"),n("5530")),f=n("ade3"),v=(n("0c18"),n("10d2")),p=n("afdd"),m=n("9d26"),g=n("f2e7"),b=n("7560"),w=n("2b0e"),y=w["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),C=n("58df"),_=n("d9bd"),x=Object(C["a"])(v["a"],g["a"],y).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(f["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(p["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(m["a"],{props:{color:e}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(m["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(h["a"])({},v["a"].options.computed.classes.call(this),{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||b["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(_["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),T=(n("4160"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0"),n("4b85"),n("d9f7")),j=n("80d2"),S=["sm","md","lg","xl"],$=function(){return S.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),O=function(){return S.reduce((function(t,e){return t["offset"+Object(j["n"])(e)]={type:[String,Number],default:null},t}),{})}(),B=function(){return S.reduce((function(t,e){return t["order"+Object(j["n"])(e)]={type:[String,Number],default:null},t}),{})}(),z={col:Object.keys($),offset:Object.keys(O),order:Object.keys(B)};function k(t,e,n){var i=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");i+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(i+="-".concat(n),i.toLowerCase()):i.toLowerCase()}}var E=new Map,A=w["a"].extend({name:"v-col",functional:!0,props:Object(h["a"])({cols:{type:[Boolean,String,Number],default:!1}},$,{offset:{type:[String,Number],default:null}},O,{order:{type:[String,Number],default:null}},B,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,i=e.data,r=e.children,o=(e.parent,"");for(var s in n)o+=String(n[s]);var a=E.get(o);return a||function(){var t,e;for(e in a=[],z)z[e].forEach((function(t){var i=n[t],r=k(e,t,i);r&&a.push(r)}));var i=a.some((function(t){return t.startsWith("col-")}));a.push((t={col:!i||!n.cols},Object(f["a"])(t,"col-".concat(n.cols),n.cols),Object(f["a"])(t,"offset-".concat(n.offset),n.offset),Object(f["a"])(t,"order-".concat(n.order),n.order),Object(f["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),E.set(o,a)}(),t(n.tag,Object(T["a"])(i,{class:a}),r)}}),I=(n("99af"),n("2532"),["sm","md","lg","xl"]),D=["start","end","center"];function V(t,e){return I.reduce((function(n,i){return n[t+Object(j["n"])(i)]=e(),n}),{})}var G=function(t){return[].concat(D,["baseline","stretch"]).includes(t)},P=V("align",(function(){return{type:String,default:null,validator:G}})),L=function(t){return[].concat(D,["space-between","space-around"]).includes(t)},R=V("justify",(function(){return{type:String,default:null,validator:L}})),W=function(t){return[].concat(D,["space-between","space-around","stretch"]).includes(t)},H=V("alignContent",(function(){return{type:String,default:null,validator:W}})),N={align:Object.keys(P),justify:Object.keys(R),alignContent:Object.keys(H)},F={align:"align",justify:"justify",alignContent:"align-content"};function M(t,e,n){var i=F[t];if(null!=n){if(e){var r=e.replace(t,"");i+="-".concat(r)}return i+="-".concat(n),i.toLowerCase()}}var q=new Map,J=w["a"].extend({name:"v-row",functional:!0,props:Object(h["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:G}},P,{justify:{type:String,default:null,validator:L}},R,{alignContent:{type:String,default:null,validator:W}},H),render:function(t,e){var n=e.props,i=e.data,r=e.children,o="";for(var s in n)o+=String(n[s]);var a=q.get(o);return a||function(){var t,e;for(e in a=[],N)N[e].forEach((function(t){var i=n[t],r=M(e,t,i);r&&a.push(r)}));a.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(f["a"])(t,"align-".concat(n.align),n.align),Object(f["a"])(t,"justify-".concat(n.justify),n.justify),Object(f["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),q.set(o,a)}(),t(n.tag,Object(T["a"])(i,{staticClass:"row",class:a}),r)}}),U=Object(c["a"])(l,o,s,!1,null,null,null),K=U.exports;d()(U,{VAlert:x,VCol:A,VRow:J});var Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-carousel",{attrs:{"show-arrows":!1}},t._l(t.items,(function(t,e){return n("v-carousel-item",{key:e,attrs:{src:t.src,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1)},X=[],Y={data:function(){return{items:[{src:"https://raw.githubusercontent.com/ThallesAguiar/Cia-das-pizzas/master/imagens/fundo1.jpg"},{src:"https://raw.githubusercontent.com/ThallesAguiar/Cia-das-pizzas/master/imagens/promocao.jpg"},{src:"https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f000010xA7GEAU/5c489cd8e4b0842c9b1b6c10.jpg&w=710&h=462"}]}}},Z=Y,tt=(n("63b7"),n("f665")),et=n("37c6"),nt=n("604c"),it=nt["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return nt["a"].options.computed.classes.call(this)}},methods:{genData:nt["a"].options.methods.genData}}),rt=tt["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(h["a"])({},tt["a"].options.computed.classes.call(this),{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(_["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:tt["a"].options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var r=this.$createElement(p["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(m["a"],{props:{size:18}},this.delimiterIcon)]);n.push(r)}return this.$createElement(it,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(et["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=tt["a"].options.render.call(this,t);return e.data.style="height: ".concat(Object(j["d"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),ot=n("9d65"),st=n("4e82"),at=n("c3f0"),lt=Object(C["a"])(ot["a"],Object(st["a"])("windowGroup","v-window-item","v-window")),ct=lt.extend().extend().extend({name:"v-window-item",directives:{Touch:at["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(j["d"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(j["d"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),ut=n("adda"),dt=n("1c87"),ht=Object(C["a"])(ct,dt["a"]),ft=ht.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(ut["a"],{staticClass:"v-carousel__item",props:Object(h["a"])({},this.$attrs,{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(j["h"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,n=t.data;return n.staticClass="v-window-item",n.directives.push({name:"show",value:this.isActive}),this.$createElement(e,n,this.genDefaultSlot())}}}),vt=Object(c["a"])(Z,Q,X,!1,null,null,null),pt=vt.exports;d()(vt,{VCarousel:rt,VCarouselItem:ft});var mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"bg"},[n("v-tabs",{attrs:{vertical:""}},[n("v-tab",[n("v-icon",{attrs:{left:""}},[t._v("mdi-pizza")]),t._v("Gigante ")],1),n("v-tab",[n("v-icon",{attrs:{left:""}},[t._v("mdi-pizza")]),t._v("Grande ")],1),n("v-tab",[n("v-icon",{attrs:{left:""}},[t._v("mdi-pizza")]),t._v("Média ")],1),n("v-tab-item",[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("p",[t._v("Pedaços: 24")]),n("v-divider"),n("p",[t._v("Sabores: 4")]),n("v-divider"),n("p",{staticClass:"mb-0"},[t._v("R$: 70,00")])],1)],1)],1),n("v-tab-item",[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("p",[t._v("Pedaços: 12")]),n("v-divider"),n("p",[t._v("Sabores: 3")]),n("v-divider"),n("p",{staticClass:"mb-0"},[t._v("R$: 50,00")])],1)],1)],1),n("v-tab-item",[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("p",[t._v("Pedaços: 8")]),n("v-divider"),n("p",[t._v("Sabores: 2")]),n("v-divider"),n("p",{staticClass:"mb-0"},[t._v("R$: 40,00")])],1)],1)],1)],1)],1)},gt=[],bt={},wt=bt,yt=n("b0af"),Ct=n("99d9"),_t=(n("8ce9"),b["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(h["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(h["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})),xt=n("132d"),Tt=n("71a3"),jt=ct.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=ct.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),St=n("fe57"),$t=Object(c["a"])(wt,mt,gt,!1,null,null,null),Ot=$t.exports;d()($t,{VCard:yt["a"],VCardText:Ct["a"],VDivider:_t,VIcon:xt["a"],VTab:Tt["a"],VTabItem:jt,VTabs:St["a"]});var Bt={components:{Carrossel:pt,InfoPizza:Ot,Aviso:K}},zt=Bt,kt=Object(c["a"])(zt,i,r,!1,null,null,null);e["default"]=kt.exports}}]);
//# sourceMappingURL=home.da1bd648.js.map