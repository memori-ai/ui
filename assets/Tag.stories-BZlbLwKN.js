import{j as e,r as u}from"./iframe-DQnDAKDD.js";import{T as s}from"./Tag-JPAHX50P.js";import{C as x}from"./circle-check-big-CU3HF7li.js";import{c as f}from"./createLucideIcon-C4Q6ZgnJ.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DmXSnq-J.js";import"./useTranslation-CPQkVxRz.js";import"./index-DfFO9_zg.js";import"./x-C0vI0DYB.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],y=f("star",g),{fn:h}=__STORYBOOK_MODULE_TEST__,p=["default","primary","success","warning","error","info"],L={title:"Contenuto/Tag",component:s,tags:["autodocs"],argTypes:{color:{control:"select",options:p,description:"Semantic color of the tag",table:{defaultValue:{summary:"default"}}},size:{control:"select",options:["sm","md"],description:"Tag size",table:{defaultValue:{summary:"md"}}},closable:{control:"boolean",description:"Renders a close button after the content"},closeLabel:{control:"text",description:"Accessible label for the close button"},children:{control:"text",description:"Tag content"},icon:{control:!1},onClose:{control:!1},className:{control:"text"}},args:{onClose:h()},parameters:{controls:{expanded:!0},docs:{description:{component:"Compact label for status, category or filter values. Semantic colors only; optional icon and close button."}}}},t={args:{children:"Tag"}},l={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:["sm","md"].map(a=>e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:p.map(r=>e.jsx(s,{color:r,size:a,children:r},r))},a))})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(s,{color:"success",icon:e.jsx(x,{}),children:"Published"}),e.jsx(s,{color:"primary",icon:e.jsx(y,{}),children:"Featured"})]})},n={args:{children:"Closable",color:"info",closable:!0}},o={render:()=>{const[a,r]=u.useState(["React","TypeScript","CSS"]);return e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:a.map(i=>e.jsx(s,{color:"primary",closable:!0,onClose:()=>r(d=>d.filter(m=>m!==i)),children:i},i))})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Tag'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Closable',
    color: 'info',
    closable: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"The tag does not hide itself: the owner removes it from its data in `onClose`.",...o.parameters?.docs?.description}}};const R=["Default","AllVariants","WithIcon","Closable","RemovableList"];export{l as AllVariants,n as Closable,t as Default,o as RemovableList,c as WithIcon,R as __namedExportsOrder,L as default};
