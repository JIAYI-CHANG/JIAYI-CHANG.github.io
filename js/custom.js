var percentFlag = false; // 节流阀
function momentScroll() {
  let a = document.documentElement.scrollTop || window.pageYOffset; // 卷去高度
  const waterfallResult = a % document.documentElement.clientHeight; // 卷去一个视口
  waterfallResult <= 99 || (waterfallResult = 99);

  if (
    !percentFlag &&
    waterfallResult + 100 >= document.documentElement.clientHeight &&
    document.querySelector("#waterfall")
  ) {
    // console.info(waterfallResult, document.documentElement.clientHeight);
    setTimeout(() => {
      waterfall("#waterfall");
    }, 500);
  } else {
    setTimeout(() => {
      document.querySelector("#waterfall") && waterfall("#waterfall");
    }, 500);
  }

  const r = window.scrollY + document.documentElement.clientHeight;

  let p = document.getElementById("post-comment") || document.getElementById("footer");

  (p.offsetTop + p.offsetHeight / 2 < r || 90 < waterfallResult) && (percentFlag = true);
}

function replaceAll(e, n, t) {
  return e.split(n).join(t);
}

var icatmoment = {
  diffDate: function (d, more = false) {
    const dateNow = new Date();
    const datePost = new Date(d);
    const dateDiff = dateNow.getTime() - datePost.getTime();
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;

    let result;
    
    // Check if the suffix object and required properties exist
    const suffix = GLOBAL_CONFIG.date_suffix || {};
    const daySuffix = suffix.day || '天前';
    const hourSuffix = suffix.hour || '小时前';
    const minSuffix = suffix.hour || '分钟前';

    if (more) {
      const monthCount = dateDiff / month;
      const dayCount = dateDiff / day;
      const hourCount = dateDiff / hour;
      const minuteCount = dateDiff / minute;

      if (monthCount >= 1) {
        result = datePost.toLocaleDateString().replace(/\//g, "-");
      } else if (dayCount >= 1) {
        result = parseInt(dayCount) + " " + daySuffix;
      } else if (hourCount >= 1) {
        result = parseInt(hourCount) + " " + hourSuffix;
      } else if (minuteCount >= 1) {
        result = parseInt(minuteCount) + " " + minSuffix;
      } else {
        result = suffix.just;
      }
    } else {
      result = parseInt(dateDiff / day);
    }
    return result;
  },
  
  changeTimeInEssay: function () {
    document.querySelector("#icat-bber") &&
      document.querySelectorAll("#icat-bber time").forEach(function (e) {
        var datetime = e.getAttribute("datetime");
        e.innerText = new Date(datetime).toLocaleDateString("zh-CN"); // 使用中国的日期格式
        e.style.display = "inline";
    });
  
  },
  reflashEssayWaterFall: function () {
    document.querySelector("#waterfall") &&
      setTimeout(function () {
        waterfall("#waterfall");
        document.getElementById("waterfall").classList.add("show");
      }, 500);
  },
  commentText: function (e) {
    if (e == "undefined" || e == "null") e = "好棒！";
    var n = document.getElementsByClassName("el-textarea__inner")[0],
      t = document.createEvent("HTMLEvents");
    if (!n) return;
    t.initEvent("input", !0, !0);
    var o = replaceAll(e, "\n", "\n> ");
    (n.value = "> " + o + "\n\n"), n.dispatchEvent(t);
    var i = document.querySelector("#post-comment").offsetTop;
    window.scrollTo(0, i - 80),
      n.focus(),
      n.setSelectionRange(-1, -1),
      document.getElementById("comment-tips") && document.getElementById("comment-tips").classList.add("show");
  },
};

icatmoment.changeTimeInEssay();
icatmoment.reflashEssayWaterFall();
// 即刻短文处理逻辑

// --- 小工具：防抖 ---
function debounce(fn, wait = 200) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}

// --- 等待容器内图片都可用 ---
function waitImages(container) {
  const imgs = Array.from(container.querySelectorAll('img'));
  if (imgs.length === 0) return Promise.resolve();
  return Promise.all(
    imgs.map(img => {
      if (img.complete && img.naturalWidth > 0) return Promise.resolve();
      return new Promise(resolve => {
        img.addEventListener('load', resolve, { once: true });
        img.addEventListener('error', resolve, { once: true });
      });
    })
  );
}

var percentFlag = false;

function momentScroll() {
  const a = document.documentElement.scrollTop || window.pageYOffset;
  let waterfallResult = a % document.documentElement.clientHeight; // 用 let
  if (!(waterfallResult <= 99)) waterfallResult = 99; // 避免对 const 赋值的报错

  const grid = document.querySelector('#waterfall');
  if (!grid) return;

  const doLayout = debounce(() => waterfall('#waterfall'), 200); // 真正防抖一次

  // 到达接近一屏底部时再尝试布局（且仅在未“封顶”前）
  if (!percentFlag && (waterfallResult + 100 >= document.documentElement.clientHeight)) {
    doLayout();
  }

  const r = window.scrollY + document.documentElement.clientHeight;
  const p = document.getElementById('post-comment') || document.getElementById('footer');

  if ((p.offsetTop + p.offsetHeight / 2) < r || waterfallResult > 90) {
    percentFlag = true; // 触底后不再高频触布局
  }
}

// --- 首屏/路由后：等待图片完成再做布局 ---
icatmoment.reflashEssayWaterFall = function () {
  const grid = document.querySelector('#waterfall');
  if (!grid) return;
  waitImages(grid).then(() => {
    waterfall('#waterfall');
    grid.classList.add('show');
  });
};

// --- 时间后缀修正 ---
icatmoment.diffDate = function (d, more = false) {
  const dateNow = new Date();
  const datePost = new Date(d);
  const dateDiff = dateNow.getTime() - datePost.getTime();

  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;

  const suffix = (window.GLOBAL_CONFIG && GLOBAL_CONFIG.date_suffix) || {};
  const daySuffix = suffix.day || '天前';
  const hourSuffix = suffix.hour || '小时前';
  const minSuffix = suffix.minute || '分钟前'; // 修正这里
  const just = suffix.just || '刚刚';

  if (more) {
    const monthCount = dateDiff / month;
    const dayCount = dateDiff / day;
    const hourCount = dateDiff / hour;
    const minuteCount = dateDiff / minute;

    if (monthCount >= 1) return datePost.toLocaleDateString().replace(/\//g, '-');
    if (dayCount >= 1) return parseInt(dayCount) + ' ' + daySuffix;
    if (hourCount >= 1) return parseInt(hourCount) + ' ' + hourSuffix;
    if (minuteCount >= 1) return parseInt(minuteCount) + ' ' + minSuffix;
    return just;
  } else {
    return parseInt(dateDiff / day);
  }
};

// --- 绑定事件：滚动/尺寸改变/首屏 ---
window.addEventListener('scroll', debounce(momentScroll, 150), { passive: true });
window.addEventListener('resize', debounce(() => waterfall('#waterfall'), 200));

// 首屏：等图片 -> 布局
icatmoment.changeTimeInEssay();
icatmoment.reflashEssayWaterFall();

// 可选：监听图片懒加载后高度变化（更稳）
const grid = document.querySelector('#waterfall');
if (grid) {
  const ro = new ResizeObserver(debounce(() => waterfall('#waterfall'), 120));
  ro.observe(grid);
}
