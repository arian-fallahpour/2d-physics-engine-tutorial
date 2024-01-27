(()=>{"use strict";var t={426:(t,e,i)=>{i.d(e,{Z:()=>o});var n=i(645),s=i.n(n)()((function(t){return t[1]}));s.push([t.id,"html {\n  overscroll-behavior: none;\n}\n\nbody {\n  margin: 0;\n  overscroll-behavior: none;\n  overflow: hidden;\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n}\n\ncanvas {\n  overscroll-behavior: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  translate: -50% -50%;\n  width: calc(100% - 2 * 50px);\n  height: calc(100% - 2 * 50px);\n  border: 2px solid black;\n}\n",""]);const o=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(n)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(s[r]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);n&&s[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),e.push(l))}},e}},379:t=>{var e=[];function i(t){for(var i=-1,n=0;n<e.length;n++)if(e[n].identifier===t){i=n;break}return i}function n(t,n){for(var o={},r=[],a=0;a<t.length;a++){var l=t[a],c=n.base?l[0]+n.base:l[0],h=o[c]||0,d="".concat(c," ").concat(h);o[c]=h+1;var u=i(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var y=s(p,n);n.byIndex=a,e.splice(a,0,{identifier:d,updater:y,references:1})}r.push(d)}return r}function s(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;i.update(t=e)}else i.remove()}}t.exports=function(t,s){var o=n(t=t||[],s=s||{});return function(t){t=t||[];for(var r=0;r<o.length;r++){var a=i(o[r]);e[a].references--}for(var l=n(t,s),c=0;c<o.length;c++){var h=i(o[c]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}o=l}}},569:t=>{var e={};t.exports=function(t,i){var n=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,i)=>{t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(i){!function(t,e,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var s=void 0!==i.layer;s&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,s&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var o=i.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,i)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={id:n,exports:{}};return t[n](o,o.exports,i),o.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{const t={meter:40,boundaryWidth:window.innerWidth-100,boundaryHeight:window.innerHeight-100,frameDuration:0,framesPerSecond:0,elasticity:0};function e(e){return t.boundaryHeight-e}function n(t,e){return Math.random()*(e-t)+t}class s{constructor(t,e){this.x=t,this.y=e}get magnitude(){return Math.sqrt(this.x**2+this.y**2)}add(t){return new s(this.x+t.x,this.y+t.y)}subtract(t){return new s(this.x-t.x,this.y-t.y)}multiply(t){return new s(this.x*t,this.y*t)}divide(t){return new s(this.x/t,this.y/t)}unit(){return 0===this.magnitude?new s(0,0):new s(this.x/this.magnitude,this.y/this.magnitude)}normal(){return new s(-this.y,this.x)}draw(t,{x:i,y:n,n:s,color:o}){t.ctx.beginPath(),t.ctx.moveTo(i,e(n)),t.ctx.lineTo(i+this.x*s,e(n+this.y*s)),t.ctx.strokeStyle=o,t.ctx.stroke()}static dot(t,e){return t.x*e.x+t.y*e.y}}const o=s,{meter:r}=t,a=class{#movingUp=!1;#movingDown=!1;#movingRight=!1;#movingLeft=!1;#acceleration=new o(0,0);constructor({controls:e,color:i="red",mass:n=1,radius:s=.5*r,pos:a=new o(t.boundaryWidth/2,t.boundaryHeight/2),appliedAcc:l=new o(0,0),friction:c=.03,elasticity:h=1}){this.controls=e,this.color=i,this.mass=n,this.radius=s,this.pos=a,this.vel=new o(0,0),this.acc=new o(0,0),this.appliedAcc=l,this.friction=c,this.elasticity=h,this.controls&&this.enableControls()}get inverseMass(){return this.mass>0?1/this.mass:0}draw(t){t.ctx.beginPath(),t.ctx.arc(this.pos.x,e(this.pos.y),this.radius,0,2*Math.PI,!1),t.ctx.fillStyle=this.color,t.ctx.fill(),t.ctx.strokeStyle=this.color,this.drawMetrics(t),this.controls&&this.drawHUD(t)}drawMetrics(t){t.ctx.fillStyle="black",t.ctx.fillText(`m: ${this.mass} kg`,this.pos.x-this.radius/2,e(this.pos.y+7)),t.ctx.fillText(`v: ${(this.vel.magnitude/r).toFixed(2)} m/s`,this.pos.x-this.radius/2,e(this.pos.y-7))}drawHUD(i){const n=t.boundaryWidth-2*r,s=2*r;this.vel.unit().draw(i,{x:n,y:s,n:r,color:"blue"}),this.acc.unit().draw(i,{x:n,y:s,n:r,color:"green"}),i.ctx.beginPath(),i.ctx.arc(n,e(s),r,0,2*Math.PI,!1),i.ctx.strokeStyle=this.color,i.ctx.stroke(),i.ctx.fillText(`a: ${(this.acc.magnitude/r).toFixed(2)} m/s^2`,n-r+15,e(s+75)),i.ctx.fillText(`v: ${(this.vel.magnitude/r).toFixed(2)} m/s`,n-r+15,e(s+60))}reposition(){this.controls&&this.controlMovement(),this.acc=this.#acceleration.add(this.appliedAcc),this.vel=this.vel.add(this.acc.divide(t.framesPerSecond)),this.vel=this.vel.multiply(1-this.friction),this.pos=this.pos.add(this.vel.divide(t.framesPerSecond))}controlMovement(){const t=new o(0,0);this.#movingUp&&(t.y=1),this.#movingDown&&(t.y=-1),this.#movingRight&&(t.x=1),this.#movingLeft&&(t.x=-1),this.#movingUp||this.#movingDown||(t.y=0),this.#movingRight||this.#movingLeft||(t.x=0),this.#acceleration=t.unit().multiply(25*r)}enableControls(){["keydown","keyup"].forEach((t=>window.addEventListener(t,(t=>{"keydown"===t.type&&"w"===t.key&&(this.#movingUp=!0),"keyup"===t.type&&"w"===t.key&&(this.#movingUp=!1),"keydown"===t.type&&"s"===t.key&&(this.#movingDown=!0),"keyup"===t.type&&"s"===t.key&&(this.#movingDown=!1),"keydown"===t.type&&"d"===t.key&&(this.#movingRight=!0),"keyup"===t.type&&"d"===t.key&&(this.#movingRight=!1),"keydown"===t.type&&"a"===t.key&&(this.#movingLeft=!0),"keyup"===t.type&&"a"===t.key&&(this.#movingLeft=!1)}))))}applyAcc(t){this.appliedAcc=this.appliedAcc.add(t)}isCollidingWithBall(t){return this.radius+t.radius>=t.pos.subtract(this.pos).magnitude}resolveBallPenetration(t){const e=this.pos.subtract(t.pos),i=this.radius+t.radius-e.magnitude;window.penDepth=i;const n=e.unit().multiply(i/(this.inverseMass+t.inverseMass));this.pos=this.pos.add(n.multiply(this.inverseMass)),t.pos=t.pos.add(n.multiply(-t.inverseMass))}resolveBallCollision(t){const e=this.pos.subtract(t.pos).unit(),i=this.vel.subtract(t.vel),n=o.dot(i,e),s=(-n*Math.min(this.elasticity,t.elasticity)-n)/(this.inverseMass+t.inverseMass),r=e.multiply(s);this.vel=this.vel.add(r.multiply(this.inverseMass)),t.vel=t.vel.add(r.multiply(-t.inverseMass))}closestPointToWall(t){const e=t.start.subtract(this.pos);if(o.dot(t.unit(),e)>0)return t.start;const i=this.pos.subtract(t.end);if(o.dot(t.unit(),i)>0)return t.end;const n=o.dot(t.unit(),e),s=t.unit().multiply(n);return t.start.subtract(s)}isCollidingWithWall(t){return this.closestPointToWall(t).subtract(this.pos).magnitude<=this.radius}resolveWallPenetration(t){const e=this.pos.subtract(this.closestPointToWall(t));this.pos=this.pos.add(e.unit().multiply(this.radius-e.magnitude))}resolveWallCollision(t){const e=this.pos.subtract(this.closestPointToWall(t)).unit(),i=o.dot(this.vel,e),n=i- -i*Math.min(this.elasticity,t.elasticity);this.vel=this.vel.add(e.multiply(-n))}static displayMomentum(i,n){let s=0;n.forEach((t=>s+=t.vel.magnitude));const o=t.boundaryWidth-2*r,a=2*r;i.ctx.fillText(`v total: ${(s/r).toFixed(2)} m/s`,o-r+15,e(a+105))}},l=class{constructor({start:t=new o(0,0),end:e=new o(0,0),elasticity:i=1}){this.start=t,this.end=e,this.elasticity=i}draw(t){t.ctx.beginPath(),t.ctx.moveTo(this.start.x,e(this.start.y)),t.ctx.lineTo(this.end.x,e(this.end.y)),t.ctx.strokeStyle="black",t.ctx.stroke()}unit(){return this.end.subtract(this.start).unit()}};var c=i(379),h=i.n(c),d=i(795),u=i.n(d),p=i(569),y=i.n(p),m=i(565),v=i.n(m),f=i(216),g=i.n(f),x=i(589),w=i.n(x),b=i(426),M={};M.styleTagTransform=w(),M.setAttributes=v(),M.insert=y().bind(null,"head"),M.domAPI=u(),M.insertStyleElement=g(),h()(b.Z,M),b.Z&&b.Z.locals&&b.Z.locals,(()=>{const{meter:i}=t,s=new class{constructor(e){this.element=document.getElementById(e),this.ctx=this.element.getContext("2d"),this.width=t.boundaryWidth,this.height=t.boundaryHeight,this.resize(this.width,this.height)}clear(){this.ctx.clearRect(0,0,this.element.width,this.element.height)}resize(t,e){this.element.width=t,this.element.height=e}}("canvas"),r=[new a({controls:!0,color:"red",mass:1,radius:.5*i,pos:new o(.5*t.boundaryWidth,t.boundaryHeight/2),friction:0}),new a({color:"red",mass:1,radius:.5*i,pos:new o(.2*t.boundaryWidth,t.boundaryHeight/2),friction:0})];for(let e=1;e<=10;e++){const e=Math.round(n(0,5)),s=new a({color:"red",mass:e,radius:e*i/2,pos:new o(Math.round(n(e,t.boundaryWidth-e)),Math.round(n(e,t.boundaryHeight-e))),friction:0});r.push(s)}const c=[new l({start:new o(0,0),end:new o(t.boundaryWidth,0)}),new l({start:new o(0,0),end:new o(0,t.boundaryHeight)}),new l({start:new o(t.boundaryWidth,0),end:new o(t.boundaryWidth,t.boundaryHeight)}),new l({start:new o(0,t.boundaryHeight),end:new o(t.boundaryWidth,t.boundaryHeight)})],h=()=>{const n=t.boundaryWidth-2*i,o=2*i;s.ctx.fillText("Colliding",n-i+15,e(o+90))};let d=0,u=0;const p=function(n){const o=n-u;u=n,t.frameDuration=o,t.framesPerSecond=1e3/o,s.clear(),c.forEach((t=>{t.draw(s)})),r.forEach(((t,e)=>{r.forEach(((i,n)=>{e!==n&&t.isCollidingWithBall(i)&&(h(),t.resolveBallPenetration(i),t.resolveBallCollision(i),d+=1)})),c.forEach((e=>{t.isCollidingWithWall(e)&&(h(),t.resolveWallPenetration(e),t.resolveWallCollision(e),d+=1)})),t.draw(s),t.reposition()})),a.displayMomentum(s,r),requestAnimationFrame(p),s.ctx.fillText(t.framesPerSecond.toFixed(0),i,e(i)),s.ctx.fillText(d.toFixed(0),2*i,e(i))};window.requestAnimationFrame(p)})()})()})();