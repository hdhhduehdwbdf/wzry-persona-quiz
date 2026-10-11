/* PWA 注册：路径相对脚本自身解析，兼容 GitHub Pages 子目录部署 */
(function () {
  if (!('serviceWorker' in navigator)) return;
  if (!location.protocol.startsWith('http')) return;
  var src = (document.currentScript && document.currentScript.src) || '';
  var swUrl = src ? new URL('../sw.js', src).href : 'sw.js';
  var scope = src ? new URL('../', src).pathname : '/';
  window.addEventListener('load', function () {
    navigator.serviceWorker.register(swUrl, { updateViaCache: 'none', scope: scope })
      .then(function (reg) { reg.update().catch(function () {}); })
      .catch(function () {});
  });
})();
