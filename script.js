document.getElementsByClassName("main")[0].innerHTML = `
<div class="container">
<div id="output"></div>
<div class="buttons">
  <div class="button">DEL</div>
  <div class="button">(</div>
  <div class="button">)</div>
  <div class="button">/</div>
  <div class="button">7</div>
  <div class="button">8</div>
  <div class="button">9</div>
  <div class="button">*</div>
  <div class="button">4</div>
  <div class="button">5</div>
  <div class="button">6</div>
  <div class="button">-</div>
  <div class="button">1</div>
  <div class="button">2</div>
  <div class="button">3</div>
  <div class="button">+</div>
  <div class="button">CE</div>
  <div class="button">0</div>
  <div class="button">.</div>
  <div id="equal" class="button">=</div>
</div>
</div>`
 
let outputSec = document.getElementById('output');

let buttonSec = Array.from(document.getElementsByClassName('button'));

buttonSec.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'CE':
              outputSec.innerText = '';
                break;
            case '=':
                try{
                  outputSec.innerText = eval(outputSec.innerText);
                } catch {
                  outputSec.innerText = "mathErr..."
                }
                break;
            case 'DEL':
                if (outputSec.innerText){
                  outputSec.innerText = outputSec.innerText.slice(0, -1);
                }
                break;
            default:
              outputSec.innerText += e.target.innerText;
        }
    });
});





