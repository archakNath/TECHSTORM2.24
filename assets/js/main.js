const lander_animation = document.getElementById("lander-animation");
setTimeout(() => {
    lander_animation.style.display = 'flex';
    // typing animation
    const typing_text = document.querySelector('.typing-text');
    let text = 'BHARAT on the Moon!';
    let new_text = '', counter = 0;
    let typing_speed = (3000 / text.length);

    const typingInterval = setInterval(() => {
        new_text += text.charAt(counter++);
        if (counter == 9) {
            new_text += '<br>'
        }
        typing_text.innerHTML = new_text;

        if (counter === text.length) {
            clearInterval(typingInterval);
        }
    }, typing_speed);

    setTimeout(() => {
        lander_animation.style.opacity = '0';
        lander_animation.style.transform = 'scale(200%)';
        setTimeout(() => {
            lander_animation.style.display = 'none';
            typing_text.style.position = 'initial'
            typing_text.style.transform = 'none';
            typing_text.style.top = 'auto';
            typing_text.style.left = 'auto';
            // typing animation
            text = 'TECHSTORM 2k24';
            counter = 0;
            typing_speed = 2000 / text.length;
            setInterval(() => {
                typing_text.textContent = text.slice(0, counter++);
            }, typing_speed);
            new_text = '', counter = 0;
        }, 1000);
    }, 4000);
}, 4000);
