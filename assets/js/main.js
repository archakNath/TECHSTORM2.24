const lander_animation = document.getElementById("lander-animation");
setTimeout(() => {
    lander_animation.style.display = 'block';
    setTimeout(() => {
        lander_animation.style.opacity = '0';
        setTimeout(() => {
            lander_animation.style.display = 'none';
        }, 500);
    }, 4000);
}, 4000);