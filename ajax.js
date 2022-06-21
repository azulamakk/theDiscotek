//GET
function obtenerDatos(){
    const URLGet = "/discos.json"
    fetch(URLGet)
        .then(resultado => resultado.json())
        .then(data =>{
            let discos=data.discos;
            console.log(discos);
            discos.forEach(disco => {
                document.getElementById("discos").innerHTML+=
                    <tr>
                        <td>${disco.nombre}</td>
                        <td>${disco.artista}</td>
                        <td><img src="${disco.img}"></img></td>
                    </tr>
            });
        }
    )
}
obtenerDatos();

