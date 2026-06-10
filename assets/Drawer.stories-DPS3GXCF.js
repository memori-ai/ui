import{j as e,r as n}from"./iframe-cGtJURnu.js";import{D as r}from"./Drawer-BM0nwcze.js";import{B as o}from"./Button-CnC8wQb7.js";import"./preload-helper-Ct5FWWRu.js";import"./index-yFIvOUTD.js";import"./MemoriUIProvider-m0BnJF8A.js";import"./useRenderElement-DhP6jT1L.js";import"./element-dErl7jfl.js";import"./visuallyHidden-CbwUG2x5.js";import"./x-BfxQRBQd.js";import"./createLucideIcon-CeGz0CgT.js";import"./loader-circle-FXh-_yBO.js";import"./DialogRoot-D4zkbedf.js";import"./popupStateMapping-DyS0MkVe.js";import"./index-pVPggkGF.js";import"./index-BWzI7GQS.js";import"./useId-OtW9ZJcH.js";import"./createBaseUIEventDetails-D1zxOq23.js";import"./useTimeout-DiOuuqkN.js";import"./useOnMount-edqM4C5m.js";import"./event-CSFT6G73.js";import"./index-BbOWvSfg.js";import"./useOpenChangeComplete-B1whGy7_.js";import"./useButton-GuhbyDl_.js";import"./composite-DwFxcZ0x.js";import"./InternalBackdrop-DELQyC6G.js";import"./owner-CvMgaIeV.js";import"./inertValue-BpGpENtR.js";import"./useSyncedFloatingRootContext-C-8DvGLo.js";import"./useTransitionStatus-CrbDG08E.js";import"./useRole-Cy-qjtEs.js";const U={title:"Components/Drawer",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"If true, the drawer is open"},anchor:{control:"select",options:["left","right","top","bottom"],description:"Side from which the drawer will appear"},size:{control:"select",options:["sm","md","lg"],description:"Size of the drawer (width for left/right, height for top/bottom)"}}},u=t=>{const[s,a]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>a(!0),style:{padding:"8px 16px",cursor:"pointer",backgroundColor:"#8246af",color:"white",border:"none",borderRadius:"4px"},children:"Open Drawer"}),e.jsx(r,{...t,open:s,onOpenChange:i=>a(i)})]})},c={render:t=>e.jsx(u,{...t}),args:{title:"Basic Drawer",children:e.jsxs("div",{children:[e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."})]})}},l={render:t=>e.jsx(u,{...t}),args:{title:"Drawer with Footer",anchor:"right",footer:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",children:"Cancel"}),e.jsx(o,{variant:"primary",children:"Submit"})]}),children:e.jsx("p",{children:"This drawer has a footer action area."})}},m={render:()=>{const[t,s]=n.useState(!1),[a,i]=n.useState(!1),[g,h]=n.useState(!1),[f,d]=n.useState(!1),p={padding:"8px 16px",margin:"8px",cursor:"pointer",borderRadius:"4px",border:"1px solid #ccc"};return e.jsxs("div",{children:[e.jsx(o,{onClick:()=>i(!0),style:p,children:"Left"}),e.jsx(o,{onClick:()=>s(!0),style:p,children:"Right"}),e.jsx(o,{onClick:()=>h(!0),style:p,children:"Top"}),e.jsx(o,{onClick:()=>d(!0),style:p,children:"Bottom"}),e.jsx(r,{open:a,onOpenChange:i,anchor:"left",title:"Left Drawer",children:"Left Content"}),e.jsx(r,{open:t,onOpenChange:s,anchor:"right",title:"Right Drawer",children:"Right Content"}),e.jsx(r,{open:g,onOpenChange:h,anchor:"top",title:"Top Drawer",children:"Top Content"}),e.jsx(r,{open:f,onOpenChange:d,anchor:"bottom",title:"Bottom Drawer",children:"Bottom Content"})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <DrawerDemo {...args} />,
  args: {
    title: 'Basic Drawer',
    children: <div>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <DrawerDemo {...args} />,
  args: {
    title: 'Drawer with Footer',
    anchor: 'right',
    footer: <>
        <Button variant="outline">Cancel</Button>
        <Button variant="primary">Submit</Button>
      </>,
    children: <p>This drawer has a footer action area.</p>
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const V=["Basic","WithFooter","Anchors"];export{m as Anchors,c as Basic,l as WithFooter,V as __namedExportsOrder,U as default};
