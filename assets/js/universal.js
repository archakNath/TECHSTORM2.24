// landing page timeout
const loading_page = document.getElementById("loading-page");
setTimeout(() => {
    loading_page.style.opacity = '0';
    setTimeout(() => {
        loading_page.style.display = 'none';
    }, 1000);
}, 4000);