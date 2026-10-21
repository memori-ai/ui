import{r as i,j as e}from"./iframe-BXoPY9wl.js";import{c as V}from"./index-CWjFjZSg.js";import{F as N,a as k,b as A}from"./FilterBarSearch-DpqHoZoU.js";import{u as L}from"./useTranslation-BjczBpAw.js";import{S as R}from"./Switch-BPNjMDhc.js";import{B as y}from"./Button-FLGcyd8p.js";import{L as q}from"./layout-grid-efFRJNE4.js";import{P as E}from"./plus-DWWr3P5E.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-KNAk1hxz.js";import"./search-CcIUBDpj.js";import"./Input-RSMAWCdu.js";import"./FieldControl-DIlGRSd0.js";import"./useStableCallback-BbYRKgG5.js";import"./useRenderElement-DXWaToy6.js";import"./useControlled-4_v4svvh.js";import"./LabelableContext-DVM4QQkJ.js";import"./index-BgmNc_hI.js";import"./index-uhqEoe0I.js";import"./useLabelableId-CG2xlmsb.js";import"./floating-ui.utils.dom-B8UkErNH.js";import"./useBaseUiId-ChhW82KN.js";import"./useId-BMVthQJU.js";import"./index-BlMiX275.js";import"./useStableId-Bv6G-RTm.js";import"./visuallyHidden-CbwUG2x5.js";import"./useValueChanged-Nx1WOo-O.js";import"./useButton-CEgo-tWA.js";import"./loader-circle-CPU3h71g.js";const c=i.forwardRef(({search:a,onSearchChange:t,searchPlaceholder:s,filters:r,value:n,onValueChange:o,extra:l,className:F,style:w},T)=>{const{t:j}=L(),[D,f]=i.useState(a??"");i.useEffect(()=>{a!==void 0&&f(a)},[a]);const[B,P]=i.useState([]),g=n??B,O=d=>{f(d),t?.(d)},v=d=>{n===void 0&&P(d),o?.(d)},S=a!==void 0||t!==void 0,p=(r?.length??0)>0,b=l!=null,_=s??j("table.searchPlaceholder");return e.jsxs("div",{ref:T,className:V("memori-filter-bar",F),style:w,children:[S||p||b?e.jsxs("div",{className:"memori-filter-bar__controls",children:[S?e.jsx(N,{value:D,onChange:O,placeholder:_}):null,p?e.jsx(k,{filterDefs:r,value:g,onChange:v}):null,b?e.jsx("div",{className:"memori-filter-bar__extra",children:l}):null]}):null,p?e.jsx(A,{filterDefs:r,value:g,onChange:v}):null]})});c.displayName="FilterBar";c.__docgenInfo={description:"",methods:[],displayName:"FilterBar",props:{search:{required:!1,tsType:{name:"string"},description:"Search text. The search field renders when `search` or `onSearchChange` is set."},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Called on every keystroke (no debounce: debounce in the caller if needed)."},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"Search placeholder and accessible label. Defaults to the `table.searchPlaceholder` translation."},filters:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| (FilterDefBase & {
    variant: 'select' | 'multi-select'
    options: FilterOption[]
  })
| (FilterDefBase & { variant: 'date-range' })
| (FilterDefBase & {
    variant: 'boolean'
    booleanLabels: { on: string; off: string }
  })`,elements:[{name:"unknown"},{name:"unknown"},{name:"unknown"}]}],raw:"FilterDef[]"},description:"Filter definitions (same shape as `Table` `filterDefs`). The filter popover and the\nactive-filter chips render only when this is non-empty."},value:{required:!1,tsType:{name:"ColumnFiltersState"},description:"Committed filter values (`{ id, value }[]`). Uncontrolled when omitted."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ColumnFiltersState) => void",signature:{arguments:[{type:{name:"ColumnFiltersState"},name:"value"}],return:{name:"void"}}},description:"Called when filters are applied from the popover or removed from the chips."},extra:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Slot rendered after the filter button (toggles, view switches, actions)."},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name for the root element."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for the root element."}}};const{fn:C}=__STORYBOOK_MODULE_TEST__,M=[{id:"1",name:"Ada",status:"active",tags:["ai"],public:!0},{id:"2",name:"Turing",status:"active",tags:["docs"],public:!1},{id:"3",name:"Hopper",status:"archived",tags:["ai","docs"],public:!0},{id:"4",name:"Dijkstra",status:"active",tags:[],public:!1}],x=[{id:"status",label:"Status",variant:"select",options:[{label:"Active",value:"active"},{label:"Archived",value:"archived"}]},{id:"tags",label:"Tags",variant:"multi-select",options:[{label:"AI",value:"ai"},{label:"Docs",value:"docs"}]},{id:"created",label:"Created",variant:"date-range"},{id:"public",label:"Public only",variant:"boolean",booleanLabels:{on:"Yes",off:"No"}}],Se={title:"Contenuto/FilterBar",component:c,tags:["autodocs"],argTypes:{search:{control:"text",description:"Search text. The field renders when `search` or `onSearchChange` is set."},searchPlaceholder:{control:"text",description:"Placeholder and accessible label (default: `table.searchPlaceholder`)."},filters:{control:!1,description:"Filter definitions, same `FilterDef[]` as `Table`."},value:{control:!1,description:"Committed filters `{ id, value }[]`; uncontrolled if omitted."},extra:{control:!1},onSearchChange:{table:{disable:!0}},onValueChange:{table:{disable:!0}}},args:{onSearchChange:C(),onValueChange:C()},parameters:{docs:{description:{component:"Search + filter popover + active-filter chips for card lists. Same filter model (`FilterDef`, `ColumnFiltersState`) and chrome as the `Table` toolbar."}}}},z=(a,t)=>M.filter(s=>s.name.toLowerCase().includes(a.trim().toLowerCase())?t.every(({id:r,value:n})=>r==="status"?s.status===n:r==="tags"?n.every(o=>s.tags.includes(o)):r==="public"?s.public===n:!0):!1),G=({items:a})=>e.jsx("ul",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(10rem, 1fr))",gap:"var(--memori-spacing-sm)",padding:0,margin:0,listStyle:"none"},children:a.map(t=>e.jsx("li",{style:{padding:"var(--memori-spacing-md)",border:"var(--memori-border) solid var(--memori-border-color)",borderRadius:"var(--memori-radius-surface)"},children:t.name},t.id))}),m={render:a=>{const[t,s]=i.useState("");return e.jsx(c,{...a,search:t,onSearchChange:r=>{s(r),a.onSearchChange?.(r)}})}},u={args:{searchPlaceholder:"Search agents"},render:a=>{const[t,s]=i.useState(""),[r,n]=i.useState([{id:"status",value:"active"}]),o=i.useMemo(()=>z(t,r),[t,r]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--memori-spacing-md)"},children:[e.jsx(c,{...a,search:t,onSearchChange:l=>{s(l),a.onSearchChange?.(l)},filters:x,value:r,onValueChange:l=>{n(l),a.onValueChange?.(l)}}),e.jsx(G,{items:o})]})}},h={render:a=>{const[t,s]=i.useState(""),[r,n]=i.useState(!1);return e.jsx(c,{...a,search:t,onSearchChange:o=>{s(o),a.onSearchChange?.(o)},filters:x,extra:e.jsxs(e.Fragment,{children:[e.jsx(R,{label:"Only mine",checked:r,onCheckedChange:n}),e.jsx(y,{variant:"toolbar",icon:e.jsx(q,{size:16,"aria-hidden":!0}),"aria-label":"Grid view"}),e.jsx(y,{variant:"primary",icon:e.jsx(E,{size:16,"aria-hidden":!0}),children:"New agent"})]})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [search, setSearch] = useState('');
    return <FilterBar {...args} search={search} onSearchChange={value => {
      setSearch(value);
      args.onSearchChange?.(value);
    }} />;
  }
}`,...m.parameters?.docs?.source},description:{story:"Search only.",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    searchPlaceholder: 'Search agents'
  },
  render: args => {
    const [search, setSearch] = useState('');
    const [value, setValue] = useState<ColumnFiltersState>([{
      id: 'status',
      value: 'active'
    }]);
    const items = useMemo(() => filterAgents(search, value), [search, value]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--memori-spacing-md)'
    }}>
        <FilterBar {...args} search={search} onSearchChange={next => {
        setSearch(next);
        args.onSearchChange?.(next);
      }} filters={filterDefs} value={value} onValueChange={next => {
        setValue(next);
        args.onValueChange?.(next);
      }} />
        <AgentList items={items} />
      </div>;
  }
}`,...u.parameters?.docs?.source},description:{story:"Search + filter popover; applied filters appear as removable chips below.",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [search, setSearch] = useState('');
    const [mineOnly, setMineOnly] = useState(false);
    return <FilterBar {...args} search={search} onSearchChange={next => {
      setSearch(next);
      args.onSearchChange?.(next);
    }} filters={filterDefs} extra={<>
            <Switch label="Only mine" checked={mineOnly} onCheckedChange={setMineOnly} />
            <Button variant="toolbar" icon={<LayoutGrid size={16} aria-hidden />} aria-label="Grid view" />
            <Button variant="primary" icon={<Plus size={16} aria-hidden />}>
              New agent
            </Button>
          </>} />;
  }
}`,...h.parameters?.docs?.source},description:{story:"`extra` slot after the filter button: toggles, view switches, actions.",...h.parameters?.docs?.description}}};const be=["Default","WithFilters","WithExtra"];export{m as Default,h as WithExtra,u as WithFilters,be as __namedExportsOrder,Se as default};
