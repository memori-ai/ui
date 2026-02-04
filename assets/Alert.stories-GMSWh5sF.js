import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as E}from"./iframe-uFAQNaKU.js";import{A as P,a as U,b as Y,u as k,c as I}from"./Alert-BE-230PJ.js";import{c as L}from"./createLucideIcon-i_t6GcoG.js";import{D as N,T as D}from"./trash-2-ajethSqW.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BOI9WHRR.js";import"./x-Vxv6f8d1.js";import"./useRenderElement-X2j9fBHf.js";import"./index-Zu4kpGmk.js";import"./index-Yd_vZcQE.js";import"./inertValue-BjipwndK.js";import"./useOpenChangeComplete-BoR3aiV_.js";import"./visuallyHidden-CbwUG2x5.js";import"./useId-TZycg8h4.js";import"./useButton-CqS4aFeb.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],O=L("bell",R);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],B=L("mail",_);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],z=L("undo-2",$),ie={title:"Feedback/Alert",component:P,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A toast notification component for displaying temporary messages to users."}}}},r=({severity:a="info",title:c="Notification",description:o,closable:l=!0,showIcon:p=!0,duration:n,icon:s,action:i,buttonLabel:d="Show Alert"})=>{const T=k(),M=()=>{T.add(I({title:c,description:o,severity:a,closable:l,showIcon:p,duration:n,icon:s,action:i}))};return e.jsx("button",{onClick:M,style:{padding:"12px 24px",fontSize:"14px",fontWeight:500,color:"white",backgroundColor:"var(--memori-primary)",border:"none",borderRadius:"var(--memori-radius-selector)",cursor:"pointer"},children:d})},t=({children:a,placement:c="top-end",defaultDuration:o=5e3})=>e.jsxs(U,{defaultDuration:o,children:[a,e.jsx(Y,{placement:c})]}),m={render:()=>e.jsx(t,{children:e.jsx(r,{title:"Information",description:"This is an informative alert message."})})},u={render:()=>e.jsx(t,{children:e.jsx(r,{severity:"success",title:"Success!",description:"Your changes have been saved successfully.",buttonLabel:"Show Success"})})},g={render:()=>e.jsx(t,{children:e.jsx(r,{severity:"warning",title:"Warning",description:"Please review this important information before proceeding.",buttonLabel:"Show Warning"})})},h={render:()=>e.jsx(t,{children:e.jsx(r,{severity:"error",title:"Error",description:"An error occurred while processing your request. Please try again.",buttonLabel:"Show Error"})})},y={render:()=>e.jsx(t,{children:e.jsx(r,{severity:"info",title:"Update Available",description:"A new version is available for download.",action:e.jsx("button",{onClick:()=>console.log("Action clicked"),style:{padding:"6px 12px",fontSize:"13px",fontWeight:500,color:"var(--memori-primary)",backgroundColor:"transparent",border:"1px solid var(--memori-primary)",borderRadius:"var(--memori-radius-selector)",cursor:"pointer"},children:"Update"}),buttonLabel:"Show with Action"})})},b={render:()=>e.jsx(t,{children:e.jsx(r,{severity:"success",title:"Item Deleted",description:"The item has been moved to trash.",action:e.jsxs("button",{onClick:()=>console.log("Undo clicked"),style:{display:"flex",alignItems:"center",gap:"6px",padding:"6px 12px",fontSize:"13px",fontWeight:500,color:"var(--memori-success)",backgroundColor:"transparent",border:"none",cursor:"pointer"},children:[e.jsx(z,{size:14}),"Undo"]}),buttonLabel:"Delete Item"})})},x={render:()=>e.jsx(t,{children:e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(r,{severity:"info",title:"New Message",description:"You have received a new message.",icon:e.jsx(B,{size:20}),buttonLabel:"Message Alert"}),e.jsx(r,{severity:"info",title:"New Notification",description:"You have 3 new notifications.",icon:e.jsx(O,{size:20}),buttonLabel:"Notification Alert"}),e.jsx(r,{severity:"info",title:"Download Complete",description:"Your file has been downloaded.",icon:e.jsx(N,{size:20}),buttonLabel:"Download Alert"})]})})},f={render:()=>e.jsx(t,{children:e.jsx(r,{severity:"info",description:"Your session will expire in 5 minutes.",buttonLabel:"Show Description Only"})})},v={render:()=>e.jsx(t,{defaultDuration:0,children:e.jsx(r,{severity:"error",title:"Connection Lost",description:"Please check your internet connection and try again.",duration:0,buttonLabel:"Show Persistent"})})},S={render:()=>e.jsx(t,{placement:"top-start",children:e.jsx(r,{title:"Top Start",description:"This alert appears at the top-start position.",buttonLabel:"Top Start"})})},w={render:()=>e.jsx(t,{placement:"top-center",children:e.jsx(r,{title:"Top Center",description:"This alert appears at the top-center position.",buttonLabel:"Top Center"})})},A={render:()=>e.jsx(t,{placement:"bottom-end",children:e.jsx(r,{title:"Bottom End",description:"This alert appears at the bottom-end position.",buttonLabel:"Bottom End"})})},j={render:()=>{const a=()=>{const c=k(),o=()=>{const l=["info","success","warning","error"],p=[{title:"Info",description:"This is an info message."},{title:"Success",description:"Operation completed!"},{title:"Warning",description:"Please be careful."},{title:"Error",description:"Something went wrong."}];l.forEach((n,s)=>{const i=p[s];i&&setTimeout(()=>{c.add(I({severity:n,title:i.title,description:i.description}))},s*300)})};return e.jsx("button",{onClick:o,style:{padding:"12px 24px",fontSize:"14px",fontWeight:500,color:"white",backgroundColor:"var(--memori-primary)",border:"none",borderRadius:"var(--memori-radius-selector)",cursor:"pointer"},children:"Show Multiple Alerts"})};return e.jsx(t,{children:e.jsx(a,{})})}},W={render:()=>e.jsx(t,{children:e.jsx(r,{severity:"info",title:"Important Update About Your Account",description:"We have updated our privacy policy and terms of service. Please review the changes carefully as they affect how we handle your data. You can find the full document in your account settings.",buttonLabel:"Show Long Content"})})},C={render:()=>{const a=()=>{const c=k(),[o,l]=E.useState(["Item 1","Item 2","Item 3"]),p=(n,s)=>{const i=o.filter((d,T)=>T!==s);l(i),c.add(I({severity:"success",title:`"${n}" deleted`,icon:e.jsx(D,{size:20}),duration:6e3,action:e.jsxs("button",{onClick:()=>{const d=[...i];d.splice(s,0,n),l(d)},style:{display:"flex",alignItems:"center",gap:"4px",padding:"4px 10px",fontSize:"12px",fontWeight:500,color:"var(--memori-success)",backgroundColor:"transparent",border:"none",cursor:"pointer"},children:[e.jsx(z,{size:14}),"Undo"]})}))};return e.jsxs("div",{style:{minWidth:"200px"},children:[e.jsxs("h4",{style:{margin:"0 0 12px 0",fontSize:"14px"},children:["Your Items (",o.length,")"]}),e.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"8px"},children:o.map((n,s)=>e.jsxs("li",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",backgroundColor:"var(--memori-primary-subtle)",borderRadius:"var(--memori-radius-box)"},children:[n,e.jsx("button",{onClick:()=>p(n,s),style:{display:"flex",alignItems:"center",justifyContent:"center",width:"28px",height:"28px",padding:0,backgroundColor:"transparent",border:"none",borderRadius:"var(--memori-radius-box)",color:"var(--memori-error)",cursor:"pointer"},"aria-label":`Delete ${n}`,children:e.jsx(D,{size:16})})]},n))}),o.length===0&&e.jsx("p",{style:{color:"var(--memori-neutral)",fontSize:"14px"},children:"No items remaining"})]})};return e.jsx(t,{children:e.jsx(a,{})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <StoryWrapper>
      <AlertTrigger title="Information" description="This is an informative alert message." />
    </StoryWrapper>
}`,...m.parameters?.docs?.source},description:{story:"Default alert with info severity",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <StoryWrapper>
      <AlertTrigger severity="success" title="Success!" description="Your changes have been saved successfully." buttonLabel="Show Success" />
    </StoryWrapper>
}`,...u.parameters?.docs?.source},description:{story:"Success alert for positive feedback",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <StoryWrapper>
      <AlertTrigger severity="warning" title="Warning" description="Please review this important information before proceeding." buttonLabel="Show Warning" />
    </StoryWrapper>
}`,...g.parameters?.docs?.source},description:{story:"Warning alert for cautionary messages",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <StoryWrapper>
      <AlertTrigger severity="error" title="Error" description="An error occurred while processing your request. Please try again." buttonLabel="Show Error" />
    </StoryWrapper>
}`,...h.parameters?.docs?.source},description:{story:"Error alert for critical issues",...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <StoryWrapper>
      <AlertTrigger severity="info" title="Update Available" description="A new version is available for download." action={<button onClick={() => console.log('Action clicked')} style={{
      padding: '6px 12px',
      fontSize: '13px',
      fontWeight: 500,
      color: 'var(--memori-primary)',
      backgroundColor: 'transparent',
      border: '1px solid var(--memori-primary)',
      borderRadius: 'var(--memori-radius-selector)',
      cursor: 'pointer'
    }}>
            Update
          </button>} buttonLabel="Show with Action" />
    </StoryWrapper>
}`,...y.parameters?.docs?.source},description:{story:"Alert with a custom action button",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <StoryWrapper>
      <AlertTrigger severity="success" title="Item Deleted" description="The item has been moved to trash." action={<button onClick={() => console.log('Undo clicked')} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '6px 12px',
      fontSize: '13px',
      fontWeight: 500,
      color: 'var(--memori-success)',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer'
    }}>
            <Undo2 size={14} />
            Undo
          </button>} buttonLabel="Delete Item" />
    </StoryWrapper>
}`,...b.parameters?.docs?.source},description:{story:"Alert with an undo action",...b.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <StoryWrapper>
      <div style={{
      display: 'flex',
      gap: '12px'
    }}>
        <AlertTrigger severity="info" title="New Message" description="You have received a new message." icon={<Mail size={20} />} buttonLabel="Message Alert" />
        <AlertTrigger severity="info" title="New Notification" description="You have 3 new notifications." icon={<Bell size={20} />} buttonLabel="Notification Alert" />
        <AlertTrigger severity="info" title="Download Complete" description="Your file has been downloaded." icon={<Download size={20} />} buttonLabel="Download Alert" />
      </div>
    </StoryWrapper>
}`,...x.parameters?.docs?.source},description:{story:"Alert with custom icon",...x.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <StoryWrapper>
      <AlertTrigger severity="info" description="Your session will expire in 5 minutes." buttonLabel="Show Description Only" />
    </StoryWrapper>
}`,...f.parameters?.docs?.source},description:{story:"Alert with only description (no title)",...f.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <StoryWrapper defaultDuration={0}>
      <AlertTrigger severity="error" title="Connection Lost" description="Please check your internet connection and try again." duration={0} buttonLabel="Show Persistent" />
    </StoryWrapper>
}`,...v.parameters?.docs?.source},description:{story:"Persistent alert that doesn't auto-dismiss",...v.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <StoryWrapper placement="top-start">
      <AlertTrigger title="Top Start" description="This alert appears at the top-start position." buttonLabel="Top Start" />
    </StoryWrapper>
}`,...S.parameters?.docs?.source},description:{story:"Alert placement at top-start",...S.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <StoryWrapper placement="top-center">
      <AlertTrigger title="Top Center" description="This alert appears at the top-center position." buttonLabel="Top Center" />
    </StoryWrapper>
}`,...w.parameters?.docs?.source},description:{story:"Alert placement at top-center",...w.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <StoryWrapper placement="bottom-end">
      <AlertTrigger title="Bottom End" description="This alert appears at the bottom-end position." buttonLabel="Bottom End" />
    </StoryWrapper>
}`,...A.parameters?.docs?.source},description:{story:"Alert placement at bottom-end",...A.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const MultipleAlertsTrigger = () => {
      const alertManager = useAlertManager();
      const handleClick = () => {
        const severities: AlertSeverity[] = ['info', 'success', 'warning', 'error'];
        const messages = [{
          title: 'Info',
          description: 'This is an info message.'
        }, {
          title: 'Success',
          description: 'Operation completed!'
        }, {
          title: 'Warning',
          description: 'Please be careful.'
        }, {
          title: 'Error',
          description: 'Something went wrong.'
        }];
        severities.forEach((severity, index) => {
          const message = messages[index];
          if (!message) return;
          setTimeout(() => {
            alertManager.add(createAlertOptions({
              severity,
              title: message.title,
              description: message.description
            }));
          }, index * 300);
        });
      };
      return <button onClick={handleClick} style={{
        padding: '12px 24px',
        fontSize: '14px',
        fontWeight: 500,
        color: 'white',
        backgroundColor: 'var(--memori-primary)',
        border: 'none',
        borderRadius: 'var(--memori-radius-selector)',
        cursor: 'pointer'
      }}>
          Show Multiple Alerts
        </button>;
    };
    return <StoryWrapper>
        <MultipleAlertsTrigger />
      </StoryWrapper>;
  }
}`,...j.parameters?.docs?.source},description:{story:"Multiple alerts stacking",...j.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <StoryWrapper>
      <AlertTrigger severity="info" title="Important Update About Your Account" description="We have updated our privacy policy and terms of service. Please review the changes carefully as they affect how we handle your data. You can find the full document in your account settings." buttonLabel="Show Long Content" />
    </StoryWrapper>
}`,...W.parameters?.docs?.source},description:{story:"Long content alert",...W.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const DeleteExample = () => {
      const alertManager = useAlertManager();
      const [items, setItems] = React.useState(['Item 1', 'Item 2', 'Item 3']);
      const handleDelete = (item: string, index: number) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
        alertManager.add(createAlertOptions({
          severity: 'success',
          title: \`"\${item}" deleted\`,
          icon: <Trash2 size={20} />,
          duration: 6000,
          action: <button onClick={() => {
            // Restore the item
            const restored = [...newItems];
            restored.splice(index, 0, item);
            setItems(restored);
          }} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 10px',
            fontSize: '12px',
            fontWeight: 500,
            color: 'var(--memori-success)',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer'
          }}>
                <Undo2 size={14} />
                Undo
              </button>
        }));
      };
      return <div style={{
        minWidth: '200px'
      }}>
          <h4 style={{
          margin: '0 0 12px 0',
          fontSize: '14px'
        }}>
            Your Items ({items.length})
          </h4>
          <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
            {items.map((item, index) => <li key={item} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '8px 12px',
            backgroundColor: 'var(--memori-primary-subtle)',
            borderRadius: 'var(--memori-radius-box)'
          }}>
                {item}
                <button onClick={() => handleDelete(item, index)} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '28px',
              height: '28px',
              padding: 0,
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: 'var(--memori-radius-box)',
              color: 'var(--memori-error)',
              cursor: 'pointer'
            }} aria-label={\`Delete \${item}\`}>
                  <Trash2 size={16} />
                </button>
              </li>)}
          </ul>
          {items.length === 0 && <p style={{
          color: 'var(--memori-neutral)',
          fontSize: '14px'
        }}>
              No items remaining
            </p>}
        </div>;
    };
    return <StoryWrapper>
        <DeleteExample />
      </StoryWrapper>;
  }
}`,...C.parameters?.docs?.source},description:{story:"Real-world example: Delete with undo",...C.parameters?.docs?.description}}};const ae=["Default","Success","Warning","Error","WithAction","WithUndoAction","CustomIcon","DescriptionOnly","Persistent","PlacementTopStart","PlacementTopCenter","PlacementBottomEnd","MultipleAlerts","LongContent","DeleteWithUndo"];export{x as CustomIcon,m as Default,C as DeleteWithUndo,f as DescriptionOnly,h as Error,W as LongContent,j as MultipleAlerts,v as Persistent,A as PlacementBottomEnd,w as PlacementTopCenter,S as PlacementTopStart,u as Success,g as Warning,y as WithAction,b as WithUndoAction,ae as __namedExportsOrder,ie as default};
