// menu animation
const menuBtnCancel = document.getElementById('menu-btn-cancel');
const menuBtn = document.getElementById('menu-btn');
menuBtnCancel.onclick = () => {
    gsap.to(".nav-list", {
        x: 800
    })
}
menuBtn.onclick = () => {
    gsap.to(".nav-list", {
        x: 0
    })
}

function hrefLinks(){
    // social links
    document.querySelectorAll('.youtube-social-link').forEach(link => {
        link.onclick = () => {
            window.open('https://www.youtube.com/@techstorm2.23', "_blank");
        }
    });
    document.querySelectorAll('.instagram-social-link').forEach(link => {
        link.onclick = () => {
            window.open('https://www.youtube.com/@techstorm2.23', "_blank");
        }
    });
    document.querySelectorAll('.facebook-social-link').forEach(link => {
        link.onclick = () => {
            window.open('https://www.youtube.com/@techstorm2.23', "_blank");
        }
    });
    document.querySelectorAll('.linkedin-social-link').forEach(link => {
        link.onclick = () => {
            window.open('https://www.youtube.com/@techstorm2.23', "_blank");
        }
    });

    // pages links
    document.querySelectorAll('.home-page-link').forEach(link => {
        link.onclick = () => {
            window.location.href = '/index.html'
        }
    });
}
hrefLinks();