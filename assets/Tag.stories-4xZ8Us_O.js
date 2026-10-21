import{r as u,j as e}from"./iframe-BXoPY9wl.js";import{c as S}from"./index-CWjFjZSg.js";import{u as C}from"./useTranslation-BjczBpAw.js";import{X as R}from"./x-Zau9dVbC.js";import{C as _}from"./circle-check-big-DZovJHVK.js";import{c as w}from"./createLucideIcon-KNAk1hxz.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BlMiX275.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],N=w("star",j),t=u.forwardRef(({color:r="default",icon:a,closable:s=!1,onClose:d,closeLabel:p,size:g="md",className:y,style:x,children:o},b)=>{const{t:v}=C(),h=typeof o=="string"||typeof o=="number"?String(o):"",T=p??v("table.removeFilter",{label:h}).trim();return e.jsxs("span",{ref:b,className:S("memori-tag",`memori-tag--${r}`,`memori-tag--${g}`,y),style:x,children:[a!=null&&e.jsx("span",{className:"memori-tag__icon","aria-hidden":"true",children:a}),o!=null&&e.jsx("span",{className:"memori-tag__content",children:o}),s&&e.jsx("button",{type:"button",className:"memori-tag__close","aria-label":T,onClick:d,children:e.jsx(R,{className:"memori-tag__close-icon","aria-hidden":"true"})})]})});t.displayName="Tag";t.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{color:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'primary'
| 'success'
| 'warning'
| 'error'
| 'info'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:`Semantic color of the tag.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon rendered before the content."},closable:{required:!1,tsType:{name:"boolean"},description:"If `true`, renders a close button after the content.",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:`Callback fired when the close button is clicked.
The tag does not hide itself: remove it from your data.`},closeLabel:{required:!1,tsType:{name:"string"},description:"Accessible label for the close button.\nDefaults to the translated `table.removeFilter` string (“Remove {{label}}”)."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:`Tag size.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name for the root element."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for the root element."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Tag content."}}};const{fn:L}=__STORYBOOK_MODULE_TEST__,f=["default","primary","success","warning","error","info"],D={title:"Contenuto/Tag",component:t,tags:["autodocs"],argTypes:{color:{control:"select",options:f,description:"Semantic color of the tag",table:{defaultValue:{summary:"default"}}},size:{control:"select",options:["sm","md"],description:"Tag size",table:{defaultValue:{summary:"md"}}},closable:{control:"boolean",description:"Renders a close button after the content"},closeLabel:{control:"text",description:"Accessible label for the close button"},children:{control:"text",description:"Tag content"},icon:{control:!1},onClose:{control:!1},className:{control:"text"}},args:{onClose:L()},parameters:{controls:{expanded:!0},docs:{description:{component:"Compact label for status, category or filter values. Semantic colors only; optional icon and close button."}}}},n={args:{children:"Tag"}},i={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:["sm","md"].map(r=>e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:f.map(a=>e.jsx(t,{color:a,size:r,children:a},a))},r))})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(t,{color:"success",icon:e.jsx(_,{}),children:"Published"}),e.jsx(t,{color:"primary",icon:e.jsx(N,{}),children:"Featured"})]})},m={args:{children:"Closable",color:"info",closable:!0}},l={render:()=>{const[r,a]=u.useState(["React","TypeScript","CSS"]);return e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:r.map(s=>e.jsx(t,{color:"primary",closable:!0,onClose:()=>a(d=>d.filter(p=>p!==s)),children:s},s))})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Tag'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      {(['sm', 'md'] as const).map(size => <div key={size} style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
          {colors.map(color => <Tag key={color} color={color} size={size}>
              {color}
            </Tag>)}
        </div>)}
    </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <Tag color="success" icon={<CheckCircle />}>
        Published
      </Tag>
      <Tag color="primary" icon={<Star />}>
        Featured
      </Tag>
    </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Closable',
    color: 'info',
    closable: true
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState(['React', 'TypeScript', 'CSS']);
    return <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        {items.map(item => <Tag key={item} color="primary" closable onClose={() => setItems(prev => prev.filter(i => i !== item))}>
            {item}
          </Tag>)}
      </div>;
  }
}`,...l.parameters?.docs?.source},description:{story:"The tag does not hide itself: the owner removes it from its data in `onClose`.",...l.parameters?.docs?.description}}};const A=["Default","AllVariants","WithIcon","Closable","RemovableList"];export{i as AllVariants,m as Closable,n as Default,l as RemovableList,c as WithIcon,A as __namedExportsOrder,D as default};
