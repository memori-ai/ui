import{r as u,j as s,R as F}from"./iframe-BXoPY9wl.js";import{c as T}from"./index-CWjFjZSg.js";import{u as O}from"./useValueAsRef-C2qGIdgV.js";import{f as L,u as _}from"./useRenderElement-DXWaToy6.js";import"./preload-helper-Ct5FWWRu.js";const M=new Map;function B(e,r){const a=JSON.stringify({locale:e,options:r}),c=M.get(a);if(c)return c;const i=new Intl.NumberFormat(e,r);return M.set(a,i),i}function A(e,r,a){return e==null?"":B(r,a).format(e)}function U(e,r,a){return(e-r)*100/(a-r)}const k=u.createContext(void 0);function z(){const e=u.useContext(k);if(e===void 0)throw new Error(L(51));return e}let j=(function(e){return e.complete="data-complete",e.indeterminate="data-indeterminate",e.progressing="data-progressing",e})({});const I={status(e){return e==="progressing"?{[j.progressing]:""}:e==="complete"?{[j.complete]:""}:e==="indeterminate"?{[j.indeterminate]:""}:null}};function G(e,r,a){return e==null?"":a?A(e,r,a):A(e/100,r,{style:"percent"})}function J(e,r){return r==null?"indeterminate progress":e||`${r}%`}const K=u.forwardRef(function(r,a){const{format:c,getAriaValueText:i=J,locale:m,max:n=100,min:l=0,value:o,render:p,className:d,...g}=r,[h,R]=u.useState(),$=O(c);let v="indeterminate";Number.isFinite(o)&&(v=o===n?"complete":"progressing");const S=G(o,m,$.current),P=u.useMemo(()=>({status:v}),[v]),D={"aria-labelledby":h,"aria-valuemax":n,"aria-valuemin":l,"aria-valuenow":o??void 0,"aria-valuetext":i(S,o),role:"progressbar"},W=u.useMemo(()=>({formattedValue:S,max:n,min:l,setLabelId:R,state:P,status:v,value:o}),[S,n,l,R,P,v,o]),q=_("div",r,{state:P,ref:a,props:[D,g],stateAttributesMapping:I});return s.jsx(k.Provider,{value:W,children:q})}),X=u.forwardRef(function(r,a){const{render:c,className:i,...m}=r,{state:n}=z();return _("div",r,{state:n,ref:a,props:m,stateAttributesMapping:I})}),H=u.forwardRef(function(r,a){const{render:c,className:i,...m}=r,{max:n,min:l,value:o,state:p}=z(),d=Number.isFinite(o)&&o!==null?U(o,l,n):null,g=u.useCallback(()=>d==null?{}:{insetInlineStart:0,height:"inherit",width:`${d}%`},[d]);return _("div",r,{state:p,ref:a,props:[{style:g()},m],stateAttributesMapping:I})}),f=100,C=8,N=(f-C)/2,E=2*Math.PI*N,Q=e=>Number.isFinite(e)?Math.min(100,Math.max(0,e)):0,Y=(e,r)=>`${Math.round(r??0)}%`,t=F.forwardRef(({value:e,variant:r="line",status:a="default",showValue:c=!1,size:i="md","aria-label":m,className:n,style:l},o)=>{const p=Q(e),d=`${Math.round(p)}%`,g=typeof i=="number"?void 0:i;if(r==="circle"){const h=typeof i=="number"?{width:i,height:i,fontSize:Math.max(10,Math.round(i*.22)),...l}:l;return s.jsxs("div",{ref:o,role:"progressbar","aria-label":m,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":p,"aria-valuetext":d,className:T("memori-progress","memori-progress--circle",g&&`memori-progress--${g}`,`memori-progress--${a}`,n),style:h,children:[s.jsxs("svg",{className:"memori-progress__svg",viewBox:`0 0 ${f} ${f}`,"aria-hidden":"true",focusable:"false",children:[s.jsx("circle",{className:"memori-progress__circle-track",cx:f/2,cy:f/2,r:N,strokeWidth:C,fill:"none"}),s.jsx("circle",{className:"memori-progress__circle-indicator",cx:f/2,cy:f/2,r:N,strokeWidth:C,fill:"none",strokeDasharray:E,strokeDashoffset:E*(1-p/100)})]}),c&&s.jsx("span",{className:"memori-progress__value",children:d})]})}return s.jsxs(K,{ref:o,value:p,min:0,max:100,getAriaValueText:Y,"aria-label":m,className:T("memori-progress","memori-progress--line",`memori-progress--${g??"md"}`,`memori-progress--${a}`,n),style:l,children:[s.jsx(X,{className:"memori-progress__track",children:s.jsx(H,{className:"memori-progress__indicator"})}),c&&s.jsx("span",{className:"memori-progress__value",children:d})]})});t.displayName="Progress";t.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!0,tsType:{name:"number"},description:"Completion percentage. Clamped to 0–100."},variant:{required:!1,tsType:{name:"union",raw:"'line' | 'circle'",elements:[{name:"literal",value:"'line'"},{name:"literal",value:"'circle'"}]},description:`Visual shape of the indicator.
@default 'line'`,defaultValue:{value:"'line'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}]},description:`Semantic color of the indicator.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},showValue:{required:!1,tsType:{name:"boolean"},description:'If `true`, renders the rounded percentage ("NN%").\n@default false',defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | number",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"number"}]},description:"Size of the indicator. A number (px diameter) is only honored by\n`variant=\"circle\"`; `line` falls back to `md`.\n@default 'md'",defaultValue:{value:"'md'",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible name of the progress bar."},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name for the root element."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for the root element."}}};const te={title:"Feedback/Progress",component:t,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Completion percentage, clamped to 0–100"},variant:{control:"select",options:["line","circle"],description:"Visual shape of the indicator",table:{defaultValue:{summary:"line"}}},status:{control:"select",options:["default","success","error"],description:"Semantic color of the indicator",table:{defaultValue:{summary:"default"}}},showValue:{control:"boolean",description:"If true, renders the rounded percentage"},size:{control:"select",options:["sm","md"],description:"Size of the indicator. A number (px) is honored only by the circle variant",table:{defaultValue:{summary:"md"}}},"aria-label":{control:"text",description:"Accessible name of the progress bar"},className:{control:"text",description:"Additional CSS class name"}},args:{value:42,"aria-label":"Upload progress"},parameters:{controls:{expanded:!0},docs:{description:{component:'Determinate progress indicator. The line variant is built on @base-ui Progress; the circle variant is an SVG ring. Both expose role="progressbar" with aria-valuenow/min/max.'}}}},x={},V={args:{showValue:!0}},w={args:{variant:"circle",showValue:!0,value:68}},y={render:e=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--memori-spacing-lg)",maxWidth:420},children:[s.jsx(t,{...e,size:"sm",showValue:!0}),s.jsx(t,{...e,size:"md",showValue:!0}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--memori-spacing-lg)"},children:[s.jsx(t,{...e,variant:"circle",size:"sm",showValue:!0}),s.jsx(t,{...e,variant:"circle",size:"md",showValue:!0}),s.jsx(t,{...e,variant:"circle",size:120,showValue:!0})]})]})},b={render:e=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--memori-spacing-lg)",maxWidth:420},children:[s.jsx(t,{...e,value:0,showValue:!0}),s.jsx(t,{...e,status:"default",value:42,showValue:!0}),s.jsx(t,{...e,status:"success",value:100,showValue:!0}),s.jsx(t,{...e,status:"error",value:73,showValue:!0}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--memori-spacing-lg)"},children:[s.jsx(t,{...e,variant:"circle",status:"default",value:42,showValue:!0}),s.jsx(t,{...e,variant:"circle",status:"success",value:100,showValue:!0}),s.jsx(t,{...e,variant:"circle",status:"error",value:73,showValue:!0})]})]})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"{}",...x.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    showValue: true
  }
}`,...V.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    showValue: true,
    value: 68
  }
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--memori-spacing-lg)',
    maxWidth: 420
  }}>
      <Progress {...args} size="sm" showValue />
      <Progress {...args} size="md" showValue />
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--memori-spacing-lg)'
    }}>
        <Progress {...args} variant="circle" size="sm" showValue />
        <Progress {...args} variant="circle" size="md" showValue />
        <Progress {...args} variant="circle" size={120} showValue />
      </div>
    </div>
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--memori-spacing-lg)',
    maxWidth: 420
  }}>
      <Progress {...args} value={0} showValue />
      <Progress {...args} status="default" value={42} showValue />
      <Progress {...args} status="success" value={100} showValue />
      <Progress {...args} status="error" value={73} showValue />
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--memori-spacing-lg)'
    }}>
        <Progress {...args} variant="circle" status="default" value={42} showValue />
        <Progress {...args} variant="circle" status="success" value={100} showValue />
        <Progress {...args} variant="circle" status="error" value={73} showValue />
      </div>
    </div>
}`,...b.parameters?.docs?.source}}};const oe=["Default","WithValue","Circle","AllVariants","States"];export{y as AllVariants,w as Circle,x as Default,b as States,V as WithValue,oe as __namedExportsOrder,te as default};
