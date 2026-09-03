import{o as e}from"./rolldown-runtime-CNgF_TGW.js";import{$ as t,et as n}from"./vendors-B0VRXiug.js";import{Xa as r,Zi as i,eo as a,pi as o,qa as s}from"./platform-core-D8IQmtf1.js";var c=n(),l=`allow-scripts allow-popups allow-popups-to-escape-sandbox allow-forms allow-downloads`,u=`allow-scripts allow-popups allow-popups-to-escape-sandbox allow-forms`;function d(e){return e.startsWith(`blob:`)}function f(e,{allowBlob:t=!1}={}){return e?t&&d(e)?!0:r(e)&&!s(e):!1}function p(e){let t=JSON.stringify(i({intent:`document`}));return`
  <!DOCTYPE html>
  <html>
    <head>
        <meta charset="UTF-8">
        <style>
            html, body, iframe { margin: 0; padding: 0; width: 100%; height: 100%; }
            iframe { display: block; border: none; }
        </style>
    </head>
    <body>
        <iframe
            id="inner"
            src="${m(e)}"
            title="Embedded App"
            sandbox="${l}"
            referrerpolicy="no-referrer"
            width="100%"
            height="100%"
            loading="lazy"
            style="color-scheme: normal;"
        ></iframe>
        <script>
            // Parent -> inner only. Inner posts replies directly to window.top
            // with the allowlisted parent origin, so a spoofed broker can't
            // exfil — replies get dropped on delivery.
            const inner = document.getElementById('inner');
            const expectedParentOrigin = ${t};
            const parentToInnerTypes = new Set([
                'INLINE_EDIT_CAPTURE_REQUEST',
                'INLINE_EDIT_SCROLL_START',
                'INLINE_EDIT_SCROLL_STOP',
            ]);
            window.addEventListener('message', function(e) {
                if (e.data && parentToInnerTypes.has(e.data.type) && e.source === window.parent && e.origin === expectedParentOrigin && inner && inner.contentWindow) {
                    inner.contentWindow.postMessage(Object.assign({}, e.data, { parentOrigin: expectedParentOrigin }), '*');
                }
            });
        <\/script>
    </body>
  </html>`}function m(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`)}var h=e(t(),1),g=e=>{let t=(0,h.useRef)(null),[n,r]=(0,h.useState)(1),i=(0,h.useRef)(null),a=(0,h.useCallback)(n=>{if(i.current&&=(i.current.disconnect(),null),t.current=n,!n)return;let a=t=>{let n=t[0]?.contentRect.width??e;r(Math.min(1,n/e))};a([{contentRect:{width:n.clientWidth}}]);let o=new ResizeObserver(a);o.observe(n),i.current=o},[e]);return(0,h.useEffect)(()=>()=>{i.current&&i.current.disconnect()},[]),(0,h.useMemo)(()=>({scale:n,containerRef:a}),[n,a])};function _(e){return a(e).replace(/\/eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\//,`/`)}var v=1800*1e3;function y(e){let t=(0,h.useRef)(e),n=(0,h.useRef)(_(e)),r=(0,h.useRef)(Date.now()),i=_(e);return i===n.current?e!==t.current&&Date.now()-r.current>=v&&(t.current=e,r.current=Date.now()):(t.current=e,n.current=i,r.current=Date.now()),t.current}var b=h.memo(function({url:e,height:t,iframeRef:n}){let{$t:r}=o(),i=y(e),a=d(i);return f(i,{allowBlob:!0})?(0,c.jsx)(`div`,{className:`scrollbar-subtle size-full`,children:(0,c.jsx)(`iframe`,{ref:n,...a?{src:i}:{srcDoc:p(i)},title:r({defaultMessage:`Embedded App`,id:`155bd8fe23`}),sandbox:l,referrerPolicy:`no-referrer`,width:`100%`,height:t?`${t}px`:`100%`,loading:`lazy`,style:{colorScheme:`normal`}})}):null}),x=h.memo(function({url:e,isViewportSlides:t,originalWidth:n=1200}){let{$t:r}=o(),{scale:i,containerRef:a}=g(n),s=y(e);if(!f(s))return null;let l=r({defaultMessage:`Embedded Slides`,id:`8c77f4cb0b`});if(t)return(0,c.jsx)(`div`,{className:`size-full overflow-hidden`,children:(0,c.jsx)(`iframe`,{srcDoc:p(s),title:l,sandbox:u,referrerPolicy:`no-referrer`,width:`100%`,height:`100%`,loading:`eager`,style:{colorScheme:`normal`}})});let d=16/9*n;return(0,c.jsx)(`div`,{ref:a,className:`scrollbar-subtle relative size-full overflow-auto`,children:(0,c.jsx)(`div`,{style:{height:`${d*i}px`,minHeight:`100%`},children:(0,c.jsx)(`iframe`,{srcDoc:p(s),title:l,sandbox:u,referrerPolicy:`no-referrer`,width:`${n}px`,height:`${d}px`,loading:`eager`,className:`absolute left-0 top-0 origin-top-left`,style:{colorScheme:`normal`,transform:`scale(${i})`}})})})});export{x as n,b as t};
//# sourceMappingURL=AppsMode-LAMnlzit.js.map