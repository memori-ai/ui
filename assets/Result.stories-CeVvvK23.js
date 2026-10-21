import{R as k,j as e,r as v}from"./iframe-BXoPY9wl.js";import{c as x}from"./index-CWjFjZSg.js";import{c}from"./createLucideIcon-KNAk1hxz.js";import{S as R}from"./search-x-CIo7g-Yc.js";import{I as _}from"./info-CwsEsUXS.js";import{T as S,C as w}from"./triangle-alert-CXoh9JQg.js";import{B as m}from"./Button-FLGcyd8p.js";import"./preload-helper-Ct5FWWRu.js";import"./useButton-CEgo-tWA.js";import"./floating-ui.utils.dom-B8UkErNH.js";import"./useStableCallback-BbYRKgG5.js";import"./useRenderElement-DXWaToy6.js";import"./loader-circle-CPU3h71g.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],C=c("circle-check",N);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],T=c("rocket",b);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",key:"4b9dqc"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",key:"22nnkd"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m13 6-4 6h6l-4 6",key:"14hqih"}]],j=c("server-crash",A);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]],O=c("shield-x",M),q={success:C,error:w,warning:S,info:_,404:R,403:O,500:j},l=k.forwardRef(({status:s="info",title:t,description:a,icon:p,extra:d,className:h,style:f},y)=>{const g=q[s];return e.jsxs("div",{ref:y,className:x("memori-result",`memori-result--status-${s}`,h),style:f,children:[e.jsx("div",{className:"memori-result__icon","aria-hidden":"true",children:p??e.jsx(g,{className:"memori-result__icon-svg",size:64,strokeWidth:1.5})}),e.jsx("h2",{className:"memori-result__title",children:t}),a!=null&&e.jsx("div",{className:"memori-result__description",children:a}),d!=null&&e.jsx("div",{className:"memori-result__extra",children:d})]})});l.displayName="Result";l.__docgenInfo={description:"",methods:[],displayName:"Result",props:{status:{required:!1,tsType:{name:"union",raw:`| 'success'
| 'error'
| 'warning'
| 'info'
| '404'
| '403'
| '500'`,elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'404'"},{name:"literal",value:"'403'"},{name:"literal",value:"'500'"}]},description:`Outcome the screen communicates. Drives the default icon and its color.
@default 'info'`,defaultValue:{value:"'info'",computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Main message, rendered as an `<h2>`."},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Secondary copy rendered below the title."},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Overrides the default status icon."},extra:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Actions slot (buttons, links) rendered below the description."},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name for the root element."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for the root element."}}};const{fn:u}=__STORYBOOK_MODULE_TEST__,U={title:"Feedback/Result",component:l,tags:["autodocs"],argTypes:{status:{control:"select",options:["success","error","warning","info","404","403","500"],description:"Outcome the screen communicates; drives icon and color",table:{defaultValue:{summary:"info"}}},title:{control:"text",description:"Main message, rendered as an h2"},description:{control:"text",description:"Secondary copy below the title"},icon:{control:!1,description:"Overrides the default status icon"},extra:{control:!1,description:"Actions slot rendered below the description"},className:{control:"text",description:"Additional CSS class name"}},args:{status:"info",title:"Your export is being prepared",description:"We will email you a download link as soon as it is ready."},parameters:{controls:{expanded:!0},docs:{description:{component:"Full outcome/status screen (success, error, 404, 403, 500…). Not a page header: page chrome stays in Section. All copy is provided by the caller."}}}},r={},o={args:{status:"success",title:"Agent published",description:"Your agent is now live and reachable via its public link.",extra:e.jsxs(e.Fragment,{children:[e.jsx(m,{onClick:u(),children:"Open agent"}),e.jsx(m,{variant:"outline",onClick:u(),children:"Back to dashboard"})]})}},i={args:{title:"Ready for launch",icon:e.jsx(T,{size:64,strokeWidth:1.5})}},B=[{status:"success",title:"Payment received"},{status:"error",title:"Submission failed"},{status:"warning",title:"Quota almost reached"},{status:"info",title:"Maintenance scheduled"},{status:"404",title:"Page not found"},{status:"403",title:"Access denied"},{status:"500",title:"Something went wrong"}],n={render:s=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"var(--memori-spacing-lg)"},children:B.map(({status:t,title:a})=>v.createElement(l,{...s,key:t,status:t,title:a,description:`status="${t}"`}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'success',
    title: 'Agent published',
    description: 'Your agent is now live and reachable via its public link.',
    extra: <>
        <Button onClick={fn()}>Open agent</Button>
        <Button variant="outline" onClick={fn()}>
          Back to dashboard
        </Button>
      </>
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Ready for launch',
    icon: <Rocket size={64} strokeWidth={1.5} />
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: 'var(--memori-spacing-lg)'
  }}>
      {statuses.map(({
      status,
      title
    }) => <Result {...args} key={status} status={status} title={title} description={\`status="\${status}"\`} />)}
    </div>
}`,...n.parameters?.docs?.source}}};const K=["Default","WithActions","CustomIcon","AllVariants"];export{n as AllVariants,i as CustomIcon,r as Default,o as WithActions,K as __namedExportsOrder,U as default};
