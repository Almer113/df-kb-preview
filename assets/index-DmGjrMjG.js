const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-CzJo47bX.js","assets/main-DatS5jbt.css"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const x="modulepreload",v=function(e){return"/df-kb-preview/"+e},b={},S=function(n,t,a){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),i=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(c=>{if(c=v(c),c in b)return;b[c]=!0;const l=c.endsWith(".css"),g=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${g}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":x,l||(p.as="script"),p.crossOrigin="",p.href=c,i&&p.setAttribute("nonce",i),document.head.appendChild(p),l)return new Promise((w,k)=>{p.addEventListener("load",w),p.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o}return r.then(o=>{for(const i of o||[])i.status==="rejected"&&s(i.reason);return n().catch(s)})},u=new URL("/df-kb-preview/",location.href).href,d="kbp-key",E="kb-preview-ok",m=`
self.__kbpInstall = async function (raw, base) {
  const subtle = crypto.subtle
  const aes = await subtle.importKey('raw', raw.slice(0, 32), 'AES-GCM', false, ['decrypt'])
  const mac = await subtle.importKey('raw', raw.slice(32, 64), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  const dataPath = new URL('data/', base).pathname
  const encDir = new URL('d/', base).href
  const realFetch = self.fetch.bind(self)
  const hex = (b) => Array.from(new Uint8Array(b), (x) => x.toString(16).padStart(2, '0')).join('')
  const text = (status, msg) => new Response(msg, { status, headers: { 'content-type': 'text/plain' } })
  self.fetch = async function (input, init) {
    const href = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url
    const url = new URL(href, base)
    if (url.origin !== new URL(base).origin || !url.pathname.startsWith(dataPath)) return realFetch(input, init)
    const rel = decodeURIComponent(url.pathname.slice(dataPath.length))
    if (rel === 'manifest.json') return realFetch(input, init)
    const name = hex(await subtle.sign('HMAC', mac, new TextEncoder().encode(rel))).slice(0, 32)
    const r = await realFetch(encDir + name + '.bin' + url.search, init)
    if (!r.ok) return text(r.status, 'not found')
    const buf = await r.arrayBuffer()
    let plain
    try {
      plain = await subtle.decrypt({ name: 'AES-GCM', iv: buf.slice(0, 12) }, aes, buf.slice(12))
    } catch (e) {
      return text(500, 'cannot decrypt')
    }
    const body = new Blob([plain]).stream().pipeThrough(new DecompressionStream('gzip'))
    return new Response(body, { status: 200, headers: { 'content-type': 'application/json; charset=utf-8' } })
  }
}
`,f=e=>Uint8Array.from(atob(e),n=>n.charCodeAt(0)),C=e=>btoa(String.fromCharCode(...e)),L=e=>e.normalize("NFC").trim().replace(/\s+/g," ").toLowerCase();async function U(e,n){const t=await crypto.subtle.importKey("raw",new TextEncoder().encode(L(e)),"PBKDF2",!1,["deriveBits"]),a=await crypto.subtle.deriveBits({name:"PBKDF2",hash:"SHA-256",salt:f(n.salt),iterations:n.iter},t,512);return new Uint8Array(a)}async function h(e,n){try{const t=await crypto.subtle.importKey("raw",e.slice(0,32),"AES-GCM",!1,["decrypt"]),a=f(n.check),r=await crypto.subtle.decrypt({name:"AES-GCM",iv:a.slice(0,12)},t,a.slice(12));return new TextDecoder().decode(r)===E}catch{return!1}}function A(){try{const e=localStorage.getItem(d)||sessionStorage.getItem(d);return e?f(e):null}catch{return null}}function R(e,n){try{(n?localStorage:sessionStorage).setItem(d,C(e))}catch{}}function y(){try{localStorage.removeItem(d),sessionStorage.removeItem(d)}catch{}}const P=`
.kbp{position:fixed;inset:0;display:grid;place-items:center;padding:16px;background:#f7f9f8;color:#1a211e;font:15px/1.5 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;z-index:100}
.kbp form{width:min(380px,100%);background:#fff;border:1px solid #d7dad9;border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,.06)}
.kbp .mark{width:36px;height:36px;border-radius:9px;background:#1f7d63;color:#fff;display:grid;place-items:center;font-weight:800;font-size:.85rem;margin-bottom:10px}
.kbp h1{font-size:1.25rem;margin:0 0 2px}.kbp p{margin:0 0 16px;color:#5c6360;font-size:.9rem}
.kbp input[type=password]{width:100%;box-sizing:border-box;font:inherit;padding:10px 12px;border:1px solid #8a918e;border-radius:8px;margin:4px 0 10px}
.kbp label{font-size:.88rem}.kbp .row{display:flex;gap:8px;align-items:center;margin-bottom:14px}
.kbp button{width:100%;font:inherit;font-weight:600;padding:10px;border:0;border-radius:8px;background:#1f7d63;color:#fff;cursor:pointer}
.kbp button:disabled{opacity:.6;cursor:default}.kbp .err{color:#b3261e;font-size:.88rem;min-height:1.3em;margin:8px 0 0}
@media (prefers-color-scheme:dark){.kbp{background:#101211;color:#eceeed}.kbp form{background:#161918;border-color:#2e3130}
.kbp p{color:#9aa29f}.kbp input[type=password]{background:#101211;color:#eceeed;border-color:#6c7572}.kbp button{background:#29a383;color:#0c1310}.kbp .err{color:#ff9c8a}}
.kbp-lock{position:fixed;left:10px;bottom:10px;z-index:50;font:12px system-ui,sans-serif;padding:3px 9px;border-radius:12px;border:1px solid #8a918e;background:rgba(255,255,255,.85);color:#3c4441;cursor:pointer;opacity:.7}
.kbp-lock:hover{opacity:1}
@media (prefers-color-scheme:dark){.kbp-lock{background:rgba(22,25,24,.85);color:#c9cfcc;border-color:#6c7572}}
`;function _(e){return new Promise(n=>{const t=document.createElement("div");t.className="kbp",t.innerHTML=`<form autocomplete="off">
      <div class="mark" aria-hidden="true">DF</div>
      <h1>DF Labs Knowledge Base</h1>
      <p>Team preview. Enter the passphrase you were given.</p>
      <label for="kbp-pass">Passphrase</label>
      <input id="kbp-pass" type="password" autocomplete="current-password" required autofocus>
      <div class="row"><input id="kbp-remember" type="checkbox" checked><label for="kbp-remember">Remember on this device</label></div>
      <button type="submit">Unlock</button>
      <p class="err" role="alert"></p>
    </form>`,document.body.appendChild(t);const a=t.querySelector("form"),r=t.querySelector("#kbp-pass"),s=t.querySelector("#kbp-remember"),o=t.querySelector("button"),i=t.querySelector(".err");r.focus(),a.addEventListener("submit",async c=>{c.preventDefault(),o.disabled=!0,o.textContent="Unlocking…",i.textContent="";const l=await U(r.value,e);await h(l,e)?(R(l,s.checked),t.remove(),n(l)):(o.disabled=!1,o.textContent="Unlock",i.textContent="That passphrase is not right. Check it and try again.",r.select())})})}function B(e){const n=window.Worker,t=JSON.stringify(Array.from(e));window.Worker=class extends n{constructor(a,r){const s=new URL(String(a),location.href).href,o=`${m}
const queued = [];
const hold = (e) => queued.push(e);
self.onmessage = hold;
await self.__kbpInstall(new Uint8Array(${t}), ${JSON.stringify(u)});
await import(${JSON.stringify(s)});
if (self.onmessage && self.onmessage !== hold) for (const e of queued) self.onmessage(e);`;super(URL.createObjectURL(new Blob([o],{type:"text/javascript"})),{...r,type:"module"})}}}function I(){const e=document.createElement("button");e.className="kbp-lock",e.textContent="Lock",e.title="Forget the passphrase on this device",e.addEventListener("click",()=>{y(),location.reload()}),document.body.appendChild(e)}async function K(){const e=document.createElement("style");e.textContent=P,document.head.appendChild(e);const n=await fetch(u+"lock.json",{cache:"no-cache"}).then(a=>a.json());let t=A();t&&!await h(t,n)&&(y(),t=null),t||(t=await _(n)),new Function(m)(),await self.__kbpInstall(t,u),B(t),I(),await S(()=>import("./main-CzJo47bX.js").then(a=>a.a5),__vite__mapDeps([0,1]))}K();export{S as _};
