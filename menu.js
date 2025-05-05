// Mover el código JavaScript al archivo externo
// Código movido desde el archivo index.html

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los enlaces principales del menú
    const mainMenuLinks = document.querySelectorAll('nav > a');

    mainMenuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

            // Alternar la visibilidad del submenú asociado
            const submenu = link.nextElementSibling;
            if (submenu && submenu.tagName === 'UL') {
                submenu.classList.toggle('active');
            }
        });
    });

    // Mostrar el formulario al hacer clic en el submenú de Cotizar
    document.querySelector('a[href="#formulario-cotizacion"]').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('formulario-cotizacion').style.display = 'block';
    });

    // Agregar submenús al menú principal de Cotización
    const cotizacionMenu = document.querySelector('a[href="#formulario-cotizacion"]').nextElementSibling;
    if (cotizacionMenu && cotizacionMenu.tagName === 'UL') {
        cotizacionMenu.innerHTML = `
            <li><a href="#cotizar-ahora" data-formulario="cotizar-ahora">Cotizar ahora</a></li>
            <li><a href="#simular-cotizacion" data-formulario="simular-cotizacion">Simular cotización</a></li>
            <li><a href="#cotizaciones-anteriores" data-formulario="cotizaciones-anteriores">Cotizaciones anteriores</a></li>
        `;
    }

    // Mostrar los formularios al hacer clic en los enlaces del submenú de Cotizar
    const cotizarLinks = document.querySelectorAll('a[data-formulario]');
    cotizarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const formularioId = link.getAttribute('data-formulario');
            const formulario = document.getElementById(formularioId);

            if (formulario) {
                // Ocultar todos los formularios primero
                document.querySelectorAll('.formulario').forEach(form => {
                    form.style.display = 'none';
                });

                // Mostrar el formulario correspondiente
                formulario.style.display = 'block';
            }
        });
    });

    // Selecciona todos los elementos del menú principal
    const menuItems = document.querySelectorAll('nav > ul > li > a');

    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace

            // Oculta todos los submenús
            const submenus = document.querySelectorAll('nav ul ul');
            submenus.forEach(submenu => submenu.style.display = 'none');

            // Muestra el submenú correspondiente al elemento clicado
            const submenu = item.nextElementSibling;
            if (submenu && submenu.tagName === 'UL') {
                submenu.style.display = 'block';
            }
        });
    });
});

// Agregar funcionalidad para manejar la aparición de elementos al hacer scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});

