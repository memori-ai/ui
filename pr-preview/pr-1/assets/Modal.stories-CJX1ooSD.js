import{i as e,w as t}from"./iframe-BzprLN2E.js";import"./react-dom-233ptJIc.js";import{t as n}from"./jsx-runtime-DqxaB3QT.js";import"./shim-BJATqwVy.js";import"./floating-ui.utils.dom-CMQ-BUtD.js";import"./floating-ui.react-dom-C3fzlAfU.js";import{t as r}from"./classnames-RvC9G2Pp.js";import"./createLucideIcon-6Ki3NmCX.js";import{t as i}from"./Spin-DtfSI6XV.js";import{t as a}from"./x-Ccl7m3ix.js";import{t as o}from"./useRenderElement-a3bMExwF.js";import"./useButton-BTbYci29.js";import{t as s}from"./Button-C9zRDzxl.js";import"./Button-DJlKJpMK.js";import"./useId-4HMKhcJa.js";import{t as c}from"./useBaseUiId-MLXKCGiE.js";import{a as l}from"./visuallyHidden-BRI6DJan.js";import{a as u,c as d,i as f,l as p,n as m,o as h,r as g,s as _,t as v}from"./DialogRoot-DP6xPUqk.js";var y=t(e());const b=y.forwardRef(function(e,t){let{render:n,className:r,id:i,...a}=e,{store:s}=p(),l=c(i);return s.useSyncedValueWithCleanup(`descriptionElementId`,l),o(`p`,e,{ref:t,props:[{id:l},a]})}),x=y.forwardRef(function(e,t){let{render:n,className:r,id:i,...a}=e,{store:s}=p(),l=c(i);return s.useSyncedValueWithCleanup(`titleElementId`,l),o(`h2`,e,{ref:t,props:[{id:l},a]})});let S=function(e){return e[e.open=_.open]=`open`,e[e.closed=_.closed]=`closed`,e[e.startingStyle=_.startingStyle]=`startingStyle`,e[e.endingStyle=_.endingStyle]=`endingStyle`,e.nested=`data-nested`,e.nestedDialogOpen=`data-nested-dialog-open`,e}({});var C={...d,...l,nested(e){return e?{[S.nested]:``}:null},nestedDialogOpen(e){return e?{[S.nestedDialogOpen]:``}:null}};const w=y.forwardRef(function(e,t){let{className:n,render:r,children:i,...a}=e,s=f(),{store:c}=p(),l=c.useState(`open`),u=c.useState(`nested`),d=c.useState(`transitionStatus`),m=c.useState(`nestedOpenDialogCount`),h=c.useState(`mounted`),g=m>0,_=y.useMemo(()=>({open:l,nested:u,transitionStatus:d,nestedDialogOpen:g}),[l,u,d,g]);return o(`div`,e,{enabled:s||h,state:_,ref:[t,c.useStateSetter(`viewportElement`)],stateAttributesMapping:C,props:[{role:`presentation`,hidden:!h,children:i},a]})});var T=t(r(),1),E={backdrop:`_backdrop_mo9hv_5`,viewport:`_viewport_mo9hv_20`,centered:`_centered_mo9hv_28`,popup:`_popup_mo9hv_39`,"popup--sm":`_popup--sm_mo9hv_62`,"popup--md":`_popup--md_mo9hv_67`,"popup--lg":`_popup--lg_mo9hv_72`,"popup--xl":`_popup--xl_mo9hv_77`,"popup--full":`_popup--full_mo9hv_82`,closeButton:`_closeButton_mo9hv_119`,title:`_title_mo9hv_157`,description:`_description_mo9hv_169`,content:`_content_mo9hv_181`,footer:`_footer_mo9hv_192`},D=n();const O=y.forwardRef(({open:e=!1,onOpenChange:t,title:n,description:r,children:o,footer:s,loading:c=!1,closable:l=!0,closeOnOverlayClick:d=!0,closeOnEsc:f=!0,size:p=`md`,width:_,widthMd:S,widthLg:C,centered:O=!0,modal:k=!0,disablePointerDismissal:A,initialFocus:j,finalFocus:M,onAfterOpen:N,onAfterClose:P,className:F,backdropClassName:I,contentClassName:L,titleClassName:R,descriptionClassName:z,footerClassName:B,style:V,contentStyle:H,id:U,"data-testid":W,"aria-label":G,"aria-labelledby":K,"aria-describedby":q,animated:J=!0,closeButton:Y,closeIcon:X,...Z},Q)=>{let $=y.useCallback((e,n)=>{!e&&!f&&n?.reason&&(n.reason===`escapeKey`||String(n.reason).includes(`escape`))||t?.(e)},[t,f]),ee=y.useCallback(e=>{e?N?.():P?.()},[N,P]),te=A===void 0?!d:A,ne={..._&&{maxWidth:typeof _==`number`?`${_}px`:_},...S&&{"--modal-width-md":typeof S==`number`?`${S}px`:S},...C&&{"--modal-width-lg":typeof C==`number`?`${C}px`:C},...H},re=p===`sm`?E[`popup--sm`]:p===`md`?E[`popup--md`]:p===`lg`?E[`popup--lg`]:p===`xl`?E[`popup--xl`]:p===`full`?E[`popup--full`]:void 0,ie=(0,T.default)(E.popup,re,L);return(0,D.jsx)(v,{open:e,onOpenChange:$,onOpenChangeComplete:ee,modal:k,disablePointerDismissal:te,...Z,children:(0,D.jsxs)(m,{children:[J&&(0,D.jsx)(h,{className:(0,T.default)(E.backdrop,I)}),(0,D.jsx)(w,{className:(0,T.default)(E.viewport,O&&E.centered,F),children:(0,D.jsxs)(g,{ref:Q,initialFocus:j,finalFocus:M,className:ie,style:ne,"data-testid":W,"aria-label":n?void 0:G,"aria-labelledby":n?void 0:K,"aria-describedby":r?void 0:q,...S&&{"data-width-md":``},...C&&{"data-width-lg":``},children:[l&&(Y?(0,D.jsx)(`div`,{className:E.closeButton,children:Y}):(0,D.jsx)(u,{className:E.closeButton,"aria-label":`Close modal`,children:X||(0,D.jsx)(a,{})})),(0,D.jsxs)(i,{spinning:c,children:[n&&(0,D.jsx)(x,{className:(0,T.default)(E.title,R),children:n}),r&&(0,D.jsx)(b,{className:(0,T.default)(E.description,z),children:r}),(0,D.jsx)(`div`,{className:E.content,children:o}),s&&(0,D.jsx)(`div`,{className:(0,T.default)(E.footer,B),children:s})]})]})})]})})});O.displayName=`Modal`;var k=O;O.__docgenInfo={description:``,methods:[],displayName:`Modal`,props:{open:{required:!1,tsType:{name:`boolean`},description:`Whether the modal is open
@default false`,defaultValue:{value:`false`,computed:!1}},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:`Callback fired when the modal requests to close
@param open - The new open state`},title:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Modal title displayed at the top`},description:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Modal description/subtitle displayed below the title`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Main content of the modal`},footer:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Footer content (typically action buttons)`},loading:{required:!1,tsType:{name:`boolean`},description:`Shows a loading spinner and disables interaction
@default false`,defaultValue:{value:`false`,computed:!1}},closable:{required:!1,tsType:{name:`boolean`},description:`Whether to show the close button
@default true`,defaultValue:{value:`true`,computed:!1}},closeOnOverlayClick:{required:!1,tsType:{name:`boolean`},description:`Whether clicking the backdrop should close the modal
@default true`,defaultValue:{value:`true`,computed:!1}},closeOnEsc:{required:!1,tsType:{name:`boolean`},description:`Whether pressing Escape should close the modal
@default true`,defaultValue:{value:`true`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg' | 'xl' | 'full'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'xl'`},{name:`literal`,value:`'full'`}]},description:`Modal size variant
@default 'md'`,defaultValue:{value:`'md'`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Custom width (overrides size)
Applied on mobile and up`},widthMd:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Custom width for medium screens and up (≥768px)`},widthLg:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Custom width for large screens and up (≥1024px)`},centered:{required:!1,tsType:{name:`boolean`},description:`Whether the modal is centered vertically and horizontally
@default true`,defaultValue:{value:`true`,computed:!1}},modal:{required:!1,tsType:{name:`union`,raw:`boolean | 'trap-focus'`,elements:[{name:`boolean`},{name:`literal`,value:`'trap-focus'`}]},description:"Determines if the dialog enters a modal state when open\n- `true`: user interaction is limited to just the dialog\n- `false`: user interaction with the rest of the document is allowed\n- `'trap-focus'`: focus is trapped but scroll and pointer interactions remain enabled\n@default true",defaultValue:{value:`true`,computed:!1}},disablePointerDismissal:{required:!1,tsType:{name:`boolean`},description:`Determines whether the dialog should close on outside clicks
Alias for \`!closeOnOverlayClick\`
@default false`},initialFocus:{required:!1,tsType:{name:`union`,raw:`| boolean
| React.RefObject<HTMLElement | null>
| ((openType: InteractionType) => boolean | HTMLElement | null | void)`,elements:[{name:`boolean`},{name:`ReactRefObject`,raw:`React.RefObject<HTMLElement | null>`,elements:[{name:`union`,raw:`HTMLElement | null`,elements:[{name:`HTMLElement`},{name:`null`}]}]},{name:`unknown`}]},description:"Element to focus when the dialog opens\n- `false`: Do not move focus\n- `true`: Move focus based on default behavior\n- `RefObject`: Move focus to the ref element\n- `function`: Called with interaction type, return element to focus"},finalFocus:{required:!1,tsType:{name:`union`,raw:`| boolean
| React.RefObject<HTMLElement | null>
| ((closeType: InteractionType) => boolean | HTMLElement | null | void)`,elements:[{name:`boolean`},{name:`ReactRefObject`,raw:`React.RefObject<HTMLElement | null>`,elements:[{name:`union`,raw:`HTMLElement | null`,elements:[{name:`HTMLElement`},{name:`null`}]}]},{name:`unknown`}]},description:"Element to focus when the dialog closes\n- `false`: Do not move focus\n- `true`: Move focus based on default behavior (trigger or previously focused element)\n- `RefObject`: Move focus to the ref element\n- `function`: Called with interaction type, return element to focus"},onAfterOpen:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback fired after the modal has opened (after animations)`},onAfterClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback fired after the modal has closed (after animations)`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class name for the root container`},backdropClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS class name for the backdrop`},contentClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS class name for the popup/content container`},titleClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS class name for the title`},descriptionClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS class name for the description`},footerClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS class name for the footer`},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Inline styles for the root container`},contentStyle:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Inline styles for the popup/content container`},id:{required:!1,tsType:{name:`string`},description:`Unique identifier for the modal`},"data-testid":{required:!1,tsType:{name:`string`},description:`Test ID for testing frameworks`},"aria-label":{required:!1,tsType:{name:`string`},description:`ARIA label for the modal (if title is not provided)`},"aria-labelledby":{required:!1,tsType:{name:`string`},description:`ID of the element that labels the modal
Automatically set by DialogTitle, but can be overridden`},"aria-describedby":{required:!1,tsType:{name:`string`},description:`ID of the element that describes the modal
Automatically set by DialogDescription, but can be overridden`},animated:{required:!1,tsType:{name:`boolean`},description:`Whether the modal should be animated
@default true`,defaultValue:{value:`true`,computed:!1}},closeButton:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Custom close button component
If provided, replaces the default close button`},closeIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Custom close icon
If provided, replaces the default X icon`}},composes:[`Omit`]};var A={title:`Components/Modal`,component:k,tags:[],argTypes:{title:{control:{type:`text`}},description:{control:{type:`text`}},loading:{control:{type:`boolean`}},closable:{control:{type:`boolean`}},closeOnOverlayClick:{control:{type:`boolean`}},closeOnEsc:{control:{type:`boolean`}},size:{control:{type:`select`},options:[`sm`,`md`,`lg`,`xl`,`full`]},centered:{control:{type:`boolean`}},animated:{control:{type:`boolean`}},className:{control:{type:`text`}}},parameters:{controls:{expanded:!0}},render:e=>{let[t,n]=y.useState(!!e.open||!1);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(s,{onClick:()=>n(!0),children:`Open Modal`}),(0,D.jsx)(k,{...e,open:t,onOpenChange:t=>{n(t),e.onOpenChange?.(t)}})]})}},j=(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}),(0,D.jsx)(`h3`,{children:`Suspendisse a sodales nulla, sed semper nisi.`}),(0,D.jsx)(`p`,{children:`Proin tincidunt enim in felis aliquet, a ultricies purus bibendum.`}),(0,D.jsxs)(`ul`,{children:[(0,D.jsx)(`li`,{children:`Quisque in ultrices lectus.`}),(0,D.jsx)(`li`,{children:`Quisque in ultrices lectus.`}),(0,D.jsx)(`li`,{children:`Quisque in ultrices lectus.`})]}),(0,D.jsx)(`p`,{children:`Nulla at urna diam.`})]}),M=(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(s,{variant:`primary`,children:`OK`}),(0,D.jsx)(s,{children:`Cancel`})]}),N=(0,D.jsx)(s,{variant:`primary`,children:`OK`});const P={args:{open:!1,closable:!0,onOpenChange:()=>{}}},F={args:{open:!0,closable:!0,onOpenChange:()=>{}}},I={args:{open:!0,closable:!0,onOpenChange:()=>{},title:`Modal Title`}},L={args:{open:!0,closable:!0,onOpenChange:()=>{},title:`Modal Title`,description:`Modal Description`}},R={args:{open:!0,closable:!0,onOpenChange:()=>{},title:`Modal Title`,description:`Modal Description`,loading:!0}},z={args:{open:!0,closable:!0,onOpenChange:()=>{},title:`Modal Title`,description:`Modal Description`,footer:M}},B={args:{open:!0,closable:!1,onOpenChange:()=>{},title:`Modal Title`,description:`Modal Description`,footer:N}},V={args:{open:!0,closable:!0,onOpenChange:()=>{},title:`Modal Title`,description:`Modal Description`,footer:M},render:e=>{let[t,n]=y.useState(!!e.open||!1);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(s,{onClick:()=>n(!0),children:`Open Modal`}),(0,D.jsxs)(k,{...e,open:t,onOpenChange:t=>{n(t),e.onOpenChange?.(t)},children:[j,j,j,j,j]})]})}},H={render:()=>{let[e,t]=y.useState(null);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`},children:[(0,D.jsx)(s,{onClick:()=>t(`sm`),children:`Small`}),(0,D.jsx)(s,{onClick:()=>t(`md`),children:`Medium`}),(0,D.jsx)(s,{onClick:()=>t(`lg`),children:`Large`}),(0,D.jsx)(s,{onClick:()=>t(`xl`),children:`Extra Large`}),(0,D.jsx)(s,{onClick:()=>t(`full`),children:`Full Width`})]}),e&&(0,D.jsx)(k,{open:!0,onOpenChange:()=>t(null),title:`${e.toUpperCase()} Modal`,size:e,children:(0,D.jsxs)(`p`,{children:[`This is a `,e,` sized modal.`]})})]})}},U={args:{open:!0,closable:!0,onOpenChange:()=>{},title:`Custom Width Modal`,width:`90%`,widthMd:`600px`,widthLg:`800px`}},W={args:{open:!0,closable:!0,onOpenChange:()=>{},title:`Lifecycle Callbacks`,onAfterOpen:()=>{console.log(`Modal opened!`)},onAfterClose:()=>{console.log(`Modal closed!`)}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    closable: true,
    onOpenChange: () => {}
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {}
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    loading: true
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    footer
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: false,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    footer: footerNonClosableModal
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    footer
  },
  render: (args: ModalProps) => {
    const [isOpen, setIsOpen] = React.useState(!!args.open || false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal {...args} open={isOpen} onOpenChange={open => {
        setIsOpen(open);
        args.onOpenChange?.(open);
      }}>
          {content}
          {content}
          {content}
          {content}
          {content}
        </Modal>
      </>;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openSize, setOpenSize] = React.useState<'sm' | 'md' | 'lg' | 'xl' | 'full' | null>(null);
    return <>
        <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap'
      }}>
          <Button onClick={() => setOpenSize('sm')}>Small</Button>
          <Button onClick={() => setOpenSize('md')}>Medium</Button>
          <Button onClick={() => setOpenSize('lg')}>Large</Button>
          <Button onClick={() => setOpenSize('xl')}>Extra Large</Button>
          <Button onClick={() => setOpenSize('full')}>Full Width</Button>
        </div>
        {openSize && <Modal open={true} onOpenChange={() => setOpenSize(null)} title={\`\${openSize.toUpperCase()} Modal\`} size={openSize}>
            <p>This is a {openSize} sized modal.</p>
          </Modal>}
      </>;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Custom Width Modal',
    width: '90%',
    widthMd: '600px',
    widthLg: '800px'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Lifecycle Callbacks',
    onAfterOpen: () => {
      console.log('Modal opened!');
    },
    onAfterClose: () => {
      console.log('Modal closed!');
    }
  }
}`,...W.parameters?.docs?.source}}};const G=[`Default`,`Open`,`WithTitle`,`WithTitleAndDescription`,`Loading`,`WithFooter`,`NonClosable`,`WithALotOfContent`,`SizeVariants`,`CustomWidths`,`LifecycleCallbacks`];export{U as CustomWidths,P as Default,W as LifecycleCallbacks,R as Loading,B as NonClosable,F as Open,H as SizeVariants,V as WithALotOfContent,z as WithFooter,I as WithTitle,L as WithTitleAndDescription,G as __namedExportsOrder,A as default};