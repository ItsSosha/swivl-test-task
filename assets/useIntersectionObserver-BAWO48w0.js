import{X as V,i as C,s as x,j as h,B as y,v as z,w as R,Y,r as u,h as _,z as q,Z as D,o as A,R as g}from"./index-lptJnVQk.js";var k={root:"m_1b7284a3"};const J={},K=z((t,{radius:e,shadow:s})=>({root:{"--paper-radius":e===void 0?void 0:R(e),"--paper-shadow":Y(s)}})),E=V((t,e)=>{const s=C("Paper",J,t),{classNames:a,className:r,style:o,styles:c,unstyled:l,withBorder:i,vars:n,radius:d,shadow:m,variant:f,mod:w,...v}=s,p=x({name:"Paper",props:s,classes:k,className:r,style:o,classNames:a,styles:c,unstyled:l,vars:n,varsResolver:K});return h.jsx(y,{ref:e,mod:[{"data-with-border":i},w],...p("root"),variant:f,...v})});E.classes=k;E.displayName="@mantine/core/Paper";const B=u.createContext(null),Q=B.Provider;function T(){return{withinGroup:!!u.useContext(B)}}var M={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};const W={},tt=z((t,{spacing:e})=>({group:{"--ag-spacing":q(e)}})),j=_((t,e)=>{const s=C("AvatarGroup",W,t),{classNames:a,className:r,style:o,styles:c,unstyled:l,vars:i,spacing:n,...d}=s,m=x({name:"AvatarGroup",classes:M,props:s,className:r,style:o,classNames:a,styles:c,unstyled:l,vars:i,varsResolver:tt,rootSelector:"group"});return h.jsx(Q,{value:!0,children:h.jsx(y,{ref:e,...m("group"),...d})})});j.classes=M;j.displayName="@mantine/core/AvatarGroup";function et(t){return h.jsx("svg",{...t,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}function $(t,e=2){const s=t.split(" ");return s.length===1?t.slice(0,e).toUpperCase():s.map(a=>a[0]).slice(0,e).join("").toUpperCase()}function st(t){let e=0;for(let s=0;s<t.length;s+=1){const a=t.charCodeAt(s);e=(e<<5)-e+a,e|=0}return e}const at=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"];function rt(t,e=at){const s=st($(t)),a=Math.abs(s)%e.length;return e[a]}const ot={},nt=z((t,{size:e,radius:s,variant:a,gradient:r,color:o,autoContrast:c,name:l,allowedInitialsColors:i})=>{const n=o==="initials"&&typeof l=="string"?rt(l,i):o,d=t.variantColorResolver({color:n||"gray",theme:t,gradient:r,variant:a||"light",autoContrast:c});return{root:{"--avatar-size":D(e,"avatar-size"),"--avatar-radius":s===void 0?void 0:R(s),"--avatar-bg":n||a?d.background:void 0,"--avatar-color":n||a?d.color:void 0,"--avatar-bd":n||a?d.border:void 0}}}),H=V((t,e)=>{const s=C("Avatar",ot,t),{classNames:a,className:r,style:o,styles:c,unstyled:l,vars:i,src:n,alt:d,radius:m,color:f,gradient:w,imageProps:v,children:p,autoContrast:N,mod:S,name:G,allowedInitialsColors:it,...O}=s,U=T(),[F,I]=u.useState(!n),b=x({name:"Avatar",props:s,classes:M,className:r,style:o,classNames:a,styles:c,unstyled:l,vars:i,varsResolver:nt});return u.useEffect(()=>I(!n),[n]),h.jsx(y,{...b("root"),mod:[{"within-group":U.withinGroup},S],ref:e,...O,children:F?h.jsx("span",{...b("placeholder"),title:d,children:p||typeof G=="string"&&$(G)||h.jsx(et,{})}):h.jsx("img",{...v,...b("image"),src:n,alt:d,onError:X=>{var P;I(!0),(P=v==null?void 0:v.onError)==null||P.call(v,X)}})})});H.classes=M;H.displayName="@mantine/core/Avatar";H.Group=j;var L={root:"m_18320242","skeleton-fade":"m_299c329c"};const lt={visible:!0,animate:!0},ct=z((t,{width:e,height:s,radius:a,circle:r})=>({root:{"--skeleton-height":A(s),"--skeleton-width":r?A(s):A(e),"--skeleton-radius":r?"1000px":a===void 0?void 0:R(a)}})),Z=_((t,e)=>{const s=C("Skeleton",lt,t),{classNames:a,className:r,style:o,styles:c,unstyled:l,vars:i,width:n,height:d,circle:m,visible:f,radius:w,animate:v,mod:p,...N}=s,S=x({name:"Skeleton",classes:L,props:s,className:r,style:o,classNames:a,styles:c,unstyled:l,vars:i,varsResolver:ct});return h.jsx(y,{ref:e,...S("root"),mod:[{visible:f,animate:v},p],...N})});Z.classes=L;Z.displayName="@mantine/core/Skeleton";function vt(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"},child:[]}]})(t)}function ht(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"},child:[]}]})(t)}function ut(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.25-1.5c.37-.81.7-1.51 1.17-2.26.96-1.53 2.21-2.85 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.75a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"},child:[]}]})(t)}function pt(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"},child:[]}]})(t)}function gt(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{fill:"none"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M0 0h24v24H0V0z"},child:[]}]},{tag:"path",attr:{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"},child:[]}]})(t)}const mt=({initialState:t,onChange:e}={initialState:!1})=>{const[s,a]=u.useState(t??!1),r=u.useRef(null);return u.useEffect(()=>{const o=new IntersectionObserver(c=>{c.forEach(l=>{const{isIntersecting:i}=l;a(i)})});return r.current&&o.observe(r.current),()=>{o.disconnect()}},[]),u.useEffect(()=>{e==null||e(s)},[s]),[r,s]};export{H as A,pt as M,E as P,Z as S,ut as a,ht as b,vt as c,gt as d,mt as u};
