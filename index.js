const root = document.querySelector(':root');
const main = document.querySelector('main');
const headingImage = document.querySelector('.heading-img-mob');
const accordionItems = document.querySelectorAll('.accordion-item');

const rowHeight = () => {
    main.style.setProperty("--img-height", `${headingImage.clientHeight}px`);
}

const mainHeight = () => {
    root.style.setProperty('--main-height', `${main.clientHeight}px`)
}

window.addEventListener('load', () => {
    rowHeight();
});

window.addEventListener('resize', () => {
    rowHeight();
});

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        const content = item.querySelector('.accordion-content');
        const accordionHeading = item.querySelector('.accordion-heading');
        const arrowIcon = item.querySelector('img');

        if (content.classList.contains('active')) {
            content.classList.remove('active');
            accordionHeading.classList.remove('active');
            arrowIcon.classList.remove('active');
        } else {
            content.scrollIntoView({ behavior: "smooth"});
            
            accordionItems.forEach(item => {
                item.querySelector('.accordion-content').classList.remove('active');
                item.querySelector('.accordion-heading').classList.remove('active');
                item.querySelector('img').classList.remove('active');
            });
            content.classList.add('active');
            accordionHeading.classList.add('active');
            arrowIcon.classList.add('active');
        }
    });
});

console.log(accordionItems[0].querySelector('h3'));