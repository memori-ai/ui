import{j as e,R as r}from"./iframe-welL_Y03.js";import{C as g}from"./ConfirmDialog-DvBiKrIW.js";import{F as D}from"./decorators-CENxNqWh.js";import{B as y}from"./Button-CDDWBJSa.js";import"./preload-helper-Ct5FWWRu.js";import"./Modal-DVBphWHg.js";import"./index-BFu-4PJz.js";import"./Spin-Bldrzj7R.js";import"./loader-circle-DyaS_Vrp.js";import"./createLucideIcon-BOPdVp22.js";import"./useStableId-CAlA3-bx.js";import"./useTranslation-CzbaMplr.js";import"./index-D77dsTa6.js";import"./x-DbDPxtEH.js";import"./DialogRoot-ZSKToqB9.js";import"./useRenderElement-BsYNz85m.js";import"./FloatingRootStore-CHZ76bOK.js";import"./useOpenChangeComplete-B8oq_RqC.js";import"./useStableCallback-BmsFBrCP.js";import"./index-CLv6_fCs.js";import"./index-DrBWIv9O.js";import"./useOnMount-C-u17Km0.js";import"./floating-ui.utils.dom-C95aRAwF.js";import"./addEventListener-C7Nm7Zds.js";import"./constants-3lpsu0Po.js";import"./index-BiXAPOqp.js";import"./shadowDom-C7-QBKxN.js";import"./constants-B1v3gF3O.js";import"./visuallyHidden-BI2aS7uD.js";import"./useId-CoJK8Gi1.js";import"./composite-9T5Ts5cl.js";import"./useBaseUiId-Bw28qrdv.js";import"./useTimeout-DlB3jOiB.js";import"./useTransitionStatus-nxPEYtLr.js";import"./useButton-DsWz-oUq.js";import"./composite-BZTvdP9J.js";import"./InternalBackdrop-BEB37GIB.js";import"./useValueAsRef-e6pjvu4b.js";import"./inertValue-DC14xXHo.js";import"./store-1PKoZ4Ak.js";const{expect:b,userEvent:T,within:w}=__STORYBOOK_MODULE_TEST__,ue={title:"Overlay/ConfirmDialog",component:g,tags:["autodocs"],argTypes:{isOpen:{control:{type:"boolean"}},title:{control:{type:"text"}},message:{control:{type:"text"}},confirmText:{control:{type:"text"}},cancelText:{control:{type:"text"}},loading:{control:"boolean",description:"Disables actions and shows loading on confirm"},container:{table:{disable:!0}},theme:{control:"inline-radio",options:["light","dark"]}},parameters:{controls:{expanded:!0}}},s={args:{isOpen:!1,onClose:()=>{},onConfirm:()=>{},title:"Confirm Action",message:"Are you sure you want to proceed with this action?",confirmText:"Confirm",cancelText:"Cancel"}},a={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Confirm Action",message:"Are you sure you want to proceed with this action?",confirmText:"Confirm",cancelText:"Cancel"}},i={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Delete Item",message:"Are you sure you want to proceed with this action?",confirmText:"Confirm",cancelText:"Cancel"}},c={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Confirm Action",message:"This action cannot be undone. All associated data will be permanently deleted from the system.",confirmText:"Confirm",cancelText:"Cancel"}},l={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Delete Item",message:"Are you sure you want to delete this item? This action cannot be undone.",confirmText:"Yes, Delete",cancelText:"No, Keep It"}},O=t=>{const[o,n]=r.useState(!1),[C,x]=r.useState(!1),h=()=>{x(!0),n(!1),console.log("Item deleted!")};return e.jsxs(e.Fragment,{children:[C?e.jsx("div",{style:{padding:"12px",background:"#f8d7da",color:"#721c24",borderRadius:"4px",marginBottom:"20px"},children:"Item has been deleted successfully!"}):e.jsx(y,{onClick:()=>n(!0),children:"Delete Item"}),e.jsx(g,{...t,isOpen:o,onClose:()=>n(!1),onConfirm:h})]})},m={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Delete Item",message:"Are you sure you want to delete this item? This action cannot be undone.",confirmText:"Delete",cancelText:"Cancel"},render:t=>e.jsx(O,{...t})},I=t=>{const[o,n]=r.useState(!1),[C,x]=r.useState(!1),h=()=>{n(!0)},v=()=>{x(!0),n(!1),console.log("Navigated without saving!")};return e.jsxs(e.Fragment,{children:[C?e.jsx("div",{style:{padding:"12px",background:"#d4edda",color:"#155724",borderRadius:"4px",marginBottom:"20px"},children:"Navigated away without saving changes."}):e.jsxs("div",{children:[e.jsxs("div",{style:{padding:"20px",border:"1px solid #ddd",borderRadius:"4px",marginBottom:"20px"},children:[e.jsx("h3",{children:"Unsaved Form"}),e.jsx("p",{children:"This is a form with unsaved changes."}),e.jsx("input",{type:"text",placeholder:"Your name",style:{padding:"8px",marginBottom:"10px",width:"100%"}}),e.jsx("textarea",{placeholder:"Your message",style:{padding:"8px",width:"100%",height:"100px"}})]}),e.jsx(y,{onClick:h,children:"Navigate Away"})]}),e.jsx(g,{...t,isOpen:o,onClose:()=>n(!1),onConfirm:v})]})},p={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Unsaved Changes",message:"You have unsaved changes. Are you sure you want to leave without saving?",confirmText:"Leave",cancelText:"Stay"},render:t=>e.jsx(I,{...t})},d={args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Deleting…",message:"Please wait while the item is removed.",confirmText:"Delete",cancelText:"Cancel",loading:!0}},u={parameters:{layout:"fullscreen"},args:{isOpen:!0,onClose:()=>{},onConfirm:()=>{},title:"Clipped confirm",message:"Dialog portal targets the fixed surface.",confirmText:"Confirm",cancelText:"Cancel"},render:()=>{const[t,o]=r.useState(!0);return e.jsx(D,{children:n=>e.jsxs(e.Fragment,{children:[e.jsx(y,{onClick:()=>o(!0),children:"Open confirm"}),e.jsx(g,{isOpen:t,onClose:()=>o(!1),onConfirm:()=>o(!1),container:n,title:"Clipped confirm",message:"Dialog portal targets the fixed surface.",confirmText:"Confirm",cancelText:"Cancel"})]})})}},f={render:t=>e.jsx(O,{...t}),args:{isOpen:!1,onClose:()=>{},onConfirm:()=>{},title:"Delete Item",message:"Are you sure you want to delete this item?",confirmText:"Delete",cancelText:"Cancel"},play:async({canvasElement:t})=>{const o=w(t),n=w(t.ownerDocument.body);await T.click(o.getByRole("button",{name:/delete item/i})),await b(await n.findByRole("dialog")).toBeInTheDocument(),await T.keyboard("{Escape}")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Confirm Action',
    message: 'Are you sure you want to proceed with this action?',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Confirm Action',
    message: 'Are you sure you want to proceed with this action?',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Delete Item',
    message: 'Are you sure you want to proceed with this action?',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Confirm Action',
    message: 'This action cannot be undone. All associated data will be permanently deleted from the system.',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Delete Item',
    message: 'Are you sure you want to delete this item? This action cannot be undone.',
    confirmText: 'Yes, Delete',
    cancelText: 'No, Keep It'
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Deleting…',
    message: 'Please wait while the item is removed.',
    confirmText: 'Delete',
    cancelText: 'Cancel',
    loading: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Clipped confirm',
    message: 'Dialog portal targets the fixed surface.',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  },
  render: () => {
    const [isOpen, setIsOpen] = React.useState(true);
    return <FixedSurface>
        {surface => <>
            <Button onClick={() => setIsOpen(true)}>Open confirm</Button>
            <ConfirmDialog isOpen={isOpen} onClose={() => setIsOpen(false)} onConfirm={() => setIsOpen(false)} container={surface} title="Clipped confirm" message="Dialog portal targets the fixed surface." confirmText="Confirm" cancelText="Cancel" />
          </>}
      </FixedSurface>;
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <DeleteTemplate {...args} />,
  args: {
    isOpen: false,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Delete Item',
    message: 'Are you sure you want to delete this item?',
    confirmText: 'Delete',
    cancelText: 'Cancel'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', {
      name: /delete item/i
    }));
    await expect(await body.findByRole('dialog')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
  }
}`,...f.parameters?.docs?.source}}};const fe=["Default","Open","WithCustomTitle","WithCustomMessage","WithCustomButtonText","DeleteConfirmation","UnsavedChanges","Loading","InFixedSurface","OpenInteraction"];export{s as Default,m as DeleteConfirmation,u as InFixedSurface,d as Loading,a as Open,f as OpenInteraction,p as UnsavedChanges,l as WithCustomButtonText,c as WithCustomMessage,i as WithCustomTitle,fe as __namedExportsOrder,ue as default};
