// nav animation
var tl = gsap.timeline();
tl.from("nav #logo, nav #menu-btn", {
    y: -50,
    duration:.5,
    opacity:0,
    stagger:.5
})

// menu animation
const menuBtnCancel = document.getElementById('menu-btn-cancel');
const menuBtn = document.getElementById('menu-btn');
menuBtnCancel.onclick = () => {
    gsap.to(".nav-list", {
        x: 800
    });
    
}
menuBtn.onclick = () => {
    var navTL = gsap.timeline();
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
            window.open('https://www.instagram.com/techstorm_2.24?igsh=djhvaXhidHN3OGoy', "_blank");
        }
    });
    document.querySelectorAll('.facebook-social-link').forEach(link => {
        link.onclick = () => {
            window.open('https://www.facebook.com/profile.php?id=100087672622831&sfnsn=wiwspwa&mibextid=RUbZ1f', "_blank");
        }
    });
    document.querySelectorAll('.linkedin-social-link').forEach(link => {
        link.onclick = () => {
            window.open('https://www.linkedin.com', "_blank");
        }
    });

    // pages links
    document.querySelectorAll('.home-page-link').forEach(link => {
        link.onclick = () => {
            window.location.href = '/index.html'
        }
    });
    document.querySelectorAll('.gallery-page-link').forEach(link => {
        link.onclick = () => {
            window.location.href = '/pages/gallery.html'
        }
    });
}
hrefLinks();