function galleryAnimation() {
    gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -20 * t))
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.img',
    scrub: true
  }
})
.to('.img', {
  stagger: .2,
  y: -300,
  scrub: true,
})
}

galleryAnimation();


window.addEventListener('scroll', function(){
  if(this.window.scrollY > 150){
    this.document.querySelector('#heading').style.display = 'none';
  } else {
    this.document.querySelector('#heading').style.display = 'block';
  }
})
