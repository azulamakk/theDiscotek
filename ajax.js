//GET
function obtenerDatos(){
    const URLGet = "/discos.json"
    fetch(URLGet)
        .then(resultado => resultado.json())
        .then(data =>{
            let discos=data.books;
            console.log(discos);
            discos.forEach(disco => {
                document.getElementById("discos").innerHTML+=
                    <tr>
                        <td>${disco.nombre}</td>
                        <td>${disco.artista}</td>
                        <td><img src="${disco.img}"></img></td>
                    </tr>
            });
        })
}
obtenerLibros();

//POST
function enviarDatos(){
    const URLPost="https://jsonplaceholder.typicode.com/posts";
    let objeto={
        userId:7,
        id: 567,
        title: "Objeto de prueba",
        body: "bla bla bla"
    }
    fetch(URLPost,{
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            console.log("Data que retorna a POST JSONPlaceHolder")
            console.log(datos)
        })
}

// GET local
function obtenerArchivos(){
    const URLJSON="/login.json";

}
