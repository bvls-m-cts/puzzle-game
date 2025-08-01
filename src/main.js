import './style.css'
import './puzzleGame';

document.querySelector('#app').innerHTML = `
  <div class="app-bg">
    <div class="fun-zone fun-zone-large">
      <span class="fun-zone-fun">FUN</span>
      <span class="fun-zone-zone">ZONE</span>
    </div>
    <div id="game-root"></div>
    <div class="dev-credit">@ by Bhargava_Mandalaneni</div>
    <div class="spin-bar-container">
      <div class="spin-bar" id="spin-bar">
        <div class="spin-point">10</div>
        <div class="spin-point">50</div>
        <div class="spin-point">100</div>
        <div class="spin-point">250</div>
        <div class="spin-point">500</div>
        <div class="spin-point">1000</div>
        <div class="spin-bar-arrow">&#9654;</div>
      </div>
      <button class="spin-btn" id="spin-btn">Spin</button>
    </div>
  </div>
`;

// Spin bar logic
const spinBtn = document.getElementById('spin-btn');
const spinBar = document.getElementById('spin-bar');
const points = Array.from(document.querySelectorAll('.spin-point'));
let spinning = false;
let spinInterval = null;
let selectedIdx = 0;

function highlightPoint(idx) {
  points.forEach((el, i) => {
    el.style.background = i === idx ? 'linear-gradient(90deg, #ffe600 0%, #ff00cc 100%)' : 'linear-gradient(90deg, #222 60%, #ffe60022 100%)';
    el.style.color = i === idx ? '#222' : '#ffe600';
    el.style.boxShadow = i === idx ? '0 0 18px #ff00cc, 0 0 32px #ffe600' : '';
  });
}

spinBtn.addEventListener('click', () => {
  if (!spinning) {
    spinning = true;
    spinBtn.textContent = 'Stop';
    spinInterval = setInterval(() => {
      // Move highlight to a random index each time for more excitement
      const idx = Math.floor(Math.random() * points.length);
      highlightPoint(idx);
    }, 40); // Faster interval
  } else {
    spinning = false;
    spinBtn.textContent = 'Spin';
    clearInterval(spinInterval);
    // Randomly select a point
    selectedIdx = Math.floor(Math.random() * points.length);
    highlightPoint(selectedIdx);
  }
});
