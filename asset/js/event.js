var categories = [
    {
        name: 'Brain Teaser',
        image: '/asset/resource/image/events-bg/Brain Teaser_bg-min.png'
    },
    {
        name: 'Technicals',
        image: '/asset/resource/image/events-bg/techhunt-bg-min.jpeg'
    },
    {
        name: 'Rover',
        image: '/asset/resource/image/events-bg/ro-terrain-bg-min.jpeg'
    },
    {
        name: 'Games',
        image: '/asset/resource/image/events-bg/fifa-bg-min.jpeg'
    },
    {
        name: 'Creative',
        image: '/asset/resource/image/events-bg/Creative Canvas_bg-min.png'
    }
]

const list = document.querySelector('.scroll-container');
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
});

