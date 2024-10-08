//read more in about
document.querySelector('.read-more').addEventListener('click', function() {
    const moreText = document.querySelector('.more-text');
    const button = this;
    
    if (moreText.classList.contains('show')) {
        moreText.classList.remove('show');
        button.textContent = 'Read More';
        button.style.display = 'inline'; 
    } else {
        moreText.classList.add('show');
        button.textContent = 'Read Less';
        button.style.display = 'none'; 
    }
});

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        
        if(top >= offset && top < offset + height){
        navLinks.forEach(link => {
            link.classList.remove('active');
            menuIcon.classList.remove('fa-x');
            menuIcon.classList.add('fa-bars');
            nav.classList.remove('active');
            if(link.getAttribute('href') == '#' + id){
                link.classList.add('active');
            }
        })
        }
    })
    menuIcon.classList.remove('fa-x');
nav.classList.remove('active');
}

let menuIcon = document.getElementById('hambuger-menu');
let nav = document.querySelector('.navbar');

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('fa-x');
  nav.classList.toggle('active');

}
ScrollReveal({ 
    reset: true,
    duration: 2000,
    scale: 1,
    distance: '80px',
    delay:200
});
ScrollReveal().reveal('.home-content, .heading',{ origin: 'top' });
ScrollReveal().reveal('.home-img, .project-box, .contact form',{ origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right' });

const typed = new Typed('.multiple-text',{
    strings: ["Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    showCursor: false,
})



    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById('contact-me').addEventListener('submit', function(event) {
            event.preventDefault(); 
            const formData = new FormData(this);

            fetch('https://formspree.io/f/xeoqjpyb', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                const toastMessage = document.getElementById('toast-message');
                if (response.ok) {
                    this.reset(); 
                } else {
                    showToast();
                }
            })
        });
    });

