/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/burger.js":
/*!******************************!*\
  !*** ./js/modules/burger.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menuBurger() {
    //menu burger to open/close (JQuery)
    $(document).ready(function () {
        $(".icon-menu").click(function (event) {
            $(".icon-menu,.menu__body").toggleClass("active");
            $("body").toggleClass("lock"); //
        });
    });

    //logo-burger animation
    const logo = document.querySelector(".header__logo");
    const menuIcon = document.querySelector(".icon-menu");

    menuIcon.addEventListener("click", () => {
        logo.classList.toggle("header__logo_appearance");
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuBurger);



/***/ }),

/***/ "./js/modules/contactModal.js":
/*!************************************!*\
  !*** ./js/modules/contactModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function contactModal() {
    const modalTrigger = document.querySelector('[data-modal]');
    const modal = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('[data-close]');
    
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modalTrigger.addEventListener('click', (event) => {
        event.preventDefault();
        openModal();
    });

    const modalTimerId = setTimeout(openModal, 5000);

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', () => {
        closeModal();
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactModal);



/***/ }),

/***/ "./js/modules/navigation.js":
/*!**********************************!*\
  !*** ./js/modules/navigation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollNavigation);



/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function timer() {
        const deadline = '2025-05-20';
    
        function getTimeRemaining(endtime) {
            let days, hours, minutes, seconds;
            const t = Date.parse(endtime) - Date.parse(new Date());
    
            if (t <= 0) {
                days = 0;
                hours = 0;
                minutes = 0;
                seconds = 0;
            } 
    
            if (t > 0) {
                days = Math.floor(t / (1000 * 60 * 60 * 24));
                hours = Math.floor((t / (1000 * 60 * 60)) % 24);
                minutes = Math.floor((t / 1000 / 60) % 60);
                seconds = Math.floor((t / 1000) % 60);
            }
    
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }
    
        function getZero(num) {
            if(num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }
    
        function setClock(selector, endtime) {
            const timer = document.querySelector(selector);
            const days = timer.querySelector('#days');
            const hours = timer.querySelector('#hours');
            const minutes = timer.querySelector('#minutes');
            const seconds = timer.querySelector('#seconds');
    
            const timeInterval = setInterval(updateClock, 1000);
    
            updateClock();
    
            function updateClock() {
                const t = getTimeRemaining(endtime);
    
                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);
    
                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
        }  
    
    setClock('.timer', deadline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/modules/warningModal.js":
/*!************************************!*\
  !*** ./js/modules/warningModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function warningModal() {
    function createModal() {
        const body = document.querySelector('body');
        const wrapper = document.querySelector('.wrapper');
        const modalWrapper = document.createElement('div');
        const modalText = document.createElement('div');
        const blockedList = document.querySelectorAll('.blocked');
        
        modalWrapper.classList.add('warning-modal');
        modalText.classList.add('warning-modal__text');
        modalText.textContent = 'This section is currently under development.';
        modalWrapper.append(modalText);
        wrapper.append(modalWrapper);
        
        const showModal = () => {
            modalWrapper.classList.remove('warning-modal_hide');
            modalWrapper.classList.add('warning-modal_show');
            body.classList.remove('unlocked-scroll');
            body.classList.add('locked-scroll');
        };

        const hideModal = () => {
            modalWrapper.classList.remove('warning-modal_show');
            modalWrapper.classList.add('warning-modal_hide');
            body.classList.remove('locked-scroll');
            body.classList.add('unlocked-scroll');
        };

        modalWrapper.addEventListener('click', (event) => {
            if(event.target.classList.value !== 'warning-modal__text') {
                hideModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                hideModal();
            }
        });

        blockedList.forEach(item => {
            item.addEventListener('click', (event) => {
                if(event.target && event.target.classList.contains('blocked')) {
                    event.preventDefault();
                    showModal();
                }
            });
        });
    }
    createModal();    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (warningModal);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ "./js/modules/burger.js");
/* harmony import */ var _modules_contactModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/contactModal */ "./js/modules/contactModal.js");
/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/navigation */ "./js/modules/navigation.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_warningModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/warningModal */ "./js/modules/warningModal.js");








document.addEventListener('DOMContentLoaded', () => {
    (0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_contactModal__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_navigation__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules_warningModal__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map