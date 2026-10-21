import{R as y,j as e}from"./iframe-BXoPY9wl.js";import{c as h}from"./index-CWjFjZSg.js";import{c as f}from"./createLucideIcon-KNAk1hxz.js";import{B as l}from"./Button-FLGcyd8p.js";import{S as g}from"./search-x-CIo7g-Yc.js";import"./preload-helper-Ct5FWWRu.js";import"./useButton-CEgo-tWA.js";import"./floating-ui.utils.dom-B8UkErNH.js";import"./useStableCallback-BbYRKgG5.js";import"./useRenderElement-DXWaToy6.js";import"./loader-circle-CPU3h71g.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],R=f("inbox",N),t=y.forwardRef(({icon:n,description:i,extra:c,className:m,style:u},x)=>{const d=n===void 0?e.jsx(R,{}):n;return e.jsxs("div",{ref:x,className:h("memori-empty",m),style:u,children:[d!=null&&e.jsx("div",{className:"memori-empty__icon","aria-hidden":"true",children:d}),i!=null&&e.jsx("p",{className:"memori-empty__description",children:i}),c!=null&&e.jsx("div",{className:"memori-empty__extra",children:c})]})});t.displayName="Empty";t.__docgenInfo={description:"",methods:[],displayName:"Empty",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Illustration above the description. Decorative (`aria-hidden`).\nDefaults to a neutral `Inbox` icon; pass `null` to render no icon."},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Message explaining the empty state. No default text: pass the translated
string. When omitted, the paragraph is not rendered.`},extra:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Actions rendered below the description (e.g. a "Create" button).'},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name for the root element."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for the root element."}}};const{fn:p}=__STORYBOOK_MODULE_TEST__,B={title:"Feedback/Empty",component:t,tags:["autodocs"],argTypes:{description:{control:"text",description:"Message explaining the empty state (no default text)"},icon:{control:!1},extra:{control:!1},className:{control:"text"}},parameters:{controls:{expanded:!0},docs:{description:{component:"Placeholder for lists, grids and panels with no data. Visually aligned with the Table empty row. No built-in text: the product passes a translated `description`."}}}},r={args:{description:"No agents yet"}},o={args:{}},s={args:{description:"No agents yet",extra:e.jsx(l,{size:"sm",onClick:p(),children:"Create agent"})}},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(t,{description:"No data"}),e.jsx(t,{icon:e.jsx(g,{}),description:"No results match your filters",extra:e.jsx(l,{size:"sm",variant:"outline",onClick:p(),children:"Clear filters"})}),e.jsx(t,{icon:null,description:"Nothing to show (no icon)"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'No agents yet'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'No agents yet',
    extra: <Button size="sm" onClick={fn()}>
        Create agent
      </Button>
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const D=["Default","IconOnly","WithExtra","States"];export{r as Default,o as IconOnly,a as States,s as WithExtra,D as __namedExportsOrder,B as default};
