import{j as e,R as c}from"./iframe-DSyOqSDN.js";import{M as k}from"./Modal-QTmE3odR.js";import{B as l}from"./Button-DT8v2nx0.js";import{F as B}from"./decorators-CR5i3NPh.js";import"./preload-helper-Ct5FWWRu.js";import"./index-B-1qHPVX.js";import"./Spin-CFG9TwRd.js";import"./loader-circle-DsCLUwtP.js";import"./createLucideIcon-BSu-WilA.js";import"./useStableId-CbEv1D-b.js";import"./useTranslation-CisEzeXX.js";import"./index-DQXr03cW.js";import"./x-DXjbvytT.js";import"./DialogRoot-CDSLXYx0.js";import"./useRenderElement-D1btaSxw.js";import"./popupStateMapping-CO8rG5Hk.js";import"./index-W9Uhmc6e.js";import"./index-CPWo8sl9.js";import"./useId-Cgn6PTeu.js";import"./FocusGuard-Cy6It9sP.js";import"./element-CHNw-0cK.js";import"./visuallyHidden-CbwUG2x5.js";import"./useBaseUiId-1sq4ghKn.js";import"./useTimeout-Drji3j7z.js";import"./useOnMount-B1UIL2E3.js";import"./event-1uLbwa05.js";import"./useOpenChangeComplete-BwHnK81Y.js";import"./useButton-Yc5WbqZJ.js";import"./composite-C9OGADUP.js";import"./InternalBackdrop-D0i0FOgA.js";import"./owner-CvMgaIeV.js";import"./inertValue-6-tLnjer.js";import"./useSyncedFloatingRootContext-Dzzv-AEs.js";import"./useTransitionStatus-DJXo2RaG.js";import"./useRole-B0Tdoft7.js";const m=({isOpen:t,onClose:o,onConfirm:n,title:r,message:a,confirmText:s="Confirm",cancelText:v="Cancel",loading:i=!1,container:b,theme:I})=>{const j=A=>{A||o()},S=e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"outline",onClick:o,disabled:i,children:v}),e.jsx(l,{variant:"primary",onClick:n,loading:i,children:s})]});return e.jsx(k,{open:t,onOpenChange:j,title:r,size:"sm",footer:S,closable:!i,closeOnEsc:!i,closeOnOverlayClick:!i,container:b,theme:I,children:e.jsx("div",{children:a})})};m.__docgenInfo={description:"",methods:[],displayName:"ConfirmDialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},confirmText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Confirm'",computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Cancel'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},container:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:"Container element used as the portal root. Defaults to the nearest\n`PortalContainerProvider` value, then to `document.body`."},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Theme stamped on the portal popup (as `data-theme`) so design tokens\nresolve correctly regardless of where the portal mounts. Falls back to\nthe nearest `ThemeProvider` / `MemoriUIProvider` value."}}};const{expect:R,userEvent:w,within:O}=__STORYBOOK_MODULE_TEST__,ge={title:"Overlay/ConfirmDialog",component:m,tags:["autodocs"],argTypes:{isOpen:{control:{type:"boolean"}},title:{control:{type:"text"}},message:{control:{type:"text"}},confirmText:{control:{type:"text"}},cancelText:{control:{type:"text"}},loading:{control:"boolean",description:"Disables actions and shows loading on confirm"},container:{table:{disable:!0}},theme:{control:"inline-radio",options:["light","dark"]}},parameters:{controls:{expanded:!0}}},d={args:{isOpen:!1,onClose:()=>{},onConfirm:()=>{},title:"Confirm Action",message:"Are you sure you want to proceed with this action?",confirmText:"Confirm",cancelText:"Cancel"}},p={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Confirm Action",message:"Are you sure you want to proceed with this action?",confirmText:"Confirm",cancelText:"Cancel"}},u={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Delete Item",message:"Are you sure you want to proceed with this action?",confirmText:"Confirm",cancelText:"Cancel"}},f={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Confirm Action",message:"This action cannot be undone. All associated data will be permanently deleted from the system.",confirmText:"Confirm",cancelText:"Cancel"}},g={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Delete Item",message:"Are you sure you want to delete this item? This action cannot be undone.",confirmText:"Yes, Delete",cancelText:"No, Keep It"}},D=t=>{const[o,n]=c.useState(!1),[r,a]=c.useState(!1),s=()=>{a(!0),n(!1),console.log("Item deleted!")};return e.jsxs(e.Fragment,{children:[r?e.jsx("div",{style:{padding:"12px",background:"#f8d7da",color:"#721c24",borderRadius:"4px",marginBottom:"20px"},children:"Item has been deleted successfully!"}):e.jsx(l,{onClick:()=>n(!0),children:"Delete Item"}),e.jsx(m,{...t,isOpen:o,onClose:()=>n(!1),onConfirm:s})]})},C={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Delete Item",message:"Are you sure you want to delete this item? This action cannot be undone.",confirmText:"Delete",cancelText:"Cancel"},render:t=>e.jsx(D,{...t})},E=t=>{const[o,n]=c.useState(!1),[r,a]=c.useState(!1),s=()=>{n(!0)},v=()=>{a(!0),n(!1),console.log("Navigated without saving!")};return e.jsxs(e.Fragment,{children:[r?e.jsx("div",{style:{padding:"12px",background:"#d4edda",color:"#155724",borderRadius:"4px",marginBottom:"20px"},children:"Navigated away without saving changes."}):e.jsxs("div",{children:[e.jsxs("div",{style:{padding:"20px",border:"1px solid #ddd",borderRadius:"4px",marginBottom:"20px"},children:[e.jsx("h3",{children:"Unsaved Form"}),e.jsx("p",{children:"This is a form with unsaved changes."}),e.jsx("input",{type:"text",placeholder:"Your name",style:{padding:"8px",marginBottom:"10px",width:"100%"}}),e.jsx("textarea",{placeholder:"Your message",style:{padding:"8px",width:"100%",height:"100px"}})]}),e.jsx(l,{onClick:s,children:"Navigate Away"})]}),e.jsx(m,{...t,isOpen:o,onClose:()=>n(!1),onConfirm:v})]})},x={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Unsaved Changes",message:"You have unsaved changes. Are you sure you want to leave without saving?",confirmText:"Leave",cancelText:"Stay"},render:t=>e.jsx(E,{...t})},h={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Deleting…",message:"Please wait while the item is removed.",confirmText:"Delete",cancelText:"Cancel",loading:!0}},y={parameters:{layout:"fullscreen"},args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Clipped confirm",message:"Dialog portal targets the fixed surface.",confirmText:"Confirm",cancelText:"Cancel"},render:()=>{const[t,o]=c.useState(!0);return e.jsx(B,{children:n=>e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>o(!0),children:"Open confirm"}),e.jsx(m,{isOpen:t,onClose:()=>o(!1),onConfirm:()=>o(!1),container:n,title:"Clipped confirm",message:"Dialog portal targets the fixed surface.",confirmText:"Confirm",cancelText:"Cancel"})]})})}},T={render:t=>e.jsx(D,{...t}),args:{isOpen:!1,onClose:()=>{},onConfirm:()=>{},title:"Delete Item",message:"Are you sure you want to delete this item?",confirmText:"Delete",cancelText:"Cancel"},play:async({canvasElement:t})=>{const o=O(t),n=O(t.ownerDocument.body);await w.click(o.getByRole("button",{name:/delete item/i})),await R(await n.findByRole("dialog")).toBeInTheDocument(),await w.keyboard("{Escape}")}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Confirm Action',
    message: 'Are you sure you want to proceed with this action?',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Confirm Action',
    message: 'Are you sure you want to proceed with this action?',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Delete Item',
    message: 'Are you sure you want to proceed with this action?',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Confirm Action',
    message: 'This action cannot be undone. All associated data will be permanently deleted from the system.',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Delete Item',
    message: 'Are you sure you want to delete this item? This action cannot be undone.',
    confirmText: 'Yes, Delete',
    cancelText: 'No, Keep It'
  }
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Delete Item',
    message: 'Are you sure you want to delete this item? This action cannot be undone.',
    confirmText: 'Delete',
    cancelText: 'Cancel'
  },
  render: args => <DeleteTemplate {...args} />
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Unsaved Changes',
    message: 'You have unsaved changes. Are you sure you want to leave without saving?',
    confirmText: 'Leave',
    cancelText: 'Stay'
  },
  render: args => <SaveTemplate {...args} />
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Deleting…',
    message: 'Please wait while the item is removed.',
    confirmText: 'Delete',
    cancelText: 'Cancel',
    loading: true
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Clipped confirm',
    message: 'Dialog portal targets the fixed surface.',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  },
  render: () => {
    const [isOpen, setIsOpen] = React.useState(true);
    return <FixedSurface>
        {surface => <>
            <Button onClick={() => setIsOpen(true)}>Open confirm</Button>
            <ConfirmDialog isOpen={isOpen} onClose={() => setIsOpen(false)} onConfirm={() => setIsOpen(false)} container={surface} title="Clipped confirm" message="Dialog portal targets the fixed surface." confirmText="Confirm" cancelText="Cancel" />
          </>}
      </FixedSurface>;
  }
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <DeleteTemplate {...args} />,
  args: {
    isOpen: false,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Delete Item',
    message: 'Are you sure you want to delete this item?',
    confirmText: 'Delete',
    cancelText: 'Cancel'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', {
      name: /delete item/i
    }));
    await expect(await body.findByRole('dialog')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
  }
}`,...T.parameters?.docs?.source}}};const Ce=["Default","Open","WithCustomTitle","WithCustomMessage","WithCustomButtonText","DeleteConfirmation","UnsavedChanges","Loading","InFixedSurface","OpenInteraction"];export{d as Default,C as DeleteConfirmation,y as InFixedSurface,h as Loading,p as Open,T as OpenInteraction,x as UnsavedChanges,g as WithCustomButtonText,f as WithCustomMessage,u as WithCustomTitle,Ce as __namedExportsOrder,ge as default};
