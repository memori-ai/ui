import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-D84Y4vqx.js";import{B as r}from"./Button-IR0IIUHb.js";import{D as _,T as R}from"./trash-2--Zf94ysG.js";import{c as k}from"./createLucideIcon-ChCsIH7i.js";import{X as M}from"./x-_nwkhgHZ.js";import"./preload-helper-Ct5FWWRu.js";import"./index-KPDjPuE5.js";import"./useButton-B0iWvfSG.js";import"./useRenderElement-B-fE6Aik.js";import"./loader-circle-BCebMMel.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],a=k("plus",F);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],V=k("send",T);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],G=k("settings",E),{fn:N}=__STORYBOOK_MODULE_TEST__,re={title:"Form/Button",component:r,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline","ghost","danger"],description:"Button variant style"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Button size"},shape:{control:{type:"select"},options:["default","round","circle"],description:"Button shape"},fullWidth:{control:{type:"boolean"},description:"Whether the button should take full width"},shadow:{control:{type:"boolean"},description:"Whether to apply a box shadow to the button"},loading:{control:{type:"boolean"},description:"Shows a loading spinner and disables the button"},active:{control:{type:"boolean"},description:"Whether the button is in an active/pressed state"},danger:{control:{type:"boolean"},description:"Indicates a destructive/dangerous action"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},iconPosition:{control:{type:"select"},options:["left","right"],description:"Position of the icon relative to the button text"},children:{control:{type:"text"},description:"Button content"},onClick:{description:"Click handler"}},parameters:{controls:{expanded:!0}},args:{onClick:N()}},t={args:{children:"Primary Button",variant:"primary"}},n={args:{children:"Secondary Button",variant:"secondary"}},s={args:{children:"Outline Button",variant:"outline"}},i={args:{children:"Small Button",variant:"primary",size:"sm"}},o={args:{children:"Medium Button",variant:"primary",size:"md"}},d={args:{children:"Large Button",variant:"primary",size:"lg"}},c={args:{children:"Full Width Button",variant:"primary",fullWidth:!0}},l={args:{children:"Button with Shadow",variant:"primary",shadow:!0}},p={args:{children:"Disabled Button",variant:"primary",disabled:!0}},u={args:{children:"Disabled Outline",variant:"outline",disabled:!0}},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"danger",children:"Danger"})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(r,{variant:"primary",size:"sm",children:"Small"}),e.jsx(r,{variant:"primary",size:"md",children:"Medium"}),e.jsx(r,{variant:"primary",size:"lg",children:"Large"})]})},g={args:{children:"Ghost Button",variant:"ghost"}},y={args:{children:"Delete",variant:"danger"}},v={args:{children:"Delete Item",danger:!0}},x={args:{children:"Submitting...",loading:!0}},B={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(r,{variant:"primary",loading:!0,children:"Primary"}),e.jsx(r,{variant:"secondary",loading:!0,children:"Secondary"}),e.jsx(r,{variant:"outline",loading:!0,children:"Outline"}),e.jsx(r,{variant:"ghost",loading:!0,children:"Ghost"}),e.jsx(r,{variant:"danger",loading:!0,children:"Danger"})]})},b={args:{children:"Download",icon:e.jsx(_,{})}},S={args:{children:"Send",icon:e.jsx(V,{}),iconPosition:"right"}},j={args:{icon:e.jsx(a,{}),"aria-label":"Add item"}},f={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(r,{variant:"primary",icon:e.jsx(a,{}),"aria-label":"Add"}),e.jsx(r,{variant:"secondary",icon:e.jsx(G,{}),"aria-label":"Settings"}),e.jsx(r,{variant:"outline",icon:e.jsx(_,{}),"aria-label":"Download"}),e.jsx(r,{variant:"ghost",icon:e.jsx(M,{}),"aria-label":"Close"}),e.jsx(r,{variant:"danger",icon:e.jsx(R,{}),"aria-label":"Delete"})]})},D={args:{children:"Round Button",shape:"round"}},w={args:{icon:e.jsx(a,{}),shape:"circle","aria-label":"Add item"}},A={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(r,{shape:"default",children:"Default"}),e.jsx(r,{shape:"round",children:"Round"}),e.jsx(r,{shape:"circle",icon:e.jsx(a,{}),"aria-label":"Add"})]})},z={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(r,{shape:"circle",size:"sm",icon:e.jsx(a,{}),"aria-label":"Add small"}),e.jsx(r,{shape:"circle",size:"md",icon:e.jsx(a,{}),"aria-label":"Add medium"}),e.jsx(r,{shape:"circle",size:"lg",icon:e.jsx(a,{}),"aria-label":"Add large"})]})},W={args:{children:"Active Button",active:!0}},P={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(r,{variant:"primary",active:!0,children:"Primary Active"}),e.jsx(r,{variant:"secondary",active:!0,children:"Secondary Active"}),e.jsx(r,{variant:"outline",active:!0,children:"Outline Active"}),e.jsx(r,{variant:"ghost",active:!0,children:"Ghost Active"})]})},I={args:{children:"Disabled Ghost",variant:"ghost",disabled:!0}},C={args:{children:"Disabled Danger",variant:"danger",disabled:!0}},O={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"danger",children:"Danger"})]})},L={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",color:"currentColor"},children:"Variants"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"danger",children:"Danger"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",color:"currentColor"},children:"With Icons"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(r,{icon:e.jsx(_,{}),children:"Download"}),e.jsx(r,{icon:e.jsx(V,{}),iconPosition:"right",children:"Send"}),e.jsx(r,{variant:"danger",icon:e.jsx(R,{}),children:"Delete"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",color:"currentColor"},children:"Loading States"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(r,{loading:!0,children:"Submitting"}),e.jsx(r,{variant:"outline",loading:!0,children:"Loading"}),e.jsx(r,{variant:"danger",loading:!0,children:"Deleting"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",color:"currentColor"},children:"Shapes"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(r,{shape:"default",children:"Default"}),e.jsx(r,{shape:"round",children:"Round Shape"}),e.jsx(r,{shape:"circle",icon:e.jsx(a,{}),"aria-label":"Add"}),e.jsx(r,{shape:"circle",variant:"danger",icon:e.jsx(M,{}),"aria-label":"Close"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",color:"currentColor"},children:"Icon-only Buttons"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(r,{size:"sm",icon:e.jsx(G,{}),"aria-label":"Settings"}),e.jsx(r,{size:"md",icon:e.jsx(G,{}),"aria-label":"Settings"}),e.jsx(r,{size:"lg",icon:e.jsx(G,{}),"aria-label":"Settings"})]})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    variant: 'primary'
  }
}`,...t.parameters?.docs?.source},description:{story:"Primary variant is the default button style with solid background.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  }
}`,...n.parameters?.docs?.source},description:{story:"Secondary variant uses the secondary color palette.",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outline Button',
    variant: 'outline'
  }
}`,...s.parameters?.docs?.source},description:{story:"Outline variant has a transparent background with a border.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'sm'
  }
}`,...i.parameters?.docs?.source},description:{story:"Small size button.",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Medium Button',
    variant: 'primary',
    size: 'md'
  }
}`,...o.parameters?.docs?.source},description:{story:"Medium size button (default).",...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'lg'
  }
}`,...d.parameters?.docs?.source},description:{story:"Large size button.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Button',
    variant: 'primary',
    fullWidth: true
  }
}`,...c.parameters?.docs?.source},description:{story:"Full width button that spans the entire container.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button with Shadow',
    variant: 'primary',
    shadow: true
  }
}`,...l.parameters?.docs?.source},description:{story:"Button with shadow applied.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true
  }
}`,...p.parameters?.docs?.source},description:{story:"Disabled button state.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Outline',
    variant: 'outline',
    disabled: true
  }
}`,...u.parameters?.docs?.source},description:{story:"Disabled outline button.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
}`,...m.parameters?.docs?.source},description:{story:"All variants displayed together for comparison.",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Button variant="primary" size="sm">
        Small
      </Button>
      <Button variant="primary" size="md">
        Medium
      </Button>
      <Button variant="primary" size="lg">
        Large
      </Button>
    </div>
}`,...h.parameters?.docs?.source},description:{story:"All sizes displayed together for comparison.",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ghost Button',
    variant: 'ghost'
  }
}`,...g.parameters?.docs?.source},description:{story:"Ghost variant has a transparent background with no border.",...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Delete',
    variant: 'danger'
  }
}`,...y.parameters?.docs?.source},description:{story:"Danger variant for destructive actions.",...y.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Delete Item',
    danger: true
  }
}`,...v.parameters?.docs?.source},description:{story:'Using the danger boolean prop (shorthand for variant="danger").',...v.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Submitting...',
    loading: true
  }
}`,...x.parameters?.docs?.source},description:{story:"Loading state shows a spinner and disables the button.",...x.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary" loading>
        Primary
      </Button>
      <Button variant="secondary" loading>
        Secondary
      </Button>
      <Button variant="outline" loading>
        Outline
      </Button>
      <Button variant="ghost" loading>
        Ghost
      </Button>
      <Button variant="danger" loading>
        Danger
      </Button>
    </div>
}`,...B.parameters?.docs?.source},description:{story:"Loading state with different variants.",...B.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Download',
    icon: <Download />
  }
}`,...b.parameters?.docs?.source},description:{story:"Button with icon on the left (default position).",...b.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Send',
    icon: <Send />,
    iconPosition: 'right'
  }
}`,...S.parameters?.docs?.source},description:{story:"Button with icon on the right.",...S.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Plus />,
    'aria-label': 'Add item'
  }
}`,...j.parameters?.docs?.source},description:{story:"Icon-only button (no children).",...j.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Button variant="primary" icon={<Plus />} aria-label="Add" />
      <Button variant="secondary" icon={<Setting />} aria-label="Settings" />
      <Button variant="outline" icon={<Download />} aria-label="Download" />
      <Button variant="ghost" icon={<Close />} aria-label="Close" />
      <Button variant="danger" icon={<Delete />} aria-label="Delete" />
    </div>
}`,...f.parameters?.docs?.source},description:{story:"Various icon buttons with different variants.",...f.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Round Button',
    shape: 'round'
  }
}`,...D.parameters?.docs?.source},description:{story:"Round shape button with pill-shaped border radius.",...D.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Plus />,
    shape: 'circle',
    'aria-label': 'Add item'
  }
}`,...w.parameters?.docs?.source},description:{story:"Circle shape button (typically used with icons).",...w.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Button shape="default">Default</Button>
      <Button shape="round">Round</Button>
      <Button shape="circle" icon={<Plus />} aria-label="Add" />
    </div>
}`,...A.parameters?.docs?.source},description:{story:"All shapes displayed together.",...A.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Button shape="circle" size="sm" icon={<Plus />} aria-label="Add small" />
      <Button shape="circle" size="md" icon={<Plus />} aria-label="Add medium" />
      <Button shape="circle" size="lg" icon={<Plus />} aria-label="Add large" />
    </div>
}`,...z.parameters?.docs?.source},description:{story:"Circle shape in different sizes.",...z.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Active Button',
    active: true
  }
}`,...W.parameters?.docs?.source},description:{story:"Active state for toggle buttons.",...W.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary" active>
        Primary Active
      </Button>
      <Button variant="secondary" active>
        Secondary Active
      </Button>
      <Button variant="outline" active>
        Outline Active
      </Button>
      <Button variant="ghost" active>
        Ghost Active
      </Button>
    </div>
}`,...P.parameters?.docs?.source},description:{story:"Active state with different variants.",...P.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Ghost',
    variant: 'ghost',
    disabled: true
  }
}`,...I.parameters?.docs?.source},description:{story:"Disabled ghost button.",...I.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Danger',
    variant: 'danger',
    disabled: true
  }
}`,...C.parameters?.docs?.source},description:{story:"Disabled danger button.",...C.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
}`,...O.parameters?.docs?.source},description:{story:"All variants including new ones displayed together.",...O.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h4 style={{
        margin: '0 0 8px 0',
        color: 'currentColor'
      }}>Variants</h4>
        <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>

      <div>
        <h4 style={{
        margin: '0 0 8px 0',
        color: 'currentColor'
      }}>
          With Icons
        </h4>
        <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
          <Button icon={<Download />}>Download</Button>
          <Button icon={<Send />} iconPosition="right">
            Send
          </Button>
          <Button variant="danger" icon={<Delete />}>
            Delete
          </Button>
        </div>
      </div>

      <div>
        <h4 style={{
        margin: '0 0 8px 0',
        color: 'currentColor'
      }}>
          Loading States
        </h4>
        <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
          <Button loading>Submitting</Button>
          <Button variant="outline" loading>
            Loading
          </Button>
          <Button variant="danger" loading>
            Deleting
          </Button>
        </div>
      </div>

      <div>
        <h4 style={{
        margin: '0 0 8px 0',
        color: 'currentColor'
      }}>Shapes</h4>
        <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
      }}>
          <Button shape="default">Default</Button>
          <Button shape="round">Round Shape</Button>
          <Button shape="circle" icon={<Plus />} aria-label="Add" />
          <Button shape="circle" variant="danger" icon={<Close />} aria-label="Close" />
        </div>
      </div>

      <div>
        <h4 style={{
        margin: '0 0 8px 0',
        color: 'currentColor'
      }}>
          Icon-only Buttons
        </h4>
        <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
      }}>
          <Button size="sm" icon={<Setting />} aria-label="Settings" />
          <Button size="md" icon={<Setting />} aria-label="Settings" />
          <Button size="lg" icon={<Setting />} aria-label="Settings" />
        </div>
      </div>
    </div>
}`,...L.parameters?.docs?.source},description:{story:"Comprehensive example showing all features.",...L.parameters?.docs?.description}}};const ae=["Primary","Secondary","Outline","Small","Medium","Large","FullWidth","WithShadow","Disabled","DisabledOutline","AllVariants","AllSizes","Ghost","Danger","DangerProp","Loading","LoadingVariants","WithIconLeft","WithIconRight","IconOnly","IconButtons","RoundShape","CircleShape","AllShapes","CircleSizes","Active","ActiveVariants","DisabledGhost","DisabledDanger","AllVariantsComplete","Showcase"];export{W as Active,P as ActiveVariants,A as AllShapes,h as AllSizes,m as AllVariants,O as AllVariantsComplete,w as CircleShape,z as CircleSizes,y as Danger,v as DangerProp,p as Disabled,C as DisabledDanger,I as DisabledGhost,u as DisabledOutline,c as FullWidth,g as Ghost,f as IconButtons,j as IconOnly,d as Large,x as Loading,B as LoadingVariants,o as Medium,s as Outline,t as Primary,D as RoundShape,n as Secondary,L as Showcase,i as Small,b as WithIconLeft,S as WithIconRight,l as WithShadow,ae as __namedExportsOrder,re as default};
