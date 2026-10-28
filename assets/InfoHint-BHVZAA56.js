import{R as m,j as e}from"./iframe-DvN1O8zr.js";import{c as u}from"./index-D1Up17BF.js";import{u as p}from"./useTranslation-DeI4Z5iQ.js";import{T as d}from"./Tooltip-BdsJfq8Z.js";import{I as f}from"./info-ByTr5ib1.js";const t=m.forwardRef(({content:a,ariaLabel:n,size:o=14,placement:r="top",className:l},i)=>{const{t:s}=p();return e.jsx(d,{title:a,placement:r,openOnPress:!0,children:e.jsx("button",{ref:i,type:"button",className:u("memori-info-hint",l),"aria-label":n??s("common.moreInfo",{defaultValue:"More information"}),children:e.jsx(f,{size:o,"aria-hidden":!0})})})});t.displayName="InfoHint";t.__docgenInfo={description:`Small "i" button next to a label or column header that explains it in a
tooltip. Keyboard focusable; opens on hover, focus, and press (touch).`,methods:[],displayName:"InfoHint",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Explanation shown in the tooltip."},ariaLabel:{required:!1,tsType:{name:"string"},description:'Accessible name of the trigger, e.g. "Informazioni su Occorrenze".\nDefaults to `common.moreInfo`.'},size:{required:!1,tsType:{name:"number"},description:"Icon size in px. @default 14",defaultValue:{value:"14",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:`| 'top'
| 'bottom'
| 'left'
| 'right'
| 'top-start'
| 'top-end'
| 'bottom-start'
| 'bottom-end'
| 'left-start'
| 'left-end'
| 'right-start'
| 'right-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"}]},description:"Tooltip placement. @default 'top'",defaultValue:{value:"'top'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name for the trigger button."}}};export{t as I};
