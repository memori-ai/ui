import{j as r}from"./iframe-vVfrRlka.js";import{C as s}from"./Card-BApBVk-F.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BUNYpyAn.js";import"./Spin-CKGFbazs.js";import"./loader-circle-Q3d0eRo6.js";import"./createLucideIcon-CrxtLqBa.js";const h={title:"Components/Card",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"radio",options:["elevated","outlined"],description:"Visual style of the card"},padding:{control:"select",options:["none","sm","md","lg"],description:"Internal padding of the card"},style:{control:"object"},className:{control:"text"}}},e={args:{children:r.jsxs("div",{children:[r.jsx("h3",{style:{margin:"0 0 8px 0"},children:"Card Title"}),r.jsx("p",{style:{margin:0,color:"var(--color-neutral-600)"},children:"This is a basic card component acting as a container for content."})]}),variant:"elevated",padding:"md",style:{width:300}}},a={args:{...e.args,variant:"outlined"}},n={args:{...e.args,onClick:()=>alert("Card clicked!"),hoverable:!0,style:{width:300}},render:o=>r.jsxs(s,{...o,children:[r.jsx("h3",{style:{margin:"0 0 8px 0"},children:"Interactive Card"}),r.jsx("p",{style:{margin:0,color:"var(--color-neutral-600)"},children:"Click me to trigger an action. I have hover states and focus rings."})]})},t={render:o=>r.jsxs(s,{...o,padding:"none",style:{width:300,overflow:"hidden"},children:[r.jsx("div",{style:{height:140,backgroundColor:"var(--color-secondary-200)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--color-secondary-700)"},children:"Image / Cover"}),r.jsxs("div",{style:{padding:"var(--spacing-md)"},children:[r.jsx("h3",{style:{margin:"0 0 8px 0"},children:"Card with Image"}),r.jsx("p",{style:{margin:0,color:"var(--color-neutral-600)"},children:"Example with no padding on the card itself, but custom padding in content."})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>
        <h3 style={{
        margin: '0 0 8px 0'
      }}>Card Title</h3>
        <p style={{
        margin: 0,
        color: 'var(--color-neutral-600)'
      }}>
          This is a basic card component acting as a container for content.
        </p>
      </div>,
    variant: 'elevated',
    padding: 'md',
    style: {
      width: 300
    }
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onClick: () => alert('Card clicked!'),
    hoverable: true,
    style: {
      width: 300
    }
  },
  render: args => <Card {...args}>
      <h3 style={{
      margin: '0 0 8px 0'
    }}>Interactive Card</h3>
      <p style={{
      margin: 0,
      color: 'var(--color-neutral-600)'
    }}>
        Click me to trigger an action. I have hover states and focus rings.
      </p>
    </Card>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args} padding="none" style={{
    width: 300,
    overflow: 'hidden'
  }}>
      <div style={{
      height: 140,
      backgroundColor: 'var(--color-secondary-200)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-secondary-700)'
    }}>
        Image / Cover
      </div>
      <div style={{
      padding: 'var(--spacing-md)'
    }}>
        <h3 style={{
        margin: '0 0 8px 0'
      }}>Card with Image</h3>
        <p style={{
        margin: 0,
        color: 'var(--color-neutral-600)'
      }}>
          Example with no padding on the card itself, but custom padding in
          content.
        </p>
      </div>
    </Card>
}`,...t.parameters?.docs?.source}}};const u=["Default","Outlined","Interactive","WithImage"];export{e as Default,n as Interactive,a as Outlined,t as WithImage,u as __namedExportsOrder,h as default};
