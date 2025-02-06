function toggleMenu() {
    const menu = document.querySelector('.navbar-links');
    menu.classList.toggle('show');

    const burger = document.querySelector('.burger');
    burger.classList.toggle('active'); // Adds an "active" class when menu is open
}