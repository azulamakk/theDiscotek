//GET
function obtenerDatos(){
    const URLGet = "https://api.itbook.store/1.0/new"
    fetch(URLGet)
        .then(resultado => resultado.json())
        .then(data =>{
            let libros=data.books;
            console.log(libros);
            libros.forEach(libro => {
                document.getElementById("libros").innerHTML+=
                    <tr>
                        <td>${libro.title}</td>
                        <td><img src="${libro.image}"></img></td>
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
        body:JSON.stringify(objeto)
    })
}
