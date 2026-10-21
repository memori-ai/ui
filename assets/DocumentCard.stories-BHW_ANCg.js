import{R as p,j as e}from"./iframe-BXoPY9wl.js";import{c as u}from"./index-CWjFjZSg.js";import{c as h}from"./createLucideIcon-KNAk1hxz.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}]],f=h("file",g),o=p.forwardRef(({title:i,badge:c,meta:s,icon:n,className:d,...m},l)=>e.jsxs("div",{ref:l,className:u("memori-document-card",d),...m,children:[e.jsxs("div",{className:"memori-document-card__header",children:[n!=null&&e.jsx("div",{className:"memori-document-card__icon","aria-hidden":!0,children:n}),e.jsxs("div",{className:"memori-document-card__text",children:[e.jsx("div",{className:"memori-document-card__title",children:i}),s!=null&&s!==""&&e.jsx("div",{className:"memori-document-card__meta",children:s})]})]}),e.jsx("span",{className:"memori-document-card__badge",children:c})]}));o.displayName="DocumentCard";o.__docgenInfo={description:"",methods:[],displayName:"DocumentCard",props:{title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Document / file display name"},badge:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Type badge (e.g. PDF, DOCX) shown bottom-right"},meta:{required:!1,tsType:{name:"union",raw:"React.ReactNode | null",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"null"}]},description:"Optional secondary meta line (e.g. file size)"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional leading icon in the header"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name"}},composes:["Omit"]};const x={title:"Components/DocumentCard",component:o,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{title:"quarterly-report.pdf",badge:"PDF",style:{width:120,height:120}}},a={args:{title:"meeting-notes.txt",badge:"TXT",meta:"12 KB",icon:e.jsx(f,{className:"memori-document-card__icon-svg"}),style:{width:160,minHeight:100}}},r={args:{title:"very-long-filename-that-should-clamp-across-multiple-lines-in-the-tile.pdf",badge:"PDF",style:{width:120,height:120}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'quarterly-report.pdf',
    badge: 'PDF',
    style: {
      width: 120,
      height: 120
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'meeting-notes.txt',
    badge: 'TXT',
    meta: '12 KB',
    icon: <File className="memori-document-card__icon-svg" />,
    style: {
      width: 160,
      minHeight: 100
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'very-long-filename-that-should-clamp-across-multiple-lines-in-the-tile.pdf',
    badge: 'PDF',
    style: {
      width: 120,
      height: 120
    }
  }
}`,...r.parameters?.docs?.source}}};const w=["Default","WithIconAndMeta","LongTitle"];export{t as Default,r as LongTitle,a as WithIconAndMeta,w as __namedExportsOrder,x as default};
