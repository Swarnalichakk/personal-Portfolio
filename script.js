let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle(<i class="fa-solid fa-xmark"></i>)
    navbar.classList.toggle('active')
}

let section = document.querySelectorAll('section');
let navlinks = document.quarySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset  = sec.offsetTop -150;
        let height = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.quarySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    let heaader = document.querySelector('header');
    heaader.classList.toggle('sticky', window.scrollY > 100 );

    menuicon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({
    distance: '88px',
    duration: 2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading', { origin: top });
ScrollReveal().reveal('.home-img,.services-container,.contact form', { origin:'button' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    string: ['Frontend Developer','Web Designer','Painter'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});