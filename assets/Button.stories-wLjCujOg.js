import{j as r}from"./iframe-DbK9CzBc.js";import{B as e}from"./Button-BwjXp4vQ.js";import{D as t}from"./download-CCasen8x.js";import{c as N}from"./createLucideIcon-BluzILLi.js";import{P as a}from"./plus-DDpYMEW6.js";import{S as F}from"./settings-2aaMZv-m.js";import{X as E}from"./x-ChqmXjda.js";import{T as U}from"./trash-2-CghvjvmM.js";import"./preload-helper-Ct5FWWRu.js";import"./index-FwI8Lb6x.js";import"./useButton-Dl2r8mQw.js";import"./useRenderElement-ogz75oVx.js";import"./loader-circle-vFvfd3vH.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],K=N("send",X),{fn:Y}=__STORYBOOK_MODULE_TEST__,or={title:"Form/Button",component:e,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline","ghost","link","danger","toolbar"],description:"Button variant style"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Button size"},shape:{control:{type:"select"},options:["default","round","circle"],description:"Button shape"},fullWidth:{control:{type:"boolean"},description:"Whether the button should take full width"},shadow:{control:{type:"boolean"},description:"Whether to apply a box shadow to the button"},loading:{control:{type:"boolean"},description:"Shows a loading spinner and disables the button"},active:{control:{type:"boolean"},description:"Whether the button is in an active/pressed state"},danger:{control:{type:"boolean"},description:"Indicates a destructive/dangerous action"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},iconPosition:{control:{type:"select"},options:["left","right"],description:"Position of the icon relative to the button text"},children:{control:{type:"text"},description:"Button content"},onClick:{description:"Click handler"}},parameters:{controls:{expanded:!0}},args:{onClick:Y()}},n={args:{children:"Primary Button",variant:"primary"}},i={args:{children:"Secondary Button",variant:"secondary"}},s={args:{children:"Outline Button",variant:"outline"}},o={args:{children:"Small Button",variant:"primary",size:"sm"}},d={args:{children:"Medium Button",variant:"primary",size:"md"}},l={args:{children:"Large Button",variant:"primary",size:"lg"}},c={args:{children:"Full Width Button",variant:"primary",fullWidth:!0}},p={args:{children:"Button with Shadow",variant:"primary",shadow:!0}},u={args:{children:"Disabled Button",variant:"primary",disabled:!0}},m={args:{children:"Disabled Outline",variant:"outline",disabled:!0}},g={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"soft",children:"Soft"}),r.jsx(e,{variant:"softSecondary",children:"Soft secondary"}),r.jsx(e,{variant:"outline",children:"Outline"}),r.jsx(e,{variant:"ghost",children:"Ghost"}),r.jsx(e,{variant:"link",children:"Link"}),r.jsx(e,{variant:"danger",children:"Danger"}),r.jsx(e,{variant:"toolbar",children:"Toolbar"})]})},h={args:{children:"Learn more",variant:"link"}},v={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(e,{variant:"primary",size:"sm",children:"Small"}),r.jsx(e,{variant:"primary",size:"md",children:"Medium"}),r.jsx(e,{variant:"primary",size:"lg",children:"Large"})]})},y={args:{children:"Ghost Button",variant:"ghost"}},x={args:{children:"Delete",variant:"danger"}},b={args:{children:"Delete Item",danger:!0}},B={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"outline",danger:!0,children:"Outline danger"}),r.jsx(e,{variant:"ghost",danger:!0,children:"Ghost danger"}),r.jsx(e,{variant:"link",danger:!0,children:"Link danger"}),r.jsx(e,{variant:"soft",danger:!0,children:"Soft danger"})]})},j={args:{children:"Submitting...",loading:!0}},S={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",loading:!0,children:"Primary"}),r.jsx(e,{variant:"secondary",loading:!0,children:"Secondary"}),r.jsx(e,{variant:"outline",loading:!0,children:"Outline"}),r.jsx(e,{variant:"ghost",loading:!0,children:"Ghost"}),r.jsx(e,{variant:"link",loading:!0,children:"Link"}),r.jsx(e,{variant:"danger",loading:!0,children:"Danger"})]})},f={args:{children:"Download",icon:r.jsx(t,{})}},D={args:{children:"Send",icon:r.jsx(K,{}),iconPosition:"right"}},k={args:{icon:r.jsx(a,{}),"aria-label":"Add item"}},w={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(e,{variant:"primary",icon:r.jsx(a,{}),"aria-label":"Add"}),r.jsx(e,{variant:"secondary",icon:r.jsx(F,{}),"aria-label":"Settings"}),r.jsx(e,{variant:"outline",icon:r.jsx(t,{}),"aria-label":"Download"}),r.jsx(e,{variant:"ghost",icon:r.jsx(E,{}),"aria-label":"Close"}),r.jsx(e,{variant:"link",icon:r.jsx(t,{}),"aria-label":"Download link"}),r.jsx(e,{variant:"danger",icon:r.jsx(U,{}),"aria-label":"Delete"})]})},A={args:{children:"Round Button",shape:"round"}},P={args:{icon:r.jsx(a,{}),shape:"circle","aria-label":"Add item"}},z={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(e,{shape:"default",children:"Default"}),r.jsx(e,{shape:"round",children:"Round"}),r.jsx(e,{shape:"circle",icon:r.jsx(a,{}),"aria-label":"Add"})]})},W={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(e,{shape:"circle",size:"sm",icon:r.jsx(a,{}),"aria-label":"Add small"}),r.jsx(e,{shape:"circle",size:"md",icon:r.jsx(a,{}),"aria-label":"Add medium"}),r.jsx(e,{shape:"circle",size:"lg",icon:r.jsx(a,{}),"aria-label":"Add large"})]})},L={args:{children:"Active Button",active:!0}},I={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",active:!0,children:"Primary Active"}),r.jsx(e,{variant:"secondary",active:!0,children:"Secondary Active"}),r.jsx(e,{variant:"outline",active:!0,children:"Outline Active"}),r.jsx(e,{variant:"ghost",active:!0,children:"Ghost Active"}),r.jsx(e,{variant:"link",active:!0,children:"Link Active"})]})},C={args:{children:"Disabled Ghost",variant:"ghost",disabled:!0}},O={args:{children:"Disabled Danger",variant:"danger",disabled:!0}},G={args:{children:"Delete",variant:"danger",disabled:!0}},V={args:{variant:"primary",icon:r.jsx(a,{}),disabled:!0,"aria-label":"Add (disabled)"},parameters:{backgrounds:{default:"dark"}}},R={args:{variant:"primary",icon:r.jsx(t,{}),children:"Download",disabled:!0},parameters:{backgrounds:{default:"dark"}}},T={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",maxWidth:360},children:[r.jsxs("div",{children:[r.jsx("p",{style:{margin:"0 0 8px",fontSize:12,opacity:.85,color:"inherit"},children:"Primary · icon-only · disabled — icon white"}),r.jsx(e,{variant:"primary",icon:r.jsx(a,{}),disabled:!0,"aria-label":"Add (disabled)"})]}),r.jsxs("div",{children:[r.jsx("p",{style:{margin:"0 0 8px",fontSize:12,opacity:.85,color:"inherit"},children:"Primary · icon + label · disabled — content white"}),r.jsx(e,{variant:"primary",icon:r.jsx(t,{}),disabled:!0,children:"Download"})]}),r.jsxs("div",{children:[r.jsx("p",{style:{margin:"0 0 8px",fontSize:12,opacity:.85,color:"inherit"},children:"Danger · disabled — error-colored background"}),r.jsx(e,{variant:"danger",disabled:!0,children:"Delete"})]})]}),parameters:{backgrounds:{default:"dark"}}},_={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"outline",children:"Outline"}),r.jsx(e,{variant:"ghost",children:"Ghost"}),r.jsx(e,{variant:"link",children:"Link"}),r.jsx(e,{variant:"danger",children:"Danger"}),r.jsx(e,{variant:"toolbar",children:"Toolbar"})]})},M={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsxs("div",{children:[r.jsx("h4",{style:{margin:"0 0 8px 0",color:"currentColor"},children:"Variants"}),r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"outline",children:"Outline"}),r.jsx(e,{variant:"ghost",children:"Ghost"}),r.jsx(e,{variant:"link",children:"Link"}),r.jsx(e,{variant:"danger",children:"Danger"}),r.jsx(e,{variant:"toolbar",children:"Toolbar"})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:"0 0 8px 0",color:"currentColor"},children:"With Icons"}),r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(e,{icon:r.jsx(t,{}),children:"Download"}),r.jsx(e,{icon:r.jsx(K,{}),iconPosition:"right",children:"Send"}),r.jsx(e,{variant:"danger",icon:r.jsx(U,{}),children:"Delete"})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:"0 0 8px 0",color:"currentColor"},children:"Loading States"}),r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(e,{loading:!0,children:"Submitting"}),r.jsx(e,{variant:"outline",loading:!0,children:"Loading"}),r.jsx(e,{variant:"danger",loading:!0,children:"Deleting"})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:"0 0 8px 0",color:"currentColor"},children:"Shapes"}),r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[r.jsx(e,{shape:"default",children:"Default"}),r.jsx(e,{shape:"round",children:"Round Shape"}),r.jsx(e,{shape:"circle",icon:r.jsx(a,{}),"aria-label":"Add"}),r.jsx(e,{shape:"circle",variant:"danger",icon:r.jsx(E,{}),"aria-label":"Close"})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:"0 0 8px 0",color:"currentColor"},children:"Icon-only Buttons"}),r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[r.jsx(e,{size:"sm",icon:r.jsx(F,{}),"aria-label":"Settings"}),r.jsx(e,{size:"md",icon:r.jsx(F,{}),"aria-label":"Settings"}),r.jsx(e,{size:"lg",icon:r.jsx(F,{}),"aria-label":"Settings"})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    variant: 'primary'
  }
}`,...n.parameters?.docs?.source},description:{story:"Primary variant is the default button style with solid background.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  }
}`,...i.parameters?.docs?.source},description:{story:"Secondary variant uses the secondary color palette.",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outline Button',
    variant: 'outline'
  }
}`,...s.parameters?.docs?.source},description:{story:"Outline variant has a transparent background with a border.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'sm'
  }
}`,...o.parameters?.docs?.source},description:{story:"Small size button.",...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Medium Button',
    variant: 'primary',
    size: 'md'
  }
}`,...d.parameters?.docs?.source},description:{story:"Medium size button (default).",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'lg'
  }
}`,...l.parameters?.docs?.source},description:{story:"Large size button.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Button',
    variant: 'primary',
    fullWidth: true
  }
}`,...c.parameters?.docs?.source},description:{story:"Full width button that spans the entire container.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button with Shadow',
    variant: 'primary',
    shadow: true
  }
}`,...p.parameters?.docs?.source},description:{story:"Button with shadow applied.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true
  }
}`,...u.parameters?.docs?.source},description:{story:"Disabled button state.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Outline',
    variant: 'outline',
    disabled: true
  }
}`,...m.parameters?.docs?.source},description:{story:"Disabled outline button.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="softSecondary">Soft secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="toolbar">Toolbar</Button>
    </div>
}`,...g.parameters?.docs?.source},description:{story:"All variants displayed together for comparison.",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Learn more',
    variant: 'link'
  }
}`,...h.parameters?.docs?.source},description:{story:"Link variant — underlined text using primary color (for actions styled as links).",...h.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:"All sizes displayed together for comparison.",...v.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ghost Button',
    variant: 'ghost'
  }
}`,...y.parameters?.docs?.source},description:{story:"Ghost variant has a transparent background with no border.",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Delete',
    variant: 'danger'
  }
}`,...x.parameters?.docs?.source},description:{story:"Danger variant for destructive actions.",...x.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Delete Item',
    danger: true
  }
}`,...b.parameters?.docs?.source},description:{story:'Using the danger boolean prop (shorthand for variant="danger").',...b.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Button variant="outline" danger>
        Outline danger
      </Button>
      <Button variant="ghost" danger>
        Ghost danger
      </Button>
      <Button variant="link" danger>
        Link danger
      </Button>
      <Button variant="soft" danger>
        Soft danger
      </Button>
    </div>
}`,...B.parameters?.docs?.source},description:{story:"Subtle variants (outline / ghost / link / soft) keep their structure when\ncombined with `danger` and only re-tint to the semantic error palette.\nSolid variants still fully override to the solid danger style.",...B.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Submitting...',
    loading: true
  }
}`,...j.parameters?.docs?.source},description:{story:"Loading state shows a spinner and disables the button.",...j.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
      <Button variant="link" loading>
        Link
      </Button>
      <Button variant="danger" loading>
        Danger
      </Button>
    </div>
}`,...S.parameters?.docs?.source},description:{story:"Loading state with different variants.",...S.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Download',
    icon: <Download />
  }
}`,...f.parameters?.docs?.source},description:{story:"Button with icon on the left (default position).",...f.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Send',
    icon: <Send />,
    iconPosition: 'right'
  }
}`,...D.parameters?.docs?.source},description:{story:"Button with icon on the right.",...D.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Plus />,
    'aria-label': 'Add item'
  }
}`,...k.parameters?.docs?.source},description:{story:"Icon-only button (no children).",...k.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Button variant="primary" icon={<Plus />} aria-label="Add" />
      <Button variant="secondary" icon={<Setting />} aria-label="Settings" />
      <Button variant="outline" icon={<Download />} aria-label="Download" />
      <Button variant="ghost" icon={<Close />} aria-label="Close" />
      <Button variant="link" icon={<Download />} aria-label="Download link" />
      <Button variant="danger" icon={<Delete />} aria-label="Delete" />
    </div>
}`,...w.parameters?.docs?.source},description:{story:"Various icon buttons with different variants.",...w.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Round Button',
    shape: 'round'
  }
}`,...A.parameters?.docs?.source},description:{story:"Round shape button with pill-shaped border radius.",...A.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Plus />,
    shape: 'circle',
    'aria-label': 'Add item'
  }
}`,...P.parameters?.docs?.source},description:{story:"Circle shape button (typically used with icons).",...P.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Button shape="default">Default</Button>
      <Button shape="round">Round</Button>
      <Button shape="circle" icon={<Plus />} aria-label="Add" />
    </div>
}`,...z.parameters?.docs?.source},description:{story:"All shapes displayed together.",...z.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Button shape="circle" size="sm" icon={<Plus />} aria-label="Add small" />
      <Button shape="circle" size="md" icon={<Plus />} aria-label="Add medium" />
      <Button shape="circle" size="lg" icon={<Plus />} aria-label="Add large" />
    </div>
}`,...W.parameters?.docs?.source},description:{story:"Circle shape in different sizes.",...W.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Active Button',
    active: true
  }
}`,...L.parameters?.docs?.source},description:{story:"Active state for toggle buttons.",...L.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
      <Button variant="link" active>
        Link Active
      </Button>
    </div>
}`,...I.parameters?.docs?.source},description:{story:"Active state with different variants.",...I.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Ghost',
    variant: 'ghost',
    disabled: true
  }
}`,...C.parameters?.docs?.source},description:{story:"Disabled ghost button.",...C.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Danger',
    variant: 'danger',
    disabled: true
  }
}`,...O.parameters?.docs?.source},description:{story:"Disabled danger button.",...O.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Delete',
    variant: 'danger',
    disabled: true
  }
}`,...G.parameters?.docs?.source},description:{story:"Disabled danger — background uses the semantic error color (`--memori-error`), not primary-disabled.\nCompare with disabled primary in {@link AllVariants} or {@link Disabled}.",...G.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: <Plus />,
    disabled: true,
    'aria-label': 'Add (disabled)'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...V.parameters?.docs?.source},description:{story:'Disabled primary, icon-only — on dark theme the icon should render white (`currentColor` / `--memori-surface-contrast-inverse`).\nStorybook dark background applies `data-theme="dark"` on the document root (see `.storybook/preview.ts`).',...V.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: <Download />,
    children: 'Download',
    disabled: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...R.parameters?.docs?.source},description:{story:"Disabled primary with icon and label — same dark-theme white content as {@link DisabledPrimaryIconOnlyDark}.",...R.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: 360
  }}>
      <div>
        <p style={{
        margin: '0 0 8px',
        fontSize: 12,
        opacity: 0.85,
        color: 'inherit'
      }}>
          Primary · icon-only · disabled — icon white
        </p>
        <Button variant="primary" icon={<Plus />} disabled aria-label="Add (disabled)" />
      </div>
      <div>
        <p style={{
        margin: '0 0 8px',
        fontSize: 12,
        opacity: 0.85,
        color: 'inherit'
      }}>
          Primary · icon + label · disabled — content white
        </p>
        <Button variant="primary" icon={<Download />} disabled>
          Download
        </Button>
      </div>
      <div>
        <p style={{
        margin: '0 0 8px',
        fontSize: 12,
        opacity: 0.85,
        color: 'inherit'
      }}>
          Danger · disabled — error-colored background
        </p>
        <Button variant="danger" disabled>
          Delete
        </Button>
      </div>
    </div>,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...T.parameters?.docs?.source},description:{story:"Dark theme regression: disabled primary icon-only (white icon) and disabled danger (error background).",...T.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="toolbar">Toolbar</Button>
    </div>
}`,..._.parameters?.docs?.source},description:{story:"All variants including new ones displayed together.",..._.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
          <Button variant="link">Link</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="toolbar">Toolbar</Button>
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
}`,...M.parameters?.docs?.source},description:{story:"Comprehensive example showing all features.",...M.parameters?.docs?.description}}};const dr=["Primary","Secondary","Outline","Small","Medium","Large","FullWidth","WithShadow","Disabled","DisabledOutline","AllVariants","Link","AllSizes","Ghost","Danger","DangerProp","DangerSubtleVariants","Loading","LoadingVariants","WithIconLeft","WithIconRight","IconOnly","IconButtons","RoundShape","CircleShape","AllShapes","CircleSizes","Active","ActiveVariants","DisabledGhost","DisabledDanger","DisabledDangerSemanticBackground","DisabledPrimaryIconOnlyDark","DisabledPrimaryWithIconDark","DisabledContextsDark","AllVariantsComplete","Showcase"];export{L as Active,I as ActiveVariants,z as AllShapes,v as AllSizes,g as AllVariants,_ as AllVariantsComplete,P as CircleShape,W as CircleSizes,x as Danger,b as DangerProp,B as DangerSubtleVariants,u as Disabled,T as DisabledContextsDark,O as DisabledDanger,G as DisabledDangerSemanticBackground,C as DisabledGhost,m as DisabledOutline,V as DisabledPrimaryIconOnlyDark,R as DisabledPrimaryWithIconDark,c as FullWidth,y as Ghost,w as IconButtons,k as IconOnly,l as Large,h as Link,j as Loading,S as LoadingVariants,d as Medium,s as Outline,n as Primary,A as RoundShape,i as Secondary,M as Showcase,o as Small,f as WithIconLeft,D as WithIconRight,p as WithShadow,dr as __namedExportsOrder,or as default};
