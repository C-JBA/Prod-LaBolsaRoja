
const nombre = document.getElementById("name");
const descripcion = document.getElementById("description");
const precio = document.getElementById("price");
const imagen = document.getElementById("image");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
const btnEnviar = document.getElementById("btn-enviar");
let Tabla = document.getElementById("Inventario");
let imgBase64 = "";
let inventario;
let id = 0;

let fileImage = document.getElementById('fileImage');
let btnFake = document.getElementById('btnFake');
let imageFile = document.getElementById('imageFile');

btnFake.addEventListener('click', function () {
    fileImage.click();
});

fileImage.addEventListener('change', function () {
    chargeFile('fileImage')
});

function chargeFile(inputFile) {
    var file = document.getElementById(inputFile).files[0];
    var reader = new FileReader();
    
       if (file) {
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            imgBase64 = e.target.result;
            console.log(imgBase64);
            parrafo.innerHTML = "Imagen cargada correctamente";
        }
    }// file
}

if (localStorage.getItem("productos") == null) {
    fetch('./js/productos.json')
        .then(response => response.json())
        .then(data => {
            inventario = data;
        })
        .catch(error => {
            console.error('Error al leer el archivo JSON:', error);
        });

} else {

    inventario = JSON.parse(localStorage.getItem("productos"));

}

actualizarTabla();

function actualizarTabla() {
    while (Tabla.firstChild) {
        Tabla.removeChild(Tabla.firstChild);
    }

    inventario.forEach((element, index) => {
        let html = `
        <tr>
                  <td>${element.id}</td>
                  <td><img  src=${element.image} width="100 px" height="75 px"></td>
                  <td>${element.title}</td>
                  <td>${element.description}</td>
                  <td>${element.price}</td>
                  <td>${element.inventary}</td>
                  <td><button type="button" onclick="quitarProducto(${element.id})" class="btn btn-danger">Quitar</button></td>
                </tr>        
        `;
        Tabla.insertAdjacentHTML("beforeend", html);
        localStorage.setItem("productos", JSON.stringify(inventario));
    });
}


function quitarProducto(index) {
    // Eliminar el producto del inventario
    inventario.forEach((element, indx) => {
        if (element.id == index) {
            inventario.splice(indx, 1);
            actualizarTabla();
        }
    }
    );
}

btnEnviar.addEventListener("click", e => {
   e.preventDefault();
    let warnings = "";
    let agregar = false;
    //let regexPrice = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    let regexPrice = /^\d/;
    parrafo.innerHTML = "";

    let trimName = nombre.value.trim();
    let trimDescription = descripcion.value.trim();
    let trimPrice = precio.value.trim();
    let trimImage = imgBase64;
    console.log(imgBase64);

    if (trimName.length <= 2) {
        warnings += `El nombre no es válido <br>`;
        agregar = "true";
        nombre.style.border = "solid 0.15rem red";

    } else {
        nombre.style.border = "solid 0.15rem green";
    }
    if (trimDescription.length < 15) {
        warnings += `Descripción muy corta<br>`;
        agregar = true;
        descripcion.style.border = "solid 0.15rem red";
    } else {
        descripcion.style.border = "solid 0.15rem green";
    }
    if (!regexPrice.test(trimPrice) || trimPrice == 0) {
        warnings += `El precio no es válido <br>`;
        agregar = true;
        precio.style.border = "solid 0.15rem red";
    } else {
        precio.style.border = "solid 0.15rem green";
    }
    if (agregar) {
        parrafo.innerHTML = warnings;
    } else {
        //Se agregan los productos al local storage
        agregarProducto(trimName, trimPrice, trimDescription, trimImage);
        parrafo.innerHTML =
            `<div  class="alert alert-success d-flex align-items-center" role="alert">
            <svg  height="2rem"width="2rem" class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
            <div>
                Producto agregado correctamente.
            </div>
        </div>`;
        actualizarTabla();
    }
    borderTimeout();

});

//funcion para que una vez que se verifiquen las entradas de datos se regrese al borde normal
function borderTimeout() {
    setTimeout(() => {
        nombre.style.border = "";
        descripcion.style.border = "";
        precio.style.border = "";
    }, 1500);
}

function agregarProducto(title, price, description, image) {

    if (title !== "" && price !== "") {
        id = inventario.length + 1;
        inventario.push({ id: id, title: title, price: price, description: description, image: image });
        localStorage.setItem("productos", JSON.stringify(inventario));
        document.getElementById("name").value = "";
        document.getElementById("price").value = "";
        document.getElementById("description").value = "";
        imgBase64 = "";
    }


}
