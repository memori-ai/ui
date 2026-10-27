import{j as t}from"./iframe-dIQ7bXS9.js";import{E as a}from"./Empty-D0LbALbQ.js";import{B as n}from"./Button-BnH6Kki6.js";import{S as c}from"./search-x-ChgxUCCY.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DAC9qRlk.js";import"./createLucideIcon-iXCOnvW_.js";import"./useButton-D2NgSzQ3.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./useStableCallback-C6i8wFRs.js";import"./useRenderElement-BTl_khHM.js";import"./loader-circle-Dw6T3hSw.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,S={title:"Feedback/Empty",component:a,tags:["autodocs"],argTypes:{description:{control:"text",description:"Message explaining the empty state (no default text)"},icon:{control:!1},extra:{control:!1},className:{control:"text"}},parameters:{controls:{expanded:!0},docs:{description:{component:"Placeholder for lists, grids and panels with no data. Visually aligned with the Table empty row. No built-in text: the product passes a translated `description`."}}}},e={args:{description:"No agents yet"}},r={args:{}},o={args:{description:"No agents yet",extra:t.jsx(n,{size:"sm",onClick:i(),children:"Create agent"})}},s={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(a,{description:"No data"}),t.jsx(a,{icon:t.jsx(c,{}),description:"No results match your filters",extra:t.jsx(n,{size:"sm",variant:"outline",onClick:i(),children:"Clear filters"})}),t.jsx(a,{icon:null,description:"Nothing to show (no icon)"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'No agents yet'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'No agents yet',
    extra: <Button size="sm" onClick={fn()}>
        Create agent
      </Button>
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <Empty description="No data" />
      <Empty icon={<SearchX />} description="No results match your filters" extra={<Button size="sm" variant="outline" onClick={fn()}>
            Clear filters
          </Button>} />
      <Empty icon={null} description="Nothing to show (no icon)" />
    </div>
}`,...s.parameters?.docs?.source}}};const j=["Default","IconOnly","WithExtra","States"];export{e as Default,r as IconOnly,s as States,o as WithExtra,j as __namedExportsOrder,S as default};
