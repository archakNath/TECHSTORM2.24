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
            document.querySelector('.circle').style.height = '160px';
            document.querySelector('.circle').style.width = '160px';
            // typing animation
            text = 'TECHSTORM 2k24 •BPPIMT •';
            counter = 0;
            typing_speed = 1500 / text.length;
            typing_text.classList.add('remove-caret');
            document.getElementById('video-background').style.opacity = '1';
            typing_text.innerHTML = '';
            setInterval(() => {
                typing_text.innerHTML = text.slice(0, counter).split('').map(
                    (char, i) => `<span style="transform:rotate(${i * 15}deg)">${char}</span>`
                ).join('');
                counter++;
                if (counter === text.length) {
                    clearInterval();
                }
                setTimeout(() => {
                    document.querySelector('.circle').style.animation = 'name_rotate 10s linear infinite';
                    document.querySelector('.circle img').style.animation = 'image_rotate 10s linear infinite';
                    document.querySelector('.circle img').style.opacity = '1';
                }, 1500);
            }, typing_speed);
            new_text = '', counter = 0;
        }, 1000);
    }, 4000);
}, 4000);

const parallax = document.querySelector('.circle');
const parallax_video = document.querySelector('#content');

window.addEventListener("scroll", function()
{
    let offset = window.scrollY;
    parallax_video.style.marginBottom = offset * -1.5 + "px";
})