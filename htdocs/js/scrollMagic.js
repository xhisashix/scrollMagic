var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: '#act',
  offset: 100,
  triggerHook: 'onCenter', // トリガーフック指定
  reverse: false,
})
  .setClassToggle('#act', 'fixed')
  .addIndicators()
  .addTo(controller); // Controllerに追加
