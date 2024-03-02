document.querySelector('.gradient h1').textContent = `#${localStorage.getItem('eventName').replace(/<br>/g, '')}`;
const image = document.querySelector('.image');
image.style.backgroundImage = `url(${localStorage.getItem('eventImage')})`;
document.getElementById('description').textContent = localStorage.getItem('eventDescription');
document.getElementById('registerBtn').onclick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScOWzQcQV7kl5XS7mQgIckv9mXERwpb3mUl3e46ZH4HclDfxg/viewform?usp=sf_link', '_blank');
}