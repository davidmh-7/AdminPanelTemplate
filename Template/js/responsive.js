const menuMovil = document.getElementById('menuMovil');
const menuMovilDrop = document.getElementById('menuMovilDrop');
const mostrarMenu = document.getElementById('mostrarMenu');
const botonmenu = document.getElementById('botonmenu');

var menuMovilContador = 1;

function verificarAnchoVentana() {
    var anchoVentanaa = window.innerWidth;
    if (anchoVentanaa <= 640) {
        menuMovil.style.display = 'none';
        botonmenu.style.display = 'block';

    }
    if (anchoVentanaa <= 1024 && anchoVentanaa >= 641) {
        menuMovil.style.display = 'none';
        botonmenu.style.display = 'block';
    }
    if (anchoVentanaa >= 1025) {
        botonmenu.style.display = 'none';
        menuMovil.style.display = 'block';
    }
    
}
function cambiarEstadoMenu() {
    console.log('1111');
    var anchoVentana = window.innerWidth;

    if (anchoVentana <= 640) {

        if (menuMovilContador % 2 === 0) {
            menuMovil.style.display = 'none';
            mostrarMenu.style.display = 'block';
            menuMovil.classList.remove('w-full');
            menuMovil.classList.add('w-64');
         
            menuMovilContador++;
        } else {

            mostrarMenu.style.display = 'none';
            menuMovil.style.display = 'block';
            menuMovil.classList.remove('w-64');
            menuMovil.classList.add('w-full');

            menuMovilContador++;
        }
    }

    if (anchoVentana <= 1024 && anchoVentana >= 641) {

        if (menuMovilContador % 2 === 0) {
            menuMovil.style.display = 'none';
            mostrarMenu.style.display = 'block';
            menuMovil.classList.remove('w-full');
            menuMovil.classList.add('w-64');
            menuMovilContador++;
        } else {
            mostrarMenu.style.display = 'none';
            menuMovil.style.display = 'block';
            menuMovil.classList.remove('w-64');
            menuMovil.classList.add('w-full');
            menuMovilContador++;
        }
    }
}

window.addEventListener("load", verificarAnchoVentana);
window.addEventListener("resize", verificarAnchoVentana);