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

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#page4',
        end: '200% 100%',
        scrub: 2,
        pin: true
    }
})
tl.to('#page4 #gallery-bg', {
    width: '100vw',
    height: '100vh',
    borderRadius: 0
}, 'a')
tl.to('#page4 #gallery-go-to', {
    opacity: 1,
    delay: .1
}, 'a')

// accordian animation
var accordians = document.querySelectorAll('#page6 .indi-question');
accordians.forEach(accordian => {
    var icon = accordian.querySelector('img');
    var answer = accordian.querySelector('.answer');
    accordian.onclick = () => {
        accordians.forEach(accord => {
            var icon = accord.querySelector('img');
            var answer = accord.querySelector('.answer');
            if (icon.classList.contains('active')) {
                icon.classList.toggle('active');
                answer.classList.toggle('active');
            }
        })
        icon.classList.toggle('active');
        answer.classList.toggle('active');
    }
});

// add events categories
var categories = [
    {
        name: 'Brain Teaser',
        image: '/asset/resource/image/events-bg/brainTeaser-min.jpg'
    },
    {
        name: 'Technicals',
        image: '/asset/resource/image/events-bg/technicals-min.jpg'
    },
    {
        name: 'Rovers',
        image: '/asset/resource/image/events-bg/Rovers.jpg'
    },
    {
        name: 'Games',
        image: '/asset/resource/image/events-bg/games-min.jpg'
    },
    {
        name: 'Creative',
        image: '/asset/resource/image/events-bg/creatives-min.jpg'
    }
]

const list = document.querySelector('#page5 .scroll-container');
categories.forEach(category => {
    const scrollItem = document.createElement('div');
    const background = document.createElement('img');
    const gradient = document.createElement('div');
    const content = document.createElement('div');
    const name = document.createElement('h1');
    const presented = document.createElement('p');
    const techstormName = document.createElement('h3');

    scrollItem.setAttribute('class', 'scroll-item');
    gradient.setAttribute('class', 'gradient');
    content.setAttribute('class', 'content');

    background.src = category.image;
    name.textContent = category.name;
    presented.textContent = 'presented by';
    techstormName.textContent = 'TECHSTORM 2.24';

    scrollItem.appendChild(background);
    content.appendChild(name);
    content.appendChild(presented);
    content.appendChild(techstormName);
    gradient.appendChild(content);
    scrollItem.appendChild(gradient);

    list.appendChild(scrollItem);

    scrollItem.onclick = () => {
        localStorage.setItem('event', category.name);
        window.location.href = '/pages/cat-event.html'
        var selectEvents = [];
        events.forEach(event => {
            if (event.category == localStorage.getItem('event')) {
                selectEvents.push(event);
            }
        });
        appendList(selectEvents);
    }
});

// event scroller

document.getElementById('event-right').onclick = () => {
    document.querySelector('#page5 .scroll-container').scrollLeft = document.querySelector('#page5 .scroll-container').scrollWidth;
}
document.getElementById('event-left').onclick = () => {
    document.querySelector('#page5 .scroll-container').scrollLeft = 0;
}