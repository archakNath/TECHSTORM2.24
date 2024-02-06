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