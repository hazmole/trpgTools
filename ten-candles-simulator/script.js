const TimerArr = [];
const Config = {
  isInited: false,
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

    const se = new Audio("./se/ES_Wind_Soft_Short_02.wav");
    TimerArr[i].se = se;
    TimerArr[i].se.volume = .3;
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

  // console.log('tick')
  if (timerObj.remainTime <= 0) {
    timerObj.isActive = false;
    timerObj.remainTime = 0;
    clearInterval(timerObj.handler);

    const elem = document.getElementById(`Candle-${idx}`);
    elem.classList.remove("Light");
    elem.classList.add("BurnOut");
    timerObj.se.play();
  }
}

window.onload = initialize;

/*==============
 * Config */
function openConfigPanel() {
  const elems = [
    document.getElementById('BackScreen'),
    document.getElementById('Dialog'),
  ];
  elems.forEach(elem => {
    elem.style.display = 'block';
  });
}
function closeConfigPanel() {
  const elems = [
    document.getElementById('BackScreen'),
    document.getElementById('Dialog'),
  ];
  elems.forEach(elem => {
    elem.style.display = 'none';
  });
}

function toggleConfigPanel() {
  const elem = document.getElementById("ConfigPanel");
  elem.classList.toggle("Active")
}
function initConfig() {
  const averageElems = {
    hour:   document.getElementById("averageTime-hr"),
    minute: document.getElementById("averageTime-mn"),
    second: document.getElementById("averageTime-sc"),
  };
  const offsetElems = {
    hour:   document.getElementById("randomRange-hr"),
    minute: document.getElementById("randomRange-mn"),
    second: document.getElementById("randomRange-sc"),
  };

  averageElems.second.value = Config.averageTime % 60;
  averageElems.minute.value = Math.floor(Config.averageTime / 60) % 60;
  averageElems.hour.value   = Math.floor(Config.averageTime / 60 / 60);

  offsetElems.second.value = Config.randomizeRange % 60;
  offsetElems.minute.value = Math.floor(Config.randomizeRange / 60) % 60;
  offsetElems.hour.value   = Math.floor(Config.randomizeRange / 60 / 60);
}
function setConfig(isInit) {
  const averageElems = {
    hour:   document.getElementById("averageTime-hr"),
    minute: document.getElementById("averageTime-mn"),
    second: document.getElementById("averageTime-sc"),
  };
  const offsetElems = {
    hour:   document.getElementById("randomRange-hr"),
    minute: document.getElementById("randomRange-mn"),
    second: document.getElementById("randomRange-sc"),
  };

  var averageTime, randomizeRange = 0;
  try {
    averageTime = parseInt(averageElems.hour.value) * 3600
                + parseInt(averageElems.minute.value) * 60
                + parseInt(averageElems.second.value);
    randomizeRange  = parseInt(offsetElems.hour.value) * 3600
                    + parseInt(offsetElems.minute.value) * 60
                    + parseInt(offsetElems.second.value);
  } catch(e) {
    console.error(e);
    alert("輸入值必須為整數！");
    return ;
  }
  
  if (Config.isInited) {
    var yes = confirm('你確定要重設蠟燭設定嗎？\n這會導致當前的蠟燭狀態被重置。');
    if (!yes) return ;
  } else {
    Config.isInited = true;
  }

  Config.averageTime = averageTime;
  Config.randomizeRange = randomizeRange;

  closeConfigPanel();
  resetCandles();
  renderCandles();
  
  const SoundEffect = new Audio("./se/ES_Wind_Soft_Short_02.wav");
  SoundEffect.volume = 0.3;
  SoundEffect.play();
}