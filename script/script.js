const scrollBtns = document.querySelectorAll('.scroll-button');
const elemToScroll = document.querySelector('.order-bg');

const scrollToElem = () => {
    elemToScroll.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}

for(const button of scrollBtns){
    button.addEventListener('click', scrollToElem);
}