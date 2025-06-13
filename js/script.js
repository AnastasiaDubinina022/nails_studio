'use strict';

import menuBurger from "./modules/burger";
import contactModal from "./modules/contactModal";
import scrollNavigation from "./modules/navigation";
import timer from "./modules/timer";
import warningModal from "./modules/warningModal";

document.addEventListener('DOMContentLoaded', () => {
    menuBurger();
    contactModal();
    scrollNavigation();
    timer();
    warningModal();
});