import{i as e,w as t}from"./iframe-BXE0ypsu.js";import"./react-dom-v6yaHnq_.js";import{t as n}from"./jsx-runtime-BKrrHgV7.js";import"./open-closed-CmekZrFg.js";import"./portal-m-gXbtVH.js";import{t as r}from"./ConfirmDialog-VCRI_jdx.js";import"./floating-ui.utils.dom-DXR4vcPl.js";import"./transition-Cj7O9XJ_.js";import"./classnames-DhHzMZ_t.js";import"./useRenderElement-DaTwyYAB.js";import{t as i}from"./Button-DsYz3uwF.js";import"./Button-DJlKJpMK.js";var a=t(e(),1),o=n(),s={title:`UI/ConfirmDialog`,component:r,tags:[`autodocs`],argTypes:{isOpen:{control:{type:`boolean`}},title:{control:{type:`text`}},message:{control:{type:`text`}},confirmText:{control:{type:`text`}},cancelText:{control:{type:`text`}}},parameters:{controls:{expanded:!0}}};const c={args:{isOpen:!1,onClose:()=>{},onConfirm:()=>{},title:`Confirm Action`,message:`Are you sure you want to proceed with this action?`,confirmText:`Confirm`,cancelText:`Cancel`}},l={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:`Confirm Action`,message:`Are you sure you want to proceed with this action?`,confirmText:`Confirm`,cancelText:`Cancel`}},u={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:`Delete Item`,message:`Are you sure you want to proceed with this action?`,confirmText:`Confirm`,cancelText:`Cancel`}},d={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:`Confirm Action`,message:`This action cannot be undone. All associated data will be permanently deleted from the system.`,confirmText:`Confirm`,cancelText:`Cancel`}},f={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:`Delete Item`,message:`Are you sure you want to delete this item? This action cannot be undone.`,confirmText:`Yes, Delete`,cancelText:`No, Keep It`}};var p=e=>{let[t,n]=a.useState(!1),[s,c]=a.useState(!1),l=()=>{c(!0),n(!1),console.log(`Item deleted!`)};return(0,o.jsxs)(o.Fragment,{children:[s?(0,o.jsx)(`div`,{style:{padding:`12px`,background:`#f8d7da`,color:`#721c24`,borderRadius:`4px`,marginBottom:`20px`},children:`Item has been deleted successfully!`}):(0,o.jsx)(i,{onClick:()=>n(!0),children:`Delete Item`}),(0,o.jsx)(r,{...e,isOpen:t,onClose:()=>n(!1),onConfirm:l})]})};const m={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:`Delete Item`,message:`Are you sure you want to delete this item? This action cannot be undone.`,confirmText:`Delete`,cancelText:`Cancel`},render:e=>(0,o.jsx)(p,{...e})};var h=e=>{let[t,n]=a.useState(!1),[s,c]=a.useState(!1),l=()=>{n(!0)},u=()=>{c(!0),n(!1),console.log(`Navigated without saving!`)};return(0,o.jsxs)(o.Fragment,{children:[s?(0,o.jsx)(`div`,{style:{padding:`12px`,background:`#d4edda`,color:`#155724`,borderRadius:`4px`,marginBottom:`20px`},children:`Navigated away without saving changes.`}):(0,o.jsxs)(`div`,{children:[(0,o.jsxs)(`div`,{style:{padding:`20px`,border:`1px solid #ddd`,borderRadius:`4px`,marginBottom:`20px`},children:[(0,o.jsx)(`h3`,{children:`Unsaved Form`}),(0,o.jsx)(`p`,{children:`This is a form with unsaved changes.`}),(0,o.jsx)(`input`,{type:`text`,placeholder:`Your name`,style:{padding:`8px`,marginBottom:`10px`,width:`100%`}}),(0,o.jsx)(`textarea`,{placeholder:`Your message`,style:{padding:`8px`,width:`100%`,height:`100px`}})]}),(0,o.jsx)(i,{onClick:l,children:`Navigate Away`})]}),(0,o.jsx)(r,{...e,isOpen:t,onClose:()=>n(!1),onConfirm:u})]})};const g={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:`Unsaved Changes`,message:`You have unsaved changes. Are you sure you want to leave without saving?`,confirmText:`Leave`,cancelText:`Stay`},render:e=>(0,o.jsx)(h,{...e})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Confirm Action',
    message: 'Are you sure you want to proceed with this action?',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Confirm Action',
    message: 'Are you sure you want to proceed with this action?',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Delete Item',
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
    message: 'This action cannot be undone. All associated data will be permanently deleted from the system.',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Delete Item',
    message: 'Are you sure you want to delete this item? This action cannot be undone.',
    confirmText: 'Yes, Delete',
    cancelText: 'No, Keep It'
  }
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const _=[`Default`,`Open`,`WithCustomTitle`,`WithCustomMessage`,`WithCustomButtonText`,`DeleteConfirmation`,`UnsavedChanges`];export{c as Default,m as DeleteConfirmation,l as Open,g as UnsavedChanges,f as WithCustomButtonText,d as WithCustomMessage,u as WithCustomTitle,_ as __namedExportsOrder,s as default};