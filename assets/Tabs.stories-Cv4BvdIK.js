import{j as e,R as h}from"./iframe-dIQ7bXS9.js";import{T as a,U as m,A as T}from"./Tabs-C5IH9oFC.js";import{c}from"./createLucideIcon-iXCOnvW_.js";import{L as p}from"./layout-grid-Db8kkNRd.js";import{F as v}from"./file-text-CUoA1Z4N.js";import{S as x}from"./settings-DpiCPp9f.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DAC9qRlk.js";import"./useControlled-DbA9sIq-.js";import"./useRenderElement-BTl_khHM.js";import"./useStableCallback-C6i8wFRs.js";import"./useCompositeListItem-CwA6NjBY.js";import"./DirectionContext-B2EhYFsY.js";import"./event-BggRprRz.js";import"./element-BGnTlyAk.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./CompositeRoot-CB0ALyQJ.js";import"./composite-D3kou_rz.js";import"./useButton-D2NgSzQ3.js";import"./owner-CvMgaIeV.js";import"./useBaseUiId-BlZ3QajR.js";import"./useId-DVSx0zRu.js";import"./useCompositeItem-CUkn0ypG.js";import"./useOnMount-CUD15mrL.js";import"./getCssDimensions-BtR2mgpY.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],k=c("calendar-days",j);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]],y=c("circle-arrow-down",g);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]],M=c("clapperboard",P);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],_=c("music-2",w),Y={title:"Components/Tabs",component:a.Root,tags:["autodocs"],parameters:{controls:{expanded:!0},docs:{description:{component:"Built on `@base-ui/react/tabs`. Set **`variant`** on `Tabs.Root`: `segmented` (muted track + sliding white pill) or `underline` (baseline rule + thick marker). WAI-ARIA tabs (WCAG 2.1 AA+), roving focus, arrow keys. Controlled API: `value` / `onValueChange`. `Tabs.List` defaults `activateOnFocus` to `true`. `prefers-reduced-motion` disables non-essential animation."}}}},s={render:()=>e.jsx("div",{style:{maxWidth:"var(--memori-modal-size-md)",padding:"var(--memori-spacing-md)",borderRadius:"var(--memori-radius-surface)",backgroundColor:"var(--memori-secondary-background)",boxShadow:"var(--memori-shadow-sm)"},children:e.jsxs(a.Root,{variant:"underline",defaultValue:"assignee",children:[e.jsxs(a.List,{"aria-label":"Project views",children:[e.jsx(a.Tab,{value:"status",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(y,{"aria-hidden":"true",size:18,strokeWidth:2}),e.jsx("span",{children:"By Status"})]})}),e.jsx(a.Tab,{value:"assignee",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(m,{"aria-hidden":"true",size:18,strokeWidth:2}),e.jsx("span",{children:"By Assignee"})]})}),e.jsx(a.Tab,{value:"projects",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(p,{"aria-hidden":"true",size:18,strokeWidth:2}),e.jsx("span",{children:"All projects"})]})}),e.jsx(a.Tab,{value:"calendar",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(k,{"aria-hidden":"true",size:18,strokeWidth:2}),e.jsx("span",{children:"Calendar"})]})}),e.jsx(a.Indicator,{})]}),e.jsx(a.Panel,{value:"status",keepMounted:!0,children:e.jsx("p",{children:"Filter by status."})}),e.jsx(a.Panel,{value:"assignee",keepMounted:!0,children:e.jsx("p",{children:"Filter by assignee."})}),e.jsx(a.Panel,{value:"projects",keepMounted:!0,children:e.jsx("p",{children:"All projects."})}),e.jsx(a.Panel,{value:"calendar",keepMounted:!0,children:e.jsx("p",{children:"Calendar view."})})]})})},n={render:()=>e.jsxs(a.Root,{defaultValue:"music",children:[e.jsxs(a.List,{"aria-label":"Media type",children:[e.jsx(a.Tab,{value:"music",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(_,{"aria-hidden":"true",size:18,strokeWidth:2}),e.jsx("span",{children:"Music"})]})}),e.jsx(a.Tab,{value:"movies",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(M,{"aria-hidden":"true",size:18,strokeWidth:2}),e.jsx("span",{children:"Movies"})]})}),e.jsx(a.Tab,{value:"app",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(T,{"aria-hidden":"true",size:18,strokeWidth:2}),e.jsx("span",{children:"App"})]})}),e.jsx(a.Indicator,{})]}),e.jsx(a.Panel,{value:"music",keepMounted:!0,children:e.jsx("p",{children:"Music library and playlists."})}),e.jsx(a.Panel,{value:"movies",keepMounted:!0,children:e.jsx("p",{children:"Films and series."})}),e.jsx(a.Panel,{value:"app",keepMounted:!0,children:e.jsx("p",{children:"Application settings and data."})})]})},r={render:()=>e.jsxs(a.Root,{defaultValue:"account",children:[e.jsxs(a.List,{"aria-label":"Account settings",children:[e.jsx(a.Tab,{value:"account",children:"Account"}),e.jsx(a.Tab,{value:"password",children:"Password"}),e.jsx(a.Tab,{value:"notifications",children:"Notifications"}),e.jsx(a.Indicator,{})]}),e.jsx(a.Panel,{value:"account",keepMounted:!0,children:e.jsx("p",{children:"Manage your account details and email preferences."})}),e.jsx(a.Panel,{value:"password",keepMounted:!0,children:e.jsx("p",{children:"Change your password and security options."})}),e.jsx(a.Panel,{value:"notifications",keepMounted:!0,children:e.jsx("p",{children:"Choose how you receive updates."})})]})},t={render:()=>e.jsxs(a.Root,{defaultValue:"general",orientation:"vertical",children:[e.jsxs(a.List,{"aria-label":"Settings sections",children:[e.jsx(a.Tab,{value:"general",children:"General"}),e.jsx(a.Tab,{value:"privacy",children:"Privacy"}),e.jsx(a.Tab,{value:"billing",children:"Billing"}),e.jsx(a.Indicator,{})]}),e.jsx(a.Panel,{value:"general",keepMounted:!0,children:e.jsx("p",{children:"General application settings."})}),e.jsx(a.Panel,{value:"privacy",keepMounted:!0,children:e.jsx("p",{children:"Privacy and data controls."})}),e.jsx(a.Panel,{value:"billing",keepMounted:!0,children:e.jsx("p",{children:"Billing history and payment methods."})})]})},i={render:()=>e.jsxs(a.Root,{defaultValue:"one",children:[e.jsxs(a.List,{"aria-label":"Example with disabled tab",children:[e.jsx(a.Tab,{value:"one",children:"Enabled"}),e.jsx(a.Tab,{value:"two",disabled:!0,children:"Disabled"}),e.jsx(a.Tab,{value:"three",children:"Also enabled"}),e.jsx(a.Indicator,{})]}),e.jsx(a.Panel,{value:"one",keepMounted:!0,children:e.jsx("p",{children:"First panel."})}),e.jsx(a.Panel,{value:"two",keepMounted:!0,children:e.jsx("p",{children:"Second panel (not reachable when middle tab is disabled)."})}),e.jsx(a.Panel,{value:"three",keepMounted:!0,children:e.jsx("p",{children:"Third panel."})})]})},l={render:function(){const[u,b]=h.useState("alpha");return e.jsx("div",{children:e.jsxs(a.Root,{value:u,onValueChange:b,children:[e.jsxs(a.List,{"aria-label":"Controlled tabs",children:[e.jsx(a.Tab,{value:"alpha",children:"Alpha"}),e.jsx(a.Tab,{value:"beta",children:"Beta"}),e.jsx(a.Indicator,{})]}),e.jsx(a.Panel,{value:"alpha",keepMounted:!0,children:e.jsxs("p",{children:["Alpha content. Current value: ",String(u)]})}),e.jsx(a.Panel,{value:"beta",keepMounted:!0,children:e.jsx("p",{children:"Beta content."})})]})})}},o={render:()=>e.jsxs(a.Root,{defaultValue:"overview",children:[e.jsxs(a.List,{"aria-label":"Project areas",children:[e.jsx(a.Tab,{value:"overview",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(p,{"aria-hidden":"true",size:16,strokeWidth:2}),e.jsx("span",{children:"Overview"})]})}),e.jsx(a.Tab,{value:"documents",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(v,{"aria-hidden":"true",size:16,strokeWidth:2}),e.jsx("span",{children:"Documents"})]})}),e.jsx(a.Tab,{value:"settings",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(x,{"aria-hidden":"true",size:16,strokeWidth:2}),e.jsx("span",{children:"Settings"})]})}),e.jsx(a.Indicator,{})]}),e.jsx(a.Panel,{value:"overview",keepMounted:!0,children:e.jsx("p",{children:"Project overview."})}),e.jsx(a.Panel,{value:"documents",keepMounted:!0,children:e.jsx("p",{children:"Documents list."})}),e.jsx(a.Panel,{value:"settings",keepMounted:!0,children:e.jsx("p",{children:"Settings for this project."})})]})},d={render:()=>e.jsx("div",{style:{maxWidth:"calc(10 * var(--memori-spacing-md))"},children:e.jsxs(a.Root,{defaultValue:"short",children:[e.jsxs(a.List,{"aria-label":"Tabs with long labels",children:[e.jsx(a.Tab,{value:"short",children:"Short"}),e.jsx(a.Tab,{value:"long",title:"Very long label that should truncate in narrow layouts",children:e.jsx("span",{className:"memori-tabs__tab-label",children:"Very long label that should truncate in narrow layouts"})}),e.jsx(a.Indicator,{})]}),e.jsx(a.Panel,{value:"short",keepMounted:!0,children:e.jsx("p",{children:"Narrow container tests truncation on the tab list."})}),e.jsx(a.Panel,{value:"long",keepMounted:!0,children:e.jsx("p",{children:"Long label tab panel."})})]})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 'var(--memori-modal-size-md)',
    padding: 'var(--memori-spacing-md)',
    borderRadius: 'var(--memori-radius-surface)',
    backgroundColor: 'var(--memori-secondary-background)',
    boxShadow: 'var(--memori-shadow-sm)'
  }}>
      <Tabs.Root variant="underline" defaultValue="assignee">
        <Tabs.List aria-label="Project views">
          <Tabs.Tab value="status">
            <span className="memori-tabs__tab-inner">
              <ArrowDownCircle aria-hidden="true" size={18} strokeWidth={2} />
              <span>By Status</span>
            </span>
          </Tabs.Tab>
          <Tabs.Tab value="assignee">
            <span className="memori-tabs__tab-inner">
              <UserRound aria-hidden="true" size={18} strokeWidth={2} />
              <span>By Assignee</span>
            </span>
          </Tabs.Tab>
          <Tabs.Tab value="projects">
            <span className="memori-tabs__tab-inner">
              <LayoutGrid aria-hidden="true" size={18} strokeWidth={2} />
              <span>All projects</span>
            </span>
          </Tabs.Tab>
          <Tabs.Tab value="calendar">
            <span className="memori-tabs__tab-inner">
              <CalendarDays aria-hidden="true" size={18} strokeWidth={2} />
              <span>Calendar</span>
            </span>
          </Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Panel value="status" keepMounted>
          <p>Filter by status.</p>
        </Tabs.Panel>
        <Tabs.Panel value="assignee" keepMounted>
          <p>Filter by assignee.</p>
        </Tabs.Panel>
        <Tabs.Panel value="projects" keepMounted>
          <p>All projects.</p>
        </Tabs.Panel>
        <Tabs.Panel value="calendar" keepMounted>
          <p>Calendar view.</p>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs.Root defaultValue="music">
      <Tabs.List aria-label="Media type">
        <Tabs.Tab value="music">
          <span className="memori-tabs__tab-inner">
            <Music2 aria-hidden="true" size={18} strokeWidth={2} />
            <span>Music</span>
          </span>
        </Tabs.Tab>
        <Tabs.Tab value="movies">
          <span className="memori-tabs__tab-inner">
            <Clapperboard aria-hidden="true" size={18} strokeWidth={2} />
            <span>Movies</span>
          </span>
        </Tabs.Tab>
        <Tabs.Tab value="app">
          <span className="memori-tabs__tab-inner">
            <AppWindow aria-hidden="true" size={18} strokeWidth={2} />
            <span>App</span>
          </span>
        </Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel value="music" keepMounted>
        <p>Music library and playlists.</p>
      </Tabs.Panel>
      <Tabs.Panel value="movies" keepMounted>
        <p>Films and series.</p>
      </Tabs.Panel>
      <Tabs.Panel value="app" keepMounted>
        <p>Application settings and data.</p>
      </Tabs.Panel>
    </Tabs.Root>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs.Root defaultValue="account">
      <Tabs.List aria-label="Account settings">
        <Tabs.Tab value="account">Account</Tabs.Tab>
        <Tabs.Tab value="password">Password</Tabs.Tab>
        <Tabs.Tab value="notifications">Notifications</Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel value="account" keepMounted>
        <p>Manage your account details and email preferences.</p>
      </Tabs.Panel>
      <Tabs.Panel value="password" keepMounted>
        <p>Change your password and security options.</p>
      </Tabs.Panel>
      <Tabs.Panel value="notifications" keepMounted>
        <p>Choose how you receive updates.</p>
      </Tabs.Panel>
    </Tabs.Root>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs.Root defaultValue="general" orientation="vertical">
      <Tabs.List aria-label="Settings sections">
        <Tabs.Tab value="general">General</Tabs.Tab>
        <Tabs.Tab value="privacy">Privacy</Tabs.Tab>
        <Tabs.Tab value="billing">Billing</Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel value="general" keepMounted>
        <p>General application settings.</p>
      </Tabs.Panel>
      <Tabs.Panel value="privacy" keepMounted>
        <p>Privacy and data controls.</p>
      </Tabs.Panel>
      <Tabs.Panel value="billing" keepMounted>
        <p>Billing history and payment methods.</p>
      </Tabs.Panel>
    </Tabs.Root>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs.Root defaultValue="one">
      <Tabs.List aria-label="Example with disabled tab">
        <Tabs.Tab value="one">Enabled</Tabs.Tab>
        <Tabs.Tab value="two" disabled>
          Disabled
        </Tabs.Tab>
        <Tabs.Tab value="three">Also enabled</Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel value="one" keepMounted>
        <p>First panel.</p>
      </Tabs.Panel>
      <Tabs.Panel value="two" keepMounted>
        <p>Second panel (not reachable when middle tab is disabled).</p>
      </Tabs.Panel>
      <Tabs.Panel value="three" keepMounted>
        <p>Third panel.</p>
      </Tabs.Panel>
    </Tabs.Root>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function ControlledStory() {
    const [value, setValue] = React.useState<string | number>('alpha');
    return <div>
        <Tabs.Root value={value} onValueChange={setValue}>
          <Tabs.List aria-label="Controlled tabs">
            <Tabs.Tab value="alpha">Alpha</Tabs.Tab>
            <Tabs.Tab value="beta">Beta</Tabs.Tab>
            <Tabs.Indicator />
          </Tabs.List>
          <Tabs.Panel value="alpha" keepMounted>
            <p>Alpha content. Current value: {String(value)}</p>
          </Tabs.Panel>
          <Tabs.Panel value="beta" keepMounted>
            <p>Beta content.</p>
          </Tabs.Panel>
        </Tabs.Root>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs.Root defaultValue="overview">
      <Tabs.List aria-label="Project areas">
        <Tabs.Tab value="overview">
          <span className="memori-tabs__tab-inner">
            <LayoutGrid aria-hidden="true" size={16} strokeWidth={2} />
            <span>Overview</span>
          </span>
        </Tabs.Tab>
        <Tabs.Tab value="documents">
          <span className="memori-tabs__tab-inner">
            <FileText aria-hidden="true" size={16} strokeWidth={2} />
            <span>Documents</span>
          </span>
        </Tabs.Tab>
        <Tabs.Tab value="settings">
          <span className="memori-tabs__tab-inner">
            <Settings aria-hidden="true" size={16} strokeWidth={2} />
            <span>Settings</span>
          </span>
        </Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel value="overview" keepMounted>
        <p>Project overview.</p>
      </Tabs.Panel>
      <Tabs.Panel value="documents" keepMounted>
        <p>Documents list.</p>
      </Tabs.Panel>
      <Tabs.Panel value="settings" keepMounted>
        <p>Settings for this project.</p>
      </Tabs.Panel>
    </Tabs.Root>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 'calc(10 * var(--memori-spacing-md))'
  }}>
      <Tabs.Root defaultValue="short">
        <Tabs.List aria-label="Tabs with long labels">
          <Tabs.Tab value="short">Short</Tabs.Tab>
          <Tabs.Tab value="long" title="Very long label that should truncate in narrow layouts">
            <span className="memori-tabs__tab-label">
              Very long label that should truncate in narrow layouts
            </span>
          </Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Panel value="short" keepMounted>
          <p>Narrow container tests truncation on the tab list.</p>
        </Tabs.Panel>
        <Tabs.Panel value="long" keepMounted>
          <p>Long label tab panel.</p>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
}`,...d.parameters?.docs?.source}}};const ee=["Underline","Segmented","Default","Vertical","WithDisabledTab","Controlled","WithIcons","LongLabels"];export{l as Controlled,r as Default,d as LongLabels,n as Segmented,s as Underline,t as Vertical,i as WithDisabledTab,o as WithIcons,ee as __namedExportsOrder,Y as default};
