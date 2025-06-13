'use strict';

function scrollNavigation() {
    window.addEventListener('DOMContentLoaded', () => {
        const buttons = document.querySelector('.menu__list');
        const services = document.querySelector('.services').getBoundingClientRect().top;
        const gallery = document.querySelector('.gallery').getBoundingClientRect().top;
        const contact = document.querySelector('.contact').getBoundingClientRect().top;
        
        // нужно изменить координаты чтобы прокручивалось на верхнюю границу секций с учетом высоты хэдэра
        
        function scrollTo() {
            buttons.addEventListener('click', function (event) {
                event.preventDefault();
    
                let target = event.target;
                
                if(target && target.classList.contains('general-link')) {
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                }
    
                if(target && target.classList.contains('services-link')) {
                    window.scrollTo({
                        top: services,
                        left: 0,
                        behavior: "smooth",
                    });
                }
    
                if(target && target.classList.contains('gallery-link')) {
                    window.scrollTo({
                        top: gallery,
                        left: 0,
                        behavior: "smooth",
                    });
                }
    
                if(target && target.classList.contains('contact-link')) {
                    window.scrollTo({
                        top: contact,
                        left: 0,
                        behavior: "smooth",
                    });
                }
            });
        }
    
        scrollTo();
    });
}

export default scrollNavigation;

