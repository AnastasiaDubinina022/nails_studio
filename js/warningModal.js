document.addEventListener('DOMContentLoaded', () => {
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
});