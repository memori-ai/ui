import{j as r}from"./iframe-DvN1O8zr.js";import{F as n,a as s}from"./FileDropzone-COa8-PHj.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-spauhAJQ.js";import"./index-D1Up17BF.js";import"./useTranslation-DeI4Z5iQ.js";import"./index-ainZ7i9v.js";import"./Button-DRT6abBc.js";import"./useButton-CvJTrdXl.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./useStableCallback-CElKwhMG.js";import"./useRenderElement-C14Ha64R.js";import"./loader-circle---oKdcgR.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,C={title:"Form/FileDropzone",component:n,tags:["autodocs"],args:{onFilesSelected:i(),accept:".pdf,.docx,.txt",multiple:!0,description:"PDF, DOCX o TXT · max 20 MB"},argTypes:{variant:{control:"select",options:["area","button"],table:{defaultValue:{summary:"area"}}},accept:{control:"text"},multiple:{control:"boolean"},disabled:{control:"boolean"},title:{control:"text"},description:{control:"text"},buttonLabel:{control:"text"},icon:{control:!1}},parameters:{controls:{expanded:!0},docs:{description:{component:'File picker built on a native `<input type="file">`: drag & drop, click and keyboard. Files not matching `accept` are filtered out of drops. `button` is the compact form for inline uploads.'}}}},t={},e={args:{accept:".csv",multiple:!1,icon:r.jsx(s,{size:28}),title:"Carica un CSV con colonne Domanda / Risposta",description:"Un file alla volta"}},o={args:{variant:"button",accept:".json",multiple:!1,buttonLabel:"Importa funzioni",description:"File .json esportato da un altro agente"}},a={args:{disabled:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accept: '.csv',
    multiple: false,
    icon: <FileSpreadsheet size={28} />,
    title: 'Carica un CSV con colonne Domanda / Risposta',
    description: 'Un file alla volta'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'button',
    accept: '.json',
    multiple: false,
    buttonLabel: 'Importa funzioni',
    description: 'File .json esportato da un altro agente'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};const v=["Default","CustomContent","ButtonVariant","Disabled"];export{o as ButtonVariant,e as CustomContent,t as Default,a as Disabled,v as __namedExportsOrder,C as default};
