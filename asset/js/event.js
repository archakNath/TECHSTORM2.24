var event_categories = [
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


appendList(event_categories);
if (localStorage.getItem('event') == 'all') {
} else {
    var selectEvents = [];
    events.forEach(event => {
        if (event.category == localStorage.getItem('event')) {
            selectEvents.push(event);
        }
    });
    appendList(selectEvents);
}


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


}