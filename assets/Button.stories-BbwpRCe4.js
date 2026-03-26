import{j as r}from"./iframe-BwIdVvwp.js";import{B as e}from"./Button-AcyQKadj.js";import{D as t}from"./download-CAq54UMC.js";import{c as K}from"./createLucideIcon-D3CX2Ubn.js";import{P as a}from"./plus-BJ1bK421.js";import{S as M}from"./settings-rwhn25d0.js";import{X as F}from"./x-BDt0A11a.js";import{T as E}from"./trash-2-D9sdaX3m.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CX-tc6YD.js";import"./useButton-B2nH_T8b.js";import"./useRenderElement-DN0kusQj.js";import"./loader-circle-B0-xSUL6.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],U=K("send",N),{fn:X}=__STORYBOOK_MODULE_TEST__,sr={title:"Form/Button",component:e,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline","ghost","link","danger","toolbar"],description:"Button variant style"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Button size"},shape:{control:{type:"select"},options:["default","round","circle"],description:"Button shape"},fullWidth:{control:{type:"boolean"},description:"Whether the button should take full width"},shadow:{control:{type:"boolean"},description:"Whether to apply a box shadow to the button"},loading:{control:{type:"boolean"},description:"Shows a loading spinner and disables the button"},active:{control:{type:"boolean"},description:"Whether the button is in an active/pressed state"},danger:{control:{type:"boolean"},description:"Indicates a destructive/dangerous action"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},iconPosition:{control:{type:"select"},options:["left","right"],description:"Position of the icon relative to the button text"},children:{control:{type:"text"},description:"Button content"},onClick:{description:"Click handler"}},parameters:{controls:{expanded:!0}},args:{onClick:X()}},n={args:{children:"Primary Button",variant:"primary"}},i={args:{children:"Secondary Button",variant:"secondary"}},s={args:{children:"Outline Button",variant:"outline"}},o={args:{children:"Small Button",variant:"primary",size:"sm"}},d={args:{children:"Medium Button",variant:"primary",size:"md"}},c={args:{children:"Large Button",variant:"primary",size:"lg"}},l={args:{children:"Full Width Button",variant:"primary",fullWidth:!0}},p={args:{children:"Button with Shadow",variant:"primary",shadow:!0}},u={args:{children:"Disabled Button",variant:"primary",disabled:!0}},m={args:{children:"Disabled Outline",variant:"outline",disabled:!0}},h={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"soft",children:"Soft"}),r.jsx(e,{variant:"softSecondary",children:"Soft secondary"}),r.jsx(e,{variant:"outline",children:"Outline"}),r.jsx(e,{variant:"ghost",children:"Ghost"}),r.jsx(e,{variant:"link",children:"Link"}),r.jsx(e,{variant:"danger",children:"Danger"}),r.jsx(e,{variant:"toolbar",children:"Toolbar"})]})},g={args:{children:"Learn more",variant:"link"}},y={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(e,{variant:"primary",size:"sm",children:"Small"}),r.jsx(e,{variant:"primary",size:"md",children:"Medium"}),r.jsx(e,{variant:"primary",size:"lg",children:"Large"})]})},v={args:{children:"Ghost Button",variant:"ghost"}},x={args:{children:"Delete",variant:"danger"}},b={args:{children:"Delete Item",danger:!0}},B={args:{children:"Submitting...",loading:!0}},j={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",loading:!0,children:"Primary"}),r.jsx(e,{variant:"secondary",loading:!0,children:"Secondary"}),r.jsx(e,{variant:"outline",loading:!0,children:"Outline"}),r.jsx(e,{variant:"ghost",loading:!0,children:"Ghost"}),r.jsx(e,{variant:"link",loading:!0,children:"Link"}),r.jsx(e,{variant:"danger",loading:!0,children:"Danger"})]})},S={args:{children:"Download",icon:r.jsx(t,{})}},f={args:{children:"Send",icon:r.jsx(U,{}),iconPosition:"right"}},D={args:{icon:r.jsx(a,{}),"aria-label":"Add item"}},k={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(e,{variant:"primary",icon:r.jsx(a,{}),"aria-label":"Add"}),r.jsx(e,{variant:"secondary",icon:r.jsx(M,{}),"aria-label":"Settings"}),r.jsx(e,{variant:"outline",icon:r.jsx(t,{}),"aria-label":"Download"}),r.jsx(e,{variant:"ghost",icon:r.jsx(F,{}),"aria-label":"Close"}),r.jsx(e,{variant:"link",icon:r.jsx(t,{}),"aria-label":"Download link"}),r.jsx(e,{variant:"danger",icon:r.jsx(E,{}),"aria-label":"Delete"})]})},w={args:{children:"Round Button",shape:"round"}},A={args:{icon:r.jsx(a,{}),shape:"circle","aria-label":"Add item"}},P={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(e,{shape:"default",children:"Default"}),r.jsx(e,{shape:"round",children:"Round"}),r.jsx(e,{shape:"circle",icon:r.jsx(a,{}),"aria-label":"Add"})]})},z={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(e,{shape:"circle",size:"sm",icon:r.jsx(a,{}),"aria-label":"Add small"}),r.jsx(e,{shape:"circle",size:"md",icon:r.jsx(a,{}),"aria-label":"Add medium"}),r.jsx(e,{shape:"circle",size:"lg",icon:r.jsx(a,{}),"aria-label":"Add large"})]})},W={args:{children:"Active Button",active:!0}},L={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",active:!0,children:"Primary Active"}),r.jsx(e,{variant:"secondary",active:!0,children:"Secondary Active"}),r.jsx(e,{variant:"outline",active:!0,children:"Outline Active"}),r.jsx(e,{variant:"ghost",active:!0,children:"Ghost Active"}),r.jsx(e,{variant:"link",active:!0,children:"Link Active"})]})},I={args:{children:"Disabled Ghost",variant:"ghost",disabled:!0}},C={args:{children:"Disabled Danger",variant:"danger",disabled:!0}},O={args:{children:"Delete",variant:"danger",disabled:!0}},G={args:{variant:"primary",icon:r.jsx(a,{}),disabled:!0,"aria-label":"Add (disabled)"},parameters:{backgrounds:{default:"dark"}}},R={args:{variant:"primary",icon:r.jsx(t,{}),children:"Download",disabled:!0},parameters:{backgrounds:{default:"dark"}}},T={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",maxWidth:360},children:[r.jsxs("div",{children:[r.jsx("p",{style:{margin:"0 0 8px",fontSize:12,opacity:.85,color:"inherit"},children:"Primary · icon-only · disabled — icon white"}),r.jsx(e,{variant:"primary",icon:r.jsx(a,{}),disabled:!0,"aria-label":"Add (disabled)"})]}),r.jsxs("div",{children:[r.jsx("p",{style:{margin:"0 0 8px",fontSize:12,opacity:.85,color:"inherit"},children:"Primary · icon + label · disabled — content white"}),r.jsx(e,{variant:"primary",icon:r.jsx(t,{}),disabled:!0,children:"Download"})]}),r.jsxs("div",{children:[r.jsx("p",{style:{margin:"0 0 8px",fontSize:12,opacity:.85,color:"inherit"},children:"Danger · disabled — error-colored background"}),r.jsx(e,{variant:"danger",disabled:!0,children:"Delete"})]})]}),parameters:{backgrounds:{default:"dark"}}},V={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"outline",children:"Outline"}),r.jsx(e,{variant:"ghost",children:"Ghost"}),r.jsx(e,{variant:"link",children:"Link"}),r.jsx(e,{variant:"danger",children:"Danger"}),r.jsx(e,{variant:"toolbar",children:"Toolbar"})]})},_={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsxs("div",{children:[r.jsx("h4",{style:{margin:"0 0 8px 0",color:"currentColor"},children:"Variants"}),r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"outline",children:"Outline"}),r.jsx(e,{variant:"ghost",children:"Ghost"}),r.jsx(e,{variant:"link",children:"Link"}),r.jsx(e,{variant:"danger",children:"Danger"}),r.jsx(e,{variant:"toolbar",children:"Toolbar"})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:"0 0 8px 0",color:"currentColor"},children:"With Icons"}),r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(e,{icon:r.jsx(t,{}),children:"Download"}),r.jsx(e,{icon:r.jsx(U,{}),iconPosition:"right",children:"Send"}),r.jsx(e,{variant:"danger",icon:r.jsx(E,{}),children:"Delete"})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:"0 0 8px 0",color:"currentColor"},children:"Loading States"}),r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(e,{loading:!0,children:"Submitting"}),r.jsx(e,{variant:"outline",loading:!0,children:"Loading"}),r.jsx(e,{variant:"danger",loading:!0,children:"Deleting"})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:"0 0 8px 0",color:"currentColor"},children:"Shapes"}),r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[r.jsx(e,{shape:"default",children:"Default"}),r.jsx(e,{shape:"round",children:"Round Shape"}),r.jsx(e,{shape:"circle",icon:r.jsx(a,{}),"aria-label":"Add"}),r.jsx(e,{shape:"circle",variant:"danger",icon:r.jsx(F,{}),"aria-label":"Close"})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:"0 0 8px 0",color:"currentColor"},children:"Icon-only Buttons"}),r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[r.jsx(e,{size:"sm",icon:r.jsx(M,{}),"aria-label":"Settings"}),r.jsx(e,{size:"md",icon:r.jsx(M,{}),"aria-label":"Settings"}),r.jsx(e,{size:"lg",icon:r.jsx(M,{}),"aria-label":"Settings"})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"Medium size button (default).",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'lg'
  }
}`,...c.parameters?.docs?.source},description:{story:"Large size button.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Button',
    variant: 'primary',
    fullWidth: true
  }
}`,...l.parameters?.docs?.source},description:{story:"Full width button that spans the entire container.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"Disabled outline button.",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"All variants displayed together for comparison.",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Learn more',
    variant: 'link'
  }
}`,...g.parameters?.docs?.source},description:{story:"Link variant — underlined text using primary color (for actions styled as links).",...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:"All sizes displayed together for comparison.",...y.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ghost Button',
    variant: 'ghost'
  }
}`,...v.parameters?.docs?.source},description:{story:"Ghost variant has a transparent background with no border.",...v.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
  args: {
    children: 'Submitting...',
    loading: true
  }
}`,...B.parameters?.docs?.source},description:{story:"Loading state shows a spinner and disables the button.",...B.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"Loading state with different variants.",...j.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Download',
    icon: <Download />
  }
}`,...S.parameters?.docs?.source},description:{story:"Button with icon on the left (default position).",...S.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Send',
    icon: <Send />,
    iconPosition: 'right'
  }
}`,...f.parameters?.docs?.source},description:{story:"Button with icon on the right.",...f.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Plus />,
    'aria-label': 'Add item'
  }
}`,...D.parameters?.docs?.source},description:{story:"Icon-only button (no children).",...D.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"Various icon buttons with different variants.",...k.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Round Button',
    shape: 'round'
  }
}`,...w.parameters?.docs?.source},description:{story:"Round shape button with pill-shaped border radius.",...w.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Plus />,
    shape: 'circle',
    'aria-label': 'Add item'
  }
}`,...A.parameters?.docs?.source},description:{story:"Circle shape button (typically used with icons).",...A.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Button shape="default">Default</Button>
      <Button shape="round">Round</Button>
      <Button shape="circle" icon={<Plus />} aria-label="Add" />
    </div>
}`,...P.parameters?.docs?.source},description:{story:"All shapes displayed together.",...P.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:"Active state for toggle buttons.",...W.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:"Active state with different variants.",...L.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
  args: {
    children: 'Delete',
    variant: 'danger',
    disabled: true
  }
}`,...O.parameters?.docs?.source},description:{story:"Disabled danger — background uses the semantic error color (`--memori-error`), not primary-disabled.\nCompare with disabled primary in {@link AllVariants} or {@link Disabled}.",...O.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:'Disabled primary, icon-only — on dark theme the icon should render white (`currentColor` / `--memori-surface-contrast-inverse`).\nStorybook dark background applies `data-theme="dark"` on the document root (see `.storybook/preview.ts`).',...G.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:"Dark theme regression: disabled primary icon-only (white icon) and disabled danger (error background).",...T.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:"All variants including new ones displayed together.",...V.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:"Comprehensive example showing all features.",..._.parameters?.docs?.description}}};const or=["Primary","Secondary","Outline","Small","Medium","Large","FullWidth","WithShadow","Disabled","DisabledOutline","AllVariants","Link","AllSizes","Ghost","Danger","DangerProp","Loading","LoadingVariants","WithIconLeft","WithIconRight","IconOnly","IconButtons","RoundShape","CircleShape","AllShapes","CircleSizes","Active","ActiveVariants","DisabledGhost","DisabledDanger","DisabledDangerSemanticBackground","DisabledPrimaryIconOnlyDark","DisabledPrimaryWithIconDark","DisabledContextsDark","AllVariantsComplete","Showcase"];export{W as Active,L as ActiveVariants,P as AllShapes,y as AllSizes,h as AllVariants,V as AllVariantsComplete,A as CircleShape,z as CircleSizes,x as Danger,b as DangerProp,u as Disabled,T as DisabledContextsDark,C as DisabledDanger,O as DisabledDangerSemanticBackground,I as DisabledGhost,m as DisabledOutline,G as DisabledPrimaryIconOnlyDark,R as DisabledPrimaryWithIconDark,l as FullWidth,v as Ghost,k as IconButtons,D as IconOnly,c as Large,g as Link,B as Loading,j as LoadingVariants,d as Medium,s as Outline,n as Primary,w as RoundShape,i as Secondary,_ as Showcase,o as Small,S as WithIconLeft,f as WithIconRight,p as WithShadow,or as __namedExportsOrder,sr as default};
