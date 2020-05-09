// var observer = null;
// var targetNode = document.querySelector("body");
// var rd1 = Math.random() * 10;
// var rd2 = Math.random() * 10;
// var config = { attributes: true, childList: true, subtree: true };

// function beats({ timePercent, spacePercent } = {}) {
//   var timeEl = document.querySelector(
//     "#question-detail-main-tabs > div.tab-pane__1SHj.css-12hreja-TabContent.e16udao5 > div > div > div.result-container__ADcY > div > div:nth-child(2) > span:nth-child(2)"
//   );
//   var spaceEl = document.querySelector(
//     "#question-detail-main-tabs > div.tab-pane__1SHj.css-12hreja-TabContent.e16udao5 > div > div > div.result-container__ADcY > div > div:nth-child(3) > span:nth-child(2)"
//   );
//   if (!timeEl) return;
//   observer.disconnect();
//   timeEl.innerHTML = (timePercent || 100) + "%";
//   spaceEl.innerHTML = (spacePercent || 100) + "%";
//   observer.observe(targetNode, config);
// }

// observer = new MutationObserver(() =>
//   beats({
//     timePercent: Number(90 + rd1).toFixed(2),
//     spacePercent: Number(90 + rd2).toFixed(2),
//   })
// );

// window.addEventListener("unload", observer.disconnect);

// observer.observe(targetNode, config);

let observer = null;
const targetNode = document.querySelector("body");
const rd1 = Math.random() * 10;
const rd2 = Math.random() * 10;
const config = { attributes: true, childList: true, subtree: true };
const KEY_WORD = "提交中击败了";

const beats = ({ timePercent, spacePercent } = {}) => (mutations) => {
  for (const mutation of mutations) {
    let innerHTML = mutation.target.innerHTML;
    const hit = innerHTML.includes(KEY_WORD);
    if (!hit) continue;

    tp = innerHTML.match(/提交中击败了<span>(.*?)%<\/span>/)[1];
    sp = innerHTML.match(/%.*提交中击败了<span>(.*?)%<\/span>/)[1];
    observer.disconnect();

    mutation.target.innerHTML = mutation.target.innerHTML
      .replace(tp, timePercent)
      .replace(sp, spacePercent);

    observer.observe(targetNode, config);
  }
};

observer = new MutationObserver(
  beats({
    timePercent: Number(90 + rd1).toFixed(2),
    spacePercent: Number(90 + rd2).toFixed(2),
  })
);

window.addEventListener("unload", observer.disconnect);

observer.observe(targetNode, config);
