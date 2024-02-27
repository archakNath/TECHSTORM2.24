gsap.from('#page1 #content img', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 1
})

// description breakdown animation

var clutter = '';
document.querySelector('#page2 h1').textContent.split(" ").forEach(function (dets) {
    clutter += `<span> ${dets} </span>`
    document.querySelector('#page2 h1').innerHTML = clutter;
})


gsap.to('#page2 h1 span', {
    scrollTrigger: {
        trigger: '#page2 h1 span',
        scroller: 'body',
        start: 'top 60%',
        shrub: 2
    },
    stagger: .1,
    duration: .2,
    color: 'gray'
})

// description astronaut come in
gsap.from('#page2 #page2-right img', {
    opacity: 0,
    y: 20, 
    duration: 1,
    scrollTrigger: {
        trigger: '#page2 img',
        scroller: 'body',
        start: 'top 60%',
        shrub: 2
    }
})

var tl = gsap.timeline({scrollTrigger:{
    trigger: '#page4',
    end: '200% 100%',
    scrub: 2,
    pin: true
}})
tl.to('#page4 #gallery-bg', {
    width: '100vw',
    height: '100vh',
    borderRadius: 0
}, 'a')
tl.to('#page4 #gallery-go-to', {
    opacity: 1,
    delay: .5
}, 'a')