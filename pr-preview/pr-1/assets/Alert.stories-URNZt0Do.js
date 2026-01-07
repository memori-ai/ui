import{i as e,w as t}from"./iframe-BXE0ypsu.js";import{t as n}from"./jsx-runtime-BKrrHgV7.js";import"./shim-B5risLIE.js";import"./open-closed-CmekZrFg.js";import"./floating-ui.utils.dom-DXR4vcPl.js";import{t as r}from"./transition-Cj7O9XJ_.js";import{t as i}from"./classnames-DhHzMZ_t.js";import"./createLucideIcon-DWq2HgHf.js";import{t as a}from"./x-BvfToaiC.js";import"./useRenderElement-DaTwyYAB.js";import{t as o}from"./Button-DsYz3uwF.js";import"./Button-DJlKJpMK.js";import{t as s}from"./useTranslation-H-ImfAJd.js";var c=t(i(),1),l=t(e(),1),u=n(),d=({open:e=!1,onClose:t,className:n,title:i,description:d,children:f,type:p=`info`,icon:m,closable:h=!0,duration:g=null,action:_,width:v=`400px`})=>{let{t:y}=s();return l.useEffect(()=>{if(g&&e){let e=setTimeout(()=>{t(!1)},g);return()=>clearTimeout(e)}},[g,e,t]),(0,u.jsx)(r,{show:e,as:l.Fragment,appear:!0,children:(0,u.jsxs)(`div`,{className:(0,c.default)(`memori-alert`,(e=>{switch(e){case`success`:return`memori-alert--success`;case`warning`:return`memori-alert--warning`;case`error`:return`memori-alert--error`;default:return`memori-alert--info`}})(p),n),children:[(0,u.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
              .memori-alert {
                --memori-alert--width: ${v};
              }
            `}}),(0,u.jsx)(r.Child,{as:l.Fragment,enter:`ease-out duration-300`,enterFrom:`opacity-0 translate-y-4`,enterTo:`opacity-100 translate-y-0`,leave:`ease-in duration-200`,leaveFrom:`opacity-100 translate-y-0`,leaveTo:`opacity-0 translate-y-4`,children:(0,u.jsxs)(`div`,{className:`memori-alert--container`,children:[m&&(0,u.jsx)(`div`,{className:`memori-alert--icon`,children:m}),(0,u.jsxs)(`div`,{className:`memori-alert--content`,children:[i&&(0,u.jsx)(`div`,{className:`memori-alert--title`,children:i}),d&&(0,u.jsx)(`div`,{className:`memori-alert--description`,children:d}),f]}),(0,u.jsxs)(`div`,{className:`memori-alert--actions`,children:[_&&(0,u.jsx)(`div`,{className:`memori-alert--action`,children:_}),h&&(0,u.jsx)(o,{title:y(`close`)||`Close alert`,variant:`ghost`,shape:`circle`,icon:(0,u.jsx)(a,{}),"aria-label":y(`close`)||`Close alert`,onClick:()=>t(!1),className:`memori-alert--close`})]})]})})]})})},f=d;d.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{open:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``},title:{required:!1,tsType:{name:`union`,raw:`string | JSX.Element | React.ReactNode`,elements:[{name:`string`},{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},description:{required:!1,tsType:{name:`union`,raw:`string | JSX.Element | React.ReactNode`,elements:[{name:`string`},{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},children:{required:!1,tsType:{name:`union`,raw:`JSX.Element | React.ReactNode`,elements:[{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},type:{required:!1,tsType:{name:`union`,raw:`'success' | 'warning' | 'error' | 'info'`,elements:[{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'info'`}]},description:``,defaultValue:{value:`'info'`,computed:!1}},icon:{required:!1,tsType:{name:`union`,raw:`JSX.Element | React.ReactNode`,elements:[{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},closable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},duration:{required:!1,tsType:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}]},description:``,defaultValue:{value:`null`,computed:!1}},action:{required:!1,tsType:{name:`union`,raw:`JSX.Element | React.ReactNode`,elements:[{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},width:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'400px'`,computed:!1}}}};var p={title:`UI/Alert`,component:f,tags:[`autodocs`],argTypes:{type:{control:{type:`select`,options:[`success`,`warning`,`error`,`info`]}},title:{control:{type:`text`}},description:{control:{type:`text`}},open:{control:{type:`boolean`}},closable:{control:{type:`boolean`}},width:{control:{type:`text`}}},parameters:{controls:{expanded:!0}},render:e=>{let[t,n]=l.useState(!!e.open);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{onClick:()=>n(!0),children:`Show Alert`}),(0,u.jsx)(f,{...e,open:t,onClose:()=>n(!1)})]})}};const m={args:{open:!1,type:`info`,title:`Information`,description:`This is an informative alert message.`,onClose:()=>{}}},h={args:{open:!0,onClose:()=>{},type:`success`,title:`Success!`,description:`Operation completed successfully.`}},g={args:{open:!0,onClose:()=>{},type:`warning`,title:`Warning`,description:`Please review this important warning message.`}},_={args:{open:!0,onClose:()=>{},type:`error`,title:`Error`,description:`An error occurred while processing your request.`}},v={args:{open:!0,onClose:()=>{},type:`info`,title:`Update Available`,description:`A new version is available.`,action:(0,u.jsx)(o,{variant:`primary`,children:`Update Now`})}},y={args:{open:!0,onClose:()=>{},type:`warning`,title:`Important Notice`,description:`This message cannot be dismissed.`,closable:!1}},b={args:{open:!0,onClose:()=>{},type:`info`,title:`Custom Width`,description:`This alert has a custom width.`,width:`500px`}},x={args:{open:!0,onClose:()=>{},type:`success`,title:`Operation Successful`}},S={args:{open:!0,onClose:()=>{},type:`success`,title:`Auto Dismiss`,description:`This alert will dismiss automatically after 3 seconds.`,duration:3e3}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    type: 'info',
    title: 'Information',
    description: 'This is an informative alert message.',
    onClose: () => {}
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'success',
    title: 'Success!',
    description: 'Operation completed successfully.'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'warning',
    title: 'Warning',
    description: 'Please review this important warning message.'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'error',
    title: 'Error',
    description: 'An error occurred while processing your request.'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'info',
    title: 'Update Available',
    description: 'A new version is available.',
    action: <Button variant="primary">Update Now</Button>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'warning',
    title: 'Important Notice',
    description: 'This message cannot be dismissed.',
    closable: false
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'info',
    title: 'Custom Width',
    description: 'This alert has a custom width.',
    width: '500px'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'success',
    title: 'Operation Successful'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'success',
    title: 'Auto Dismiss',
    description: 'This alert will dismiss automatically after 3 seconds.',
    duration: 3000
  }
}`,...S.parameters?.docs?.source}}};const C=[`Default`,`Success`,`Warning`,`Error`,`WithAction`,`NonClosable`,`CustomWidth`,`WithoutDescription`,`AutoDismiss`];export{S as AutoDismiss,b as CustomWidth,m as Default,_ as Error,y as NonClosable,h as Success,g as Warning,v as WithAction,x as WithoutDescription,C as __namedExportsOrder,p as default};