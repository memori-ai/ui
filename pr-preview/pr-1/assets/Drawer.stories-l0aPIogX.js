import{i as e,w as t}from"./iframe-DMsFkDbs.js";import"./react-dom-DN1PZLdI.js";import{t as n}from"./jsx-runtime-s6AK7i7Z.js";import"./shim-i-E5V3v4.js";import"./floating-ui.utils.dom-D_LsV80C.js";import"./floating-ui.react-dom-YBwpNAjh.js";import{t as r}from"./classnames-D2mCmNFl.js";import"./createLucideIcon-BVDRrXjB.js";import{n as i,t as a}from"./Button-BsVlKylB.js";import{t as o}from"./x-DpNIEIdG.js";import"./useRenderElement-CuQd9qAl.js";import"./useButton-BqLUJEwP.js";import"./Button-CQeFHuBP.js";import"./useId-C1w6mc0h.js";import"./visuallyHidden-zUF6X9q9.js";import"./InternalBackdrop-JZp8IvP6.js";import{a as s,n as c,o as l,r as u,t as d}from"./DialogRoot-FhGhNymM.js";var f=t(r(),1),p=t(e(),1),m=n();const h=p.forwardRef(({open:e,onOpenChange:t,onClose:n,anchor:r=`right`,children:a,title:p,description:h,footer:g,loading:_,className:v,style:y,showCloseButton:b=!0,closable:x=!0,...S},C)=>{let w=(e,r)=>{t?.(e,r),e||n?.(r)},T=x===void 0?b:x;return(0,m.jsx)(d,{open:e,onOpenChange:w,children:(0,m.jsxs)(c,{children:[(0,m.jsx)(l,{className:`memori-drawer__backdrop`}),(0,m.jsxs)(u,{ref:C,className:(0,f.default)(`memori-drawer`,`memori-drawer--${r}`,v),style:y,...S,children:[(p||h||T)&&(0,m.jsxs)(`div`,{className:`memori-drawer__header`,children:[(0,m.jsxs)(`div`,{children:[p&&(0,m.jsx)(`div`,{className:`memori-drawer__title`,children:p}),h&&(0,m.jsx)(`div`,{className:`memori-drawer__description`,children:h})]}),T&&(0,m.jsx)(s,{className:`memori-drawer__close`,"aria-label":`Close`,children:(0,m.jsx)(o,{size:20})})]}),(0,m.jsx)(`div`,{className:`memori-drawer__body`,children:_?(0,m.jsx)(`div`,{className:`memori-drawer__loading`,children:(0,m.jsx)(i,{className:`memori-drawer__spinner`,"aria-label":`Loading`})}):a}),g&&(0,m.jsx)(`div`,{className:`memori-drawer__footer`,children:g})]})]})})});h.displayName=`Drawer`,h.__docgenInfo={description:``,methods:[],displayName:`Drawer`,props:{open:{required:!1,tsType:{name:`boolean`},description:"If `true`, the drawer is open."},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean, event?: DialogRootChangeEventDetails) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`},{type:{name:`DialogRootChangeEventDetails`},name:`event`}],return:{name:`void`}}},description:"Callback fired when the component requests to be closed.\nThe `open` parameter represents the new open state (which will be `false` when closing)."},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event?: DialogRootChangeEventDetails) => void`,signature:{arguments:[{type:{name:`DialogRootChangeEventDetails`},name:`event`}],return:{name:`void`}}},description:"Callback fired when the drawer is closed (convenience prop for `onOpenChange(false)`)."},anchor:{required:!1,tsType:{name:`union`,raw:`'left' | 'right' | 'top' | 'bottom'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`},{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]},description:`Side from which the drawer will appear.
@default 'right'`,defaultValue:{value:`'right'`,computed:!1}},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The contents of the drawer.`},title:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The title of the drawer.`},description:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The description/subtitle of the drawer (displayed below the title).`},footer:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The footer of the drawer (usually buttons).`},loading:{required:!1,tsType:{name:`boolean`},description:"If `true`, shows a loading state in the drawer."},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class name for the drawer element.`},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Inline styles for the drawer element.`},showCloseButton:{required:!1,tsType:{name:`boolean`},description:`Whether to show the close button in the header.
@default true`,defaultValue:{value:`true`,computed:!1}},closable:{required:!1,tsType:{name:`boolean`},description:`Whether the drawer can be closed (shows/hides close button).
Alias for \`showCloseButton\` for consistency with other UI libraries.
@default true`,defaultValue:{value:`true`,computed:!1}}}};var g={title:`Components/Drawer`,component:h,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{open:{control:`boolean`,description:`If true, the drawer is open`},anchor:{control:`select`,options:[`left`,`right`,`top`,`bottom`],description:`Side from which the drawer will appear`}}},_=e=>{let[t,n]=(0,p.useState)(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{onClick:()=>n(!0),style:{padding:`8px 16px`,cursor:`pointer`,backgroundColor:`#8246af`,color:`white`,border:`none`,borderRadius:`4px`},children:`Open Drawer`}),(0,m.jsx)(h,{...e,open:t,onOpenChange:e=>n(e)})]})};const v={render:e=>(0,m.jsx)(_,{...e}),args:{title:`Basic Drawer`,children:(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{children:`Some contents...`}),(0,m.jsx)(`p`,{children:`Some contents...`}),(0,m.jsx)(`p`,{children:`Some contents...`})]})}},y={render:e=>(0,m.jsx)(_,{...e}),args:{title:`Drawer with Footer`,anchor:`right`,footer:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{style:{padding:`8px 16px`,cursor:`pointer`},children:`Cancel`}),(0,m.jsx)(a,{style:{padding:`8px 16px`,cursor:`pointer`,backgroundColor:`#8246af`,color:`white`,border:`none`,borderRadius:`4px`},children:`Submit`})]}),children:(0,m.jsx)(`p`,{children:`This drawer has a footer action area.`})}},b={render:()=>{let[e,t]=(0,p.useState)(!1),[n,r]=(0,p.useState)(!1),[i,o]=(0,p.useState)(!1),[s,c]=(0,p.useState)(!1),l={padding:`8px 16px`,margin:`8px`,cursor:`pointer`,borderRadius:`4px`,border:`1px solid #ccc`};return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(a,{onClick:()=>r(!0),style:l,children:`Left`}),(0,m.jsx)(a,{onClick:()=>t(!0),style:l,children:`Right`}),(0,m.jsx)(a,{onClick:()=>o(!0),style:l,children:`Top`}),(0,m.jsx)(a,{onClick:()=>c(!0),style:l,children:`Bottom`}),(0,m.jsx)(h,{open:n,onOpenChange:r,anchor:`left`,title:`Left Drawer`,children:`Left Content`}),(0,m.jsx)(h,{open:e,onOpenChange:t,anchor:`right`,title:`Right Drawer`,children:`Right Content`}),(0,m.jsx)(h,{open:i,onOpenChange:o,anchor:`top`,title:`Top Drawer`,children:`Top Content`}),(0,m.jsx)(h,{open:s,onOpenChange:c,anchor:`bottom`,title:`Bottom Drawer`,children:`Bottom Content`})]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <DrawerDemo {...args} />,
  args: {
    title: 'Basic Drawer',
    children: <div>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <DrawerDemo {...args} />,
  args: {
    title: 'Drawer with Footer',
    anchor: 'right',
    footer: <>
        <Button style={{
        padding: '8px 16px',
        cursor: 'pointer'
      }}>
          Cancel
        </Button>
        <Button style={{
        padding: '8px 16px',
        cursor: 'pointer',
        backgroundColor: '#8246af',
        color: 'white',
        border: 'none',
        borderRadius: '4px'
      }}>
          Submit
        </Button>
      </>,
    children: <p>This drawer has a footer action area.</p>
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openRight, setOpenRight] = useState(false);
    const [openLeft, setOpenLeft] = useState(false);
    const [openTop, setOpenTop] = useState(false);
    const [openBottom, setOpenBottom] = useState(false);
    const btnStyle = {
      padding: '8px 16px',
      margin: '8px',
      cursor: 'pointer',
      borderRadius: '4px',
      border: '1px solid #ccc'
    };
    return <div>
        <Button onClick={() => setOpenLeft(true)} style={btnStyle}>
          Left
        </Button>
        <Button onClick={() => setOpenRight(true)} style={btnStyle}>
          Right
        </Button>
        <Button onClick={() => setOpenTop(true)} style={btnStyle}>
          Top
        </Button>
        <Button onClick={() => setOpenBottom(true)} style={btnStyle}>
          Bottom
        </Button>

        <Drawer open={openLeft} onOpenChange={setOpenLeft} anchor="left" title="Left Drawer">
          Left Content
        </Drawer>

        <Drawer open={openRight} onOpenChange={setOpenRight} anchor="right" title="Right Drawer">
          Right Content
        </Drawer>

        <Drawer open={openTop} onOpenChange={setOpenTop} anchor="top" title="Top Drawer">
          Top Content
        </Drawer>

        <Drawer open={openBottom} onOpenChange={setOpenBottom} anchor="bottom" title="Bottom Drawer">
          Bottom Content
        </Drawer>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};const x=[`Basic`,`WithFooter`,`Anchors`];export{b as Anchors,v as Basic,y as WithFooter,x as __namedExportsOrder,g as default};