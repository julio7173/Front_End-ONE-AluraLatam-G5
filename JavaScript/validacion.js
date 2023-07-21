export function valida(input){
	const tipoDeInput = input.dataset.tipo;
	if(validadores[tipoDeInput]){
		validadores[tipoDeInput](input);
	}
}

const validadores = {
	nacimiento: (input) => validarNacimiento(input),
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