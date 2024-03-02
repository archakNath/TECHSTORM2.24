var events = [
    {
        name: 'Tech Hunt',
        category: 'Brain Teaser',
        image: '/asset/resource/image/events-bg/techhunt.jpeg'
    },
    {
        name: 'Omegatrix',
        category: 'Brain Teaser',
        image: '/asset/resource/image/events-bg/omegatrix.jpg'
    },
    {
        name: 'Code Bee',
        category: 'Technicals',
        image: '/asset/resource/image/events-bg/codebee.jpg'
    },
    {
        name: 'App Mania',
        category: 'Technicals',
        image: '/asset/resource/image/events-bg/app-mania.jpg'
    },
    {
        name: 'Technical <br> Writing',
        category: 'Technicals',
        image: '/asset/resource/image/events-bg/technical-writing.jpg'
    },
    {
        name: 'Aqua Race',
        category: 'Rovers',
        image: '/asset/resource/image/events-bg/aquarace.jpg'
    },
    {
        name: 'Ro Navigator',
        category: 'Rovers',
        image: '/asset/resource/image/events-bg/ronavigator.jpg'
    },
    {
        name: 'Ro Terrance',
        category: 'Rovers',
        image: '/asset/resource/image/events-bg/roterrain.jpeg'
    },
    {
        name: 'Ro Combat',
        category: 'Rovers',
        image: '/asset/resource/image/events-bg/rocombat.webp'
    },
    {
        name: 'Ro Soccer',
        category: 'Rovers',
        image: '/asset/resource/image/events-bg/rosoccor.jpg'
    },
    {
        name: 'Fifa(Console)',
        category: 'Games',
        image: '/asset/resource/image/events-bg/fifa.jpeg'
    },
    {
        name: 'PES(Mobile)',
        category: 'Games',
        image: '/asset/resource/image/events-bg/pes.jpeg'
    },
    {
        name: 'Khet',
        category: 'Games',
        image: '/asset/resource/image/events-bg/khet.jpeg'
    },
    {
        name: 'Creative <br> Canvas',
        category: 'Creative',
        image: '/asset/resource/image/events-bg/creative-canvas.png'
    },
    {
        name: 'Passion <br> with Reels',
        category: 'Creative',
        image: '/asset/resource/image/events-bg/reels.png'
    },

]

document.querySelector('main>h1').innerHTML = localStorage.getItem('event')

var selectEvents = [];
events.forEach(event => {
    if (event.category == localStorage.getItem('event')) {
        selectEvents.push(event);
    }
});
appendList(selectEvents);

function appendList(categories) {
    const list = document.querySelector('.scroll-container');
    list.innerHTML = '';
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
        name.innerHTML = category.name;
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
            localStorage.setItem('eventName', category.name);
            localStorage.setItem('eventImage', category.image);
            window.location.href = '/pages/rules.html'
        }
    });


}