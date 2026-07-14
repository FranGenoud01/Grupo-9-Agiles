(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class{palabraSecreta;vidas;vidasIniciales_;letrasAdivinadas=[];mensajeAdvertencia=``;normalizar(e){return e.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toUpperCase()}constructor(e,t=`normal`){this.palabraSecreta=e,t===`facil`?this.vidas=8:t===`dificil`?this.vidas=4:this.vidas=6,this.vidasIniciales_=this.vidas}adivinar(e){let t=this.normalizar(e);if(this.letrasAdivinadas.includes(t)){this.mensajeAdvertencia=`Ya intentaste con esa letra`;return}if(!/^[a-zA-Z]$/.test(t)){this.mensajeAdvertencia=`Solo se permiten letras`;return}this.mensajeAdvertencia=``,this.letrasAdivinadas.push(t),this.palabraSecreta.split(``).some(e=>this.normalizar(e)===t)||this.vidas--}advertencia(){return this.mensajeAdvertencia}vidasRestantes(){return this.vidas}estado(){return this.vidas===0?`PERDISTE`:this.palabraSecreta.split(``).some(e=>!this.letrasAdivinadas.includes(this.normalizar(e)))?`JUGANDO`:`GANASTE`}palabraEnmascarada(){return this.estado()===`PERDISTE`?this.palabraSecreta.split(``).join(` `):this.palabraSecreta.split(``).map(e=>this.letrasAdivinadas.includes(this.normalizar(e))?this.normalizar(e):`_`).join(` `)}vidasIniciales(){return this.vidasIniciales_}reiniciar(){this.vidas=6,this.letrasAdivinadas=[],this.mensajeAdvertencia=``}};function t(e,t){return e[t%e.length]}function n(e,t){return Math.ceil(e/t*6)}var r,i;function a(t,n,a=`normal`,o=[]){i=o,r||=new e(n,a),s(t)}function o(e){return`
    <svg width="160" height="200" viewBox="0 0 160 200" data-testid="dibujo-visual" data-etapa="${e}">
      <!-- Horca: siempre visible -->
      <line x1="10" y1="190" x2="110" y2="190" stroke="#8a8578" stroke-width="4" stroke-linecap="round"/>
      <line x1="30" y1="190" x2="30" y2="20" stroke="#8a8578" stroke-width="4" stroke-linecap="round"/>
      <line x1="30" y1="20" x2="90" y2="20" stroke="#8a8578" stroke-width="4" stroke-linecap="round"/>
      <line x1="90" y1="20" x2="90" y2="40" stroke="#8a8578" stroke-width="4" stroke-linecap="round"/>

      ${e>=1?`<circle cx="90" cy="55" r="15" stroke="#d9534f" stroke-width="4" fill="none"/>`:``}
      ${e>=2?`<line x1="90" y1="70" x2="90" y2="120" stroke="#d9534f" stroke-width="4" stroke-linecap="round"/>`:``}
      ${e>=3?`<line x1="90" y1="85" x2="70" y2="105" stroke="#d9534f" stroke-width="4" stroke-linecap="round"/>`:``}
      ${e>=4?`<line x1="90" y1="85" x2="110" y2="105" stroke="#d9534f" stroke-width="4" stroke-linecap="round"/>`:``}
      ${e>=5?`<line x1="90" y1="120" x2="72" y2="150" stroke="#d9534f" stroke-width="4" stroke-linecap="round"/>`:``}
      ${e>=6?`<line x1="90" y1="120" x2="108" y2="150" stroke="#d9534f" stroke-width="4" stroke-linecap="round"/>`:``}
    </svg>
  `}function s(a){let c=n(r.vidasIniciales()-r.vidasRestantes(),r.vidasIniciales()),l=r.estado(),u;u=l===`GANASTE`?`green`:l===`PERDISTE`?`red`:`orange`,a.innerHTML=`
    <div data-testid="dibujo" style="display:none">${c}</div>
    ${o(c)}
    <div>
      Palabra: <span data-testid="word">${r.palabraEnmascarada()}</span>
    </div>
    <div>
      Vidas: <span data-testid="lives">${r.vidasRestantes()}</span>
    </div>
    <div style="margin-top: 10px;">
      <input type="text" id="letra-input" maxlength="1" autofocus placeholder="Ingresá una letra">
      ${l===`JUGANDO`?``:`<button id="btn-reiniciar" style="margin-top: 10px;">Jugar de nuevo</button>`}
    </div>
    <div style="margin-top: 20px; font-weight: bold; color: ${u};" data-testid="mensaje">
      ${l===`JUGANDO`?r.advertencia():l}
    </div>
  `;let d=document.getElementById(`letra-input`);r.estado()!==`JUGANDO`&&(d.disabled=!0),d.addEventListener(`keypress`,e=>{e.key===`Enter`&&d.value&&(r.adivinar(d.value.toUpperCase()),s(a))});let f=document.getElementById(`btn-reiniciar`);f&&f.addEventListener(`click`,()=>{r=new e(i.length>0?t(i,Math.floor(Math.random()*i.length)):`GATO`),s(a)})}var c=[`PERRO`,`CASA`,`LUNA`,`SOL`,`AGUA`,`MURCIÉLAGO`,`NIÑO`,`RÍO`,`CORAZÓN`,`MÚSICA`,`ÁRBOL`],l=new URLSearchParams(window.location.search),u=l.get(`word`),d=l.get(`seed`),f=l.get(`dificultad`)||`normal`,p=u||(d===null?`GATO`:t(c,Number(d)));a(document.getElementById(`app`),p,f,c);