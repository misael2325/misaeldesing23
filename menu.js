// Simplified JavaScript for toggling submenus
document.addEventListener('DOMContentLoaded', () => {
    const mainMenuLinks = document.querySelectorAll('nav > a');

    // Cambiar el color de fondo del cuerpo para demostrar que el JavaScript está enlazado
    document.body.style.backgroundColor = '#f0f8ff';

    // Función para manejar el clic en un enlace del menú principal
    function handleMenuClick(event, link) {
        event.preventDefault();

        // Cerrar todos los demás submenús
        document.querySelectorAll('nav ul.active').forEach(activeMenu => {
            if (activeMenu !== link.nextElementSibling) {
                activeMenu.classList.remove('active');
                handleMenuClose(activeMenu);
            }
        });

        // Alternar el submenú clicado
        const submenu = link.nextElementSibling;
        if (submenu && submenu.tagName === 'UL') {
            const isActive = submenu.classList.toggle('active');
            if (isActive) {
                handleMenuOpen(submenu);
            } else {
                handleMenuClose(submenu);
            }
        }
    }

    // Función para manejar la apertura de un submenú
    function handleMenuOpen(submenu) {
        console.log('Submenú abierto:', submenu);
        // Aquí puedes agregar lógica adicional para la apertura del submenú
    }

    // Función para manejar el cierre de un submenú
    function handleMenuClose(submenu) {
        console.log('Submenú cerrado:', submenu);
        // Aquí puedes agregar lógica adicional para el cierre del submenú
    }

    // Función para manejar el movimiento del mouse sobre un submenú
    function handleMenuHover(submenu) {
        console.log('Mouse sobre el submenú:', submenu);
        // Aquí puedes agregar lógica adicional para el movimiento del mouse
    }

    mainMenuLinks.forEach(link => {
        link.addEventListener('click', (event) => handleMenuClick(event, link));

        // Agregar eventos de movimiento del mouse al submenú
        const submenu = link.nextElementSibling;
        if (submenu && submenu.tagName === 'UL') {
            submenu.addEventListener('mouseover', () => handleMenuHover(submenu));
        }
    });
});