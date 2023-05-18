let productos;
let cardGroup = document.getElementsByClassName("row");
let carrito=[];
let cantidad;

function agregarAlCarrito(idk) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  let id = productos[idk].id - 1;
  let title = productos[idk].title;
  let price = productos[idk].price;
  let image = productos[id].image;
  let cantidad = Math.round(document.getElementById(`cantidad${idk}`).value);

  // Verificar si el producto ya existe en el carrito
  let productoExistente = carrito.find(p => p.id === id);
  if (productoExistente) {
    productoExistente.inventary = parseInt(productoExistente.inventary) + parseInt(cantidad);
  } else {
    // Agregar el nuevo producto al carrito
    carrito.push({ id: id, title: title, price: price, inventary: cantidad, image: image });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
}


if (localStorage.getItem("productos") == null && cardGroup[0].childElementCount === 0) {
  /* let promesa= */fetch('./js/productos.json')
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("productos", JSON.stringify(data));
      productos = data;
      data.forEach(element => {
        let html =
          `<div class="col ">
                    <div class="card h-350 ">
                        <img  src=${element.image} class="card-img-top card-image">
                            <div class="card-body">
                                <h5 class="card-title">${element.title}</h5>
                                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#openModal${index}">
                                Ver ítem</button>
                </div>
        </div> </div>


        <div class="modal" tabindex="-1" id="openModal${index}">
        <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${element.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <br><p>
            <img  src=${element.image} class="card-img-top card-image">
            </p>
            
<div class="row g-2">
  <div class="col-sm-6">
    <a>Precio: ${element.price}</a>
  </div>
  <div class="col-sm">
  <a>Cantidad: <input type="number" id="cantidad${index}" class="form-control" placeholder="" aria-label="State" value="1" max="5" min ="1"></a>
    
  </div>
</div>

          </div>
          <div class="modal-footer">
            <button type="button" id="button3" class="btn btn-danger" data-bs-dismiss="modal" onclick="agregarAlCarrito(${index})" >Añadir al Carrito</button>
          
          </div>
        </div>
      </div>
    </div>
                    `;
        cardGroup[0].insertAdjacentHTML("beforeend", html);
      });
    })
    .catch(error => {
      console.error('Error al leer el archivo JSON:', error);
    });
} else {
  productos = JSON.parse(localStorage.getItem("productos"));
  productos.forEach((element,index) => {
    let html =
      `<div class="col ">
                    <div class="card h-350 ">
                        <img  src=${element.image} class="card-img-top card-image">
                            <div class="card-body">
                                <h5 class="card-title">${element.title}</h5>
                                <p class ="card-text">${element.description}</p>
                                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#openModal${index}">
                                Ver ítem</button>
                </div>
        </div> </div>


        <div class="modal" tabindex="-1" id="openModal${index}">
        <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${element.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <br><p>
            <img  src=${element.image} class="card-img-top card-image">
            </p>
            
<div class="row g-2">
  <div class="col-sm-6">
    <a>Precio: ${element.price}</a>
  </div>
  <div class="col-sm">
  <a>Cantidad: <input type="number" id="cantidad${index}" class="form-control" placeholder="" aria-label="State" value="1" max="5" min ="1"></a>
    
  </div>
</div>

          </div>
          <div class="modal-footer">
            <button type="button" id="button3" class="btn btn-danger" data-bs-dismiss="modal" onclick="agregarAlCarrito(${index})" >Añadir al Carrito</button>
          
          </div>
        </div>
      </div>
    </div>
                    `;
    cardGroup[0].insertAdjacentHTML("beforeend", html);
  });
}