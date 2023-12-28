"use strict";

function enviar(form) {
    const nombre = form.nombre.value;
    const apellido = form.apellido.value;
    const Email = form.mail.value;
    const tel = form.telefono.value;
    const comentario = form.comentario.value;
    const motivo_contacto_element = document.querySelector('input[name="motivo"]:checked');
    const motivo_contacto = motivo_contacto_element ? motivo_contacto_element.value : '';

    
    
    if (controlDeNumeros(tel) && validarNombreApellido(nombre) && validarNombreApellido(apellido)){
         const param = {
            nom: nombre,
            ape: apellido,
            email: Email,
            telef: tel,
            coment: comentario,
            motivo: motivo_contacto,
        } 

        alert("Formulario enviado con éxito");

        return true; 
    } else {
        return false
    }

}


function controlDeNumeros(tel) {
       var telPattern = /^\d+$/;
   
       if (!telPattern.test(tel)) {
           alert("El campo Teléfono debe contener solo números.");
           return false; // Impide que se envíe el formulario
       }

       return true;
}

function validarNombreApellido(valor) {
    var regex = /^[A-Za-z\s]+$/; // Acepta letras y espacios en blanco

    if (!regex.test(valor)) {
        alert("El campo debe contener solo letras y espacios.");
        return false; // Impide que se envíe el formulario
    }

    return true;
}

function resetForm(){
    document.querySelector("form").reset();
}

function contarCaracteres() {
    var comentario = document.getElementById('comentario').value;
    var caracteresRestantes = 300 - comentario.length;

    if (caracteresRestantes >= 0) {
        document.getElementById('contador').textContent = 'Caracteres restantes: ' + caracteresRestantes;
    } else {
        // Si se supera el límite, puedes tomar medidas como deshabilitar el textarea o cambiar el estilo para indicar que se ha excedido.
        document.getElementById('contador').textContent = '¡Límite de caracteres alcanzado!';
    }