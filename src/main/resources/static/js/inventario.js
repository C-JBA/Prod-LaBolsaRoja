
const nombre = document.getElementById("name");
const descripcion = document.getElementById("description");
const precio = document.getElementById("price");
const imagen = document.getElementById("image");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
const btnEnviar = document.getElementById("btn-enviar");
let Tabla = document.getElementById("Inventario");
let imgInfo;
let inventario;
let productos;
let id = 0;
let upload_widget = document.getElementById('upload_widget');
    
    
    
upload_widget.addEventListener("click", function(){
    var myWidget = cloudinary.createUploadWidget({
        cloudName: 'dbga7wcqn', 
        uploadPreset: 'gpch6swh'}, (error, result) => { 
          if (!error && result && result.event === "success") { 
            console.log('Done! Here is the image info: ', result.info.url); 
            imgInfo=result.info.url;
            parrafo.innerHTML.style="color: green";
            parrafo.innerHTML =
            `<p>Imágen cargada correctamente.</p>`;
            console.log(imgInfo);

          }
        }
      );
    myWidget.open();
  }, false);


actualizarTabla();

function actualizarTabla() {
    while (Tabla.firstChild) {
        Tabla.removeChild(Tabla.firstChild);
    }

localStorage.removeItem("inventario");
localStorage.removeItem("productos");


  fetch('/api/producto/',{method:'GET'})
        .then(response => response.json())
        .then(data => {
            inventario = data;
	  productos = data;
            localStorage.setItem("productos", JSON.stringify(productos));
	  localStorage.setItem("inventario", JSON.stringify(inventario));
        })
        .catch(error => {
            console.error('Error al leer la base de datos:', error);
        });
        
        
        
        
    inventario.forEach(element => {
		let im=element.img;
        let html = `
        <tr>
                  <td>${element.id}</td>
                  <td><img  src=${im} width="100 px" height="75 px"></td>
                  <td>${element.nombre}</td>
                  <td>${element.descripcion}</td>
                  <td>${element.precio}</td>
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
//     inventario.forEach((element, indx) => {
//         if (element.id == index) {
//             inventario.splice(indx, 1);
//             actualizarTabla();
//         }
//     }
//     );
	var requestOptions = {
  method: 'DELETE',
  redirect: 'follow'
};

fetch(`/api/producto/${index}`, requestOptions)
  .then(response => response.json())
  .then(result => {a=result;
		   console.log(a);
		   	actualizarTabla();
		   location.reload(true);
		  }
	
		   )
  .catch(error => console.log('error', error));

	
}//quitarProducto

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
    let trimImage = imgInfo;


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
	    
	    setTimeout(() => {
        agregarProducto(trimName, trimPrice, trimDescription, trimImage);
        parrafo.innerHTML =
            `<div  class="alert alert-success d-flex align-items-center" role="alert">
            <svg  height="2rem"width="2rem" class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
            <div>
                Producto agregado correctamente.
            </div>
        </div>`;

        actualizarTabla();
		    
	        }, 2000);
		    location.reload(true);
    }
    borderTimeout();

});

// Función para que una vez que se verifiquen las entradas de datos se regrese al borde normal
function borderTimeout() {
    setTimeout(() => {
        nombre.style.border = "";
        descripcion.style.border = "";
        precio.style.border = "";

        // Función para quitar warnings
       // warning.title = "";
       // warning.description = "";
       // warning.price = "";
        //warning.inventary = "";
        //parrafo.innerHTML = "";
    }, 1500);

}

function agregarProducto(title, price, description, image) {



    if (title !== "" && price !== "") {
		var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "nombre": title,
       "largo": 10,
        "ancho": 10,
        "fuelle": 11,
  "descripcion": description,
  "precio": price,
  "img": image
  
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("/api/producto/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  
  fetch('/api/producto/',{method:'GET'})
        .then(response => response.json())
        .then(data => {
            inventario = data;
            localStorage.getItem("inventario",inventario);
            actualizarTabla();
        })
        .catch(error => {
            console.error('Error al leer el archivo JSON:', error);
        });
  
        id = inventario.length + 1;
        inventario.push({title: title, price: price, description: description, image: image});
        localStorage.setItem("productos", JSON.stringify(inventario));
        document.getElementById("name").value = "";
        document.getElementById("price").value = "";
        document.getElementById("description").value = "";
        imgBase64 = "";
    }


}
