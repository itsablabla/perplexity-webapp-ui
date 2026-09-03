import{o as e}from"./rolldown-runtime-CNgF_TGW.js";import{t}from"./jszip.min-DyOovIWF.js";var n=e(t(),1),r=`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,i=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&apos;`),a=e=>{let t=``,n=e+1;for(;n>0;){let e=(n-1)%26;t=String.fromCharCode(65+e)+t,n=Math.floor((n-1)/26)}return t},o=e=>/^\s|\s$/.test(e),s=(e,t,n)=>{let r=`${a(n)}${t+1}`;if(typeof e==`number`&&Number.isFinite(e))return`<c r="${r}"><v>${e}</v></c>`;let s=String(e??``);return`<c r="${r}" t="inlineStr"><is><t${o(s)?` xml:space="preserve"`:``}>${i(s)}</t></is></c>`},c=(e,t)=>`<row r="${t+1}">${e.map((e,n)=>s(e,t,n)).join(``)}</row>`,l=e=>`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetData>
    ${e.map(c).join(`
    `)}
  </sheetData>
</worksheet>`,u=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>`,d=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>`,f=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="Screener Results" sheetId="1" r:id="rId1"/>
  </sheets>
</workbook>`,p=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
</Relationships>`,m=async(e,t)=>{let i=new n.default;i.file(`[Content_Types].xml`,u),i.folder(`_rels`)?.file(`.rels`,d),i.folder(`xl`)?.file(`workbook.xml`,f),i.folder(`xl`)?.folder(`_rels`)?.file(`workbook.xml.rels`,p),i.folder(`xl`)?.folder(`worksheets`)?.file(`sheet1.xml`,l(e));let a=await i.generateAsync({type:`blob`,mimeType:r}),o=URL.createObjectURL(a);try{let e=document.createElement(`a`);e.href=o,e.download=`${t}.xlsx`,e.click()}finally{URL.revokeObjectURL(o)}};export{m as downloadScreenerXLSX};
//# sourceMappingURL=xlsxScreener-DG6J3psO.js.map