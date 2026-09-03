import{o as e}from"./rolldown-runtime-CNgF_TGW.js";import{$ as t}from"./vendors-B0VRXiug.js";import{rn as n}from"./platform-core-D8IQmtf1.js";import{s as r}from"./ResultsContext-Bn6zf8eN.js";import{r as i}from"./answerModeExtractors-sEZtposy.js";import{r as a,t as o}from"./versionChainBuilder-tl3nj7AR.js";var s=e(t(),1),c=new WeakMap,l=new WeakMap;function u(e){let t=c.get(e);if(t&&t.blocks===e.blocks)return t.assets;let r=i(e.blocks??n,{orderedByPriority:!0});return c.set(e,{blocks:e.blocks,assets:r}),r}function d(e){let t=new Map;for(let n of e)!n.is_primary_asset||!n.uuid||(!t.has(n.uuid)||n.automation||n.external_url?.automation)&&t.set(n.uuid,n);return[...t.values()]}function f(e){let t=l.get(e);if(t)return t;let n=e.map(e=>({result:e,assets:u(e)})),r=n.flatMap(({assets:e})=>e),i={resultAssets:n,allAssets:r,hasAssets:r.length>0};return l.set(e,i),i}var p=e=>(0,s.useMemo)(()=>f(e),[e]),m=()=>p(r(e=>e.results)),h=e=>{let t=(0,s.useMemo)(()=>o(e),[e]);return{versioningChains:t,getChainForAsset:(0,s.useMemo)(()=>e=>a(t,e),[t]),totalChains:t.length,hasVersioningChains:t.length>0}},g=`[Visual Edit Request]`,_=`[Spreadsheet Edit Request]`,v=`[Document Edit Request]`,y=`[Batch Inline Edit Request]`,b=`User instruction: `,x=`

Please `,S=`Metadata JSON:
`,C=`

Edits:
`,w=500;function T(e){let t=e.selectedCells.map(e=>`  ${e.a1} | ${JSON.stringify(e.displayValue)}`).join(`
`),n=e.selectedCells.filter(e=>e.formula).map(e=>`  ${e.a1} | =${e.formula}`).join(`
`);return n?`  Selected cells (A1 | Value):
${t}
  Formulas (A1 | Formula):
${n}`:`  Selected cells (A1 | Value):
${t}`}function E(e,t){let n=t+1,r=e.filename?`\n  File: ${e.filename}`:``;if(e.type===`visual`){let t=e.label?`\n  Screenshot label: ${e.label}`:``;return`Edit ${n}: Visual screenshot edit${r}
  Screenshot attachment: ${e.attachmentIndex+1}${t}
  ${b}${e.instruction}`}return e.type===`spreadsheet`?`Edit ${n}: Spreadsheet edit${r}
  Sheet: ${e.selection.sheetName}
  Range: ${e.selection.rangeA1}
  ${b}${e.instruction}
${T(e.selection)}`:`Edit ${n}: Document text edit${r}${e.selection.pageNumber==null?``:`\n  Page: ${e.selection.pageNumber}`}
  Selected text:
${e.selection.selectedText}
  ${b}${e.instruction}`}function D(e){return`${y}
The user queued multiple inline edits for the open asset. Apply the edits in the order listed. If two edits conflict, the later edit should win.

${S}${JSON.stringify({edits:e.map(O)})}${C}${e.map(E).join(`

`)}

Please identify the relevant content or code for each queued edit and make all requested changes in one update.`}function O(e){return e.type===`visual`?e:e.type===`spreadsheet`?{type:e.type,instruction:e.instruction,filename:e.filename,sheetName:e.selection.sheetName,rangeA1:e.selection.rangeA1}:{type:e.type,instruction:e.instruction,filename:e.filename,pageNumber:e.selection.pageNumber,selectedTextPreview:k(e.selection.selectedText)}}function k(e){return e.length<=w?e:`${e.slice(0,w).trimEnd()}...`}function A(e){return!!e?.startsWith(g)||!!e?.startsWith(_)||!!e?.startsWith(v)||!!e?.startsWith(y)}function j(e){if(!A(e)||e.startsWith(y))return null;let t=e.indexOf(b);if(t===-1)return null;let n=t+18,r=e.indexOf(x,n);return r===-1?e.slice(n).trim():e.slice(n,r).trim()}function M(e){return e.startsWith(g)?`visual`:e.startsWith(_)?`spreadsheet`:e.startsWith(v)?`document`:e.startsWith(y)?`batch`:null}function N(e){if(!e.startsWith(y))return null;let t=e.indexOf(S);if(t===-1)return null;let n=t+15,r=e.indexOf(C,n);if(r===-1)return null;try{let t=JSON.parse(e.slice(n,r));return Array.isArray(t.edits)?t.edits:null}catch{return null}}function P(e){return e.match(/\nFile: (.+)/)?.[1]?.trim()??null}function F(e){let t=e.indexOf(`Selected text:
`);if(t===-1)return null;let n=t+15,r=e.indexOf(`\n\n${b}`,n);return r===-1?e.slice(n).trim():e.slice(n,r).trim()}function I(e){return e.match(/\nRange: (.+)/)?.[1]?.trim()??null}function L(e){let t=e.match(/\nPage: (\d+)/);return t?Number(t[1]):null}function R(e){return e.match(/\nSheet: (.+)/)?.[1]?.trim()??null}export{I as a,L as c,h as d,d as f,N as i,F as l,p as m,M as n,P as o,m as p,A as r,j as s,D as t,R as u};
//# sourceMappingURL=inlineEditQuery-2pgjLxUW.js.map