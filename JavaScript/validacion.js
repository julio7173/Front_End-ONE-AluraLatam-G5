export function valida(input){
	const tipoDeInput = input.dataset.tipo;

	if(validadores[tipoDeInput]){
		validadores[tipoDeInput](input);
	}

	if(input.validity.valid){
		input.parentElement.classList.remove("input-container--invalid");
		input.parentElement.querySelector(".input-message-error").innerHTML = "";
	}else{
		input.parentElement.classList.add("input-container--invalid");
		input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
	}
}

const tipoDeErrores = [
	"valueMissing",
	"typeMismatch",
	"patternMismatch",
	"customError"
]

const mensajesDeError = {
	nombre: {
		valueMissing: "El campo nombre no puede estar vacio"
	},
	email: {
		valueMissing: "El campo correo no puede estar vacio",
		typeMismatch: "El correo no es valido"
	},
	password: {
		valueMissing: "El campo contraseña no puede estar vacio",
		patternMismatch: "Debe contener al menos 8 caracteres, al menos una letra minúscula, al menos una letra mayúscula y al menos un caracter especial"
	},
	nacimiento: {
		valueMissing: "El campo fecha de nacimiento no puede estar vacio",
		customError: "Debes tener al menos 18 años de edad"
	},
	telefono: {
		valueMissing: "El campo número telefónico no puede estar vacio",
		patternMismatch: "El formato requerido es '	xx xxxx xxxx' 10 dígitos"
	},
	direccion: {
		valueMissing: "El campo dirección no puede estar vacio",
		patternMismatch: "La dirección debe contener entre 10 a 40 caracteres"
	},
	ciudad: {
		valueMissing: "El campo ciudad no puede estar vacio",
		patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres"
	},
	estado: {
		valueMissing: "El campo estado no puede estar vacio",
		patternMismatch: "El estado debe contener entre 10 a 40 caracteres"
	}
}

const validadores = {
	nacimiento: (input) => validarNacimiento(input),
}

function mostrarMensajeDeError(tipoDeInput, input){
	let mensaje = "";
	tipoDeErrores.forEach((error) => {
		if(input.validity[error]){
			mensaje = mensajesDeError[tipoDeInput][error];
		}
	});
	return mensaje;
}

function validarNacimiento(input){
    const fechaUser = new Date(input.value);
    let mensaje = " ";
    if(mayorEdad(fechaUser)){
        return mensaje = "Debes tener al menos 18 años de edad"
    }
    input.setCustomValidity(mensaje);
}

function mayorEdad(fecha){ 
	const fechaActual = new Date(); 
	const edad = fechaActual.getUTCFullYear() - fecha.getUTCFullYear(); 
	const mes = fechaActual.getUTCMonth() - fecha.getUTCMonth(); 
	const dia = fechaActual.getUTCDate() - fecha.getUTCDate(); 
	if (edad > 18) { 
		return true; 
	} else if (edad === 18) { 
		if (mes > 0) { 
			return true; 
		} else if (mes === 0) { 
			if (dia >= 0) { 
				return true; 
			} 
		} 
	} 
	return false; 
}