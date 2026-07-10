(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class{palabraSecreta;vidas=6;letrasAdivinadas=[];mensajeAdvertencia=``;constructor(e){this.palabraSecreta=e}adivinar(e){if(this.letrasAdivinadas.includes(e)){this.mensajeAdvertencia=`Ya intentaste con esa letra`;return}if(!/^[a-zA-Z]$/.test(e)){this.mensajeAdvertencia=`Solo se permiten letras`;return}this.mensajeAdvertencia=``,this.letrasAdivinadas.push(e),this.palabraSecreta.includes(e)||this.vidas--}advertencia(){return this.mensajeAdvertencia}vidasRestantes(){return this.vidas}estado(){return this.vidas===0?`PERDISTE`:this.palabraSecreta.split(``).some(e=>!this.letrasAdivinadas.includes(e))?`JUGANDO`:`GANASTE`}palabraEnmascarada(){return this.estado()===`PERDISTE`?this.palabraSecreta.split(``).join(` `):this.palabraSecreta.split(``).map(e=>this.letrasAdivinadas.includes(e)?e:`_`).join(` `)}},t;function n(n,i){t||=new e(i),r(n)}function r(e){e.innerHTML=`
    <div>
      Palabra: <span data-testid="word">${t.palabraEnmascarada()}</span>
    </div>
    <div>
      Vidas: <span data-testid="lives">${t.vidasRestantes()}</span>
    </div>
    <div style="margin-top: 10px;">
      <input type="text" id="letra-input" maxlength="1" autofocus placeholder="Ingresá una letra">
    </div>
    <div style="margin-top: 20px; font-weight: bold; color: ${t.estado()===`GANASTE`?`green`:t.estado()===`PERDISTE`?`red`:`orange`};" data-testid="mensaje">
      ${t.estado()===`JUGANDO`?t.advertencia():t.estado()}
    </div>
  `;let n=document.getElementById(`letra-input`);t.estado()!==`JUGANDO`&&(n.disabled=!0),n.addEventListener(`keypress`,i=>{i.key===`Enter`&&n.value&&(t.adivinar(n.value.toUpperCase()),r(e))})}var i=new URLSearchParams(window.location.search).get(`word`)||`GATO`;n(document.getElementById(`app`),i);