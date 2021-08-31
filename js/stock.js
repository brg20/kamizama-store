let datos = []; // ARRAY DE MANGAS DESDE stock.json
let mangas = []; // MANGAS CON ATRIBUTOS Y FUNCIONES PARA USARLO EN main.js


// GET stock.json
let url = "./data/stock.json"
$.getJSON(url, function(response, state){
    if(state == "success"){
        datos = response;

        // GUARDAR "datos" EN EL ARRAY "mangas" CON SUS ATRIBUTOS Y FUNCIONES DEL CONTRUCTOR "manga"
        for(let item of datos){
            mangas.push(new Manga(item.id, item.nombre, item.tomo, item.precio, item.imagen));
        }

        //GUARDAR ARRAY mangas EN EL LOCAL STORAGE
        let mangasJSON = JSON.stringify(mangas);
        localStorage.setItem("data", mangasJSON);

        // AGREGAR MANGAS AL DOCUMENT
        let mangasDOM = document.querySelector("#mangasDOM");

        for(let el of datos){
            let divManga = document.createElement("div");
            divManga.classList.add("manga");
            divManga.innerHTML = `
                <div class="imagen_manga">
                    <img src="${el.imagen}" alt="${el.nombre}">
                </div>
                <div class="descripcion_manga">
                    <p class="descripcion_manga--nombre">${el.nombre}</p>
                    <p class="descripcion_manga--tomo">${el.tomo}</p>
                    <p class="descripcion_manga--precio">$ARS ${el.precio}</p>
                    <button onClick="agregarManga(${el.id})">Agregar</button>
                </div>`;
            mangasDOM.appendChild(divManga);
        };
    }
});

//FUNCION PARA CONSTRUIR CADA MANGA DENTRO DEL ARRAY "mangas"
function Manga(id, nombre, tomo, precio, imagen){
    
    this.id = parseInt(id);
    this.nombre = nombre;
    this.tomo = tomo;
    this.precio = parseInt(precio);
    this.imagen = imagen;
    
    // Agregar item al carrito y al Local Storage
    this.agregarCarrito = function(){
        carrito.push(new Manga(this. id, this.nombre, this.tomo, this.precio));
        
        //Actualizar en el Local Storage
        carritoJSON = JSON.stringify(carrito);
        localStorage.setItem("carrito", carritoJSON);

        // Numero de items en el icono del carrito
        actualizarNumeroCarrito();
    }
}

