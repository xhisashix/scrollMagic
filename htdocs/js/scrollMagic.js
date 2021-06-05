class ScrollFade {
  constructor() {
    this.ANIMATION_CLASS = 'active';

    let $section = document.querySelectorAll('.box:not(.active)');
    if ($section.length === null) {
      return;
    }
    let controller = new ScrollMagic.Controller();
    for (let i = 0; i < $section.length; i++) {
      let scene = new ScrollMagic.Scene({
        triggerElement: $section[i],
        triggerHook: 'onEnter',
        reverse: false,
        offset: 150,
      })
        .addIndicators()
        .addTo(controller);
      scene.on('enter', () => {
        $section[i].classList.toggle(this.ANIMATION_CLASS);
      });
      scene.on('end', () => {
        scene.destroy(false);
      });
    }
  }
}

new ScrollFade();
