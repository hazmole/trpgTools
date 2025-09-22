const TimerArr = [];
const Config = {
  averageTime: 60*60*5,  // 5 hr
  randomizeRange: 60*30, // 30 mins
};

function initialize() {
  resetCandles();
  renderCandles();
}

function resetCandles() {
  TimerArr.length = 0;
  for(let i=0; i<10; i++) {
    const offset = Math.floor(((Math.random() + Math.random()) - 1) * Config.randomizeRange);
    TimerArr.push({
      isActive: false,
      handler: null,
      remainTime: Config.averageTime + offset,
    });
  }
}

function renderCandles() {
  const rootElem = document.getElementById("CandlePool");
  rootElem.innerHTML = "";
  for(let i=0; i<10; i++) {
    const timerObj = TimerArr[i];
    rootElem.innerHTML += `<div id="Candle-${i}" class="Candle" data-idx=${i} >${[
      `<div onClick="toggleCandle(this)">🕯️</div>`,
      `<div>剩餘 ${timerObj.remainTime.toFixed(2)} 秒</div>`,
    ].join('')}</div>`;
  }
}

function setCandle(idx) {
  // TODO
}

function toggleCandle(idx) {
  // TODO
}


function addCandle() {
  const idx = addTimer();
  const timerObj = TimerArr[idx];

  const poolElem = document.getElementById("CandlePool");
  poolElem.innerHTML += `<div id="Candle-${idx}" class="Candle" data-idx=${idx} >${[
    `<div onClick="toggleCandle(this)">🕯️</div>`,
    `<div>剩餘 ${timerObj.remainTime.toFixed(2)} 秒</div>`,
  ].join('')}</div>`;

  
}
function toggleCandle(elem) {
  const idx = parseInt(elem.parentElement.getAttribute('data-idx'));
  const timerObj = TimerArr[idx];

  if (timerObj.isActive) {
    timerObj.isActive = false;
    clearInterval(timerObj.handler);
  } else {
    timerObj.isActive = true;
    timerObj.handler = setInterval(countDown, 200, idx);
  }
  
}

function countDown(idx) {
  const timerObj = TimerArr[idx];
  timerObj.remainTime -= 0.2;

  const elem = document.getElementById(`Candle-${idx}`);
  elem.children[1].innerText = `剩餘 ${timerObj.remainTime.toFixed(2)} 秒`;
}

window.onload = initialize;