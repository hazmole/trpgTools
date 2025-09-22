const TimerArr = [];
const Config = {
  averageTime: 60*60*5,  // 5 hr
  randomizeRange: 60*30, // 30 mins
  frequency: 0.5,        // 500 ms
};

function initialize() {
  initConfig();
  resetCandles();
  renderCandles();
}

function resetCandles() {
  if (TimerArr.length == 0) {
    for(let i=0; i<10; i++) TimerArr.push({});
  }

  for(let i=0; i<10; i++) {
    if(TimerArr[i].handler) clearInterval(TimerArr[i].handler);

    const offset = Math.floor(((Math.random() + Math.random()) - 1) * Config.randomizeRange);
    TimerArr[i].isActive = false;
    TimerArr[i].handler = null;
    TimerArr[i].remainTime = Config.averageTime + offset;
  }
}

function renderCandles() {
  const rootElem = document.getElementById("CandlePool");
  rootElem.innerHTML = "";
  for(let i=0; i<10; i++) {
    rootElem.innerHTML += `<div id="Candle-${i}" class="Candle" data-idx=${i} onClick="toggleCandle(this)" >${[
      `<div class="halo"></div>`,
      `<div class="img"></div>`,
    ].join('')}</div>`;
  }
}

function toggleCandle(elem) {
  const idx = parseInt(elem.getAttribute('data-idx'));
  const timerObj = TimerArr[idx];

  if (timerObj.remainTime <= 0) return ;

  if (timerObj.isActive) {
    timerObj.isActive = false;
    clearInterval(timerObj.handler);
    elem.classList.remove("Light");
  } else {
    timerObj.isActive = true;
    timerObj.handler = setInterval(countDown, Config.frequency * 1000, idx);
    elem.classList.add("Light");
  }
}

function countDown(idx) {
  const timerObj = TimerArr[idx];
  timerObj.remainTime -= Config.frequency;

  console.log('tick')
  if (timerObj.remainTime <= 0) {
    timerObj.isActive = false;
    timerObj.remainTime = 0;
    clearInterval(timerObj.handler);

    const elem = document.getElementById(`Candle-${idx}`);
    elem.classList.remove("Light");
    elem.classList.add("BurnOut");
  }
}

window.onload = initialize;


function toggleConfigPanel() {
  const elem = document.getElementById("ConfigPanel");
  elem.classList.toggle("Active")
}
function initConfig() {
  const averageElem = document.getElementById("averageTime");
  const offsetElem = document.getElementById("offsetTime");

  averageElem.value = Config.averageTime;
  offsetElem.value = Config.randomizeRange;
}
function setConfig() {
  const averageElem = document.getElementById("averageTime");
  const offsetElem = document.getElementById("offsetTime"); 

  try {
    parseInt(averageElem.value);
    parseInt(offsetElem.value);
  } catch(e) {
    console.error(e);
    alert("輸入值必須為整數！");
    return ;
  }
  
  var yes = confirm('你確定要重設蠟燭設定嗎？\n這會導致當前的蠟燭狀態被重置。');
  if (!yes) return ;

  Config.averageTime = parseInt(averageElem.value);
  Config.randomizeRange = parseInt(offsetElem.value);

  resetCandles();
  renderCandles();
}