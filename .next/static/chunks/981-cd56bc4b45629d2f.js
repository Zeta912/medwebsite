!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bb4a3f96-09a2-44fe-966e-8b10830b296e",e._sentryDebugIdIdentifier="sentry-dbid-bb4a3f96-09a2-44fe-966e-8b10830b296e")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[981],{32309:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(78030).Z)("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]])},32892:function(){},76669:function(e,t,n){"use strict";n.d(t,{$j:function(){return M},Dx:function(){return A},VY:function(){return P},aU:function(){return R},aV:function(){return x},dk:function(){return O},fC:function(){return _},h_:function(){return k},xz:function(){return C}});var r=n(22988),l=n(2265),o=n(98324),a=n(1584),i=n(13304),u=n(78149),c=n(71538);let[s,d]=(0,o.b)("AlertDialog",[i.p8]),p=(0,i.p8)(),f=(0,l.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...o}=e,a=p(n);return(0,l.createElement)(i.xz,(0,r.Z)({},a,o,{ref:t}))}),m=(0,l.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...o}=e,a=p(n);return(0,l.createElement)(i.aV,(0,r.Z)({},a,o,{ref:t}))}),g="AlertDialogContent",[v,h]=s(g),b=(0,l.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,children:o,...s}=e,d=p(n),f=(0,l.useRef)(null),m=(0,a.e)(t,f),h=(0,l.useRef)(null);return(0,l.createElement)(i.jm,{contentName:g,titleName:w,docsSlug:"alert-dialog"},(0,l.createElement)(v,{scope:n,cancelRef:h},(0,l.createElement)(i.VY,(0,r.Z)({role:"alertdialog"},d,s,{ref:m,onOpenAutoFocus:(0,u.M)(s.onOpenAutoFocus,e=>{var t;e.preventDefault(),null===(t=h.current)||void 0===t||t.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault()}),(0,l.createElement)(c.A4,null,o),!1)))}),w="AlertDialogTitle",E=(0,l.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...o}=e,a=p(n);return(0,l.createElement)(i.Dx,(0,r.Z)({},a,o,{ref:t}))}),S=(0,l.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...o}=e,a=p(n);return(0,l.createElement)(i.dk,(0,r.Z)({},a,o,{ref:t}))}),y=(0,l.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...o}=e,a=p(n);return(0,l.createElement)(i.x8,(0,r.Z)({},a,o,{ref:t}))}),D=(0,l.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...o}=e,{cancelRef:u}=h("AlertDialogCancel",n),c=p(n),s=(0,a.e)(t,u);return(0,l.createElement)(i.x8,(0,r.Z)({},c,o,{ref:s}))}),_=e=>{let{__scopeAlertDialog:t,...n}=e,o=p(t);return(0,l.createElement)(i.fC,(0,r.Z)({},o,n,{modal:!0}))},C=f,k=e=>{let{__scopeAlertDialog:t,...n}=e,o=p(t);return(0,l.createElement)(i.h_,(0,r.Z)({},o,n))},x=m,P=b,R=y,M=D,A=E,O=S},66431:function(e,t,n){"use strict";n.d(t,{VM:function(){return m},uZ:function(){return g}});var r=n(2265),l=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&s(e,n,t[n]);return e},p=(e,t)=>o(e,a(t)),f=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))0>t.indexOf(r)&&c.call(e,r)&&(n[r]=e[r]);return n},m=r.createContext({}),g=r.forwardRef((e,t)=>{let n;var l,o,a,i,u,{value:c,onChange:s,maxLength:g,textAlign:b="left",pattern:w="^\\d+$",inputMode:E="numeric",onComplete:S,pushPasswordManagerStrategy:y="increase-width",containerClassName:D,noScriptCSSFallback:_=h,render:C,children:k}=e,x=f(e,["value","onChange","maxLength","textAlign","pattern","inputMode","onComplete","pushPasswordManagerStrategy","containerClassName","noScriptCSSFallback","render","children"]);let[P,R]=r.useState("string"==typeof x.defaultValue?x.defaultValue:""),M=null!=c?c:P,A=(n=r.useRef(),r.useEffect(()=>{n.current=M}),n.current),O=r.useCallback(e=>{null==s||s(e),R(e)},[s]),I=r.useMemo(()=>w?"string"==typeof w?new RegExp(w):w:null,[w]),T=r.useRef(null),j=r.useRef(null),W=r.useRef({value:M,onChange:O,isIOS:"undefined"!=typeof window&&(null==(o=null==(l=null==window?void 0:window.CSS)?void 0:l.supports)?void 0:o.call(l,"-webkit-touch-callout","none"))}),B=r.useRef({prev:[null==(a=T.current)?void 0:a.selectionStart,null==(i=T.current)?void 0:i.selectionEnd,null==(u=T.current)?void 0:u.selectionDirection]});r.useImperativeHandle(t,()=>T.current,[]),r.useEffect(()=>{let e=T.current,t=j.current;if(!e||!t)return;function n(){if(document.activeElement!==e){V(null),z(null);return}let t=e.selectionStart,n=e.selectionEnd,r=e.selectionDirection,l=e.maxLength,o=e.value,a=B.current.prev,i=-1,u=-1,c;if(0!==o.length&&null!==t&&null!==n){let e=t===n,r=t===o.length&&o.length<l;if(e&&!r){if(0===t)i=0,u=1,c="forward";else if(t===l)i=t-1,u=t,c="backward";else if(l>1&&o.length>1){let e=0;if(null!==a[0]&&null!==a[1]){c=t<a[1]?"backward":"forward";let n=a[0]===a[1]&&a[0]<l;"backward"!==c||n||(e=-1)}i=e+t,u=e+t+1}}-1!==i&&-1!==u&&i!==u&&T.current.setSelectionRange(i,u,c)}let s=-1!==i?i:t,d=-1!==u?u:n,p=null!=c?c:r;V(s),z(d),B.current.prev=[s,d,p]}if(W.current.value!==e.value&&W.current.onChange(e.value),B.current.prev=[e.selectionStart,e.selectionEnd,e.selectionDirection],document.addEventListener("selectionchange",n,{capture:!0}),n(),document.activeElement===e&&N(!0),!document.getElementById("input-otp-style")){let e=document.createElement("style");if(e.id="input-otp-style",document.head.appendChild(e),e.sheet){let t="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";v(e.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),v(e.sheet,`[data-input-otp]:autofill { ${t} }`),v(e.sheet,`[data-input-otp]:-webkit-autofill { ${t} }`),v(e.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),v(e.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let r=()=>{t&&t.style.setProperty("--root-height",`${e.clientHeight}px`)};r();let l=new ResizeObserver(r);return l.observe(e),()=>{document.removeEventListener("selectionchange",n,{capture:!0}),l.disconnect()}},[]);let[F,Z]=r.useState(!1),[H,N]=r.useState(!1),[L,V]=r.useState(null),[$,z]=r.useState(null);r.useEffect(()=>{var e;setTimeout(e=()=>{var e,t,n,r;null==(e=T.current)||e.dispatchEvent(new Event("input"));let l=null==(t=T.current)?void 0:t.selectionStart,o=null==(n=T.current)?void 0:n.selectionEnd,a=null==(r=T.current)?void 0:r.selectionDirection;null!==l&&null!==o&&(V(l),z(o),B.current.prev=[l,o,a])},0),setTimeout(e,10),setTimeout(e,50)},[M,H]),r.useEffect(()=>{void 0!==A&&M!==A&&A.length<g&&M.length===g&&(null==S||S(M))},[g,S,A,M]);let G=function({containerRef:e,inputRef:t,pushPasswordManagerStrategy:n,isFocused:l}){let o=r.useRef({done:!1,refocused:!1}),[a,i]=r.useState(!1),[u,c]=r.useState(!1),[s,d]=r.useState(!1),p=r.useMemo(()=>"none"!==n&&("increase-width"===n||"experimental-no-flickering"===n)&&a&&u,[a,u,n]),f=r.useCallback(()=>{let r=e.current,l=t.current;if(!r||!l||s||"none"===n)return;let a=r.getBoundingClientRect().left+r.offsetWidth,u=r.getBoundingClientRect().top+r.offsetHeight/2;if(!(0===document.querySelectorAll('[data-lastpass-icon-root],com-1password-button,[data-dashlanecreated],[style$="2147483647 !important;"]').length&&document.elementFromPoint(a-18,u)===r)&&(i(!0),d(!0),!o.current.refocused&&document.activeElement===l)){let e=[l.selectionStart,l.selectionEnd];l.blur(),l.focus(),l.setSelectionRange(e[0],e[1]),o.current.refocused=!0}},[e,t,s,n]);return r.useEffect(()=>{let t=e.current;if(!t||"none"===n)return;function r(){c(window.innerWidth-t.getBoundingClientRect().right>=40)}r();let l=setInterval(r,1e3);return()=>{clearInterval(l)}},[e,n]),r.useEffect(()=>{let e=l||document.activeElement===t.current;if("none"===n||!e)return;let r=setTimeout(f,0),o=setTimeout(f,2e3),a=setTimeout(f,5e3),i=setTimeout(()=>{d(!0)},6e3);return()=>{clearTimeout(r),clearTimeout(o),clearTimeout(a),clearTimeout(i)}},[t,l,n,f]),{hasPWMBadge:a,willPushPWMBadge:p,PWM_BADGE_SPACE_WIDTH:"40px"}}({containerRef:j,inputRef:T,pushPasswordManagerStrategy:y,isFocused:H}),U=r.useCallback(e=>{let t=e.currentTarget.value.slice(0,g);if(t.length>0&&I&&!I.test(t)){e.preventDefault();return}"string"==typeof A&&t.length<A.length&&document.dispatchEvent(new Event("selectionchange")),O(t)},[g,O,A,I]),Y=r.useCallback(()=>{var e;if(T.current){let t=Math.min(T.current.value.length,g-1),n=T.current.value.length;null==(e=T.current)||e.setSelectionRange(t,n),V(t),z(n)}N(!0)},[g]),q=r.useCallback(e=>{var t,n;let r=T.current;if(!W.current.isIOS||!e.clipboardData||!r)return;let l=e.clipboardData.getData("text/plain");e.preventDefault();let o=null==(t=T.current)?void 0:t.selectionStart,a=null==(n=T.current)?void 0:n.selectionEnd,i=(o!==a?M.slice(0,o)+l+M.slice(a):M.slice(0,o)+l+M.slice(o)).slice(0,g);if(i.length>0&&I&&!I.test(i))return;r.value=i,O(i);let u=Math.min(i.length,g-1),c=i.length;r.setSelectionRange(u,c),V(u),z(c)},[g,O,I,M]),J=r.useMemo(()=>({position:"relative",cursor:x.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[x.disabled]),K=r.useMemo(()=>({position:"absolute",inset:0,width:G.willPushPWMBadge?`calc(100% + ${G.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:G.willPushPWMBadge?`inset(0 ${G.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:b,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[G.PWM_BADGE_SPACE_WIDTH,G.willPushPWMBadge,b]),Q=r.useMemo(()=>r.createElement("input",p(d({autoComplete:x.autoComplete||"one-time-code"},x),{"data-input-otp":!0,"data-input-otp-mss":L,"data-input-otp-mse":$,inputMode:E,pattern:null==I?void 0:I.source,style:K,maxLength:g,value:M,ref:T,onPaste:e=>{var t;q(e),null==(t=x.onPaste)||t.call(x,e)},onChange:U,onMouseOver:e=>{var t;Z(!0),null==(t=x.onMouseOver)||t.call(x,e)},onMouseLeave:e=>{var t;Z(!1),null==(t=x.onMouseLeave)||t.call(x,e)},onFocus:e=>{var t;Y(),null==(t=x.onFocus)||t.call(x,e)},onBlur:e=>{var t;N(!1),null==(t=x.onBlur)||t.call(x,e)}})),[U,Y,q,E,K,g,$,L,x,null==I?void 0:I.source,M]),X=r.useMemo(()=>({slots:Array.from({length:g}).map((e,t)=>{let n=H&&null!==L&&null!==$&&(L===$&&t===L||t>=L&&t<$),r=void 0!==M[t]?M[t]:null;return{char:r,isActive:n,hasFakeCaret:n&&null===r}}),isFocused:H,isHovering:!x.disabled&&F}),[H,F,g,$,L,x.disabled,M]),ee=r.useMemo(()=>C?C(X):r.createElement(m.Provider,{value:X},k),[k,X,C]);return r.createElement(r.Fragment,null,null!==_&&r.createElement("noscript",null,r.createElement("style",null,_)),r.createElement("div",{ref:j,"data-input-otp-container":!0,style:J,className:D},ee,r.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},Q)))});function v(e,t){try{e.insertRule(t)}catch(e){console.error("input-otp could not insert CSS rule:",t)}}g.displayName="Input";var h=`
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`}}]);