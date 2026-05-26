import{j as e,R as g}from"./iframe-BMqfQgqn.js";import{M as j}from"./Modal-DV0kFHRr.js";import{B as h}from"./Button-ClzkGqeK.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DsNATcLx.js";import"./Spin-X6CEbex9.js";import"./loader-circle-D__J2FNl.js";import"./createLucideIcon-BmziOYk9.js";import"./useStableId-CcpR4vFl.js";import"./MemoriUIProvider-DNkiZJyR.js";import"./useRenderElement-BfLIbjiU.js";import"./element-BuhfI0wj.js";import"./visuallyHidden-CbwUG2x5.js";import"./x-4-c4P0vV.js";import"./DialogRoot-BrjeYzI8.js";import"./popupStateMapping-DED2VfVP.js";import"./index-DAw-S_l1.js";import"./index-DSXKMTY1.js";import"./useId-wjbuEOn9.js";import"./createBaseUIEventDetails-MOQ-bLLp.js";import"./useTimeout-BhtsOWeJ.js";import"./useOnMount--IuiD5k7.js";import"./event-Byu5us_0.js";import"./index-CXqYn8fp.js";import"./useOpenChangeComplete-K2daJa-U.js";import"./useButton-DfXTSsXY.js";import"./composite-Cpl4VoVn.js";import"./InternalBackdrop-Cmt087R_.js";import"./owner-CvMgaIeV.js";import"./inertValue-CnKZSJUc.js";import"./useSyncedFloatingRootContext-CR8SlC4W.js";import"./useTransitionStatus-DuHQtbwI.js";import"./useRole-BGtGmbRN.js";import"./useBaseUiId-B0oSCpTs.js";const C=({isOpen:t,onClose:o,onConfirm:n,title:r,message:s,confirmText:a="Confirm",cancelText:x="Cancel",loading:i=!1,container:y,theme:T})=>{const v=O=>{O||o()},w=e.jsxs(e.Fragment,{children:[e.jsx(h,{variant:"outline",onClick:o,disabled:i,children:x}),e.jsx(h,{variant:"primary",onClick:n,loading:i,children:a})]});return e.jsx(j,{open:t,onOpenChange:v,title:r,size:"sm",footer:w,closable:!i,closeOnEsc:!i,closeOnOverlayClick:!i,container:y,theme:T,children:e.jsx("div",{children:s})})};C.__docgenInfo={description:"",methods:[],displayName:"ConfirmDialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},confirmText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Confirm'",computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Cancel'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},container:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:"Container element used as the portal root. Defaults to the nearest\n`PortalContainerProvider` value, then to `document.body`."},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Theme stamped on the portal popup (as `data-theme`) so design tokens\nresolve correctly regardless of where the portal mounts. Falls back to\nthe nearest `ThemeProvider` / `MemoriUIProvider` value."}}};const ie={title:"Components/ConfirmDialog",component:C,tags:["autodocs"],argTypes:{isOpen:{control:{type:"boolean"}},title:{control:{type:"text"}},message:{control:{type:"text"}},confirmText:{control:{type:"text"}},cancelText:{control:{type:"text"}}},parameters:{controls:{expanded:!0}}},l={args:{isOpen:!1,onClose:()=>{},onConfirm:()=>{},title:"Confirm Action",message:"Are you sure you want to proceed with this action?",confirmText:"Confirm",cancelText:"Cancel"}},c={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Confirm Action",message:"Are you sure you want to proceed with this action?",confirmText:"Confirm",cancelText:"Cancel"}},m={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Delete Item",message:"Are you sure you want to proceed with this action?",confirmText:"Confirm",cancelText:"Cancel"}},d={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Confirm Action",message:"This action cannot be undone. All associated data will be permanently deleted from the system.",confirmText:"Confirm",cancelText:"Cancel"}},p={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Delete Item",message:"Are you sure you want to delete this item? This action cannot be undone.",confirmText:"Yes, Delete",cancelText:"No, Keep It"}},A=t=>{const[o,n]=g.useState(!1),[r,s]=g.useState(!1),a=()=>{s(!0),n(!1),console.log("Item deleted!")};return e.jsxs(e.Fragment,{children:[r?e.jsx("div",{style:{padding:"12px",background:"#f8d7da",color:"#721c24",borderRadius:"4px",marginBottom:"20px"},children:"Item has been deleted successfully!"}):e.jsx(h,{onClick:()=>n(!0),children:"Delete Item"}),e.jsx(C,{...t,isOpen:o,onClose:()=>n(!1),onConfirm:a})]})},u={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Delete Item",message:"Are you sure you want to delete this item? This action cannot be undone.",confirmText:"Delete",cancelText:"Cancel"},render:t=>e.jsx(A,{...t})},D=t=>{const[o,n]=g.useState(!1),[r,s]=g.useState(!1),a=()=>{n(!0)},x=()=>{s(!0),n(!1),console.log("Navigated without saving!")};return e.jsxs(e.Fragment,{children:[r?e.jsx("div",{style:{padding:"12px",background:"#d4edda",color:"#155724",borderRadius:"4px",marginBottom:"20px"},children:"Navigated away without saving changes."}):e.jsxs("div",{children:[e.jsxs("div",{style:{padding:"20px",border:"1px solid #ddd",borderRadius:"4px",marginBottom:"20px"},children:[e.jsx("h3",{children:"Unsaved Form"}),e.jsx("p",{children:"This is a form with unsaved changes."}),e.jsx("input",{type:"text",placeholder:"Your name",style:{padding:"8px",marginBottom:"10px",width:"100%"}}),e.jsx("textarea",{placeholder:"Your message",style:{padding:"8px",width:"100%",height:"100px"}})]}),e.jsx(h,{onClick:a,children:"Navigate Away"})]}),e.jsx(C,{...t,isOpen:o,onClose:()=>n(!1),onConfirm:x})]})},f={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Unsaved Changes",message:"You have unsaved changes. Are you sure you want to leave without saving?",confirmText:"Leave",cancelText:"Stay"},render:t=>e.jsx(D,{...t})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Confirm Action',
    message: 'Are you sure you want to proceed with this action?',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
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
    title: 'Delete Item',
    message: 'Are you sure you want to proceed with this action?',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Confirm Action',
    message: 'This action cannot be undone. All associated data will be permanently deleted from the system.',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Delete Item',
    message: 'Are you sure you want to delete this item? This action cannot be undone.',
    confirmText: 'Yes, Delete',
    cancelText: 'No, Keep It'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const le=["Default","Open","WithCustomTitle","WithCustomMessage","WithCustomButtonText","DeleteConfirmation","UnsavedChanges"];export{l as Default,u as DeleteConfirmation,c as Open,f as UnsavedChanges,p as WithCustomButtonText,d as WithCustomMessage,m as WithCustomTitle,le as __namedExportsOrder,ie as default};
