//GET
function obtenerDatos() {
    const URLGet = "./discos.json"

    fetch(URLGet)
        .then(resultado => resultado.json())
        .then(data => {
            let discos = data;
            console.log(discos);
            discos.forEach(disco => {
                document.getElementById("discos").innerHTML +=
                    `<div class="disco__card">
                        <h3>${disco.nombre}</h3>
                        <h4>${disco.artista}</h4>
                        <img src=${disco.img}></img>
                    </div>`
            });
        }
        )
}
obtenerDatos()