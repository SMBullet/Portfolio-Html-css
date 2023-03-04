let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle('open-menu')
    menu.classList.toggle('move');
};
window.onscroll = () =>{
    navbar.classList.remove('open-menu')
    menu.classList.remove('move');
} 

//Header background change on scroll
let header = document.querySelector('header'); 

window.addEventListener('scroll', () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});

//Scrolltop

let scrollTop = document.querySelector('.scroll-top'); 

window.addEventListener('scroll', () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY > 400);
});

//Open popup

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const modalOverlay = document.getElementById('modal-overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

modalOverlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    modalOverlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    modalOverlay.classList.remove('active')
}

///////////////////////////////////////////////////////

const progressBarList = document.querySelectorAll(".progress-bar");
const btnAnimateBar = document.querySelector(".animate-bar");

btnAnimateBar.addEventListener("click", () => {
    progressBarList.forEach(progressBar => {
        progressBar.classList.toggle("bar-animation");
    });
})



