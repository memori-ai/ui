import{j as e,R as g}from"./iframe-r25K3dhI.js";import{M as w}from"./Modal-BuWa7oCP.js";import{B as C}from"./Button-Cnca7SSG.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D5Ob3FIU.js";import"./Spin-BlBArxzu.js";import"./loader-circle-Glpfv0Y4.js";import"./createLucideIcon-DNxkPSIp.js";import"./x-BBEHW-iR.js";import"./DialogRoot-B6G80C43.js";import"./useRenderElement-No00WegA.js";import"./popupStateMapping-B9iV0EO9.js";import"./index-Bw078IWv.js";import"./index-DG0XrCAo.js";import"./useId-CUGjsjQ6.js";import"./FocusGuard-DZgPr34Q.js";import"./element-HCgR3DQp.js";import"./visuallyHidden-CbwUG2x5.js";import"./createBaseUIEventDetails-fVmVK3H2.js";import"./useTimeout-DPdNIhu_.js";import"./useOnMount-DGveSPuq.js";import"./event-C5KS0zek.js";import"./index-BY-y2TQZ.js";import"./useOpenChangeComplete-BdRGEo1L.js";import"./useButton-CMANLp7x.js";import"./composite-CQ9nSRS8.js";import"./InternalBackdrop-BnDN1ez1.js";import"./owner-CvMgaIeV.js";import"./inertValue-C30vMsgd.js";import"./useSyncedFloatingRootContext-DFSVtsn2.js";import"./useTransitionStatus-cWRHTfSI.js";import"./useRole-aUvKgIid.js";import"./useBaseUiId-Cx2MAyB3.js";const x=({isOpen:t,onClose:o,onConfirm:n,title:r,message:s,confirmText:a="Confirm",cancelText:h="Cancel",loading:i=!1})=>{const y=v=>{v||o()},T=e.jsxs(e.Fragment,{children:[e.jsx(C,{variant:"outline",onClick:o,disabled:i,children:h}),e.jsx(C,{variant:"primary",onClick:n,loading:i,children:a})]});return e.jsx(w,{open:t,onOpenChange:y,title:r,size:"sm",footer:T,closable:!i,closeOnEsc:!i,closeOnOverlayClick:!i,children:e.jsx("div",{children:s})})};x.__docgenInfo={description:"",methods:[],displayName:"ConfirmDialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},confirmText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Confirm'",computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Cancel'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const re={title:"Components/ConfirmDialog",component:x,tags:["autodocs"],argTypes:{isOpen:{control:{type:"boolean"}},title:{control:{type:"text"}},message:{control:{type:"text"}},confirmText:{control:{type:"text"}},cancelText:{control:{type:"text"}}},parameters:{controls:{expanded:!0}}},c={args:{isOpen:!1,onClose:()=>{},onConfirm:()=>{},title:"Confirm Action",message:"Are you sure you want to proceed with this action?",confirmText:"Confirm",cancelText:"Cancel"}},m={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Confirm Action",message:"Are you sure you want to proceed with this action?",confirmText:"Confirm",cancelText:"Cancel"}},l={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Delete Item",message:"Are you sure you want to proceed with this action?",confirmText:"Confirm",cancelText:"Cancel"}},p={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Confirm Action",message:"This action cannot be undone. All associated data will be permanently deleted from the system.",confirmText:"Confirm",cancelText:"Cancel"}},d={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Delete Item",message:"Are you sure you want to delete this item? This action cannot be undone.",confirmText:"Yes, Delete",cancelText:"No, Keep It"}},O=t=>{const[o,n]=g.useState(!1),[r,s]=g.useState(!1),a=()=>{s(!0),n(!1),console.log("Item deleted!")};return e.jsxs(e.Fragment,{children:[r?e.jsx("div",{style:{padding:"12px",background:"#f8d7da",color:"#721c24",borderRadius:"4px",marginBottom:"20px"},children:"Item has been deleted successfully!"}):e.jsx(C,{onClick:()=>n(!0),children:"Delete Item"}),e.jsx(x,{...t,isOpen:o,onClose:()=>n(!1),onConfirm:a})]})},u={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Delete Item",message:"Are you sure you want to delete this item? This action cannot be undone.",confirmText:"Delete",cancelText:"Cancel"},render:t=>e.jsx(O,{...t})},j=t=>{const[o,n]=g.useState(!1),[r,s]=g.useState(!1),a=()=>{n(!0)},h=()=>{s(!0),n(!1),console.log("Navigated without saving!")};return e.jsxs(e.Fragment,{children:[r?e.jsx("div",{style:{padding:"12px",background:"#d4edda",color:"#155724",borderRadius:"4px",marginBottom:"20px"},children:"Navigated away without saving changes."}):e.jsxs("div",{children:[e.jsxs("div",{style:{padding:"20px",border:"1px solid #ddd",borderRadius:"4px",marginBottom:"20px"},children:[e.jsx("h3",{children:"Unsaved Form"}),e.jsx("p",{children:"This is a form with unsaved changes."}),e.jsx("input",{type:"text",placeholder:"Your name",style:{padding:"8px",marginBottom:"10px",width:"100%"}}),e.jsx("textarea",{placeholder:"Your message",style:{padding:"8px",width:"100%",height:"100px"}})]}),e.jsx(C,{onClick:a,children:"Navigate Away"})]}),e.jsx(x,{...t,isOpen:o,onClose:()=>n(!1),onConfirm:h})]})},f={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Unsaved Changes",message:"You have unsaved changes. Are you sure you want to leave without saving?",confirmText:"Leave",cancelText:"Stay"},render:t=>e.jsx(j,{...t})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Confirm Action',
    message: 'Are you sure you want to proceed with this action?',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Confirm Action',
    message: 'Are you sure you want to proceed with this action?',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Delete Item',
    message: 'Are you sure you want to proceed with this action?',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Confirm Action',
    message: 'This action cannot be undone. All associated data will be permanently deleted from the system.',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Delete Item',
    message: 'Are you sure you want to delete this item? This action cannot be undone.',
    confirmText: 'Yes, Delete',
    cancelText: 'No, Keep It'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const se=["Default","Open","WithCustomTitle","WithCustomMessage","WithCustomButtonText","DeleteConfirmation","UnsavedChanges"];export{c as Default,u as DeleteConfirmation,m as Open,f as UnsavedChanges,d as WithCustomButtonText,p as WithCustomMessage,l as WithCustomTitle,se as __namedExportsOrder,re as default};
