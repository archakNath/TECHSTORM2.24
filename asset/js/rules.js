document.querySelector('.gradient h1').textContent = `#${localStorage.getItem('eventName')}`;
const image = document.querySelector('.image');
image.style.backgroundImage = `url(${localStorage.getItem('eventImage')})`;