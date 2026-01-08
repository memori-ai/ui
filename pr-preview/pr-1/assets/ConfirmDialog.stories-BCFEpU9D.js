import{i as e,w as t}from"./iframe-DMsFkDbs.js";import"./react-dom-DN1PZLdI.js";import{t as n}from"./jsx-runtime-s6AK7i7Z.js";import"./shim-i-E5V3v4.js";import"./floating-ui.utils.dom-D_LsV80C.js";import"./floating-ui.react-dom-YBwpNAjh.js";import"./classnames-D2mCmNFl.js";import"./createLucideIcon-BVDRrXjB.js";import{t as r}from"./Button-BsVlKylB.js";import"./x-DpNIEIdG.js";import"./useRenderElement-CuQd9qAl.js";import"./useButton-BqLUJEwP.js";import"./Button-CQeFHuBP.js";import"./Spin-DWQ9QyWR.js";import"./useId-C1w6mc0h.js";import"./useBaseUiId-Cyp_KzFH.js";import"./visuallyHidden-zUF6X9q9.js";import"./InternalBackdrop-JZp8IvP6.js";import"./DialogRoot-FhGhNymM.js";import{t as i}from"./Modal-BWsrIcxw.js";var a=t(e(),1),o=n(),s=({isOpen:e,onClose:t,onConfirm:n,title:a,message:s,confirmText:c=`Confirm`,cancelText:l=`Cancel`,loading:u=!1})=>(0,o.jsx)(i,{open:e,onOpenChange:e=>{e||t()},title:a,size:`sm`,footer:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{variant:`secondary`,onClick:t,disabled:u,children:l}),(0,o.jsx)(r,{variant:`primary`,onClick:n,loading:u,children:c})]}),closable:!u,closeOnEsc:!u,closeOnOverlayClick:!u,children:(0,o.jsx)(`div`,{children:s})}),c=s;s.__docgenInfo={description:``,methods:[],displayName:`ConfirmDialog`,props:{isOpen:{required:!0,tsType:{name:`boolean`},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onConfirm:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},title:{required:!0,tsType:{name:`string`},description:``},message:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},confirmText:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Confirm'`,computed:!1}},cancelText:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Cancel'`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}};var l={title:`UI/ConfirmDialog`,component:c,tags:[`autodocs`],argTypes:{isOpen:{control:{type:`boolean`}},title:{control:{type:`text`}},message:{control:{type:`text`}},confirmText:{control:{type:`text`}},cancelText:{control:{type:`text`}}},parameters:{controls:{expanded:!0}}};const u={args:{isOpen:!1,onClose:()=>{},onConfirm:()=>{},title:`Confirm Action`,message:`Are you sure you want to proceed with this action?`,confirmText:`Confirm`,cancelText:`Cancel`}},d={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:`Confirm Action`,message:`Are you sure you want to proceed with this action?`,confirmText:`Confirm`,cancelText:`Cancel`}},f={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:`Delete Item`,message:`Are you sure you want to proceed with this action?`,confirmText:`Confirm`,cancelText:`Cancel`}},p={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:`Confirm Action`,message:`This action cannot be undone. All associated data will be permanently deleted from the system.`,confirmText:`Confirm`,cancelText:`Cancel`}},m={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:`Delete Item`,message:`Are you sure you want to delete this item? This action cannot be undone.`,confirmText:`Yes, Delete`,cancelText:`No, Keep It`}};var h=e=>{let[t,n]=a.useState(!1),[i,s]=a.useState(!1),l=()=>{s(!0),n(!1),console.log(`Item deleted!`)};return(0,o.jsxs)(o.Fragment,{children:[i?(0,o.jsx)(`div`,{style:{padding:`12px`,background:`#f8d7da`,color:`#721c24`,borderRadius:`4px`,marginBottom:`20px`},children:`Item has been deleted successfully!`}):(0,o.jsx)(r,{onClick:()=>n(!0),children:`Delete Item`}),(0,o.jsx)(c,{...e,isOpen:t,onClose:()=>n(!1),onConfirm:l})]})};const g={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:`Delete Item`,message:`Are you sure you want to delete this item? This action cannot be undone.`,confirmText:`Delete`,cancelText:`Cancel`},render:e=>(0,o.jsx)(h,{...e})};var _=e=>{let[t,n]=a.useState(!1),[i,s]=a.useState(!1),l=()=>{n(!0)},u=()=>{s(!0),n(!1),console.log(`Navigated without saving!`)};return(0,o.jsxs)(o.Fragment,{children:[i?(0,o.jsx)(`div`,{style:{padding:`12px`,background:`#d4edda`,color:`#155724`,borderRadius:`4px`,marginBottom:`20px`},children:`Navigated away without saving changes.`}):(0,o.jsxs)(`div`,{children:[(0,o.jsxs)(`div`,{style:{padding:`20px`,border:`1px solid #ddd`,borderRadius:`4px`,marginBottom:`20px`},children:[(0,o.jsx)(`h3`,{children:`Unsaved Form`}),(0,o.jsx)(`p`,{children:`This is a form with unsaved changes.`}),(0,o.jsx)(`input`,{type:`text`,placeholder:`Your name`,style:{padding:`8px`,marginBottom:`10px`,width:`100%`}}),(0,o.jsx)(`textarea`,{placeholder:`Your message`,style:{padding:`8px`,width:`100%`,height:`100px`}})]}),(0,o.jsx)(r,{onClick:l,children:`Navigate Away`})]}),(0,o.jsx)(c,{...e,isOpen:t,onClose:()=>n(!1),onConfirm:u})]})};const v={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:`Unsaved Changes`,message:`You have unsaved changes. Are you sure you want to leave without saving?`,confirmText:`Leave`,cancelText:`Stay`},render:e=>(0,o.jsx)(_,{...e})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Confirm Action',
    message: 'Are you sure you want to proceed with this action?',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Confirm Action',
    message: 'Are you sure you want to proceed with this action?',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Delete Item',
    message: 'Are you sure you want to proceed with this action?',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Confirm Action',
    message: 'This action cannot be undone. All associated data will be permanently deleted from the system.',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Delete Item',
    message: 'Are you sure you want to delete this item? This action cannot be undone.',
    confirmText: 'Yes, Delete',
    cancelText: 'No, Keep It'
  }
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const y=[`Default`,`Open`,`WithCustomTitle`,`WithCustomMessage`,`WithCustomButtonText`,`DeleteConfirmation`,`UnsavedChanges`];export{u as Default,g as DeleteConfirmation,d as Open,v as UnsavedChanges,m as WithCustomButtonText,p as WithCustomMessage,f as WithCustomTitle,y as __namedExportsOrder,l as default};