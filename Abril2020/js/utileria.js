// document.addEventListener("DOMContentLoaded", () => {

// })  
jQuery(document).ready(() => {

    // This button will increment the value
    $('.qtyplus').click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });


    agregarCantidad();

}); // ready

// 
const agregarCantidad = () => {

    let cantidad;
    let botones = document.querySelectorAll('.botonAgrega'); //regresa un array
    let respuesta = document.querySelector('#cantidad');


    botones.forEach((boton) => {

        if (boton.classList.contains('qtyminus')) {

            boton.addEventListener("click", (elemento) => {

                cantidad = elemento.target.parentNode.nextElementSibling.childNodes[1].value;
                respuesta.innerHTML = cantidad
            })
        } else if (boton.classList.contains('qtyplus')) {
            boton.addEventListener("click", (elemento) => {

                cantidad = elemento.target.parentNode.previousElementSibling.childNodes[1].value;
                respuesta.innerHTML = cantidad
            })
        }


    })

};