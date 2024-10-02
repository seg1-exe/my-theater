gsap.registerPlugin(ScrollTrigger);

setTimeout(function(){
  document.querySelector('.countdown-box').style.display = 'none';
  document.querySelector('#app').classList.remove('hidden');
  document.querySelector('#app').classList.add('visible');
  
  initGSAP();
}, 2700);

function initGSAP() {
  let sections = gsap.utils.toArray(".panel");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () => "+=" + document.querySelector(".container").offsetWidth
    }
  });
}
