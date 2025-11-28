import{b as e,o as t}from"./iframe-Lykv21fv.js";import{t as n}from"./jsx-runtime-BjbrseIk.js";import{t as r}from"./compiler-runtime-opEaryQp.js";import"./open-closed-B7qGthqP.js";import{t as i}from"./transition-DnVhI7hJ.js";import{t as a}from"./classnames-Ccsu6dJt.js";import{t as o}from"./Close-BQQKO4fg.js";import"./Loading-lNflzFeX.js";import"./Button-CzhZo3GH.js";import{t as s}from"./Button-DwnnxbOq.js";import{t as c}from"./useTranslation-PoxwscwG.js";var l=e(a(),1),u=r(),d=e(t(),1),f=n(),p=e=>{let t=(0,u.c)(40),{open:n,onClose:r,className:a,title:p,description:m,children:g,type:_,icon:v,closable:y,duration:b,action:x,width:S}=e,C=n===void 0?!1:n,w=_===void 0?`info`:_,T=y===void 0?!0:y,E=b===void 0?null:b,D=S===void 0?`400px`:S,{t:O}=c(),k,A;t[0]!==E||t[1]!==r||t[2]!==C?(k=()=>{if(E&&C){let e=setTimeout(()=>{r(!1)},E);return()=>clearTimeout(e)}},A=[E,C,r],t[0]=E,t[1]=r,t[2]=C,t[3]=k,t[4]=A):(k=t[3],A=t[4]),d.useEffect(k,A);let j=h,M;t[5]!==a||t[6]!==w?(M=(0,l.default)(`memori-alert`,j(w),a),t[5]=a,t[6]=w,t[7]=M):M=t[7];let N=`
              .memori-alert {
                --memori-alert--width: ${D};
              }
            `,P;t[8]===N?P=t[9]:(P=(0,f.jsx)(`style`,{dangerouslySetInnerHTML:{__html:N}}),t[8]=N,t[9]=P);let F;t[10]===v?F=t[11]:(F=v&&(0,f.jsx)(`div`,{className:`memori-alert--icon`,children:v}),t[10]=v,t[11]=F);let I;t[12]===p?I=t[13]:(I=p&&(0,f.jsx)(`div`,{className:`memori-alert--title`,children:p}),t[12]=p,t[13]=I);let L;t[14]===m?L=t[15]:(L=m&&(0,f.jsx)(`div`,{className:`memori-alert--description`,children:m}),t[14]=m,t[15]=L);let R;t[16]!==g||t[17]!==I||t[18]!==L?(R=(0,f.jsxs)(`div`,{className:`memori-alert--content`,children:[I,L,g]}),t[16]=g,t[17]=I,t[18]=L,t[19]=R):R=t[19];let z;t[20]===x?z=t[21]:(z=x&&(0,f.jsx)(`div`,{className:`memori-alert--action`,children:x}),t[20]=x,t[21]=z);let B;t[22]!==T||t[23]!==r||t[24]!==O?(B=T&&(0,f.jsx)(s,{ghost:!0,padded:!0,shape:`circle`,icon:(0,f.jsx)(o,{}),title:O(`close`)||`Close alert`,onClick:()=>r(!1),className:`memori-alert--close`}),t[22]=T,t[23]=r,t[24]=O,t[25]=B):B=t[25];let V;t[26]!==z||t[27]!==B?(V=(0,f.jsxs)(`div`,{className:`memori-alert--actions`,children:[z,B]}),t[26]=z,t[27]=B,t[28]=V):V=t[28];let H;t[29]!==F||t[30]!==R||t[31]!==V?(H=(0,f.jsx)(i.Child,{as:d.Fragment,enter:`ease-out duration-300`,enterFrom:`opacity-0 translate-y-4`,enterTo:`opacity-100 translate-y-0`,leave:`ease-in duration-200`,leaveFrom:`opacity-100 translate-y-0`,leaveTo:`opacity-0 translate-y-4`,children:(0,f.jsxs)(`div`,{className:`memori-alert--container`,children:[F,R,V]})}),t[29]=F,t[30]=R,t[31]=V,t[32]=H):H=t[32];let U;t[33]!==P||t[34]!==H||t[35]!==M?(U=(0,f.jsxs)(`div`,{className:M,children:[P,H]}),t[33]=P,t[34]=H,t[35]=M,t[36]=U):U=t[36];let W;return t[37]!==C||t[38]!==U?(W=(0,f.jsx)(i,{show:C,as:d.Fragment,appear:!0,children:U}),t[37]=C,t[38]=U,t[39]=W):W=t[39],W},m=p;p.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{open:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``},title:{required:!1,tsType:{name:`union`,raw:`string | JSX.Element | React.ReactNode`,elements:[{name:`string`},{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},description:{required:!1,tsType:{name:`union`,raw:`string | JSX.Element | React.ReactNode`,elements:[{name:`string`},{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},children:{required:!1,tsType:{name:`union`,raw:`JSX.Element | React.ReactNode`,elements:[{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},type:{required:!1,tsType:{name:`union`,raw:`'success' | 'warning' | 'error' | 'info'`,elements:[{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'info'`}]},description:``,defaultValue:{value:`'info'`,computed:!1}},icon:{required:!1,tsType:{name:`union`,raw:`JSX.Element | React.ReactNode`,elements:[{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},closable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},duration:{required:!1,tsType:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}]},description:``,defaultValue:{value:`null`,computed:!1}},action:{required:!1,tsType:{name:`union`,raw:`JSX.Element | React.ReactNode`,elements:[{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},width:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'400px'`,computed:!1}}}};function h(e){switch(e){case`success`:return`memori-alert--success`;case`warning`:return`memori-alert--warning`;case`error`:return`memori-alert--error`;default:return`memori-alert--info`}}var g={title:`UI/Alert`,component:m,tags:[`autodocs`],argTypes:{type:{control:{type:`select`,options:[`success`,`warning`,`error`,`info`]}},title:{control:{type:`text`}},description:{control:{type:`text`}},open:{control:{type:`boolean`}},closable:{control:{type:`boolean`}},width:{control:{type:`text`}}},parameters:{controls:{expanded:!0}},render:e=>{let[t,n]=d.useState(!!e.open);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{onClick:()=>n(!0),children:`Show Alert`}),(0,f.jsx)(m,{...e,open:t,onClose:()=>n(!1)})]})}};const _={args:{open:!1,type:`info`,title:`Information`,description:`This is an informative alert message.`,onClose:()=>{}}},v={args:{open:!0,onClose:()=>{},type:`success`,title:`Success!`,description:`Operation completed successfully.`}},y={args:{open:!0,onClose:()=>{},type:`warning`,title:`Warning`,description:`Please review this important warning message.`}},b={args:{open:!0,onClose:()=>{},type:`error`,title:`Error`,description:`An error occurred while processing your request.`}},x={args:{open:!0,onClose:()=>{},type:`info`,title:`Update Available`,description:`A new version is available.`,action:(0,f.jsx)(s,{primary:!0,children:`Update Now`})}},S={args:{open:!0,onClose:()=>{},type:`warning`,title:`Important Notice`,description:`This message cannot be dismissed.`,closable:!1}},C={args:{open:!0,onClose:()=>{},type:`info`,title:`Custom Width`,description:`This alert has a custom width.`,width:`500px`}},w={args:{open:!0,onClose:()=>{},type:`success`,title:`Operation Successful`}},T={args:{open:!0,onClose:()=>{},type:`success`,title:`Auto Dismiss`,description:`This alert will dismiss automatically after 3 seconds.`,duration:3e3}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    type: 'info',
    title: 'Information',
    description: 'This is an informative alert message.',
    onClose: () => {}
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'success',
    title: 'Success!',
    description: 'Operation completed successfully.'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'warning',
    title: 'Warning',
    description: 'Please review this important warning message.'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'error',
    title: 'Error',
    description: 'An error occurred while processing your request.'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'info',
    title: 'Update Available',
    description: 'A new version is available.',
    action: <Button primary>Update Now</Button>
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'warning',
    title: 'Important Notice',
    description: 'This message cannot be dismissed.',
    closable: false
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'info',
    title: 'Custom Width',
    description: 'This alert has a custom width.',
    width: '500px'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'success',
    title: 'Operation Successful'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    type: 'success',
    title: 'Auto Dismiss',
    description: 'This alert will dismiss automatically after 3 seconds.',
    duration: 3000
  }
}`,...T.parameters?.docs?.source}}};const E=[`Default`,`Success`,`Warning`,`Error`,`WithAction`,`NonClosable`,`CustomWidth`,`WithoutDescription`,`AutoDismiss`];export{T as AutoDismiss,C as CustomWidth,_ as Default,b as Error,S as NonClosable,v as Success,y as Warning,x as WithAction,w as WithoutDescription,E as __namedExportsOrder,g as default};