const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["/assets/jszip.min-DyOovIWF.js","/assets/rolldown-runtime-CNgF_TGW.js","/assets/pptxgen.es-C4lAFSHO.js","/assets/vite-H_-x8riO.js"])))=>i.map(i=>d[i]);
import{o as e}from"./rolldown-runtime-CNgF_TGW.js";import{$ as t}from"./vendors-B0VRXiug.js";import{$a as n,Nt as r,co as i,fi as a,pi as o,so as s,ua as c}from"./platform-core-D8IQmtf1.js";import{f as l}from"./aether-core-6TfbVOZ_.js";import{t as u}from"./vite-H_-x8riO.js";import{i as d}from"./pplx-icons-DwPCRnON.js";import{t as f}from"./ToastStateProviderSupport-Dghs5-qh.js";import{t as p}from"./client-DZVz6653.js";import{_ as m,c as h}from"./fileUtils-eo7gLtW_.js";import{i as ee,r as te,s as ne}from"./utils-Bt3ocwYf.js";import{n as g}from"./analytics-aTYSPuUl.js";import{g as _,h as v,m as y}from"./useAssetInfo-CwEhbUkJ.js";import{n as re}from"./assetContentUtils-DHs2K9Xi.js";import{n as ie}from"./browserDownload-Bd57KwIE.js";import{o as b}from"./artifactDownload-CHAm4Dth.js";import{t as ae}from"./useDownloadS3FileAsset-SjR4878R.js";import{i as oe}from"./assetTypeGuards-GG2WS33f.js";import{t as x}from"./purify.es-BjbF71rm.js";import{i as S}from"./connectorMutations-1KJIYQ9t.js";var C=e(t(),1),w=e=>{if(e){if(e.app)return e.app.final;if(e.xlsx_file)return e.xlsx_file.final;if(e.doc_file)return e.doc_file.final;if(e.research_report)return e.research_report.final}},T=e=>e.xlsxAsset?.name||e.researchReportAsset?.name||e.pdfAsset?.name||e.docxAsset?.name||e.docFileAsset?.name||e.codeFileAsset?.name||e.slideFileAsset?.name||e.audioFileAsset?.name||e.model3DAsset?.name||e.visualizationAsset?.name||e.app?.name||null,se=(e,t)=>{let n=h(t),r=T(e);return m(!r||!n?t:h(r)===n?r:`${r}.${n}`)},ce=e=>(0,C.useMemo)(()=>{if(!e)return{app:null,pdfAsset:null,docxAsset:null,docFileAsset:null,codeFileAsset:null,chartAsset:null,xlsxAsset:null,quizAsset:null,researchReportAsset:null,slideFileAsset:null,audioFileAsset:null,model3DAsset:null,visualizationAsset:null,pdfFileData:null,assetType:null,assetUuid:null};let t=e.pdf_file||null,n=t&&t.url?{url:t.url,name:t.name||`Document`}:null,r=e.app;return r&&={...r,transforms:r.transforms||[]},{app:r||null,pdfAsset:t,docxAsset:e.docx_file||null,docFileAsset:e.doc_file||null,codeFileAsset:e.code_file||null,chartAsset:e.chart||null,xlsxAsset:e.xlsx_file||null,quizAsset:e.quiz||null,researchReportAsset:e.research_report||null,slideFileAsset:e.slide_file||null,audioFileAsset:e.audio_file||null,model3DAsset:e.model_3d||null,visualizationAsset:e.visualization||null,pdfFileData:n,assetType:e.asset_type??null,assetUuid:e.uuid??null}},[e]),E=async({url:e,filename:t,format:n,reason:r})=>{let{data:a,error:o,response:s}=await b.POST(`/rest/deeper-research/export-asset`,r,{body:{url:e,filename:t,format:n},timeoutMs:6e4,numRetries:1,parseAs:`blob`});if(o)throw c.error(`Failed to export asset`,{format:n,filenameLength:t.length,hasSourceUrl:e.length>0,status:s.status??0}),new i(`API_CLIENTS_ERROR`,{message:`Failed to export asset`,cause:o,status:s.status??0});return a},D=`section.slide`,O=.75,k=1920,A=1080,j=.85;function le(){return new Map}function M(e){return/(repeating-)?(linear|radial|conic)-gradient\(/.test(e)}function N(e){let t=e.match(/#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})/);if(t)return t[0];let n=e.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);return n?`rgb(${n[1]}, ${n[2]}, ${n[3]})`:null}function P(e,t,n,r){let i=t.match(/linear-gradient\(([^,]+),/),a=180;if(i?.[1]){let e=i[1].trim();e.includes(`deg`)?a=parseFloat(e):e===`to top`?a=0:e===`to right`?a=90:e===`to bottom`?a=180:e===`to left`?a=270:e===`to top right`?a=45:e===`to bottom right`?a=135:e===`to bottom left`?a=225:e===`to top left`&&(a=315)}let o=(a-90)*Math.PI/180,s=n/2-Math.cos(o)*n/2,c=r/2-Math.sin(o)*r/2,l=n/2+Math.cos(o)*n/2,u=r/2+Math.sin(o)*r/2;return e.createLinearGradient(s,c,l,u)}function F(e,t,n){return e.createRadialGradient(t/2,n/2,0,t/2,n/2,Math.max(t,n)/2)}function ue(e,t,n,r){let i=t.match(/conic-gradient\(from\s+([\d.]+)deg/),a=((i?.[1]?parseFloat(i[1]):0)-90)*Math.PI/180;return e.createConicGradient(a,n/2,r/2)}function de(e,t=k,n=A,r){let i=`${e}:${t}x${n}`;if(r){let e=r.get(i);if(e)return e}try{let a=document.createElement(`canvas`);a.width=t,a.height=n;let o=a.getContext(`2d`);if(!o||e.includes(`repeating-`))return null;let s=e.includes(`linear-gradient`),c=e.includes(`radial-gradient`),l=e.includes(`conic-gradient`);if(!s&&!c&&!l)return null;let u;u=s?P(o,e,t,n):c?F(o,t,n):ue(o,e,t,n);let d=Array.from(e.matchAll(/(rgba?\([^)]+\)|#[0-9A-Fa-f]{3,6})\s+([\d.]+)(deg|%)/g));if(d.length===0)return null;d.forEach(e=>{let t=e[1],n=e[2],r=e[3];if(!t||!n||!r)return;let i;i=r===`%`?parseFloat(n)/100:parseFloat(n)/360,u.addColorStop(Math.max(0,Math.min(1,i)),t)}),o.fillStyle=u,o.fillRect(0,0,t,n);let f=a.toDataURL(`image/jpeg`,j);return r&&r.set(i,f),f}catch{return null}}var I=`[Content_Types].xml`,L=`application/vnd.openxmlformats-officedocument.presentationml.presentation`;async function R(t){let n,r;try{n=(await u(async()=>{let{default:t}=await import(`./jszip.min-DyOovIWF.js`).then(t=>e(t.t(),1));return{default:t}},__vite__mapDeps([0,1]),import.meta.url)).default,r=await n.loadAsync(await t.arrayBuffer())}catch{return t}let i=[],a=!1,o=Object.values(r.files);for(let e of o){if(e.dir)continue;let t=await e.async(`uint8array`);e.name===I&&(a=!0),i.push({path:e.name,data:t})}if(!a)return t;let s=new n,c=i.find(e=>e.path===I);c&&s.file(c.path,c.data,{createFolders:!1});for(let e of i)e.path!==I&&s.file(e.path,e.data,{createFolders:!1});for(let e of Object.keys(s.files))s.files[e]?.dir&&s.remove(e);return await s.generateAsync({type:`blob`,mimeType:L,compression:`DEFLATE`,compressionOptions:{level:6}})}var z=`
/* ========== CSS Variables ========== */
:root {
  /* Typography */
  --font-family-display: Arial, sans-serif;
  --font-weight-display: 600;
  --font-family-content: Arial, sans-serif;
  --font-weight-content: 400;
  --font-size-content: 16px;
  --line-height-content: 1.4;

  /* Colors - Surface */
  --color-surface: #ffffff;
  --color-surface-foreground: #1d1d1d;

  /* Colors - Primary */
  --color-primary: #1791e8;
  --color-primary-foreground: #fafafa;

  /* Colors - Secondary */
  --color-secondary: #f5f5f5;
  --color-secondary-foreground: #171717;

  /* Colors - Utility */
  --color-muted: #f5f5f5;
  --color-muted-foreground: #737373;
  --color-accent: #f5f5f5;
  --color-accent-foreground: #171717;
  --color-border: #c8c8c8;

  /* Spacing & Layout */
  --spacing: 0.25rem;
  --gap: calc(var(--spacing) * 4);
  --radius: 0.4rem;
  --radius-pill: 999em;
}

/* ========== Base Reset ========== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ========== Slide Container ========== */
section.slide {
  width: 960px !important;
  height: 540px !important;
  overflow: hidden;
  font-family: var(--font-family-content);
  font-weight: var(--font-weight-content);
  font-size: var(--font-size-content);
  line-height: var(--line-height-content);
  color: var(--color-surface-foreground);
  background: var(--color-surface);
  display: flex;
  margin: 0;
  padding: 0;
  position: relative;
}

/* Body for single slide mode */
body {
  width: 960px;
  height: 540px;
  overflow: hidden;
  font-family: var(--font-family-content);
  font-weight: var(--font-weight-content);
  font-size: var(--font-size-content);
  line-height: var(--line-height-content);
  color: var(--color-surface-foreground);
  background: var(--color-surface);
  display: flex;
  margin: 0;
  padding: 0;
}

/* ========== Typography ========== */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family-display);
  font-weight: var(--font-weight-display);
  line-height: 1.2;
  margin: 0;
}

h1 { font-size: 3rem; }
h2 { font-size: 2.25rem; }
h3 { font-size: 1.875rem; }
h4 { font-size: 1.5rem; }
h5 { font-size: 1.25rem; }
h6 { font-size: 1.125rem; }

p { margin: 0; }

ul, ol {
  margin: 0;
  padding-left: 1.5em;
}

li {
  margin: 0.25em 0;
}

/* ========== Layout System ========== */

/* Container Classes */
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
}

.col {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
}

/* Flex Item Behavior */
.fill-width {
  flex: 1;
  align-self: stretch;
}

.fill-height {
  flex: 1;
  align-self: stretch;
}

.row .fill-width {
  flex: 1;
}

.col .fill-height {
  flex: 1;
}

.items-fill-width > * {
  flex: 1;
  align-self: stretch;
}

.items-fill-height > * {
  flex: 1;
  align-self: stretch;
}

.fit {
  flex: none;
  align-self: auto;
}

.fit-width {
  flex: none;
}

.fit-height {
  flex: none;
}

/* ========== Alignment ========== */

/* Container alignment */
.center {
  align-items: center;
  justify-content: center;
}

.start {
  align-items: flex-start;
  justify-content: flex-start;
}

.end {
  align-items: flex-end;
  justify-content: flex-end;
}

.stretch {
  align-items: stretch;
  justify-content: stretch;
}

.between {
  justify-content: space-between;
}

.around {
  justify-content: space-around;
}

.evenly {
  justify-content: space-evenly;
}

/* Self alignment */
.self-center {
  align-self: center;
}

.self-start {
  align-self: flex-start;
}

.self-end {
  align-self: flex-end;
}

.self-stretch {
  align-self: stretch;
}

/* ========== Spacing ========== */

/* Padding */
.p-0 { padding: 0; }
.p-2 { padding: calc(var(--spacing) * 2); }
.p-4 { padding: calc(var(--spacing) * 4); }
.p-6 { padding: calc(var(--spacing) * 6); }
.p-8 { padding: calc(var(--spacing) * 8); }
.p-12 { padding: calc(var(--spacing) * 12); }
.p-16 { padding: calc(var(--spacing) * 16); }
.p-24 { padding: calc(var(--spacing) * 24); }
.p-32 { padding: calc(var(--spacing) * 32); }

/* Gap */
.gap-0 { gap: 0; }
.gap-1 { gap: calc(var(--spacing) * 2); }
.gap-2 { gap: calc(var(--spacing) * 4); }
.gap-4 { gap: calc(var(--spacing) * 8); }
.gap-8 { gap: calc(var(--spacing) * 16); }
.gap-12 { gap: calc(var(--spacing) * 24); }
.gap-24 { gap: calc(var(--spacing) * 32); }

/* ========== Colors ========== */

/* Background colors */
.bg-primary {
  background-color: var(--color-primary);
  color: var(--color-primary-foreground);
}

.bg-secondary {
  background-color: var(--color-secondary);
  color: var(--color-secondary-foreground);
}

.bg-muted {
  background-color: var(--color-muted);
  color: var(--color-muted-foreground);
}

.bg-accent {
  background-color: var(--color-accent);
  color: var(--color-accent-foreground);
}

/* Text colors */
.text-primary {
  color: var(--color-primary);
}

.text-muted {
  color: var(--color-muted-foreground);
}

/* ========== Utilities ========== */

.rounded {
  border-radius: var(--radius);
}

.rounded-lg {
  border-radius: calc(var(--radius) * 2);
}

.rounded-full {
  border-radius: var(--radius-pill);
}

.shadow {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.shadow-lg {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.border {
  border: 1px solid var(--color-border);
}

/* Text alignment */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }

/* Font sizes */
.text-xs { font-size: 0.75rem; }
.text-sm { font-size: 0.875rem; }
.text-base { font-size: 1rem; }
.text-lg { font-size: 1.125rem; }
.text-xl { font-size: 1.25rem; }
.text-2xl { font-size: 1.5rem; }
.text-3xl { font-size: 1.875rem; }
.text-4xl { font-size: 2.25rem; }
.text-5xl { font-size: 3rem; }

/* Font weights */
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }

/* Display */
.hidden { display: none; }
.block { display: block; }
.inline { display: inline; }
.inline-block { display: inline-block; }
.flex { display: flex; }
`,B=`
  position: fixed !important;
  left: -10000px !important;
  top: -10000px !important;
  width: 1920px !important;
  height: 1080px !important;
  border: none !important;
  visibility: hidden !important;
  pointer-events: none !important;
  opacity: 0 !important;
  display: block !important;
`,V=[`script`,`iframe`,`object`,`embed`,`foreignobject`],fe=new Set([`action`,`data`,`formaction`,`href`,`poster`,`src`,`xlink:href`]),pe=`default-src 'none'; img-src data: blob: https: http:; style-src 'unsafe-inline'; font-src data: https:; script-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'`;function me(e,t){let n=0;for(;n<t.length&&t.charCodeAt(n)<=32;)n++;return fe.has(e)&&t.slice(n).toLowerCase().startsWith(`javascript:`)}function he(e){let t=new DOMParser().parseFromString(e,`text/html`);t.querySelectorAll(V.join(`,`)).forEach(e=>{e.remove()}),t.querySelectorAll(`*`).forEach(e=>{Array.from(e.attributes).forEach(t=>{let n=t.name.toLowerCase();(n.startsWith(`on`)||n===`srcdoc`||me(n,t.value))&&e.removeAttribute(t.name)})});let n=t.createElement(`meta`);return n.setAttribute(`http-equiv`,`Content-Security-Policy`),n.setAttribute(`content`,pe),t.head.prepend(n),`<!doctype html>\n${t.documentElement.outerHTML}`}function ge(e){let t=x.sanitize(e,{WHOLE_DOCUMENT:!0,RETURN_TRUSTED_TYPE:!1,USE_PROFILES:{html:!0},FORBID_TAGS:V,FORBID_ATTR:[`srcdoc`],ALLOW_UNKNOWN_PROTOCOLS:!1});return he(String(t))}function H(){let e=document.createElement(`iframe`);return e.style.cssText=B,e.setAttribute(`aria-hidden`,`true`),e.setAttribute(`sandbox`,`allow-same-origin`),document.body.appendChild(e),e}function U(e,t){let n=e.contentDocument||e.contentWindow?.document;if(!n)throw Error(`Failed to access iframe document`);n.open(),n.write(ge(t)),n.close();let r=n.body;if(!r)throw Error(`Failed to access iframe body after writing HTML`);if(r.style.width=`1920px`,r.style.height=`1080px`,r.style.margin=`0`,r.style.padding=`0`,!n.querySelector(`style`)){let e=n.createElement(`style`);e.textContent=z,n.head?n.head.appendChild(e):r.insertBefore(e,r.firstChild)}return{container:r,iframeDoc:n}}var W=e=>e/96,G=e=>parseFloat(e)*O,K=e=>{if(!e||e===`transparent`||e===`rgba(0, 0, 0, 0)`)return`FFFFFF`;let t=e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!t){let t=e.match(/#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})/);if(t&&t[1]){let e=t[1];return e.length===3?e.split(``).map(e=>e+e).join(``).toUpperCase():e.toUpperCase()}return`000000`}return t.slice(1,4).map(e=>parseInt(e).toString(16).padStart(2,`0`)).join(``).toUpperCase()},_e=e=>{if(!e)return null;let t=e.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);if(!t||!t[4])return null;let n=parseFloat(t[4]);return Math.round((1-n)*100)},ve=(e,t)=>{let n=(e.ownerDocument.defaultView||window).getComputedStyle(e),r=n.backgroundImage,i=n.backgroundColor;if((i===`rgba(0, 0, 0, 0)`||i===`transparent`)&&e.className.includes(`bg-`)){let t=e.className.match(/bg-(\w+)/);if(t){let n=t[0],r=e.ownerDocument.querySelectorAll(`style`),a=``;r.forEach(e=>{let t=e.textContent||``,r=Array.from(t.matchAll(/--color-(\w+):\s*([^;]+);/g)),i={};for(let e of r)i[`--color-${e[1]}`]=e[2]?.trim()||``;let o=RegExp(`\\.${n}\\s*{[^}]*background-color:\\s*([^;]+);`,`s`),s=t.match(o);if(s){let e=s[1]?.trim()||``;if(e.startsWith(`var(`)){let t=e.match(/var\((--[^)]+)\)/)?.[1];t&&i[t]&&(e=i[t])}if(e.startsWith(`#`)){let t=e.substring(1);t.length===3&&(t=t.split(``).map(e=>e+e).join(``)),a=`rgb(${parseInt(t.substring(0,2),16)}, ${parseInt(t.substring(2,4),16)}, ${parseInt(t.substring(4,6),16)})`}else a=e}}),a&&(i=a)}}if(r&&r!==`none`)if(M(r)){let n=e.getBoundingClientRect(),a=de(r,Math.round(n.width)||1920,Math.round(n.height)||1080,t);if(a)return{gradient:a};{let e=N(r);e&&(i=e)}}else{let e=r.match(/url\(["']?([^"')]+)["']?\)/);if(e&&e[1])return{path:e[1]}}return{color:K(i)}},q=e=>(e.ownerDocument.defaultView||window).getComputedStyle(e),ye=e=>((e||`Arial`).split(`,`)[0]||`Arial`).replace(/['"]/g,``).trim(),be=e=>e===`bold`||parseInt(e||`400`)>=600,xe=e=>e===`italic`,J=e=>{let t=e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);return!t||!t[1]||!t[2]||!t[3]?null:{r:parseInt(t[1]),g:parseInt(t[2]),b:parseInt(t[3]),a:t[4]?parseFloat(t[4]):1}},Se=(e,t)=>{let n=J(e),r=J(t);return!n||!r?null:K(`rgb(${Math.round(n.r*n.a+r.r*(1-n.a))}, ${Math.round(n.g*n.a+r.g*(1-n.a))}, ${Math.round(n.b*n.a+r.b*(1-n.a))})`)},Y=e=>!!e&&e!==`rgba(0, 0, 0, 0)`&&e!==`transparent`,Ce=(e,t)=>{for(let n of e){let e=n.backgroundColor;if(Y(e)){let n=J(e);return n&&n.a<1?Se(e,t)??void 0:K(e)}}},we=e=>{if(e.borderBottomWidth&&parseFloat(e.borderBottomWidth)>0){let t={type:`none`};return[t,t,{pt:parseFloat(e.borderBottomWidth),color:K(e.borderBottomColor)},t]}},Te=e=>{if(!e||e===`none`||e.match(/inset/))return null;let t=e.match(/rgba?\([^)]+\)/),n=e.match(/([-\d.]+)(px|pt)/g);if(!n||n.length<2)return null;let r=parseFloat(n[0]),i=parseFloat(n[1]||`0`),a=n.length>2?parseFloat(n[2]||`0`):0,o=0;(r!==0||i!==0)&&(o=180/Math.PI*Math.atan2(i,r),o<0&&(o+=360));let s=Math.sqrt(r*r+i*i)*O,c=.5;if(t){let e=t[0].match(/[\d.]+\)$/);e&&(c=parseFloat(e[0].replace(`)`,``)))}return{type:`outer`,angle:Math.round(o),blur:a*.75,color:t?K(t[0]):`000000`,offset:s,opacity:c}},X=(e,t={})=>{let n=[],r=!1;e.childNodes.forEach(e=>{let i=e.nodeType===Node.TEXT_NODE||e.tagName===`BR`;if(i){let i=e.tagName===`BR`?`
`:(e.nodeValue||e.textContent||``).replace(/\s+/g,` `),a=n[n.length-1];r&&a&&a.text?a.text+=i:n.push({text:i,options:{...t}})}else if(e.nodeType===Node.ELEMENT_NODE&&e.textContent?.trim()){let r=e,i={...t},a=(r.ownerDocument.defaultView||window).getComputedStyle(r);if([`SPAN`,`B`,`STRONG`,`I`,`EM`,`U`].includes(r.tagName)){if((a.fontWeight===`bold`||parseInt(a.fontWeight)>=600)&&(i.bold=!0),a.fontStyle===`italic`&&(i.italic=!0),a?.textDecoration?.includes(`underline`)&&(i.underline={style:`sng`}),a.color&&a.color!==`rgb(0, 0, 0)`){i.color=K(a.color);let e=_e(a.color);e!==null&&(i.transparency=e)}a?.fontSize&&(i.fontSize=G(a.fontSize)),X(r,i).forEach(e=>n.push(e))}}r=i});let i=n?.[0];if(i&&i.text){i.text=i.text.replace(/^\s+/,``);let e=n?.[n.length-1];e&&e.text&&(e.text=e.text.replace(/\s+$/,``))}return n.filter(e=>e.text&&e.text.length>0)},Ee=e=>{if(e.display===`flex`){let t=e.alignItems;if(t===`center`)return`middle`;if(t===`flex-end`)return`bottom`}else{let t=e.verticalAlign;if(t===`middle`)return`middle`;if(t===`bottom`)return`bottom`}return`top`},De=e=>{let t=e.textAlign,n=e.direction;return t===`left`||t===`right`||t===`center`||t===`justify`?t:t===`start`?n===`rtl`?`right`:`left`:t===`end`?n===`rtl`?`left`:`right`:`center`},Oe=e=>{let t=e.whiteSpace;return!(t===`nowrap`||t===`pre`)},ke=e=>{let t=e.overflow,n=e.textOverflow;return t===`hidden`&&n===`ellipsis`?`none`:`shrink`},Ae=e=>{let t=parseFloat(e.paddingLeft)||0,n=parseFloat(e.paddingRight)||0,r=parseFloat(e.paddingTop)||0,i=parseFloat(e.paddingBottom)||0;return G(Math.max(t,n,r,i).toString())},je=e=>({fontSize:G(e.fontSize),fontFace:((e.fontFamily||`Arial`).split(`,`)[0]||`Arial`).replace(/['"]/g,``).trim(),color:K(e.color),bold:e?.fontWeight===`bold`||parseInt(e?.fontWeight||`400`)>=600,italic:e?.fontStyle===`italic`,align:De(e),valign:Ee(e),wrap:Oe(e),margin:Ae(e),fit:ke(e)}),Me=e=>{let t=[];return e.querySelectorAll(`.placeholder`).forEach(n=>{let r=n.getBoundingClientRect(),i=e.getBoundingClientRect();t.push({id:n.id||`placeholder-${t.length}`,x:W(r.left-i.left),y:W(r.top-i.top),w:W(r.width),h:W(r.height)})}),t},Ne=(e,t)=>{let n=[],r=e.getBoundingClientRect();return e.querySelectorAll(`IMG`).forEach(e=>{if(t.has(e))return;let i=e,a=e.getBoundingClientRect();a.width>0&&a.height>0&&(n.push({type:`image`,src:i.src,position:{x:W(a.left-r.left),y:W(a.top-r.top),w:W(a.width),h:W(a.height)}}),t.add(e))}),n},Pe=(e,t)=>{let n=[],r=e.getBoundingClientRect();return e.querySelectorAll(`DIV, SPAN`).forEach(e=>{if(t.has(e))return;let i=(e.ownerDocument.defaultView||window).getComputedStyle(e),a=i.backgroundColor&&i.backgroundColor!==`rgba(0, 0, 0, 0)`,o=parseFloat(i.borderWidth)>0;if(a||o){let s=e.getBoundingClientRect();if(s.width>0&&s.height>0){let c=i.boxShadow?Te(i.boxShadow):null,l=parseFloat(i.borderRadius)||0,u=``,d=!1,f;Array.from(e.children).length>0||(u=e.textContent?.trim()||``,d=u.length>0,d&&(f=je(i))),n.push({type:`shape`,text:u,position:{x:W(s.left-r.left),y:W(s.top-r.top),w:W(s.width),h:W(s.height)},style:f,shape:{fill:a?K(i.backgroundColor):null,transparency:a&&i.backgroundColor?_e(i.backgroundColor):null,line:o?{color:K(i.borderColor),width:G(i.borderWidth)}:null,rectRadius:l>0?l/10:0,shadow:c}}),d&&t.add(e)}}}),n},Fe=e=>{if(!e.textContent?.trim())return!1;let t=e.parentElement;return!(t&&[`P`,`H1`,`H2`,`H3`,`H4`,`H5`,`H6`,`LI`,`SPAN`].includes(t.tagName))},Ie=e=>{if(!e.textContent?.trim())return!1;let t=!1;if(e.childNodes.forEach(e=>{e.nodeType===Node.TEXT_NODE&&e.textContent?.trim()&&(t=!0)}),!t)return!1;let n=e.parentElement;return!(n&&[`P`,`H1`,`H2`,`H3`,`H4`,`H5`,`H6`,`LI`,`SPAN`].includes(n.tagName)||e.querySelectorAll(`P, H1, H2, H3, H4, H5, H6, UL, OL, DIV, SPAN`).length>0)},Le=(e,t)=>{let n=[],r=e.getBoundingClientRect();return e.querySelectorAll(`P, H1, H2, H3, H4, H5, H6, UL, OL, SPAN, DIV`).forEach(e=>{if(t.has(e)||e.tagName===`SPAN`&&!Fe(e)||e.tagName===`DIV`&&!Ie(e))return;let i=(e.ownerDocument.defaultView||window).getComputedStyle(e),a=e.getBoundingClientRect();if(a.width>0&&a.height>0){let o=G(i.fontSize),s=parseFloat(i.lineHeight)||o*1.2;if(e.tagName===`UL`||e.tagName===`OL`){let c=Array.from(e.querySelectorAll(`li`)),l=[];c.forEach((e,n)=>{let r=n===c.length-1,i=X(e);if(i.length>0){let e=i[0];if(!e)return;if(e.text&&=e.text.replace(/^[•\-*▪▸]\s*/,``),e.options||={},e.options.bullet=!0,!r){let e=i[i.length-1];if(!e)return;e.options||={},e.options.breakLine=!0}l.push(...i)}t.add(e)}),l.length>0&&(n.push({type:`list`,items:l,position:{x:W(a.left-r.left),y:W(a.top-r.top),w:W(a.width),h:W(a.height)},style:{fontSize:o,fontFace:((i.fontFamily||`Arial`).split(`,`)[0]||`Arial`).replace(/['"]/g,``).trim(),color:K(i.color),align:i.textAlign,lineSpacing:G(s.toString()),margin:0}}),t.add(e))}else{let c=X(e),l=c.length===1?c[0]?.text:c,u=a.height<=s*1.5,d=W(a.left-r.left),f=W(a.width);if(u){let e=a.width*.02,t=i.textAlign;t===`center`?(d=W(a.left-r.left-e/2),f=W(a.width+e)):(t===`right`&&(d=W(a.left-r.left-e)),f=W(a.width+e))}n.push({type:e.tagName.toLowerCase(),text:l,position:{x:d,y:W(a.top-r.top),w:f,h:W(a.height)},style:{fontSize:o,fontFace:((i.fontFamily||`Arial`).split(`,`)[0]||`Arial`).replace(/['"]/g,``).trim(),color:K(i.color),bold:i?.fontWeight===`bold`||parseInt(i?.fontWeight||`400`)>=600,italic:i?.fontStyle===`italic`,underline:i?.textDecoration?.includes(`underline`)?{style:`sng`}:void 0,align:i.textAlign,lineSpacing:G(s.toString()),margin:0}}),t.add(e)}}}),n},Re=e=>{let t=[];if(Array.from(e.children).length>0&&e.childNodes.forEach(n=>{if(n.nodeType===Node.TEXT_NODE){let r=n.textContent?.trim();if(r){let n=q(e);t.push({text:r,options:{color:K(n.color)}})}}else if(n.nodeType===Node.ELEMENT_NODE){let e=n,r=e.textContent?.trim();if(r){let n=q(e);t.push({text:r,options:{color:K(n.color)}})}}}),t.length===0){let n=e.textContent?.trim();if(n){let r=q(e);t.push({text:n,options:{color:K(r.color)}})}}return t},Z=(e,t,n)=>{let r=[];return e.forEach(e=>{let i=[],a=q(e);e.querySelectorAll(`th, td`).forEach(e=>{let r=e;i.push(ze(r,a,t,n))}),i.length>0&&r.push(i)}),r},ze=(e,t,n,r)=>{let i=q(e),a={text:Re(e),options:{fontSize:G(i.fontSize),fontFace:ye(i.fontFamily),bold:be(i.fontWeight),italic:xe(i.fontStyle),align:i.textAlign||`left`,valign:`middle`}},o=Ce([i,t,n].filter(e=>e!==null),r);o&&a.options&&(a.options.fill={color:o});let s=we(i);return s&&a.options&&(a.options.border=s),a},Be=(e,t)=>{let n=[],r=e.getBoundingClientRect(),i=q(e),a=Y(i.backgroundColor)?i.backgroundColor:`rgb(255, 255, 255)`;return e.querySelectorAll(`TABLE`).forEach(e=>{if(t.has(e))return;let i=e,o=e.getBoundingClientRect();if(o.width>0&&o.height>0){let s=[],c=i.parentElement,l=c?q(c):null,u=l&&Y(l.backgroundColor)?l.backgroundColor:a,d=i.querySelectorAll(`thead tr`),f=i.querySelector(`thead`),p=f?q(f):null;s.push(...Z(d,p,u));let m=i.querySelectorAll(`tbody tr`);if(s.push(...Z(m,null,u)),s.length===0){let e=i.querySelectorAll(`:scope > tr`);s.push(...Z(e,null,u))}s.length>0&&(n.push({type:`table`,rows:s,position:{x:W(o.left-r.left),y:W(o.top-r.top),w:W(o.width),h:W(o.height)}}),t.add(e),i.querySelectorAll(`*`).forEach(e=>t.add(e)))}}),n};function Ve(e,t){let n=[],r=new Set,i=ve(e,t),a=Me(e);a.forEach(t=>{let n=e.querySelector(`#${t.id}`);n&&r.add(n)});let o=Pe(e,r),s=Ne(e,r),c=Be(e,r),l=Le(e,r);return{background:i,elements:[...o,...s,...c,...l],placeholders:a,errors:n}}function He(e,t,n){`gradient`in e.background?t.addImage({data:e.background.gradient,x:0,y:0,w:`100%`,h:`100%`}):t.background=e.background;for(let r of e.elements)switch(r.type){case`table`:r.rows&&r.rows.length>0&&t.addTable(r.rows,{x:r.position.x,y:r.position.y,w:r.position.w,h:r.position.h,autoPage:!1,border:{type:`none`}});break;case`image`:t.addImage({path:r.src,x:r.position.x,y:r.position.y,w:r.position.w,h:r.position.h});break;case`shape`:{let e={x:r.position.x,y:r.position.y,w:r.position.w,h:r.position.h};r.shape&&r.shape.rectRadius>0?(e.shape=n.ShapeType.roundRect,e.rectRadius=r.shape.rectRadius):e.shape=n.ShapeType.rect,r.shape?.fill&&(e.fill={color:r.shape.fill},r.shape.transparency!=null&&(e.fill.transparency=r.shape.transparency)),r.shape?.line&&(e.line=r.shape.line),r.shape?.shadow&&(e.shadow=r.shape.shadow),r.style&&(r.style.fontSize&&(e.fontSize=r.style.fontSize),r.style.fontFace&&(e.fontFace=r.style.fontFace),r.style.color&&(e.color=r.style.color),r.style.bold&&(e.bold=r.style.bold),r.style.italic&&(e.italic=r.style.italic),r.style.align&&(e.align=r.style.align),r.style.valign&&(e.valign=r.style.valign)),e.wrap=r.style?.wrap??!1,e.fit=r.style?.fit??`shrink`,e.margin=r.style?.margin??0,t.addText(r.text||``,e);break}case`list`:{let e={x:r.position.x,y:r.position.y,w:r.position.w,h:r.position.h,fontSize:r.style?.fontSize,fontFace:r.style?.fontFace,color:r.style?.color,align:r.style?.align,valign:`top`,lineSpacing:r.style?.lineSpacing,margin:r.style?.margin};t.addText(r.items??``,e);break}case`p`:case`h1`:case`h2`:case`h3`:case`h4`:case`h5`:case`h6`:{let e={x:r.position.x,y:r.position.y,w:r.position.w,h:r.position.h,fontSize:r.style?.fontSize,fontFace:r.style?.fontFace,color:r.style?.color,bold:r.style?.bold,italic:r.style?.italic,underline:r.style?.underline,valign:`top`,align:r.style?.align,lineSpacing:r.style?.lineSpacing,inset:0};t.addText(r.text??``,e);break}default:{let e={x:r.position.x,y:r.position.y,w:r.position.w,h:r.position.h,fontSize:r.style?.fontSize,fontFace:r.style?.fontFace,color:r.style?.color,bold:r.style?.bold,italic:r.style?.italic,underline:r.style?.underline,valign:`top`,align:r.style?.align,lineSpacing:r.style?.lineSpacing,inset:0};t.addText(r.text??``,e)}}}async function Q(e,t,n,r=!1,i){r&&t.querySelectorAll(`img`).forEach(e=>e.remove());let a=t.querySelectorAll(D);if(a.length===0&&(a=t.querySelectorAll(`.slide`)),a.length>0)for(let t=0;t<a.length;t++){let n=a[t],o=Ve(n,i);r&&(o={...o,elements:o.elements.filter(e=>e.type!==`image`)});let s=e.addSlide();He(o,s,e)}else{let a=n.createElement(`section`);a.className=`slide`,a.innerHTML=t.innerHTML,t.innerHTML=``,t.appendChild(a);let o=n.createElement(`style`);o.textContent=z,t.insertBefore(o,t.firstChild),await new Promise(e=>setTimeout(e,100));let s=Ve(a,i);r&&(s={...s,elements:s.elements.filter(e=>e.type!==`image`)});let c=e.addSlide();He(s,c,e)}}function Ue(e,t){let n=URL.createObjectURL(e);try{let e=document.createElement(`a`);e.href=n,e.download=t,document.body.appendChild(e),e.click(),document.body.removeChild(e)}finally{setTimeout(()=>URL.revokeObjectURL(n),0)}}async function We(e,t=`exported-slides.pptx`){c.warn(`canvas.slides.pptx_generation_fallback`,{destination:`download`});let n=H(),r=le();try{let{container:i,iframeDoc:a}=U(n,e);await new Promise(e=>setTimeout(e,300));let o=new(await(u(()=>import(`./pptxgen.es-C4lAFSHO.js`),__vite__mapDeps([2,1,3,0]),import.meta.url))).default;o.layout=`LAYOUT_16x9`,o.author=`Perplexity`,o.title=`Converted Presentation`,o.company=`Perplexity AI`;let s;try{await Q(o,i,a,!1,r),s=await o.write({outputType:`blob`})}catch(e){c.warn(`PPTX export failed with images, retrying without images`,{error:e}),o=new(await(u(()=>import(`./pptxgen.es-C4lAFSHO.js`),__vite__mapDeps([2,1,3,0]),import.meta.url))).default,o.layout=`LAYOUT_16x9`,o.author=`Perplexity`,o.title=`Converted Presentation`,o.company=`Perplexity AI`,await Q(o,i,a,!0,r),s=await o.write({outputType:`blob`})}Ue(await R(s),t||`exported-slides.pptx`)}finally{document.body.removeChild(n),r.clear()}}async function Ge(e,t=`slides.pptx`){try{await We(e,t)}catch(e){throw c.error(`Failed to export slides to PPTX`,{error:e}),Error(`Failed to export slides to PowerPoint format`)}}async function Ke(e){let t=H();try{let{container:n,iframeDoc:r}=U(t,e);await new Promise(e=>setTimeout(e,300));let i=new(await(u(()=>import(`./pptxgen.es-C4lAFSHO.js`),__vite__mapDeps([2,1,3,0]),import.meta.url))).default;i.layout=`LAYOUT_16x9`,i.author=`Perplexity`,i.title=`Converted Presentation`,i.company=`Perplexity AI`;try{return await Q(i,n,r,!1),await R(await i.write({outputType:`blob`}))}catch{return i=new(await(u(()=>import(`./pptxgen.es-C4lAFSHO.js`),__vite__mapDeps([2,1,3,0]),import.meta.url))).default,i.layout=`LAYOUT_16x9`,i.author=`Perplexity`,i.title=`Converted Presentation`,i.company=`Perplexity AI`,await Q(i,n,r,!0),await R(await i.write({outputType:`blob`}))}}finally{t.parentNode&&document.body.removeChild(t)}}function qe(e){return new Promise((t,n)=>{let r=new FileReader;r.onloadend=()=>{if(typeof r.result==`string`){let e=r.result.split(`,`)[1];e?t(e):n(Error(`Failed to extract base64 from data URL`))}else n(Error(`Failed to convert blob to base64`))},r.onerror=n,r.readAsDataURL(e)})}async function Je({htmlContent:e,filename:t,saveFile:n,targetMimeType:r}){let i=await Ke(e);if(!i)throw Error(`Failed to generate PPTX file`);let a=await qe(i);return{webViewLink:(await n({fileName:t.endsWith(`.pptx`)?t:`${t}.pptx`,fileContentB64:a,mimeType:`application/vnd.openxmlformats-officedocument.presentationml.presentation`,targetMimeType:r,connectionType:`GOOGLE_DRIVE`})).web_view_link}}var Ye=({reason:e})=>{let{$t:t}=o(),{openToast:n}=f(),r=(0,C.useCallback)(async r=>{try{let i=await S({name:r,reason:e,autoClose:!0});if(!i)return n({message:t({defaultMessage:`Unable to start authentication.`,id:`a9887a2a82`}),variant:`error`,timeout:3}),!1;let a=window.screenX+(window.outerWidth-600)/2,o=window.screenY+(window.outerHeight-700)/2,s=window.open(i,`oauth-popup`,`width=600,height=700,left=${a},top=${o},popup=yes,noopener=no`);return s?new Promise(t=>{let n=setInterval(()=>{s.closed&&(clearInterval(n),c.info(`OAuth popup closed`,{connectorName:r,reason:e}),t(!0))},500);setTimeout(()=>{clearInterval(n),s.closed||(s.close(),c.warn(`OAuth popup timeout`,{connectorName:r,reason:e}),t(!1))},300*1e3)}):(n({message:t({defaultMessage:`Please allow popups to connect your account.`,id:`b9b88c5e37`}),variant:`error`,timeout:3}),!1)}catch(i){return c.error(`Failed to start OAuth flow`,{error:i,connectorName:r,reason:e}),n({message:t({defaultMessage:`Failed to connect account. Please try again.`,id:`9a72d4612c`}),variant:`error`,timeout:3}),!1}},[e,t,n]);return(0,C.useMemo)(()=>({startOAuthFlow:r}),[r])},Xe=({reason:e})=>{let[t,n]=(0,C.useState)(!1),r=(0,C.useCallback)(async t=>{n(!0);try{let{data:n,error:r}=await p.POST(`/rest/connectors/save-file`,e,{body:{file_name:t.fileName,asset_id:t.assetId,file_content_b64:t.fileContentB64,mime_type:t.mimeType,target_mime_type:t.targetMimeType,connection_type:t.connectionType,parent_remote_id:t.parentRemoteId},timeoutMs:s()});if(r){c.error(`Failed to save file to connector`,{error:r,request:t,errorMessage:r instanceof Error?r.message:`Unknown error`});let e=r.detail;return{success:!1,errorCode:e?.error_code,errorMessage:e?.error_message||`Failed to save file`}}return n?{success:n.success,webViewLink:n.web_view_link??void 0,errorCode:n.error_code??void 0,errorMessage:n.error_message??void 0}:{success:!1,errorMessage:`No response from server`}}catch(e){return c.error(`Unexpected error saving file to connector`,{err:e,request:t,errorMessage:e instanceof Error?e.message:`Unknown error`}),{success:!1,errorMessage:e instanceof Error?e.message:`Unknown error`}}finally{n(!1)}},[e]);return(0,C.useMemo)(()=>({saveFile:r,isLoading:t}),[r,t])};async function Ze(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let e=r.result;if(typeof e!=`string`){n(Error(`Unexpected FileReader result type`));return}let i=e.indexOf(`,`);t(i>=0?e.slice(i+1):e)},r.onerror=()=>n(r.error??Error(`Failed to read blob`)),r.readAsDataURL(e)})}var $=a({docx:{defaultMessage:`Word (.docx)`,id:`8f2db59feb`},pptx:{defaultMessage:`PowerPoint (.pptx)`,id:`c80ac86aae`},xlsx:{defaultMessage:`Excel (.xlsx)`,id:`f051897198`},googleDoc:{defaultMessage:`Google Doc`,id:`b0f2006be7`},googleSheet:{defaultMessage:`Google Sheet`,id:`92cbc907a7`},googleSlides:{defaultMessage:`Google Slides`,id:`14ba1b946d`}});function Qe({asset:e,assetResult:t,fileHandleResponse:i,previewFile:a}){let s=ce(e),u=[],{track:p}=l(),{$t:b}=o(),{openToast:x,closeToast:S}=f(),[w,D]=(0,C.useState)(!1),O=r(),k=e=>b({defaultMessage:`Save to Drive as {fileType}`,id:`5b45baaf17`},{fileType:e}),A=(e,t)=>{let n=$[t?.toLowerCase()];return n?b(n):_(e,t)},j=n(ee(e)??e?.visualization?.url)?.pathname,{downloadMediaAsset:le}=ae({reason:`canvas-pdf-download`}),{saveFile:M}=Xe({reason:`canvas-export-to-drive`}),{startOAuthFlow:N}=Ye({reason:`canvas-export-to-drive`}),P=(0,C.useCallback)(async(n,r)=>{if(!w){D(!0);try{let i=se(s,n.filename==null?`download`:n.filename),a=await M({fileName:i,assetId:e?.uuid??``,connectionType:`GOOGLE_DRIVE`,targetMimeType:r});if(a.errorCode===`MISSING_SCOPE`||a.errorCode===`ACCOUNT_NOT_CONNECTED`||a.errorCode===`AUTH_ERROR`)if(await N(`google_drive`))a=await M({fileName:i,assetId:e?.uuid??``,connectionType:`GOOGLE_DRIVE`,targetMimeType:r});else return;if(a.success&&a.webViewLink)t&&e&&e.asset_type!=null&&p(g({name:`canvas content downloaded`,data:{entryUUID:t.backend_uuid,contentType:e.asset_type,assetUUID:e.uuid??``,downloadType:`export`}})),x({message:b({defaultMessage:`File exported to Google Drive`,id:`c6b6a5a271`}),variant:`success`,timeout:3}),window.open(a.webViewLink,`_blank`);else{let e=b({defaultMessage:`Failed to export file`,id:`7db59b9baa`});a.errorCode===`FILE_TOO_LARGE`?e=b({defaultMessage:`File exceeds 20MB limit for export`,id:`7fe67c1c9d`}):a.errorMessage&&(e=a.errorMessage),x({message:e,variant:`error`,timeout:3}),c.error(`Failed to export file to Drive`,{errorCode:a.errorCode,hasErrorMessage:a.errorMessage!=null,filenameLength:n.filename?.length??0})}}catch{c.error(`Unexpected error during export`,{filenameLength:n.filename?.length??0,size:n.size,isExportable:n.is_exportable,hasTextContent:n.text_content!=null,hasDownloadUrl:n.url!=null}),x({message:b({defaultMessage:`Failed to export file`,id:`7db59b9baa`}),variant:`error`,timeout:3})}finally{D(!1)}}},[s,w,M,N,t,e,p,b,x]),F=(0,C.useCallback)(async(n,r,i)=>{if(!w){D(!0);try{let a=await Je({htmlContent:n,filename:r,targetMimeType:i?.targetMimeType,saveFile:async e=>{let t=await M({...e});if(!t.success)throw Error(`Export failed: ${t.errorCode??`unknown error`}${t.errorMessage?` - ${t.errorMessage}`:``}`);return{web_view_link:t.webViewLink??``}}});t&&e&&e.asset_type!=null&&p(g({name:`canvas content downloaded`,data:{entryUUID:t.backend_uuid,contentType:e.asset_type,assetUUID:e.uuid??``,downloadType:`export`}})),x({message:b({defaultMessage:`Slides exported to Google Drive`,id:`7331299323`}),variant:`success`,timeout:3}),window.open(a.webViewLink,`_blank`)}catch(a){if(a instanceof Error&&(a.message.includes(`MISSING_SCOPE`)||a.message.includes(`ACCOUNT_NOT_CONNECTED`)||a.message.includes(`AUTH_ERROR`)))if(await N(`google_drive`))try{let a=await Je({htmlContent:n,filename:r,targetMimeType:i?.targetMimeType,saveFile:async e=>{let t=await M({...e});if(!t.success)throw Error(`Export failed: ${t.errorCode??`unknown error`}${t.errorMessage?` - ${t.errorMessage}`:``}`);return{web_view_link:t.webViewLink??``}}});t&&e&&e.asset_type!=null&&p(g({name:`canvas content downloaded`,data:{entryUUID:t.backend_uuid,contentType:e.asset_type,assetUUID:e.uuid??``,downloadType:`export`}})),x({message:b({defaultMessage:`Slides exported to Google Drive`,id:`7331299323`}),variant:`success`,timeout:3}),window.open(a.webViewLink,`_blank`);return}catch{c.error(`Failed to export slides after OAuth`,{filenameLength:r.length,hasTargetMimeType:i?.targetMimeType!=null})}else return;x({message:a instanceof Error&&a.message?a.message:b({defaultMessage:`Failed to export slides`,id:`c923c3cb0f`}),variant:`error`,timeout:3}),c.error(`Failed to export slides to Drive`,{filenameLength:r.length,hasTargetMimeType:i?.targetMimeType!=null})}finally{D(!1)}}},[w,M,N,t,e,p,b,x]),ue=(0,C.useCallback)(async n=>{if(w)return;D(!0);let r=x({message:b({defaultMessage:`Exporting {fileType} to Google Drive...`,id:`18b2979ef1`},{fileType:n.fileTypeText}),variant:`neutral`,iconOverride:d(`loader-2`),animateIcon:!0,timeout:null}),i=async e=>M({fileName:n.fileName,fileContentB64:e,connectionType:`GOOGLE_DRIVE`});try{let a=await Ze(await E({url:n.sourceUrl,filename:n.fileName,format:n.format,reason:n.reason})),o=await i(a);if(o.errorCode===`MISSING_SCOPE`||o.errorCode===`ACCOUNT_NOT_CONNECTED`||o.errorCode===`AUTH_ERROR`){if(!await N(`google_drive`)){S(r);return}o=await i(a)}if(S(r),o.success&&o.webViewLink)t&&e&&e.asset_type!=null&&p(g({name:`canvas content downloaded`,data:{entryUUID:t.backend_uuid,contentType:e.asset_type,assetUUID:e.uuid??``,downloadType:`export`}})),x({message:b({defaultMessage:`File exported to Google Drive`,id:`c6b6a5a271`}),variant:`success`,timeout:3}),window.open(o.webViewLink,`_blank`);else{let e=b({defaultMessage:`Failed to export file`,id:`7db59b9baa`});o.errorCode===`FILE_TOO_LARGE`?e=b({defaultMessage:`File exceeds 20MB limit for export`,id:`7fe67c1c9d`}):o.errorMessage&&(e=o.errorMessage),x({message:e,variant:`error`,timeout:3}),c.error(`Failed to export converted asset to Drive`,{errorCode:o.errorCode,hasErrorMessage:o.errorMessage!=null,format:n.format})}}catch{S(r),c.error(`Unexpected error converting and exporting asset to Drive`,{format:n.format,filenameLength:n.fileName.length,hasSourceUrl:n.sourceUrl.length>0}),x({message:b({defaultMessage:`Failed to export file`,id:`7db59b9baa`}),variant:`error`,timeout:3})}finally{D(!1)}},[w,M,N,t,e,p,b,x,S]),de=e=>{switch(e.kind){case`file`:return b({defaultMessage:`Download as file`,id:`acfc6bc395`});case`image`:return b({defaultMessage:`Download as image`,id:`5e3c531267`});case`audio`:return b({defaultMessage:`Download as audio`,id:`b593ae0888`});case`format`:return b({defaultMessage:`Download as {fileType}`,id:`7cdbe3360b`},{fileType:e.fileType})}},I=e=>{u.push({type:`default`,downloadType:`trigger`,text:de(e.fileType),icon:e.icon,category:`download`,onClick:e.onClick})},L=()=>{t&&e&&e.asset_type!=null&&p(g({name:`canvas content downloaded`,data:{entryUUID:t.backend_uuid,contentType:e.asset_type,assetUUID:e.uuid??``,downloadType:`download`}}))},R=e?.download_info?.some(e=>e.url&&n(e.url));if(i&&e?.asset_type===`UNKNOWN`&&!R&&(i.content!=null||i.link!=null&&n(i.link))){let t=h(i.filename),n=y(e?.asset_type??`UNKNOWN`,t);I({icon:v(t),fileType:n,onClick:()=>{if(L(),i.content!=null){te(document.body,i.filename,new Blob([re(i.content)],{type:i.media_type}));return}i.link&&ie(i.link,i.filename)}})}else if(a&&e?.asset_type===`UNKNOWN`&&!R){let t=h(a.filename),n=y(e.asset_type,t);I({icon:v(t),fileType:n,onClick:()=>{L(),te(document.body,a.filename,new Blob([a.content],{type:a.mediaType}))}})}let z=ne(e)&&oe(s),B=e?.download_info?.some(e=>e.filename?.endsWith(`.pptx`)&&e.url);if(z&&s.app.source_content&&!B){let e=T(s)||`slides`,t=m(`${e}.pptx`);u.push({type:`default`,downloadType:`trigger`,text:b({defaultMessage:`Download as PPTX`,id:`2a45c269d3`}),icon:d(`file-type-ppt`),category:`download`,onClick:async()=>{L();try{await Ge(s.app?.source_content??``,t)}catch{}}}),O&&(u.push({type:`default`,downloadType:`trigger`,text:k(b($.pptx)),icon:d(`brand-google-drive`),category:`export`,onClick:()=>{F(s.app?.source_content??``,e)}}),u.push({type:`default`,downloadType:`trigger`,text:k(b($.googleSlides)),icon:d(`brand-google-drive`),category:`export`,onClick:()=>{F(s.app?.source_content??``,e,{targetMimeType:`application/vnd.google-apps.presentation`})}}))}e?.download_info&&e.download_info.length>0&&e.download_info.forEach(t=>{if(!t.url||!n(t.url))return;let r=h(t.filename),i=v(r),a=e.asset_type??`UNKNOWN`,o=y(a,r),c=A(a,r),l=se(s,t.filename==null?`download`:t.filename);I({icon:i,fileType:o,onClick:()=>{L(),le(t.url??``,l,document.body,e.asset_type??void 0)}}),t.is_exportable&&O&&e.uuid&&n(t.url)?.pathname===j&&(u.push({type:`default`,downloadType:`trigger`,text:k(c),icon:d(`brand-google-drive`),category:`export`,onClick:()=>{P(t)}}),r===`xlsx`&&u.push({type:`default`,downloadType:`trigger`,text:k(b($.googleSheet)),icon:d(`brand-google-drive`),category:`export`,onClick:()=>{P(t,`application/vnd.google-apps.spreadsheet`)}}),r===`pptx`&&u.push({type:`default`,downloadType:`trigger`,text:k(b($.googleSlides)),icon:d(`brand-google-drive`),category:`export`,onClick:()=>{P(t,`application/vnd.google-apps.presentation`)}}),r===`docx`&&u.push({type:`default`,downloadType:`trigger`,text:k(b($.googleDoc)),icon:d(`brand-google-drive`),category:`export`,onClick:()=>{P(t,`application/vnd.google-apps.document`)}}))});let V=e?.asset_type===`RESEARCH_REPORT`&&e.research_report?.url||e?.asset_type===`DOC_FILE`&&e.doc_file?.filename?.toLowerCase().endsWith(`.md`)&&e.doc_file?.url||null;if(V&&e?.asset_type!=null){let t=e.asset_type===`RESEARCH_REPORT`,n=T(s)||(t?`report`:`document`),r=new Set(e.download_info?.filter(e=>e.url).map(e=>e.filename?.toLowerCase().split(`.`).pop())??[]);for(let i of[`docx`,`pdf`]){if(r.has(i))continue;let a=m(`${n}.${i}`),o=v(i),s=y(e.asset_type,i),l=_(e.asset_type,i),f=A(e.asset_type,i),p=t?`canvas-research-report-export`:`canvas-markdown-export`;I({icon:o,fileType:s,onClick:async()=>{if(w)return;D(!0);let t=x({message:b({defaultMessage:`Converting to {fileType}...`,id:`c96149c4c8`},{fileType:l}),variant:`neutral`,iconOverride:d(`loader-2`),animateIcon:!0,timeout:null});try{L();let e=await E({url:V,filename:a,format:i,reason:p}),n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=a,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n),S(t),x({message:b({defaultMessage:`Download started`,id:`db83bc1663`}),variant:`success`,timeout:3})}catch{c.error(`Failed to export research report`,{format:i,assetType:e.asset_type,assetUuid:e.uuid}),S(t),x({message:b({defaultMessage:`Failed to export file`,id:`73e373ce49`}),variant:`error`,timeout:3})}finally{D(!1)}}}),O&&u.push({type:`default`,downloadType:`trigger`,text:k(f),icon:d(`brand-google-drive`),category:`export`,onClick:()=>{ue({sourceUrl:V,format:i,fileName:a,fileTypeText:l,reason:p})}})}}return u}function $e(e,t=!0){let n=new Map,r=new Map,i=new Map;for(let a of e){if(!a.uuid||(t||n.set(a.uuid,a),!a.parent_asset_id))continue;t&&n.set(a.uuid,a),r.set(a.uuid,a.parent_asset_id);let e=i.get(a.parent_asset_id);e||(e=[],i.set(a.parent_asset_id,e)),e.push(a.uuid)}return{byUuid:n,childToParent:r,parentToChildren:i}}function et(e,t,n){let r=e,i=new Set;for(;t.has(r)&&n.has(t.get(r))&&!i.has(r);)i.add(r),r=t.get(r);return r}function tt(e){let{byUuid:t,childToParent:n,parentToChildren:r}=$e(e);for(let n of e)n.uuid&&r.has(n.uuid)&&!t.has(n.uuid)&&t.set(n.uuid,n);let i=[];for(let e of t.keys()){let r=n.get(e);(!r||!t.has(r))&&i.push(e)}let a=[],o=new Set;for(let e of i){if(o.has(e))continue;let n=[],i=[],s=e;for(;s&&!o.has(s);){o.add(s),n.push(s);let e=t.get(s);e&&i.push(e);let a=r.get(s);s=a?.[a.length-1]}i.length>1&&a.push({chainId:`chain-${e}`,assets:i,assetIds:n,artifactIds:[]})}return a}function nt(e){let t=new Map,n=new Map,r=new Map;for(let i of e){let e=i.version_info;e?.artifact_id&&(t.set(e.artifact_id,i),e.parent_artifact_id!==null&&e.parent_artifact_id!==void 0&&(n.set(e.artifact_id,e.parent_artifact_id),r.has(e.parent_artifact_id)||r.set(e.parent_artifact_id,new Set),r.get(e.parent_artifact_id)?.add(e.artifact_id)))}let i=new Set;t.forEach((e,r)=>{let a=n.get(r);(a===void 0||!t.has(a))&&i.add(r)});let a=[],o=new Set;return i.forEach(e=>{if(o.has(e))return;let n=[],i=[],s=[],c=e;for(;c!==void 0&&!o.has(c);){n.push(c),o.add(c);let e=t.get(c);e&&(s.push(e),e.uuid&&i.push(e.uuid));let a=r.get(c);c=a?Array.from(a)[0]:void 0}n.length>0&&a.push({chainId:`chain-${e}`,assets:s,assetIds:i,artifactIds:n})}),a}function rt(e){let t=tt(e),n=new Set;for(let e of t)for(let t of e.assetIds)n.add(t);let r=nt(e.filter(e=>!e.uuid||!n.has(e.uuid)));return[...t,...r]}function it(e,t){if(!t?.uuid)return null;let n=e.find(e=>e.assetIds.includes(t.uuid));if(n)return n;if(t.version_info?.artifact_id){let n=e.find(e=>e.artifactIds.includes(t.version_info.artifact_id));if(n)return n}return null}function at(e,t){if(!t?.uuid)return 0;let n=e.assetIds.indexOf(t.uuid);if(n!==-1)return n;if(t.version_info?.artifact_id){let n=e.artifactIds.indexOf(t.version_info.artifact_id);if(n!==-1)return n}return 0}function ot(e,t){if(!e.uuid||t.length===0)return null;let{byUuid:n,childToParent:r,parentToChildren:i}=$e(t,!1);if(!r.has(e.uuid)&&!i.has(e.uuid))return null;let a=et(e.uuid,r,n),o=[],s=a,c=new Set;for(;s&&n.has(s)&&!c.has(s);){c.add(s),o.push(n.get(s));let e=i.get(s);s=e?.[e.length-1]}return o.length>1?o:null}export{Qe as a,at as i,ot as n,w as o,it as r,ce as s,rt as t};
//# sourceMappingURL=versionChainBuilder-tl3nj7AR.js.map