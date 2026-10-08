import{j as r}from"./iframe-oC_KKkgD.js";import{B as e}from"./Button-HP_r0awv.js";import{D as t}from"./download-B1enUaZp.js";import{c as J}from"./createLucideIcon-bz4Z3Rgj.js";import{P as a}from"./plus-DxgoaiEC.js";import{S as N}from"./settings-BGCedS0B.js";import{X}from"./x-CGXREky_.js";import{T as Y}from"./trash-2-DiMaCAmv.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DearnBMP.js";import"./useButton-EuPRH5a9.js";import"./useRenderElement-YElZY6Rh.js";import"./loader-circle-BJ8-Aoy2.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],q=J("send",Q),{fn:Z}=__STORYBOOK_MODULE_TEST__,ur={title:"Form/Button",component:e,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline","ghost","link","danger","toolbar","inverse"],description:"Button variant style"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Button size"},shape:{control:{type:"select"},options:["default","round","circle"],description:"Button shape"},fullWidth:{control:{type:"boolean"},description:"Whether the button should take full width"},shadow:{control:{type:"boolean"},description:"Whether to apply a box shadow to the button"},loading:{control:{type:"boolean"},description:"Shows a loading spinner and disables the button"},active:{control:{type:"boolean"},description:"Whether the button is in an active/pressed state"},recording:{control:{type:"boolean"},description:"Toolbar recording state"},danger:{control:{type:"boolean"},description:"Indicates a destructive/dangerous action"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},iconPosition:{control:{type:"select"},options:["left","right"],description:"Position of the icon relative to the button text"},children:{control:{type:"text"},description:"Button content"},onClick:{description:"Click handler"}},parameters:{controls:{expanded:!0}},args:{onClick:Z()}},n={args:{children:"Primary Button",variant:"primary"}},i={args:{children:"Secondary Button",variant:"secondary"}},s={args:{children:"Outline Button",variant:"outline"}},o={args:{children:"Small Button",variant:"primary",size:"sm"}},d={args:{children:"Medium Button",variant:"primary",size:"md"}},c={args:{children:"Large Button",variant:"primary",size:"lg"}},l={args:{children:"Full Width Button",variant:"primary",fullWidth:!0}},p={args:{children:"Button with Shadow",variant:"primary",shadow:!0}},u={args:{children:"Primary hover",variant:"primary"}},m={args:{children:"Disabled Button",variant:"primary",disabled:!0}},g={args:{children:"Disabled Outline",variant:"outline",disabled:!0}},h={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"soft",children:"Soft"}),r.jsx(e,{variant:"softSecondary",children:"Soft secondary"}),r.jsx(e,{variant:"outline",children:"Outline"}),r.jsx(e,{variant:"ghost",children:"Ghost"}),r.jsx(e,{variant:"link",children:"Link"}),r.jsx(e,{variant:"danger",children:"Danger"}),r.jsx(e,{variant:"toolbar",children:"Toolbar"}),r.jsx(e,{variant:"inverse",children:"Inverse"})]})},v={args:{children:"Learn more",variant:"link"}},y={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(e,{variant:"primary",size:"sm",children:"Small"}),r.jsx(e,{variant:"primary",size:"md",children:"Medium"}),r.jsx(e,{variant:"primary",size:"lg",children:"Large"})]})},x={args:{children:"Ghost Button",variant:"ghost"}},b={args:{children:"Delete",variant:"danger"}},B={args:{children:"Delete Item",danger:!0}},S={parameters:{a11y:{test:"todo"}},render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"outline",danger:!0,children:"Outline danger"}),r.jsx(e,{variant:"ghost",danger:!0,children:"Ghost danger"}),r.jsx(e,{variant:"link",danger:!0,children:"Link danger"}),r.jsx(e,{variant:"soft",danger:!0,children:"Soft danger"})]})},j={args:{children:"Submitting...",loading:!0}},f={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",loading:!0,children:"Primary"}),r.jsx(e,{variant:"secondary",loading:!0,children:"Secondary"}),r.jsx(e,{variant:"outline",loading:!0,children:"Outline"}),r.jsx(e,{variant:"ghost",loading:!0,children:"Ghost"}),r.jsx(e,{variant:"link",loading:!0,children:"Link"}),r.jsx(e,{variant:"danger",loading:!0,children:"Danger"})]})},D={args:{children:"Download",icon:r.jsx(t,{})}},k={args:{children:"Send",icon:r.jsx(q,{}),iconPosition:"right"}},w={args:{icon:r.jsx(a,{}),"aria-label":"Add item"}},A={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(e,{variant:"primary",icon:r.jsx(a,{}),"aria-label":"Add"}),r.jsx(e,{variant:"secondary",icon:r.jsx(N,{}),"aria-label":"Settings"}),r.jsx(e,{variant:"outline",icon:r.jsx(t,{}),"aria-label":"Download"}),r.jsx(e,{variant:"ghost",icon:r.jsx(X,{}),"aria-label":"Close"}),r.jsx(e,{variant:"link",icon:r.jsx(t,{}),"aria-label":"Download link"}),r.jsx(e,{variant:"danger",icon:r.jsx(Y,{}),"aria-label":"Delete"})]})},P={args:{children:"Round Button",shape:"round"}},I={args:{icon:r.jsx(a,{}),shape:"circle","aria-label":"Add item"}},z={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(e,{shape:"default",children:"Default"}),r.jsx(e,{shape:"round",children:"Round"}),r.jsx(e,{shape:"circle",icon:r.jsx(a,{}),"aria-label":"Add"})]})},W={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(e,{shape:"circle",size:"sm",icon:r.jsx(a,{}),"aria-label":"Add small"}),r.jsx(e,{shape:"circle",size:"md",icon:r.jsx(a,{}),"aria-label":"Add medium"}),r.jsx(e,{shape:"circle",size:"lg",icon:r.jsx(a,{}),"aria-label":"Add large"})]})},L={args:{children:"Toolbar active",variant:"toolbar",active:!0}},C={args:{children:"Recording",variant:"toolbar",recording:!0}},O={args:{children:"Inverse",variant:"inverse"}},G={args:{variant:"primary",shape:"circle",icon:r.jsx(a,{}),"aria-label":"Add"}},T={args:{children:"Active Button",active:!0}},R={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",active:!0,children:"Primary Active"}),r.jsx(e,{variant:"secondary",active:!0,children:"Secondary Active"}),r.jsx(e,{variant:"outline",active:!0,children:"Outline Active"}),r.jsx(e,{variant:"ghost",active:!0,children:"Ghost Active"}),r.jsx(e,{variant:"link",active:!0,children:"Link Active"})]})},V={args:{children:"Disabled Ghost",variant:"ghost",disabled:!0}},_={args:{children:"Disabled Danger",variant:"danger",disabled:!0}},M={args:{children:"Delete",variant:"danger",disabled:!0}},F={args:{variant:"primary",icon:r.jsx(a,{}),disabled:!0,"aria-label":"Add (disabled)"},parameters:{backgrounds:{default:"dark"}}},E={args:{variant:"primary",icon:r.jsx(t,{}),children:"Download",disabled:!0},parameters:{backgrounds:{default:"dark"}}},H={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",maxWidth:360},children:[r.jsxs("div",{children:[r.jsx("p",{style:{margin:"0 0 8px",fontSize:12,opacity:.85,color:"inherit"},children:"Primary · icon-only · disabled — icon white"}),r.jsx(e,{variant:"primary",icon:r.jsx(a,{}),disabled:!0,"aria-label":"Add (disabled)"})]}),r.jsxs("div",{children:[r.jsx("p",{style:{margin:"0 0 8px",fontSize:12,opacity:.85,color:"inherit"},children:"Primary · icon + label · disabled — content white"}),r.jsx(e,{variant:"primary",icon:r.jsx(t,{}),disabled:!0,children:"Download"})]}),r.jsxs("div",{children:[r.jsx("p",{style:{margin:"0 0 8px",fontSize:12,opacity:.85,color:"inherit"},children:"Danger · disabled — error-colored background"}),r.jsx(e,{variant:"danger",disabled:!0,children:"Delete"})]})]}),parameters:{backgrounds:{default:"dark"}}},K={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"outline",children:"Outline"}),r.jsx(e,{variant:"ghost",children:"Ghost"}),r.jsx(e,{variant:"link",children:"Link"}),r.jsx(e,{variant:"danger",children:"Danger"}),r.jsx(e,{variant:"toolbar",children:"Toolbar"}),r.jsx(e,{variant:"inverse",children:"Inverse"})]})},U={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsxs("div",{children:[r.jsx("h4",{style:{margin:"0 0 8px 0",color:"currentColor"},children:"Variants"}),r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"outline",children:"Outline"}),r.jsx(e,{variant:"ghost",children:"Ghost"}),r.jsx(e,{variant:"link",children:"Link"}),r.jsx(e,{variant:"danger",children:"Danger"}),r.jsx(e,{variant:"toolbar",children:"Toolbar"}),r.jsx(e,{variant:"inverse",children:"Inverse"})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:"0 0 8px 0",color:"currentColor"},children:"With Icons"}),r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(e,{icon:r.jsx(t,{}),children:"Download"}),r.jsx(e,{icon:r.jsx(q,{}),iconPosition:"right",children:"Send"}),r.jsx(e,{variant:"danger",icon:r.jsx(Y,{}),children:"Delete"})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:"0 0 8px 0",color:"currentColor"},children:"Loading States"}),r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(e,{loading:!0,children:"Submitting"}),r.jsx(e,{variant:"outline",loading:!0,children:"Loading"}),r.jsx(e,{variant:"danger",loading:!0,children:"Deleting"})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:"0 0 8px 0",color:"currentColor"},children:"Shapes"}),r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[r.jsx(e,{shape:"default",children:"Default"}),r.jsx(e,{shape:"round",children:"Round Shape"}),r.jsx(e,{shape:"circle",icon:r.jsx(a,{}),"aria-label":"Add"}),r.jsx(e,{shape:"circle",variant:"danger",icon:r.jsx(X,{}),"aria-label":"Close"})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:"0 0 8px 0",color:"currentColor"},children:"Icon-only Buttons"}),r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[r.jsx(e,{size:"sm",icon:r.jsx(N,{}),"aria-label":"Settings"}),r.jsx(e,{size:"md",icon:r.jsx(N,{}),"aria-label":"Settings"}),r.jsx(e,{size:"lg",icon:r.jsx(N,{}),"aria-label":"Settings"})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    children: 'Primary hover',
    variant: 'primary'
  }
}`,...u.parameters?.docs?.source},description:{story:"Primary hover uses `--memori-primary-hover` on the background, not only the border.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true
  }
}`,...m.parameters?.docs?.source},description:{story:"Disabled is one treatment: `:disabled` and `.memori-button--disabled` share opacity 0.6 and the same surface.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Outline',
    variant: 'outline',
    disabled: true
  }
}`,...g.parameters?.docs?.source},description:{story:"Disabled outline button.",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
      <Button variant="inverse">Inverse</Button>
    </div>
}`,...h.parameters?.docs?.source},description:{story:"All variants displayed together for comparison.",...h.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Learn more',
    variant: 'link'
  }
}`,...v.parameters?.docs?.source},description:{story:"Link variant — underlined text using primary color (for actions styled as links).",...v.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:"All sizes displayed together for comparison.",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ghost Button',
    variant: 'ghost'
  }
}`,...x.parameters?.docs?.source},description:{story:"Ghost variant has a transparent background with no border.",...x.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Delete',
    variant: 'danger'
  }
}`,...b.parameters?.docs?.source},description:{story:"Danger variant for destructive actions.",...b.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Delete Item',
    danger: true
  }
}`,...B.parameters?.docs?.source},description:{story:'Using the danger boolean prop (shorthand for variant="danger").',...B.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    // Known token contrast gap for danger+subtle variants (tracked for design pass).
    a11y: {
      test: 'todo'
    }
  },
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
}`,...S.parameters?.docs?.source},description:{story:"Subtle variants (outline / ghost / link / soft) keep their structure when\ncombined with `danger` and only re-tint to the semantic error palette.\nSolid variants still fully override to the solid danger style.",...S.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Submitting...',
    loading: true
  }
}`,...j.parameters?.docs?.source},description:{story:"Loading state shows a spinner and disables the button.",...j.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:"Loading state with different variants.",...f.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Download',
    icon: <Download />
  }
}`,...D.parameters?.docs?.source},description:{story:"Button with icon on the left (default position).",...D.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Send',
    icon: <Send />,
    iconPosition: 'right'
  }
}`,...k.parameters?.docs?.source},description:{story:"Button with icon on the right.",...k.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Plus />,
    'aria-label': 'Add item'
  }
}`,...w.parameters?.docs?.source},description:{story:"Icon-only button (no children).",...w.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:"Various icon buttons with different variants.",...A.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Round Button',
    shape: 'round'
  }
}`,...P.parameters?.docs?.source},description:{story:"Round shape button with pill-shaped border radius.",...P.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Plus />,
    shape: 'circle',
    'aria-label': 'Add item'
  }
}`,...I.parameters?.docs?.source},description:{story:"Circle shape button (typically used with icons).",...I.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
    children: 'Toolbar active',
    variant: 'toolbar',
    active: true
  }
}`,...L.parameters?.docs?.source},description:{story:"Toolbar toggle. Active fill is `--memori-icon-active-bg`.",...L.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Recording',
    variant: 'toolbar',
    recording: true
  }
}`,...C.parameters?.docs?.source},description:{story:"Toolbar recording. Fill is `--memori-icon-recording-bg`.",...C.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Inverse',
    variant: 'inverse'
  }
}`,...O.parameters?.docs?.source},description:{story:`Contrast ink: dark on a light canvas, light when the theme is dark.
Hover and active use their own washes of the same token.`,...O.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    shape: 'circle',
    icon: <Plus />,
    'aria-label': 'Add'
  }
}`,...G.parameters?.docs?.source},description:{story:"Circle does not scale on hover or press.",...G.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Active Button',
    active: true
  }
}`,...T.parameters?.docs?.source},description:{story:"Active state for toggle buttons.",...T.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:"Active state with different variants.",...R.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Ghost',
    variant: 'ghost',
    disabled: true
  }
}`,...V.parameters?.docs?.source},description:{story:"Disabled ghost button.",...V.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Danger',
    variant: 'danger',
    disabled: true
  }
}`,..._.parameters?.docs?.source},description:{story:"Disabled danger button.",..._.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Delete',
    variant: 'danger',
    disabled: true
  }
}`,...M.parameters?.docs?.source},description:{story:"Disabled danger — background uses the semantic error color (`--memori-error`), not primary-disabled.\nCompare with disabled primary in {@link AllVariants} or {@link Disabled}.",...M.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:'Disabled primary, icon-only — on dark theme the icon should render white (`currentColor` / `--memori-surface-contrast-inverse`).\nStorybook dark background applies `data-theme="dark"` on the document root (see `.storybook/preview.ts`).',...F.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:"Disabled primary with icon and label — same dark-theme white content as {@link DisabledPrimaryIconOnlyDark}.",...E.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:"Dark theme regression: disabled primary icon-only (white icon) and disabled danger (error background).",...H.parameters?.docs?.description}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
      <Button variant="inverse">Inverse</Button>
    </div>
}`,...K.parameters?.docs?.source},description:{story:"All variants including new ones displayed together.",...K.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
          <Button variant="inverse">Inverse</Button>
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
}`,...U.parameters?.docs?.source},description:{story:"Comprehensive example showing all features.",...U.parameters?.docs?.description}}};const mr=["Primary","Secondary","Outline","Small","Medium","Large","FullWidth","WithShadow","PrimaryHover","Disabled","DisabledOutline","AllVariants","Link","AllSizes","Ghost","Danger","DangerProp","DangerSubtleVariants","Loading","LoadingVariants","WithIconLeft","WithIconRight","IconOnly","IconButtons","RoundShape","CircleShape","AllShapes","CircleSizes","ToolbarActive","ToolbarRecording","Inverse","CircleWithoutScale","Active","ActiveVariants","DisabledGhost","DisabledDanger","DisabledDangerSemanticBackground","DisabledPrimaryIconOnlyDark","DisabledPrimaryWithIconDark","DisabledContextsDark","AllVariantsComplete","Showcase"];export{T as Active,R as ActiveVariants,z as AllShapes,y as AllSizes,h as AllVariants,K as AllVariantsComplete,I as CircleShape,W as CircleSizes,G as CircleWithoutScale,b as Danger,B as DangerProp,S as DangerSubtleVariants,m as Disabled,H as DisabledContextsDark,_ as DisabledDanger,M as DisabledDangerSemanticBackground,V as DisabledGhost,g as DisabledOutline,F as DisabledPrimaryIconOnlyDark,E as DisabledPrimaryWithIconDark,l as FullWidth,x as Ghost,A as IconButtons,w as IconOnly,O as Inverse,c as Large,v as Link,j as Loading,f as LoadingVariants,d as Medium,s as Outline,n as Primary,u as PrimaryHover,P as RoundShape,i as Secondary,U as Showcase,o as Small,L as ToolbarActive,C as ToolbarRecording,D as WithIconLeft,k as WithIconRight,p as WithShadow,mr as __namedExportsOrder,ur as default};
