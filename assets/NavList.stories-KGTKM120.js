import{j as e,r as p}from"./iframe-DQnDAKDD.js";import{N as r,B as u,U as m,C as v}from"./NavList-C78GFqU4.js";import{F as g}from"./file-text-CwTvb6eR.js";import{M as x}from"./messages-square-BIiIsXI4.js";import{S as b}from"./settings-FsGOgJsY.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-C4Q6ZgnJ.js";import"./index-DmXSnq-J.js";const I={title:"Azioni e navigazione/NavList",component:r,tags:["autodocs"],parameters:{controls:{expanded:!0},docs:{description:{component:'Vertical navigation or selection list with optional group headings. `NavList.Item` renders a link with `href` (`aria-current="page"` when active) or a button otherwise (`aria-current="true"`). Wrap items in `NavList.Group`.'}}}},d=[{group:"Conoscenza",id:"contents",label:"Contenuti",icon:e.jsx(g,{size:18})},{group:"Conoscenza",id:"dictionary",label:"Dizionario",icon:e.jsx(u,{size:18})},{group:"Conoscenza",id:"experts",label:"Esperti",icon:e.jsx(m,{size:18})},{group:"Pubblico",id:"conversations",label:"Conversazioni",icon:e.jsx(x,{size:18}),trailing:12},{group:"Pubblico",id:"statistics",label:"Statistiche",icon:e.jsx(v,{size:18})},{group:"Configurazione",id:"settings",label:"Impostazioni",icon:e.jsx(b,{size:18})}];function h(){const[c,s]=p.useState("contents"),a=[...new Set(d.map(t=>t.group))];return e.jsx("div",{style:{width:240},children:e.jsx(r,{children:a.map(t=>e.jsx(r.Group,{label:t,children:d.filter(i=>i.group===t).map(i=>e.jsx(r.Item,{href:`#${i.id}`,icon:i.icon,trailing:i.trailing,active:c===i.id,onClick:l=>{l.preventDefault(),s(i.id)},children:i.label},i.id))},t))})})}const n={render:()=>e.jsx(h,{})},o={render:function(){const[s,a]=p.useState("a");return e.jsx("div",{style:{width:240},children:e.jsx(r,{children:e.jsxs(r.Group,{children:[["a","b","c"].map(t=>e.jsxs(r.Item,{active:s===t,onClick:()=>a(t),children:["Agente ",t.toUpperCase()]},t)),e.jsx(r.Item,{disabled:!0,children:"Agente bloccato"})]})})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Sidebar />
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [picked, setPicked] = useState('a');
    return <div style={{
      width: 240
    }}>
        <NavList>
          <NavList.Group>
            {['a', 'b', 'c'].map(id => <NavList.Item key={id} active={picked === id} onClick={() => setPicked(id)}>
                Agente {id.toUpperCase()}
              </NavList.Item>)}
            <NavList.Item disabled>Agente bloccato</NavList.Item>
          </NavList.Group>
        </NavList>
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const w=["Default","SelectionList"];export{n as Default,o as SelectionList,w as __namedExportsOrder,I as default};
