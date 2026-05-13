import{j as r,r as i}from"./iframe-BL5kBO2E.js";import{T as c}from"./Table-D4R5fVLV.js";import{B as I}from"./Button-C6vS0uVO.js";import{T as F}from"./trash-2-xqab9bdx.js";import{I as M}from"./info-CHI01xrG.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CvO13Q2o.js";import"./Dropdown-TJALi-ba.js";import"./chevron-down-CZe6_B7S.js";import"./createLucideIcon-zHLtVbSf.js";import"./index-BPM8Lkk9.js";import"./index-CrVajavV.js";import"./useTimeout-C1sSX1wB.js";import"./useRenderElement-DMzPT2AM.js";import"./useOnMount-B9H9welB.js";import"./useId-6uGm9R11.js";import"./useOpenChangeComplete-NBw_u7MZ.js";import"./InternalBackdrop-CL8wnAg6.js";import"./element-BHYbfa34.js";import"./owner-CvMgaIeV.js";import"./popupStateMapping-Bmh3L9zG.js";import"./FocusGuard-CQD2hgYk.js";import"./visuallyHidden-CbwUG2x5.js";import"./createBaseUIEventDetails-CKau-mWD.js";import"./event-4Hs-0gts.js";import"./index-Vx7mRDqa.js";import"./floating-ui.utils-BOEHVcN5.js";import"./useSyncedFloatingRootContext-D_XmsfEf.js";import"./useTransitionStatus-D2bimz1A.js";import"./useRole-B8Aodksw.js";import"./useListNavigation-DRiAadG3.js";import"./composite-B3BgQLQt.js";import"./getPseudoElementBounds-PtVkpV8f.js";import"./useBaseUiId-N7Z-tFEk.js";import"./useButton-CoJKgu0P.js";import"./inertValue-CEFAxL04.js";import"./getDisabledMountTransitionStyles-CFs5I_oA.js";import"./ToolbarRootContext-2tO99aex.js";import"./composite-CVmsIvHa.js";import"./safePolygon-I8ge3_5Q.js";import"./useCompositeItem-BjicWiRN.js";import"./useClick-C4ZIsaEm.js";import"./useFocus-Tw_syz-1.js";import"./useTranslation-Cuj1lPWs.js";import"./search-CUfjQWxh.js";import"./Input-BPML38Nv.js";import"./useControlled-BU4M8y-9.js";import"./LabelableContext-9WVFYZSH.js";import"./useLabelableId-BmvIwmNU.js";import"./Checkbox-CIjM_noa.js";import"./check-CNO1jMDe.js";import"./useValueChanged-DlHVAkoP.js";import"./SelectBox-Daisw4k6.js";import"./resolveValueLabel-BW4R_TAx.js";import"./loader-circle-DC5zaW_6.js";const D=Array.from({length:500},(n,o)=>({id:String(o+1),name:`User ${o+1}`,email:`user${o+1}@example.com`,role:o%2===0?"Engineer":"Researcher",status:o%3===0?"inactive":"active"})),f=[{id:"1",name:"Ada Lovelace",email:"ada@example.com",role:"Engineer",status:"active"},{id:"2",name:"Alan Turing",email:"alan@example.com",role:"Researcher",status:"active"},{id:"3",name:"Grace Hopper",email:"grace@example.com",role:"Engineer",status:"inactive"},{id:"4",name:"Edsger Dijkstra",email:"edsger@example.com",role:"Researcher",status:"active"},{id:"5",name:"Ada Lovelace",email:"ada@example.com",role:"Engineer",status:"active"},{id:"6",name:"Alan Turing",email:"alan@example.com",role:"Researcher",status:"active"},{id:"7",name:"Grace Hopper",email:"grace@example.com",role:"Engineer",status:"inactive"},{id:"8",name:"Edsger Dijkstra",email:"edsger@example.com",role:"Researcher",status:"active"},{id:"9",name:"Ada Lovelace",email:"ada@example.com",role:"Engineer",status:"active"},{id:"10",name:"Alan Turing",email:"alan@example.com",role:"Researcher",status:"active"},{id:"11",name:"Grace Hopper",email:"grace@example.com",role:"Engineer",status:"inactive"},{id:"12",name:"Edsger Dijkstra",email:"edsger@example.com",role:"Researcher",status:"active"}],d=[{accessorKey:"name",header:"Name"},{accessorKey:"email",header:"Email"},{accessorKey:"role",header:"Role",meta:{badge:!0,badgeColorMap:{Engineer:"blue",Researcher:"teal"}}},{accessorKey:"status",header:"Status",meta:{badge:!0,badgeColorMap:{active:"success",inactive:"neutral"}}},{accessorKey:"id",header:"ID",enableSorting:!1,meta:{hiddenByDefault:!0,disableHiding:!1}}],Ve={title:"Data display/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"\nData table built on [TanStack Table](https://tanstack.com/table) with Memori styling: sorting, column resize, toolbar search, column filters, toolbar filter popover (`filterDefs`), row selection, bulk actions, row actions, loading and empty states, and footer pagination (`simplified` or `detailed`).\n\n**i18n:** Wrap the app with `MemoriI18nProvider` (or merge strings via `addMemoriTableToI18n`). See the root **README** for internationalization.\n\nThe **Props** table below lists every `TableProps` field. For the same reference in the repo docs, see the README section **Table**.\n        ".trim()}}},argTypes:{data:{control:!1,description:"**Required.** Row data array."},columns:{control:!1,description:"**Required.** `ColumnDef<TData>[]` — headers, accessors, sorting, and optional `meta` (badges, filters, `hiddenByDefault`, …)."},className:{description:"Optional class name on the outer table wrapper."},enableRowSelection:{control:"boolean",description:"Shows a selection column with checkboxes."},enableColumnResizing:{control:"boolean",description:"Enables drag-to-resize on columns."},getRowId:{control:!1,description:"`(originalRow, index) => string` — stable id for selection and React keys; use when rows have no natural id."},enablePagination:{control:"boolean",description:"Shows footer pagination (client-side unless `manualPagination` is true)."},initialPageSize:{control:"number",description:"Initial page size when using internal pagination (defaults to a valid `pageSizeOptions` entry)."},pageSizeOptions:{control:!1,description:"Choices for the page-size select (default `[10, 25, 50, 100]`)."},toolbar:{control:!1,description:"Custom `ReactNode` in the toolbar row (e.g. bulk actions slot next to search)."},maxBodyHeight:{control:!1,description:"CSS `maxHeight` for a scrollable body, or `false` for no max height."},isLoading:{control:"boolean",description:"Shows a loading overlay on the table body."},emptyState:{control:!1,description:"Rendered when there are zero rows and the table is not loading."},bulkActions:{control:!1,description:"`BulkAction<TData>[]` — toolbar actions when rows are selected (`label`, `icon`, `variant`, `onClick(rows)`)."},rowActions:{control:!1,description:"`RowAction<TData>[]` — per-row actions (`label`, `id`, `icon`, `variant`, `onClick(row)`)."},rowActionsVariant:{control:"inline-radio",options:["menu","inline"],description:"`menu` — overflow ⋯ menu; `inline` — icon buttons in the actions cell."},globalFilterPlaceholder:{control:"text",description:"Placeholder for the toolbar search field (overrides default i18n string)."},tableId:{control:"text",description:"If set, persists column visibility to `localStorage` under `memori-table:columnVisibility:<tableId>`."},search:{control:"text",description:"Controlled value for the toolbar search field."},onSearchChange:{control:!1,description:"`(value: string) => void` — debounced by `searchDebounceMs`."},searchDebounceMs:{control:"number",description:"Debounce delay in ms for `onSearchChange` (default `300`)."},columnFilters:{control:!1,description:"Controlled TanStack `ColumnFiltersState` for header/toolbar filters."},onColumnFiltersChange:{control:!1,description:"`(filters: ColumnFiltersState) => void`."},filterDefs:{control:!1,description:"`FilterDef[]` — declarative toolbar filters; `id` must match a column `accessorKey` or `id`."},manualPagination:{control:"boolean",description:"Set `true` for server-side pagination; pass **`rowCount`** (total on server) and usually controlled **`pagination`** / **`onPaginationChange**`."},rowCount:{control:"number",description:"Total row count when `manualPagination` is `true`."},pagination:{control:!1,description:"Controlled `{ pageIndex, pageSize }`. Pair with `onPaginationChange`; omit both for internal state."},onPaginationChange:{control:!1,description:"TanStack `Updater<PaginationState>` callback for controlled pagination."},paginationVariant:{control:"inline-radio",options:["simplified","detailed"],description:"`simplified` — range + page badge + nav; `detailed` — total + windowed page buttons + page size."},paginationTotalLabel:{control:"text",description:'With `paginationVariant="detailed"`, optional noun for the total line (e.g. `"Orders"`).'}},render:n=>r.jsx(c,{...n})},b={name:"Sort and column resize",args:{data:f,columns:d}},h={name:"Selection and pagination",render:()=>r.jsx(c,{data:D,columns:d,enableRowSelection:!0,enablePagination:!0,enableColumnResizing:!1,toolbar:r.jsx(I,{type:"button",variant:"outline",size:"sm",children:"Delete selected"})})},S={name:"Bulk actions",render:()=>r.jsx(c,{data:f,columns:d,enablePagination:!0,bulkActions:[{label:"Remove",icon:r.jsx(F,{size:16}),variant:"danger",onClick:n=>{console.log("bulk",n.map(o=>o.original.id))}}]})},w={name:"Row actions",render:()=>r.jsx(c,{data:f,columns:d,rowActions:[{label:"Edit",onClick:n=>{console.log("edit",n.original.id)}},{label:"Delete",variant:"danger",onClick:n=>{console.log("delete",n.original.id)}}]})},v={name:"Row actions (inline)",render:()=>r.jsx(c,{data:f,columns:d,rowActionsVariant:"inline",rowActions:[{id:"info",label:"Details",icon:r.jsx(M,{size:16,"aria-hidden":!0}),onClick:n=>{console.log("details",n.original.id)}},{id:"delete",label:"Delete",icon:r.jsx(F,{size:16,"aria-hidden":!0}),variant:"danger",onClick:n=>{console.log("delete",n.original.id)}}]})},C={name:"Detailed pagination",render:()=>r.jsx(c,{data:D,columns:d,enablePagination:!0,paginationVariant:"detailed",paginationTotalLabel:"People",pageSizeOptions:[5,10,25,50],initialPageSize:5})},y={name:"Server search and column filters",render:function(){const[o,m]=i.useState(""),[s,g]=i.useState([]),[l,z]=i.useState({pageIndex:0,pageSize:10}),A=i.useMemo(()=>[{accessorKey:"name",header:"Name"},{accessorKey:"email",header:"Email"},{accessorKey:"role",header:"Role",meta:{filterVariant:"select",filterOptions:["Engineer","Researcher"]}},{accessorKey:"id",header:"ID",meta:{filterVariant:"text"}}],[]),u=i.useMemo(()=>{let a=[...D];if(o.trim()){const e=o.toLowerCase();a=a.filter(t=>t.name.toLowerCase().includes(e)||t.email.toLowerCase().includes(e))}for(const e of s)if(e.id==="role"&&e.value&&(a=a.filter(t=>t.role===e.value)),e.id==="id"&&e.value){const t=String(e.value);a=a.filter(p=>p.id.includes(t))}return a},[o,s]),T=i.useMemo(()=>{const a=l.pageIndex*l.pageSize;return u.slice(a,a+l.pageSize)},[u,l]);return r.jsx(c,{data:T,columns:A,enablePagination:!0,manualPagination:!0,rowCount:u.length,pagination:l,onPaginationChange:z,search:o,onSearchChange:m,columnFilters:s,onColumnFiltersChange:g,tableId:"story-server-table"})}},j=[{id:"role",label:"Role",variant:"multi-select",options:[{label:"Engineer",value:"Engineer"},{label:"Researcher",value:"Researcher"}]},{id:"status",label:"Status",variant:"select",options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]},{id:"hiredBetween",label:"Hired between",variant:"date-range"},{id:"verifiedOnly",label:"Verification",variant:"boolean",booleanLabels:{on:"Verified only",off:"All records"}}];function K(n){const o=Number.parseInt(n,10),m=2020+o%5,s=String(o*7%12+1).padStart(2,"0"),g=String(o*13%28+1).padStart(2,"0");return`${m}-${s}-${g}`}const R={name:"Toolbar filters (popover & chips)",render:function(){const[o,m]=i.useState(""),[s,g]=i.useState([]),[l,z]=i.useState({pageIndex:0,pageSize:10}),A=i.useMemo(()=>[{accessorKey:"name",header:"Name"},{accessorKey:"email",header:"Email"},{accessorKey:"role",header:"Role",meta:{badge:!0,badgeColorMap:{Engineer:"blue",Researcher:"teal"}}},{accessorKey:"status",header:"Status",meta:{badge:!0,badgeColorMap:{active:"success",inactive:"neutral"}}},{accessorKey:"id",header:"ID",enableSorting:!1}],[]),u=i.useMemo(()=>{let a=[...D];if(o.trim()){const e=o.toLowerCase();a=a.filter(t=>t.name.toLowerCase().includes(e)||t.email.toLowerCase().includes(e))}for(const e of s){if(e.id==="role"&&Array.isArray(e.value)&&e.value.length>0){const t=new Set(e.value.map(String));a=a.filter(p=>t.has(p.role))}if(e.id==="status"&&typeof e.value=="string"&&e.value&&(a=a.filter(t=>t.status===e.value)),e.id==="hiredBetween"&&e.value&&typeof e.value=="object"){const t=e.value,p=t.from?.trim(),k=t.to?.trim();a=a.filter(L=>{const E=K(L.id);return!(p&&E<p||k&&E>k)})}e.id==="verifiedOnly"&&e.value===!0&&(a=a.filter(t=>Number.parseInt(t.id,10)%5===0))}return a},[o,s]),T=i.useMemo(()=>{const a=l.pageIndex*l.pageSize;return u.slice(a,a+l.pageSize)},[u,l]);return r.jsx(c,{data:T,columns:A,enablePagination:!0,manualPagination:!0,rowCount:u.length,pagination:l,onPaginationChange:z,search:o,onSearchChange:m,columnFilters:s,onColumnFiltersChange:g,filterDefs:j,enableRowSelection:!0,bulkActions:[{label:"Remove",icon:r.jsx(F,{size:16}),variant:"danger",onClick:a=>{console.log("bulk",a.map(e=>e.original.id))}}],tableId:"story-toolbar-filters-table"})}},x={name:"Loading and empty",render:function(){const[o,m]=i.useState(!0);return r.jsxs("div",{children:[r.jsx(I,{type:"button",size:"sm",variant:"outline",onClick:()=>m(s=>!s),style:{marginBottom:16},children:"Toggle loading"}),r.jsx(c,{data:o?[]:f,columns:d,isLoading:o,emptyState:r.jsx("span",{children:"No people match your criteria."})})]})}},P={args:{data:[],columns:d}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Sort and column resize',
  args: {
    data: sampleData,
    columns: baseColumns
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Selection and pagination',
  render: () => <Table<Person> data={largeDataset} columns={baseColumns} enableRowSelection enablePagination enableColumnResizing={false} toolbar={<Button type="button" variant="outline" size="sm">
          Delete selected
        </Button>} />
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Bulk actions',
  render: () => <Table<Person> data={sampleData} columns={baseColumns} enablePagination bulkActions={[{
    label: 'Remove',
    icon: <Trash2 size={16} />,
    variant: 'danger',
    onClick: rows => {
      // eslint-disable-next-line no-console
      console.log('bulk', rows.map(r => r.original.id));
    }
  }]} />
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Row actions',
  render: () => <Table<Person> data={sampleData} columns={baseColumns} rowActions={[{
    label: 'Edit',
    onClick: row => {
      // eslint-disable-next-line no-console
      console.log('edit', row.original.id);
    }
  }, {
    label: 'Delete',
    variant: 'danger',
    onClick: row => {
      // eslint-disable-next-line no-console
      console.log('delete', row.original.id);
    }
  }]} />
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Row actions (inline)',
  render: () => <Table<Person> data={sampleData} columns={baseColumns} rowActionsVariant="inline" rowActions={[{
    id: 'info',
    label: 'Details',
    icon: <Info size={16} aria-hidden />,
    onClick: row => {
      // eslint-disable-next-line no-console
      console.log('details', row.original.id);
    }
  }, {
    id: 'delete',
    label: 'Delete',
    icon: <Trash2 size={16} aria-hidden />,
    variant: 'danger',
    onClick: row => {
      // eslint-disable-next-line no-console
      console.log('delete', row.original.id);
    }
  }]} />
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Detailed pagination',
  render: () => <Table<Person> data={largeDataset} columns={baseColumns} enablePagination paginationVariant="detailed" paginationTotalLabel="People" pageSizeOptions={[5, 10, 25, 50]} initialPageSize={5} />
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Server search and column filters',
  render: function ServerFiltersStory() {
    const [search, setSearch] = useState('');
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [pagination, setPagination] = useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10
    });
    const columns = useMemo<ColumnDef<Person>[]>(() => [{
      accessorKey: 'name',
      header: 'Name'
    }, {
      accessorKey: 'email',
      header: 'Email'
    }, {
      accessorKey: 'role',
      header: 'Role',
      meta: {
        filterVariant: 'select',
        filterOptions: ['Engineer', 'Researcher']
      }
    }, {
      accessorKey: 'id',
      header: 'ID',
      meta: {
        filterVariant: 'text'
      }
    }], []);
    const filtered = useMemo(() => {
      let rows = [...largeDataset];
      if (search.trim()) {
        const q = search.toLowerCase();
        rows = rows.filter(r => r.name.toLowerCase().includes(q) || r.email.toLowerCase().includes(q));
      }
      for (const f of columnFilters) {
        if (f.id === 'role' && f.value) {
          rows = rows.filter(r => r.role === f.value);
        }
        if (f.id === 'id' && f.value) {
          const s = String(f.value);
          rows = rows.filter(r => r.id.includes(s));
        }
      }
      return rows;
    }, [search, columnFilters]);
    const pageRows = useMemo(() => {
      const start = pagination.pageIndex * pagination.pageSize;
      return filtered.slice(start, start + pagination.pageSize);
    }, [filtered, pagination]);
    return <Table<Person> data={pageRows} columns={columns} enablePagination manualPagination rowCount={filtered.length} pagination={pagination} onPaginationChange={setPagination} search={search} onSearchChange={setSearch} columnFilters={columnFilters} onColumnFiltersChange={setColumnFilters} tableId="story-server-table" />;
  }
}`,...y.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Toolbar filters (popover & chips)',
  render: function ToolbarFiltersStory() {
    const [search, setSearch] = useState('');
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [pagination, setPagination] = useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10
    });
    const columns = useMemo<ColumnDef<Person>[]>(() => [{
      accessorKey: 'name',
      header: 'Name'
    }, {
      accessorKey: 'email',
      header: 'Email'
    }, {
      accessorKey: 'role',
      header: 'Role',
      meta: {
        badge: true,
        badgeColorMap: {
          Engineer: 'blue',
          Researcher: 'teal'
        } satisfies Record<string, string>
      }
    }, {
      accessorKey: 'status',
      header: 'Status',
      meta: {
        badge: true,
        badgeColorMap: {
          active: 'success',
          inactive: 'neutral'
        } satisfies Record<string, string>
      }
    }, {
      accessorKey: 'id',
      header: 'ID',
      enableSorting: false
    }] as ColumnDef<Person>[], []);
    const filtered = useMemo(() => {
      let rows = [...largeDataset];
      if (search.trim()) {
        const q = search.toLowerCase();
        rows = rows.filter(r => r.name.toLowerCase().includes(q) || r.email.toLowerCase().includes(q));
      }
      for (const f of columnFilters) {
        if (f.id === 'role' && Array.isArray(f.value) && f.value.length > 0) {
          const set = new Set(f.value.map(String));
          rows = rows.filter(r => set.has(r.role));
        }
        if (f.id === 'status' && typeof f.value === 'string' && f.value) {
          rows = rows.filter(r => r.status === f.value);
        }
        if (f.id === 'hiredBetween' && f.value && typeof f.value === 'object') {
          const range = f.value as {
            from?: string;
            to?: string;
          };
          const from = range.from?.trim();
          const to = range.to?.trim();
          rows = rows.filter(r => {
            const hired = hireDateForRow(r.id);
            if (from && hired < from) {
              return false;
            }
            if (to && hired > to) {
              return false;
            }
            return true;
          });
        }
        if (f.id === 'verifiedOnly' && f.value === true) {
          rows = rows.filter(r => Number.parseInt(r.id, 10) % 5 === 0);
        }
      }
      return rows;
    }, [search, columnFilters]);
    const pageRows = useMemo(() => {
      const start = pagination.pageIndex * pagination.pageSize;
      return filtered.slice(start, start + pagination.pageSize);
    }, [filtered, pagination]);
    return <Table<Person> data={pageRows} columns={columns} enablePagination manualPagination rowCount={filtered.length} pagination={pagination} onPaginationChange={setPagination} search={search} onSearchChange={setSearch} columnFilters={columnFilters} onColumnFiltersChange={setColumnFilters} filterDefs={toolbarFilterDefs} enableRowSelection={true} bulkActions={[{
      label: 'Remove',
      icon: <Trash2 size={16} />,
      variant: 'danger',
      onClick: rows => {
        // eslint-disable-next-line no-console
        console.log('bulk', rows.map(r => r.original.id));
      }
    }]} tableId="story-toolbar-filters-table" />;
  }
}`,...R.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Loading and empty',
  render: function LoadingStory() {
    const [loading, setLoading] = useState(true);
    return <div>
        <Button type="button" size="sm" variant="outline" onClick={() => setLoading(l => !l)} style={{
        marginBottom: 16
      }}>
          Toggle loading
        </Button>
        <Table<Person> data={loading ? [] : sampleData} columns={baseColumns} isLoading={loading} emptyState={<span>No people match your criteria.</span>} />
      </div>;
  }
}`,...x.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: baseColumns
  }
}`,...P.parameters?.docs?.source}}};const Ne=["SortAndResize","SelectionAndPagination","BulkActions","RowActions","RowActionsInline","DetailedPagination","ServerFiltersAndSearch","ToolbarFilters","LoadingAndEmpty","Empty"];export{S as BulkActions,C as DetailedPagination,P as Empty,x as LoadingAndEmpty,w as RowActions,v as RowActionsInline,h as SelectionAndPagination,y as ServerFiltersAndSearch,b as SortAndResize,R as ToolbarFilters,Ne as __namedExportsOrder,Ve as default};
