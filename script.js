// PREVISUALIZAR IMAGEN

const imagenInput = document.getElementById("imagen");
const preview = document.getElementById("preview");

imagenInput.addEventListener("change", function(){

    const archivo = this.files[0];

    if(archivo){

        const reader = new FileReader();

        reader.onload = function(e){

            preview.src = e.target.result;

        }

        reader.readAsDataURL(archivo);
    }

});


// VALIDAR FORMULARIO

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;
    let tarea = document.getElementById("tarea").value;

    if(nombre == "" ||
       apellido == "" ||
       edad == "" ||
       correo == "" ||
       tarea == ""){

        alert("Todos los campos son obligatorios");
        e.preventDefault();
    }

});