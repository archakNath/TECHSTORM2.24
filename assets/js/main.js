const lander_animation = document.getElementById("lander-animation");
const video = document.getElementById('video-background');
const down_arrow = document.getElementById('down-arrow');
const circle = document.querySelector('.circle');

setTimeout(() => {
    // loading page terminated
    scrollToTop();
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
            // landing animation is terminated
            lander_animation.style.display = 'none';
            typing_text.style.position = 'initial'
            typing_text.style.transform = 'none';
            typing_text.style.top = 'auto';
            typing_text.style.left = 'auto';
            document.querySelector('.circle').style.height = '160px';
            document.querySelector('.circle').style.width = '160px';
            down_arrow.style.display = 'flex';
            document.getElementById('About').style.display = 'block';
            // typing animation
            text = 'TECHSTORM 2.24 •BPPIMT• ';
            counter = 0;
            typing_speed = 1500 / text.length;
            typing_text.classList.add('remove-caret');
            video.style.opacity = '1';
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

// logo parallax
const parallax = document.querySelector('main');

window.addEventListener("scroll", function () {
    let offset = window.scrollY;
    parallax.style.marginBottom = offset * -.5 + "px";
    if (offset > 30) {
        down_arrow.style.opacity = '0';

    } else {
        down_arrow.style.opacity = '1';
    }
    if (offset > 150) {
        circle.style.opacity = '0';
    } else {
        circle.style.opacity = '1';
    }
})

// reveal animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Scroll to top of the page
function scrollToTop(position, behavior) {
    window.scrollTo({
        top: 0,
        behavior: 'auto'
    });
}

// Down arrow clicked
down_arrow.onclick = () => {
    window.scrollTo({
        top: window.innerHeight - 180,
        behavior: 'smooth'
    });
}

// tagline movement
// const tagline = document.getElementById('transition');
// var repeatedHTML = '';
// for (var i = 0; i < 20; i++) {
//     repeatedHTML += '<p>SPACE AND BEYOND</p><p>•</p>';
// }
// tagline.innerHTML = repeatedHTML;

// gallery image resizing
const gallery_section = document.getElementById('Gallery');
window.addEventListener('scroll', () => {
    var change_rate;
    if(window.innerWidth < 700){
        change_rate = 150 + (window.scrollY - gallery_section.offsetTop)*.05;
    } else {
        change_rate = 80 + (window.scrollY - gallery_section.offsetTop)*.02;

    }
    gallery_section.style.backgroundSize = change_rate+'%';
})

// contact us

const contact_us = document.querySelector('.contactus');
const contact_cancel_btn = document.querySelector('.contactus .cross-btn');
contact_cancel_btn.onclick = () => {
    contact_us.style.display = 'none';
    document.querySelector('body').style.cursor = 'none';
}