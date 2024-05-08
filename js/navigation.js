'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const generalLink = document.querySelector('.general-link');
    const servicesLink = document.querySelector('.services-link');
    const galleryLink = document.querySelector('.gallery-link');
    const contactLink = document.querySelector('.contact-link');
    const services = document.querySelector('.services');
    const gallery = document.querySelector('.gallery');
    const contact = document.querySelector('.contact');



    function scrollToGeneral() {
        generalLink.addEventListener('click', () => {
            // document.documentElement.scrollTop = 0;

            window.scrollBy({
                top: 0,
                behavior: "smooth"
            });
        });
    };

    scrollToGeneral();

});