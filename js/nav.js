window.addEventListener('scroll',() => {
    const buttonUp = document.querySelector('#btnUp');
    buttonUp.classList.toggle('btn-up-show', window.scrollY > 300);
})