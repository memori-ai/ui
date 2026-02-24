import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as x}from"./iframe-BIxNv6Ij.js";import{S as n}from"./Spin-Cx_vLbnA.js";import{B as g}from"./Button--djaHxQr.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C_Wr9c_C.js";import"./loader-circle-BZ0xCmxN.js";import"./createLucideIcon-kWaI82Qt.js";import"./useButton-zkZniz44.js";import"./useRenderElement-CDm1SxJF.js";const z={title:"Components/Spin",component:n,tags:["autodocs"],argTypes:{spinning:{control:{type:"boolean"},description:"Whether the spinner is visible"},primary:{control:{type:"boolean"},description:"If true, uses the primary color for the spinner"},size:{control:{type:"select"},options:["sm","md","lg","default"],description:"Size of the spinner icon"},tip:{control:{type:"text"},description:"Tip text displayed below the spinner"}},parameters:{controls:{expanded:!0},docs:{description:{component:"A loading spinner component that displays an overlay with a spinning icon. Built with full accessibility support (WCAG 2.1 AA+)."}}},render:e=>r.jsx("div",{style:{minHeight:"200px",padding:"1rem"},children:r.jsx(n,{...e,children:r.jsxs("div",{style:{padding:"2rem",border:"1px solid var(--memori-primary-subtle)",borderRadius:"var(--memori-radius-box)"},children:[r.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),r.jsx("h2",{children:"Suspendisse a sodales nulla, sed semper nisi."}),r.jsx("p",{children:"Proin tincidunt enim in felis aliquet, a ultricies purus bibendum."}),r.jsxs("ul",{children:[r.jsx("li",{children:"Quisque in ultrices lectus."}),r.jsx("li",{children:"Quisque in ultrices lectus."}),r.jsx("li",{children:"Quisque in ultrices lectus."})]}),r.jsx("p",{children:"Nulla at urna diam."})]})})})},i={args:{spinning:!1}},s={args:{spinning:!0}},t={args:{spinning:!0,primary:!0}},a={args:{spinning:!0,tip:"Loading content..."}},o={args:{spinning:!0,size:"sm"}},p={args:{spinning:!0,size:"md"}},d={args:{spinning:!0,size:"lg"}},c={args:{spinning:!0,primary:!0},render:e=>r.jsx(n,{...e,children:r.jsx(g,{children:"Click me"})})},m={args:{spinning:!0,indicator:r.jsx("div",{style:{width:"40px",height:"40px",border:"4px solid var(--memori-primary)",borderTopColor:"transparent",borderRadius:"50%",animation:"memori-spin-rotate 1s linear infinite"},"aria-hidden":"true"})}},l={render:()=>{const[e,h]=x.useState(!1);return r.jsxs("div",{children:[r.jsxs(g,{onClick:()=>h(!e),style:{marginBottom:"1rem"},children:[e?"Stop":"Start"," Loading"]}),r.jsx(n,{spinning:e,tip:"Processing...",children:r.jsxs("div",{style:{padding:"2rem",border:"1px solid var(--memori-primary-subtle)",borderRadius:"var(--memori-radius-box)"},children:[r.jsx("p",{children:"This content is being loaded."}),r.jsxs("p",{children:["Current state: ",e?"Loading":"Ready"]})]})})]})}},u={args:{spinning:!0,primary:!0},render:e=>r.jsx(n,{...e,children:r.jsx("div",{style:{padding:"1rem"},children:r.jsx("p",{children:"Minimal content example"})})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    spinning: false
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    spinning: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    spinning: true,
    primary: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    spinning: true,
    tip: 'Loading content...'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    spinning: true,
    size: 'sm'
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    spinning: true,
    size: 'md'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    spinning: true,
    size: 'lg'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    spinning: true,
    primary: true
  },
  render: args => <Spin {...args}>
      <Button>Click me</Button>
    </Spin>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    spinning: true,
    indicator: <div style={{
      width: '40px',
      height: '40px',
      border: '4px solid var(--memori-primary)',
      borderTopColor: 'transparent',
      borderRadius: '50%',
      animation: 'memori-spin-rotate 1s linear infinite'
    }} aria-hidden="true" />
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [spinning, setSpinning] = React.useState(false);
    return <div>
        <Button onClick={() => setSpinning(!spinning)} style={{
        marginBottom: '1rem'
      }}>
          {spinning ? 'Stop' : 'Start'} Loading
        </Button>
        <Spin spinning={spinning} tip="Processing...">
          <div style={{
          padding: '2rem',
          border: '1px solid var(--memori-primary-subtle)',
          borderRadius: 'var(--memori-radius-box)'
        }}>
            <p>This content is being loaded.</p>
            <p>Current state: {spinning ? 'Loading' : 'Ready'}</p>
          </div>
        </Spin>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    spinning: true,
    primary: true
  },
  render: args => <Spin {...args}>
      <div style={{
      padding: '1rem'
    }}>
        <p>Minimal content example</p>
      </div>
    </Spin>
}`,...u.parameters?.docs?.source}}};const T=["Default","Spinning","Primary","WithTip","Small","Medium","Large","WithButton","WithCustomIndicator","Controlled","MinimalContent"];export{l as Controlled,i as Default,d as Large,p as Medium,u as MinimalContent,t as Primary,o as Small,s as Spinning,c as WithButton,m as WithCustomIndicator,a as WithTip,T as __namedExportsOrder,z as default};
