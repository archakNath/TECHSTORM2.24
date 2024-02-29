// nav animation
var tl = gsap.timeline();
tl.from("nav #logo, nav #menu-btn, nav #nav-part2 h2", {
    y: -50,
    duration:.2,
    opacity:0,
    stagger:.2
})

// hide nav-links
document.querySelector('.nav-list').style.transform = `translateX(${document.querySelector('.nav-list').offsetWidth}px)`;

// menu animation
const menuBtnCancel = document.getElementById('menu-btn-cancel');
const menuBtn = document.getElementById('menu-btn');
menuBtnCancel.onclick = () => {
    gsap.to(".nav-list", {
        x: document.querySelector('.nav-list').offsetWidth
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
    document.querySelectorAll('.team-page-link').forEach(link => {
        link.onclick = () => {
            window.location.href = '/pages/team.html'
        }
    });
}
hrefLinks();

// change nav background on scroll

window.addEventListener('scroll', function (){
    if(this.window.scrollY > 150){
        this.document.querySelector('nav').style.backdropFilter = 'blur(10px)';
        this.document.querySelector('nav').style.backgroundColor = 'rgba(255, 255, 255, 0.025)';
    } else {
        this.document.querySelector('nav').style.backdropFilter = 'none';
        this.document.querySelector('nav').style.backgroundColor = 'rgba(255, 255, 255, 0)';
    }
})