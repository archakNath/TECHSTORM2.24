// landing page timeout
const loading_page = document.getElementById("loading-page");
setTimeout(() => {
    loading_page.style.opacity = '0';
    setTimeout(() => {
        loading_page.style.display = 'none';
    }, 1000);
}, 4000);

const scroll_to_top_btn = document.getElementById('scroll-to-top-btn');
window.addEventListener("scroll", () => {
    if (window.scrollY > document.getElementById('About').getBoundingClientRect().top - 160) {
        scroll_to_top_btn.style.display = 'block';
        setTimeout(() => {
            scroll_to_top_btn.style.opacity = '1';
        }, 500);
    } else {
        setTimeout(() => {
            scroll_to_top_btn.style.display = 'none';
        }, 200);
        scroll_to_top_btn.style.opacity = '0';
    }
});
scroll_to_top_btn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// cursor
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill: 'forwards'});
});

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
