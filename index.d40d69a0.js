var t=Array.from(document.querySelectorAll(".population")).map(function(t){return parseInt(t.textContent.replace(/,/g,""),10)}),e=t.reduce(function(t,e){return t+e},0),o=e/t.length,n=document.querySelector(".total-population"),r=document.querySelector(".average-population");n.textContent=e.toLocaleString(),r.textContent=Math.round(o).toLocaleString();
//# sourceMappingURL=index.d40d69a0.js.map
