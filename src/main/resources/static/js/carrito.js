const btnPagar = document.getElementById("btn-pagar");
let Tabla = document.getElementById("Carrito");
let contain = document.getElementById("contain");
const parrafo = document.getElementById("warnings");
let id = 0;
let carrito;
carrito = JSON.parse(localStorage.getItem("carrito"));

if (carrito == undefined) {

    contain.style.display = "none";
    parrafo.style = "color: red"
    parrafo.innerHTML = "Carrito vacío";
} else if (carrito.length > 0) {
    
}


actualizarTabla();

btnPagar.addEventListener("click", e => {
    e.preventDefault();
    
    let nombr;
    let telefon;
    let aidi;
    let mail;
    if (carrito.length == 0) {
        contain.style.display = "none";
        parrafo.style = "color: red"
        parrafo.innerHTML = "Carrito vacío";


    } else if (carrito.length > 0) {
        let usr = JSON.parse(localStorage.getItem("UsuarioActivo"));
        if (usr == null) {
            nombr = "Invitado";
            telefon = "5512345678"
            aidi = -1;
            mail = "doe1199887766@66778899doe.doe"

        } else {
            nombr = usr.nombre;
            telefon = usr.telefono;
            aidi = usr.id;
            mail = usr.email;
        }
        let tot=0;
        let pedidoDetails = "";
        carrito.forEach((producto, index) => {
            tot+=producto.precio;
            pedidoDetails += `<li><br>
	                <img  src="${producto.img}">
			<br>
	    ${index + 1}. ${producto.nombre} - ${producto.inventary} x $${producto.precio} = $${producto.inventary * producto.precio}</li>`;
        });

        let ebodyCliente = `
        <h3>Estimado ${nombr}, gracias por comprar en La Bolsa Roja, aquí está el resumen de su pedido:</h3>
        <h3>No. de cliente: ${aidi}</h3>
        <h3>${mail}</h3>
        <h3>${telefon}</h3><br>
        <h3>Detalles del pedido: </h3>
        <ul>${pedidoDetails}</ul><br>
        <h3>Total: ${tot} MXN </h3>
        <p>Su pedido se está procesando.</p>`;

        let ebodyInterno = ebodyCliente+`<p style="color : red">Se ha enviado una copia al cliente.</p>
        `;

        Email.send({
            SecureToken: "2beb6908-098a-4ce9-8217-645950d7272e",
            To: 'javadabbado@gmail.com',
            From: "javadabbado@gmail.com",
            Subject: "Pedido Confirmado",
            Body: ebodyInterno
        })

        Email.send({
            SecureToken: "2beb6908-098a-4ce9-8217-645950d7272e",
            To: `${mail}`,
            From: "javadabbado@gmail.com",
            Subject: "Pedido Confirmado",
            Body: ebodyCliente
        })

        localStorage.removeItem("carrito");
        pedido = carrito;
        carrito = [];
        actualizarTabla();
        contain.style.display = "none";
        parrafo.innerHTML = `Pedido realizado con éxito<br>
        Se ha enviado la confirmación a:<br>
         ${mail}`;
        setTimeout(() => {
            parrafo.innerHTML = "Gracias por su compra";
        }, 8000);
        
    } else {
        contain.style.display = "none";
        parrafo.style = "color: red"
        parrafo.innerHTML = "Carrito vacío";

    }
})

	
function actualizarTabla() {
    while (Tabla.firstChild) {
        Tabla.removeChild(Tabla.firstChild);
    }
    
 carrito= JSON.parse(localStorage.getItem("carrito"));
 let total = 0;
	
    carrito.forEach(element=> {
        let subtotal = element.inventary * element.precio;
        total += subtotal;
        let html = `
        <div class="row">
        <div class="col">
                   <img  src=${element.img} width="100 px" height="75 px">
                   </div>
                  <div class="col">
                  <td><strong>${element.nombre}</strong></td>
                  </div>
                  <div class="col">
                  <td>${element.precio} MXN c/u </td>
                  </div>
                  <div class="col">
                  <td>Pzas: ${element.inventary} </td>
                  </div>
                  <div class="col">
                  <td>Subtotal : ${subtotal} MXN</td>
                  </div>
                  <div class="col">
                  <td><button type="button" onclick="quitarProducto(${element.id})" class="btn btn-danger">Eliminar</button></td>
                  </div>                 
                  </div>
                     
        `;
        Tabla.insertAdjacentHTML("beforeend", html);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    });

    let htmlTotal = `
        <tr>
    <td></td>
    <td></td>
    <td>Total</td>
    <td><strong>${total}</strong> MXN</td>
    </tr>
    `;
    Tabla.insertAdjacentHTML("beforeend", htmlTotal);
    btnPagar.style.display = "block";
}


function quitarProducto(index) {
    // Eliminar el producto del inventario
    carrito.forEach((element, indx) => {
        if (element.id == index) {
            if (carrito.length == 1) {
                localStorage.removeItem("carrito")
                carrito = [];
                btnPagar.click();

		    console.log("index"+index);
		    console.log("indx"+indx);
            } else {
		    console.log("index"+index);
		    console.log("indx"+indx);
                carrito.splice(indx, 1);
		localStorage.setItem("carrito", JSON.stringify(carrito));
                actualizarTabla();
            }
        }
    }
    );
}

// Obtener el elemento del texto
var textoElemento = document.getElementById('texto-maquina');
// Obtener el texto
var texto = textoElemento.innerHTML;
// Vaciar el contenido del elemento
textoElemento.innerHTML = '';

// Recorrer el texto y agregar cada letra con un retraso
for (var i = 0; i < texto.length; i++) {
    (function (i) {
        setTimeout(function () {
            textoElemento.innerHTML += texto.charAt(i);
        }, 75 * i); // El retraso en milisegundos entre cada letra
    })(i);
}

