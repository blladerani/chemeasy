(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600;800&display=swap);"]),i.push([n.id,'* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background: #374151;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  font-family: "Roboto Slab", serif;\n}\n\n#page-header a {\n  height: 80px;\n  color: #c2410c;\n  font-size: 3rem;\n  margin-left: 30px;\n  text-decoration: none;\n  display: inline-block;\n  padding-bottom: 40px;\n}\n\n#page-main {\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n}\n\n.infos {\n  color: white;\n  font-size: 1.1rem;\n  font-weight: 500;\n  padding: 30px 150px;\n}\n\n.elements {\n  width: 150px;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  flex-direction: column;\n  gap: 20px;\n  overflow-y: auto;\n}\n\n.element {\n  border-radius: 5px;\n  padding: 4px;\n  color: #fff;\n  height: 110px;\n  width: 110px;\n  position: relative;\n  color: #1c1917;\n}\n\n.number {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  font-weight: 600;\n}\n\n.symbol {\n  font-size: 2.2rem;\n  line-height: 2.2rem;\n  font-weight: 800;\n}\n\n.ametal {\n  background-color: #fde047;\n}\n.metal {\n  background-color: #818cf8;\n}\n.soygaz {\n  background-color: #f87171;\n}\n\n.controls {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.mid-section {\n  height: 100%;\n  flex: 1;\n  background-color: #4b5563;\n  border-radius: 10px;\n}\n\n.element-drop {\n  margin: 30px 100px;\n  background: #374151;\n  height: 150px;\n  border-radius: 1 0px;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  padding: 10px 25px;\n  border-radius: 50px;\n}\n\n.compounds {\n  width: 200px;\n}\n\n.drag-over {\n  border: 3px solid white;\n}\n\n.compound {\n  height: 40px;\n  background-color: #991b1b;\n  color: white;\n  border-radius: 10px;\n  margin: 15px;\n  line-height: 40px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 1.2rem;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.minus,\n.remove {\n  border-right: 1px solid #57534e;\n}\n\n.minus,\n.remove,\n.plus {\n  width: 100%;\n  text-align: center;\n  line-height: 15px;\n  height: 20px;\n  margin-top: 5px;\n  opacity: 0.7;\n}\n\n.remove {\n  height: 20px;\n  width: auto;\n  padding: 0 6px;\n}\n\n.minus:hover,\n.remove:hover,\n.plus:hover {\n  cursor: pointer;\n  opacity: 1;\n}\n\n.count {\n  background-color: #52525b;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: white;\n  margin: 2px;\n  width: 36px;\n  position: absolute;\n  bottom: -15px;\n  border-radius: 10px;\n  text-align: center;\n  left: calc(50% - 18px);\n}\n\n.completed {\n  text-decoration: line-through;\n  background-color: #881337;\n}\n\n.infos {\n  display: flex;\n  gap: 30px;\n}\n\n.infos-imgs {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  width: 300px;\n}\n\n.infos img {\n  object-fit: contain;\n  width: auto;\n  height: 250px;\n}\n\n.infos-text {\n  color: #fafafa;\n}\n\n.compound-header {\n  font-size: 3rem;\n  font-weight: 800;\n  line-height: 3rem;\n}\n\n.compound-name {\n  font-size: 1.2rem;\n  opacity: 0.6;\n  margin-bottom: 50px;\n}\n',""]);const l=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);r&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),e.push(c))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],l=0;l<n.length;l++){var s=n[l],d=r.base?s[0]+r.base:s[0],c=o[d]||0,u="".concat(d," ").concat(c);o[d]=c+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=a(m,r);r.byIndex=l,e.splice(l,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var l=t(o[i]);e[l].references--}for(var s=r(n,a),d=0;d<o.length;d++){var c=t(o[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),o=t(569),i=t.n(o),l=t(565),s=t.n(l),d=t(216),c=t.n(d),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=c(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=[{number:1,symbol:"H",name:"Hidrojen",type:"ametal"},{number:8,symbol:"O",name:"Oksijen",type:"ametal"},{number:16,symbol:"S",name:"Kükürt",type:"ametal"},{number:17,symbol:"Cl",name:"Klor",type:"ametal"}],h=[{formula:"H2O",name:"su",elements:{H:2,O:1},info:"Su, Dünya üzerinde bol miktarda bulunan ve tüm canlıların yaşaması için vazgeçilmez olan, kokusuz ve tatsız bir kimyasal bileşiktir.[4] Sıklıkla renksiz olarak tanımlanmasına rağmen kızıl dalga boylarında ışığı hafifçe emmesi nedeniyle mavi bir renge sahiptir.[4] "},{formula:"H2SO4",name:"Sülfirik Asit",elements:{H:2,S:1,O:4},info:{text:"Sülfürik(VI) asit ya da halk arasında bilinen ismi ile zaç yağı, H2SO4, güçlü bir mineral asididir. Olası kaşifi 8. yüzyıl simyacısı Cabir bin Hayyan tarafından yenime uğratıcı, renksiz ve yoğunluğu yüksek sıvı olarak tanımlanmıştır.[1] Suda her konsantrasyonda çözünebilir. Büyük ölçüde korozif oluşu, güçlü asidik yapısından ve dehidrasyon özelliğinden kaynaklanmaktadır. ",img1:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Sulphuric_acid_96_percent_extra_pure.jpg/200px-Sulphuric_acid_96_percent_extra_pure.jpg",img2:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Sulfuric-acid-Givan-et-al-1999-3D-balls.png/150px-Sulfuric-acid-Givan-et-al-1999-3D-balls.png"}},{formula:"HCl",name:"Hidroklorik Asit",elements:{H:1,Cl:1}}],v=document.querySelector(".elements");for(const n of g)v.innerHTML+=`<div class="element ${n.type}" data-symbol="${n.symbol}" draggable="true">\n  <div class="number">${n.number}</div>\n  <div class="symbol">${n.symbol}</div>\n  <div class="name">${n.name}</div>\n  <div class="controls hidden">\n    <div class="minus">-</div>\n    <img class="remove" src="trash.png" />\n    <div class="plus">+</div>\n  </div>\n  <div class="count hidden">1</div>\n`;const b=document.querySelector(".compounds");for(const n of h)b.innerHTML+=`<div class="compound" data-index="${h.indexOf(n)}">${n.formula}</div>`;const y=document.querySelectorAll(".element"),x=document.querySelector(".element-drop");function k(n){n.dataTransfer.setData("text/plain",n.target.getAttribute("data-symbol"))}function S(){let n={};document.querySelectorAll(".element-drop .element").forEach((e=>{const t=e.getAttribute("data-symbol");n[t]=+e.getAttribute("data-count")})),E.classList.add("hidden");for(const t in h)w(h[t].elements,n)&&(b.querySelector(`.compound[data-index="${t}"]`).classList.add("completed"),e=t,E.querySelector(".l-image").setAttribute("src",h[e].info.img1),E.querySelector(".r-image").setAttribute("src",h[e].info.img2),E.classList.remove("hidden"),E.querySelector(".compound-header").innerHTML=h[e].formula.split("").map((n=>isNaN(+n)?n:`<sub>${n}</sub>`)).join(""),E.querySelector(".compound-name").textContent=h[e].name,E.querySelector(".compound-info").textContent=h[e].info.text);var e}function w(n,e){for(const t in n)if(n[t]!=+e[t])return!1;for(const t in e)if(e[t]!=+n[t])return!1;return!0}y.forEach((n=>{n.addEventListener("dragstart",k)})),x.addEventListener("dragenter",(function(n){n.preventDefault(),n.target.classList.add("drag-over")})),x.addEventListener("dragover",(function(n){n.preventDefault(),n.target.classList.add("drag-over")})),x.addEventListener("dragleave",(function(n){n.target.classList.remove("drag-over")})),x.addEventListener("drop",(function(n){n.preventDefault(),n.target.classList.remove("drag-over");const e=document.querySelector(`.element[data-symbol="${n.dataTransfer.getData("text/plain")}"]`);document.querySelector(`.element[data-symbol="${n.dataTransfer.getData("text/plain")}"] > .controls`).classList.remove("hidden"),e.setAttribute("data-count",1),e.lastElementChild.classList.remove("hidden"),e.querySelector(".count").textContent="1",x.append(e),S()})),document.querySelectorAll(".remove").forEach((n=>{n.addEventListener("click",(n=>{const e=n.target.parentElement.parentElement;e.lastElementChild.classList.add("hidden"),e.querySelector(".controls").classList.add("hidden"),e.querySelector(".count").textContent="0",v.append(e),S()}))})),document.querySelectorAll(".minus").forEach((n=>{n.addEventListener("click",(n=>{const e=n.target.parentElement.parentElement;1==e.getAttribute("data-count")?(v.append(e),e.lastElementChild.classList.add("hidden"),e.querySelector(".controls").classList.add("hidden")):(e.setAttribute("data-count",e.getAttribute("data-count")-1),e.lastElementChild.textContent=e.getAttribute("data-count")),S()}))})),document.querySelectorAll(".plus").forEach((n=>{n.addEventListener("click",(n=>{const e=n.target.parentElement.parentElement;e.setAttribute("data-count",+e.getAttribute("data-count")+1),e.lastElementChild.textContent=e.getAttribute("data-count"),S()}))}));const E=document.querySelector(".infos")})()})();