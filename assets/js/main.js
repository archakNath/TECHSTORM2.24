const lander_animation = document.getElementById("lander-animation");
setTimeout(() => {
    lander_animation.style.display = 'flex';
    // typing animation
    const typing_text = document.querySelector('.typing-text');
    const text = 'BHARAT on the Moon!';
    let new_text = '', counter = 0;
    let typing_speed = (1300 / text.length);
    
    const typingInterval = setInterval(() => {
        new_text += text.charAt(counter++);
        typing_text.textContent = new_text;

        if (counter === text.length) {
            clearInterval(typingInterval);
        }
    }, typing_speed);

    setTimeout(() => {
        lander_animation.style.opacity = '0';
        setTimeout(() => {
            lander_animation.style.display = 'none';
        }, 500);
    }, 4000);
}, 4000);
