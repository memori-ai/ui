import{j as e,r as n}from"./iframe-BePzlIFR.js";import{D as r}from"./Drawer-DckyEVEx.js";import{B as o}from"./Button-BYPTeXgq.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BM8BopHT.js";import"./x-w6BqG0w9.js";import"./createLucideIcon-BuYaKEdJ.js";import"./loader-circle-CvgWVP99.js";import"./DialogRoot-M4nzKVZC.js";import"./useRenderElement-C_U3aUoC.js";import"./popupStateMapping-KuFaTHDs.js";import"./index-C5Q50-Ng.js";import"./index-CN2bOQZ-.js";import"./useId-CLoByIKS.js";import"./FocusGuard-AtzRfGgf.js";import"./element-BkmXWwpy.js";import"./visuallyHidden-CbwUG2x5.js";import"./createBaseUIEventDetails-CHgxxG4H.js";import"./useTimeout-DbhytWKv.js";import"./useOnMount-DB-ZxAQ_.js";import"./event-8OMApfR_.js";import"./index-DSdUPtzF.js";import"./useOpenChangeComplete-CPr7iqYR.js";import"./useButton-BnKrdaLz.js";import"./composite-HOL7mQoG.js";import"./InternalBackdrop-Cwaw8SHd.js";import"./owner-CvMgaIeV.js";import"./inertValue-Cgezrbcs.js";import"./useSyncedFloatingRootContext-q1lFINHv.js";import"./useTransitionStatus-IpOJmdD-.js";import"./useRole-C6J8YgI9.js";const U={title:"Components/Drawer",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"If true, the drawer is open"},anchor:{control:"select",options:["left","right","top","bottom"],description:"Side from which the drawer will appear"},size:{control:"select",options:["sm","md","lg"],description:"Size of the drawer (width for left/right, height for top/bottom)"}}},u=t=>{const[s,a]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>a(!0),style:{padding:"8px 16px",cursor:"pointer",backgroundColor:"#8246af",color:"white",border:"none",borderRadius:"4px"},children:"Open Drawer"}),e.jsx(r,{...t,open:s,onOpenChange:i=>a(i)})]})},c={render:t=>e.jsx(u,{...t}),args:{title:"Basic Drawer",children:e.jsxs("div",{children:[e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."})]})}},l={render:t=>e.jsx(u,{...t}),args:{title:"Drawer with Footer",anchor:"right",footer:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",children:"Cancel"}),e.jsx(o,{variant:"primary",children:"Submit"})]}),children:e.jsx("p",{children:"This drawer has a footer action area."})}},m={render:()=>{const[t,s]=n.useState(!1),[a,i]=n.useState(!1),[g,h]=n.useState(!1),[f,d]=n.useState(!1),p={padding:"8px 16px",margin:"8px",cursor:"pointer",borderRadius:"4px",border:"1px solid #ccc"};return e.jsxs("div",{children:[e.jsx(o,{onClick:()=>i(!0),style:p,children:"Left"}),e.jsx(o,{onClick:()=>s(!0),style:p,children:"Right"}),e.jsx(o,{onClick:()=>h(!0),style:p,children:"Top"}),e.jsx(o,{onClick:()=>d(!0),style:p,children:"Bottom"}),e.jsx(r,{open:a,onOpenChange:i,anchor:"left",title:"Left Drawer",children:"Left Content"}),e.jsx(r,{open:t,onOpenChange:s,anchor:"right",title:"Right Drawer",children:"Right Content"}),e.jsx(r,{open:g,onOpenChange:h,anchor:"top",title:"Top Drawer",children:"Top Content"}),e.jsx(r,{open:f,onOpenChange:d,anchor:"bottom",title:"Bottom Drawer",children:"Bottom Content"})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
