import{i as e,w as t}from"./iframe-DMsFkDbs.js";import{t as n}from"./jsx-runtime-s6AK7i7Z.js";import"./shim-i-E5V3v4.js";import{C as r,_ as i,a,b as o,c as s,f as c,g as l,h as u,i as d,l as f,m as p,n as m,p as h,r as g,s as _,t as v,u as ee,v as y,y as b}from"./open-closed-BzYsf9ml.js";import"./floating-ui.utils.dom-D_LsV80C.js";import{t as x}from"./classnames-D2mCmNFl.js";import"./createLucideIcon-BVDRrXjB.js";import{t as S}from"./Button-BsVlKylB.js";import{t as C}from"./x-DpNIEIdG.js";import"./useRenderElement-CuQd9qAl.js";import"./useButton-BqLUJEwP.js";import"./Button-CQeFHuBP.js";import{t as w}from"./useTranslation-PmMAOBom.js";var T=t(e(),1);function E(){let e=typeof document>`u`;return`useSyncExternalStore`in T?(e=>e.useSyncExternalStore)(T)(()=>()=>{},()=>!1,()=>!e):!1}function te(){let e=E(),[t,n]=T.useState(r.isHandoffComplete);return t&&r.isHandoffComplete===!1&&n(!1),T.useEffect(()=>{t!==!0&&n(!0)},[t]),T.useEffect(()=>r.handoff(),[]),e?!1:t}function D(){let e=(0,T.useRef)(!1);return b(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function ne(e){return!!(e.enter||e.enterFrom||e.enterTo||e.leave||e.leaveFrom||e.leaveTo)||!h(e.as??se)||T.Children.count(e.children)===1}var O=(0,T.createContext)(null);O.displayName=`TransitionContext`;var re=(e=>(e.Visible=`visible`,e.Hidden=`hidden`,e))(re||{});function ie(){let e=(0,T.useContext)(O);if(e===null)throw Error(`A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.`);return e}function ae(){let e=(0,T.useContext)(k);if(e===null)throw Error(`A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.`);return e}var k=(0,T.createContext)(null);k.displayName=`NestingContext`;function A(e){return`children`in e?A(e.children):e.current.filter(({el:e})=>e.current!==null).filter(({state:e})=>e===`visible`).length>0}function oe(e,t){let n=y(e),r=(0,T.useRef)([]),a=D(),s=o(),c=i((e,t=f.Hidden)=>{let i=r.current.findIndex(({el:t})=>t===e);i!==-1&&(u(t,{[f.Unmount](){r.current.splice(i,1)},[f.Hidden](){r.current[i].state=`hidden`}}),s.microTask(()=>{var e;!A(r)&&a.current&&((e=n.current)==null||e.call(n))}))}),l=i(e=>{let t=r.current.find(({el:t})=>t===e);return t?t.state!==`visible`&&(t.state=`visible`):r.current.push({el:e,state:`visible`}),()=>c(e,f.Unmount)}),d=(0,T.useRef)([]),p=(0,T.useRef)(Promise.resolve()),m=(0,T.useRef)({enter:[],leave:[]}),h=i((e,n,r)=>{d.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),t?.chains.current[n].push([e,new Promise(e=>{d.current.push(e)})]),t?.chains.current[n].push([e,new Promise(e=>{Promise.all(m.current[n].map(([e,t])=>t)).then(()=>e())})]),n===`enter`?p.current=p.current.then(()=>t?.wait.current).then(()=>r(n)):r(n)}),g=i((e,t,n)=>{Promise.all(m.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;(e=d.current.shift())==null||e()}).then(()=>n(t))});return(0,T.useMemo)(()=>({children:r,register:l,unregister:c,onStart:h,onStop:g,wait:p,chains:m}),[l,c,r,h,g,m,p])}var se=T.Fragment,j=s.RenderStrategy;function M(e,t){var n;let{transition:r=!0,beforeEnter:o,afterEnter:s,beforeLeave:c,afterLeave:h,enter:g,enterFrom:y,enterTo:x,entered:S,leave:C,leaveFrom:w,leaveTo:E,...D}=e,[O,re]=(0,T.useState)(null),M=(0,T.useRef)(null),N=ne(e),P=_(...N?[M,t,re]:t===null?[]:[t]),F=(n=D.unmount)==null||n?f.Unmount:f.Hidden,{show:I,appear:L,initial:R}=ie(),[z,B]=(0,T.useState)(I?`visible`:`hidden`),V=ae(),{register:H,unregister:U}=V;b(()=>H(M),[H,M]),b(()=>{if(F===f.Hidden&&M.current){if(I&&z!==`visible`){B(`visible`);return}return u(z,{hidden:()=>U(M),visible:()=>H(M)})}},[z,M,H,U,I,F]);let W=te();b(()=>{if(N&&W&&z===`visible`&&M.current===null)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[M,z,W,N]);let G=R&&!L,K=L&&I&&R,q=(0,T.useRef)(!1),J=oe(()=>{q.current||(B(`hidden`),U(M))},V),Y=i(e=>{q.current=!0;let t=e?`enter`:`leave`;J.onStart(M,t,e=>{e===`enter`?o?.():e===`leave`&&c?.()})}),X=i(e=>{let t=e?`enter`:`leave`;q.current=!1,J.onStop(M,t,e=>{e===`enter`?s?.():e===`leave`&&h?.()}),t===`leave`&&!A(J)&&(B(`hidden`),U(M))});(0,T.useEffect)(()=>{N&&r||(Y(I),X(I))},[I,N,r]);let[,Z]=d((()=>!(!r||!N||!W||G))(),O,I,{start:Y,end:X}),Q=p({ref:P,className:l(D.className,K&&g,K&&y,Z.enter&&g,Z.enter&&Z.closed&&y,Z.enter&&!Z.closed&&x,Z.leave&&C,Z.leave&&!Z.closed&&w,Z.leave&&Z.closed&&E,!Z.transition&&I&&S)?.trim()||void 0,...a(Z)}),$=0;z===`visible`&&($|=m.Open),z===`hidden`&&($|=m.Closed),I&&z===`hidden`&&($|=m.Opening),!I&&z===`visible`&&($|=m.Closing);let ce=ee();return T.createElement(k.Provider,{value:J},T.createElement(v,{value:$},ce({ourProps:Q,theirProps:D,defaultTag:se,features:j,visible:z===`visible`,name:`Transition.Child`})))}function N(e,t){let{show:n,appear:r=!1,unmount:a=!0,...o}=e,s=(0,T.useRef)(null),c=_(...ne(e)?[s,t]:t===null?[]:[t]);te();let l=g();if(n===void 0&&l!==null&&(n=(l&m.Open)===m.Open),n===void 0)throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[u,d]=(0,T.useState)(n?`visible`:`hidden`),f=oe(()=>{n||d(`hidden`)}),[p,h]=(0,T.useState)(!0),v=(0,T.useRef)([n]);b(()=>{p!==!1&&v.current[v.current.length-1]!==n&&(v.current.push(n),h(!1))},[v,n]);let y=(0,T.useMemo)(()=>({show:n,appear:r,initial:p}),[n,r,p]);b(()=>{n?d(`visible`):!A(f)&&s.current!==null&&d(`hidden`)},[n,f]);let x={unmount:a},S=i(()=>{var t;p&&h(!1),(t=e.beforeEnter)==null||t.call(e)}),C=i(()=>{var t;p&&h(!1),(t=e.beforeLeave)==null||t.call(e)}),w=ee();return T.createElement(k.Provider,{value:f},T.createElement(O.Provider,{value:y},w({ourProps:{...x,as:T.Fragment,children:T.createElement(I,{ref:c,...x,...o,beforeEnter:S,beforeLeave:C})},theirProps:{},defaultTag:T.Fragment,features:j,visible:u===`visible`,name:`Transition`})))}function P(e,t){let n=(0,T.useContext)(O)!==null,r=g()!==null;return T.createElement(T.Fragment,null,!n&&r?T.createElement(F,{ref:t,...e}):T.createElement(I,{ref:t,...e}))}var F=c(N),I=c(M),L=c(P),R=Object.assign(F,{Child:L,Root:F}),z=t(x(),1),B=n(),V=({open:e=!1,onClose:t,className:n,title:r,description:i,children:a,type:o=`info`,icon:s,closable:c=!0,duration:l=null,action:u,width:d=`400px`})=>{let{t:f}=w();return T.useEffect(()=>{if(l&&e){let e=setTimeout(()=>{t(!1)},l);return()=>clearTimeout(e)}},[l,e,t]),(0,B.jsx)(R,{show:e,as:T.Fragment,appear:!0,children:(0,B.jsx)(`div`,{className:(0,z.default)(`memori-alert`,(e=>{switch(e){case`success`:return`memori-alert--success`;case`warning`:return`memori-alert--warning`;case`error`:return`memori-alert--error`;default:return`memori-alert--info`}})(o),n),style:{"--memori-alert-width":d},children:(0,B.jsx)(R.Child,{as:T.Fragment,enter:`ease-out duration-300`,enterFrom:`opacity-0 translate-y-4`,enterTo:`opacity-100 translate-y-0`,leave:`ease-in duration-200`,leaveFrom:`opacity-100 translate-y-0`,leaveTo:`opacity-0 translate-y-4`,children:(0,B.jsxs)(`div`,{className:`memori-alert__container`,children:[s&&(0,B.jsx)(`div`,{className:`memori-alert__icon`,children:s}),(0,B.jsxs)(`div`,{className:`memori-alert__content`,children:[r&&(0,B.jsx)(`div`,{className:`memori-alert__title`,children:r}),i&&(0,B.jsx)(`div`,{className:`memori-alert__description`,children:i}),a]}),(0,B.jsxs)(`div`,{className:`memori-alert__actions`,children:[u&&(0,B.jsx)(`div`,{className:`memori-alert__action`,children:u}),c&&(0,B.jsx)(S,{title:f(`close`)||`Close alert`,variant:`ghost`,shape:`circle`,icon:(0,B.jsx)(C,{}),"aria-label":f(`close`)||`Close alert`,onClick:()=>t(!1),className:`memori-alert__close`})]})]})})})})},H=V;V.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{open:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``},title:{required:!1,tsType:{name:`union`,raw:`string | JSX.Element | React.ReactNode`,elements:[{name:`string`},{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},description:{required:!1,tsType:{name:`union`,raw:`string | JSX.Element | React.ReactNode`,elements:[{name:`string`},{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},children:{required:!1,tsType:{name:`union`,raw:`JSX.Element | React.ReactNode`,elements:[{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},type:{required:!1,tsType:{name:`union`,raw:`'success' | 'warning' | 'error' | 'info'`,elements:[{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'info'`}]},description:``,defaultValue:{value:`'info'`,computed:!1}},icon:{required:!1,tsType:{name:`union`,raw:`JSX.Element | React.ReactNode`,elements:[{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},closable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},duration:{required:!1,tsType:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}]},description:``,defaultValue:{value:`null`,computed:!1}},action:{required:!1,tsType:{name:`union`,raw:`JSX.Element | React.ReactNode`,elements:[{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},width:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'400px'`,computed:!1}}}};var U={title:`UI/Alert`,component:H,tags:[`autodocs`],argTypes:{type:{control:{type:`select`,options:[`success`,`warning`,`error`,`info`]}},title:{control:{type:`text`}},description:{control:{type:`text`}},open:{control:{type:`boolean`}},closable:{control:{type:`boolean`}},width:{control:{type:`text`}}},parameters:{controls:{expanded:!0}},render:e=>{let[t,n]=T.useState(!!e.open);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(S,{onClick:()=>n(!0),children:`Show Alert`}),(0,B.jsx)(H,{...e,open:t,onClose:()=>n(!1)})]})}};const W={args:{open:!1,type:`info`,title:`Information`,description:`This is an informative alert message.`,onClose:()=>{}}},G={args:{open:!0,onClose:()=>{},type:`success`,title:`Success!`,description:`Operation completed successfully.`}},K={args:{open:!0,onClose:()=>{},type:`warning`,title:`Warning`,description:`Please review this important warning message.`}},q={args:{open:!0,onClose:()=>{},type:`error`,title:`Error`,description:`An error occurred while processing your request.`}},J={args:{open:!0,onClose:()=>{},type:`info`,title:`Update Available`,description:`A new version is available.`,action:(0,B.jsx)(S,{variant:`primary`,children:`Update Now`})}},Y={args:{open:!0,onClose:()=>{},type:`warning`,title:`Important Notice`,description:`This message cannot be dismissed.`,closable:!1}},X={args:{open:!0,onClose:()=>{},type:`info`,title:`Custom Width`,description:`This alert has a custom width.`,width:`500px`}},Z={args:{open:!0,onClose:()=>{},type:`success`,title:`Operation Successful`}},Q={args:{open:!0,onClose:()=>{},type:`success`,title:`Auto Dismiss`,description:`This alert will dismiss automatically after 3 seconds.`,duration:3e3}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    type: 'info',
    title: 'Information',
    description: 'This is an informative alert message.',
    onClose: () => {}
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'success',
    title: 'Success!',
    description: 'Operation completed successfully.'
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'warning',
    title: 'Warning',
    description: 'Please review this important warning message.'
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'error',
    title: 'Error',
    description: 'An error occurred while processing your request.'
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'info',
    title: 'Update Available',
    description: 'A new version is available.',
    action: <Button variant="primary">Update Now</Button>
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'warning',
    title: 'Important Notice',
    description: 'This message cannot be dismissed.',
    closable: false
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'info',
    title: 'Custom Width',
    description: 'This alert has a custom width.',
    width: '500px'
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'success',
    title: 'Operation Successful'
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'success',
    title: 'Auto Dismiss',
    description: 'This alert will dismiss automatically after 3 seconds.',
    duration: 3000
  }
}`,...Q.parameters?.docs?.source}}};const $=[`Default`,`Success`,`Warning`,`Error`,`WithAction`,`NonClosable`,`CustomWidth`,`WithoutDescription`,`AutoDismiss`];export{Q as AutoDismiss,X as CustomWidth,W as Default,q as Error,Y as NonClosable,G as Success,K as Warning,J as WithAction,Z as WithoutDescription,$ as __namedExportsOrder,U as default};