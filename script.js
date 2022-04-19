const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) { link.style.animation = ''; } else { link.style.animation = `navlinkFade 0.5s ease forwards ${index/3+1.0}s`; }
            console.log(index / 7);
        });
    });

    //Animate Links

}



navSlide();