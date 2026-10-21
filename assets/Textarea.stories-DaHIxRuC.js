import{r as n,j as o}from"./iframe-BXoPY9wl.js";import{c as V}from"./index-CWjFjZSg.js";import{F as N}from"./FieldControl-DIlGRSd0.js";import{F}from"./Field-DIT5Ass0.js";import"./preload-helper-Ct5FWWRu.js";import"./useStableCallback-BbYRKgG5.js";import"./useRenderElement-DXWaToy6.js";import"./useControlled-4_v4svvh.js";import"./LabelableContext-DVM4QQkJ.js";import"./index-BgmNc_hI.js";import"./index-uhqEoe0I.js";import"./useLabelableId-CG2xlmsb.js";import"./floating-ui.utils.dom-B8UkErNH.js";import"./useBaseUiId-ChhW82KN.js";import"./useId-BMVthQJU.js";import"./useTimeout-Ce8uFSXF.js";import"./useOnMount-CMoo4wSm.js";import"./element-B0Wt50zv.js";const s=e=>Number.parseFloat(e)||0,t=n.forwardRef(({autosize:e=!1,error:S=!1,className:C,disabled:f,rows:D,onChange:I,"aria-invalid":w,...g},i)=>{const b=n.useRef(null),_=n.useCallback(r=>{b.current=r,typeof i=="function"?i(r):i&&(i.current=r)},[i]),m=e!==!1,d=typeof e=="object"?e.minRows:void 0,x=typeof e=="object"?e.maxRows:void 0,h=n.useCallback(()=>{const r=b.current;if(!r||!m)return;const a=window.getComputedStyle(r),G=s(a.lineHeight)||s(a.fontSize)*1.5||0,E=s(a.paddingTop)+s(a.paddingBottom),v=s(a.borderTopWidth)+s(a.borderBottomWidth),T=O=>O*G+E+v;r.style.height="auto";const j=r.scrollHeight+v,B=d!=null?T(d):0,R=x!=null?T(x):1/0;r.style.height=`${Math.min(Math.max(j,B),R)}px`,r.style.overflowY=j>R?"auto":"hidden"},[m,d,x]);n.useLayoutEffect(()=>{h()},[h,g.value]);const z=r=>{I?.(r),h()},y=S||w===!0||w==="true",A={...g,rows:D??d,disabled:f,onChange:z,"aria-invalid":y||void 0,className:V("memori-textarea",y&&"memori-textarea--error",f&&"memori-textarea--disabled",m&&"memori-textarea--autosize",C)};return o.jsx(N,{ref:_,render:o.jsx("textarea",{}),...A})});t.displayName="Textarea";t.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{autosize:{required:!1,tsType:{name:"union",raw:"boolean | TextareaAutosizeOptions",elements:[{name:"boolean"},{name:"TextareaAutosizeOptions"}]},description:`Grow the height with the content. Pass an object to bound it in rows.
@default false`,defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Invalid state: error border/background and `aria-invalid`.\nInside `Field.Root invalid` the same style applies automatically.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name"}}};const{fn:W}=__STORYBOOK_MODULE_TEST__,ae={title:"Form/Textarea",component:t,tags:["autodocs"],argTypes:{autosize:{control:"object",description:"Grow with the content. `true` or `{ minRows, maxRows }` to bound it"},error:{control:"boolean",description:"Invalid state (same style as Input error)"},disabled:{control:"boolean",description:"Whether the textarea is disabled"},placeholder:{control:"text",description:"Placeholder text"},rows:{control:"number",description:"Visible rows (native attribute)"},onChange:{description:"Native change handler"}},args:{onChange:W()},parameters:{controls:{expanded:!0},docs:{description:{component:"Multi-line text input with the same chrome as Input. Accepts every native `<textarea>` attribute; optional `autosize`. Works inside `Field` / `FieldGroup`."}}}},c={args:{placeholder:"Write a description...",rows:4}},p={render:e=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(t,{...e,placeholder:"Default",rows:3}),o.jsx(t,{...e,placeholder:"Error",defaultValue:"Invalid content",rows:3,error:!0}),o.jsx(t,{...e,placeholder:"Disabled",defaultValue:"Cannot edit",rows:3,disabled:!0})]})},l={args:{placeholder:"Type several lines...",autosize:{minRows:2,maxRows:6}}},u={render:e=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(F,{label:"Bio",helperText:"A few words about you.",children:o.jsx(t,{...e,rows:3})}),o.jsx(F,{label:"Bio",error:"This field is required.",invalid:!0,children:o.jsx(t,{...e,rows:3})})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Write a description...',
    rows: 4
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Textarea {...args} placeholder="Default" rows={3} />
      <Textarea {...args} placeholder="Error" defaultValue="Invalid content" rows={3} error />
      <Textarea {...args} placeholder="Disabled" defaultValue="Cannot edit" rows={3} disabled />
    </div>
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type several lines...',
    autosize: {
      minRows: 2,
      maxRows: 6
    }
  }
}`,...l.parameters?.docs?.source},description:{story:"Grows with the content between 2 and 6 rows, then scrolls.",...l.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <FieldGroup label="Bio" helperText="A few words about you.">
        <Textarea {...args} rows={3} />
      </FieldGroup>
      <FieldGroup label="Bio" error="This field is required." invalid>
        <Textarea {...args} rows={3} />
      </FieldGroup>
    </div>
}`,...u.parameters?.docs?.source}}};const se=["Default","States","Autosize","InField"];export{l as Autosize,c as Default,u as InField,p as States,se as __namedExportsOrder,ae as default};
