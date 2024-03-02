document.querySelector('.gradient h1').textContent = `#${localStorage.getItem('eventName').replace(/<br>/g, '')}`;
const image = document.querySelector('.image');
image.style.backgroundImage = `url(${localStorage.getItem('eventImage')})`;