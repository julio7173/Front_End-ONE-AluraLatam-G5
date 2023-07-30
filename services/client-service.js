const listaClientes = () => {
    return fetch("http://localhost:3000/perfil").then(respuesta => {
        return respuesta.json();
    });
}

export const clientServices = {
    listaClientes
}

/*
const listaClientes = () => {
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.open("GET", "http://localhost:3000/perfil");
        http.send();
        http.onload = () => {
            const response =  JSON.parse(http.response);
            if(http.status >= 400){
                reject(response);
            }else{
                resolve(response);
            }
        }
    });
    return promise;
}*/
