import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-BIxNv6Ij.js";import{D as r}from"./Drawer-ljbgTelV.js";import{B as o}from"./Button--djaHxQr.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C_Wr9c_C.js";import"./x-BopNjnwR.js";import"./createLucideIcon-kWaI82Qt.js";import"./loader-circle-BZ0xCmxN.js";import"./DialogRoot-9NcALVws.js";import"./useRenderElement-CDm1SxJF.js";import"./InternalBackdrop-caEGZEH1.js";import"./useOpenChangeComplete-QGjOlSh8.js";import"./index-DgQOuNdV.js";import"./index-D8cz-bcR.js";import"./visuallyHidden-CbwUG2x5.js";import"./inertValue-PzFyMuR_.js";import"./createBaseUIEventDetails-tn7-8NUW.js";import"./useId-CVMLpEvr.js";import"./index-CulFE8Zv.js";import"./useButton-zkZniz44.js";import"./useRole-90VkFIw0.js";import"./useTransitionStatus-C-puF4U9.js";const G={title:"Components/Drawer",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"If true, the drawer is open"},anchor:{control:"select",options:["left","right","top","bottom"],description:"Side from which the drawer will appear"},size:{control:"select",options:["sm","md","lg"],description:"Size of the drawer (width for left/right, height for top/bottom)"}}},u=t=>{const[s,a]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>a(!0),style:{padding:"8px 16px",cursor:"pointer",backgroundColor:"#8246af",color:"white",border:"none",borderRadius:"4px"},children:"Open Drawer"}),e.jsx(r,{...t,open:s,onOpenChange:i=>a(i)})]})},c={render:t=>e.jsx(u,{...t}),args:{title:"Basic Drawer",children:e.jsxs("div",{children:[e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."})]})}},l={render:t=>e.jsx(u,{...t}),args:{title:"Drawer with Footer",anchor:"right",footer:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",children:"Cancel"}),e.jsx(o,{variant:"primary",children:"Submit"})]}),children:e.jsx("p",{children:"This drawer has a footer action area."})}},m={render:()=>{const[t,s]=n.useState(!1),[a,i]=n.useState(!1),[g,h]=n.useState(!1),[f,d]=n.useState(!1),p={padding:"8px 16px",margin:"8px",cursor:"pointer",borderRadius:"4px",border:"1px solid #ccc"};return e.jsxs("div",{children:[e.jsx(o,{onClick:()=>i(!0),style:p,children:"Left"}),e.jsx(o,{onClick:()=>s(!0),style:p,children:"Right"}),e.jsx(o,{onClick:()=>h(!0),style:p,children:"Top"}),e.jsx(o,{onClick:()=>d(!0),style:p,children:"Bottom"}),e.jsx(r,{open:a,onOpenChange:i,anchor:"left",title:"Left Drawer",children:"Left Content"}),e.jsx(r,{open:t,onOpenChange:s,anchor:"right",title:"Right Drawer",children:"Right Content"}),e.jsx(r,{open:g,onOpenChange:h,anchor:"top",title:"Top Drawer",children:"Top Content"}),e.jsx(r,{open:f,onOpenChange:d,anchor:"bottom",title:"Bottom Drawer",children:"Bottom Content"})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const H=["Basic","WithFooter","Anchors"];export{m as Anchors,c as Basic,l as WithFooter,H as __namedExportsOrder,G as default};
