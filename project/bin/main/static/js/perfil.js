let usuarioActivo=JSON.parse(localStorage.getItem("UsuarioActivo"));
console.log(usuarioActivo);
console.log("hola");

if(localStorage.getItem("UsuarioActivo") == null ){

    window.location.replace("../iniciarsesion.html");

  }

  const card= document.getElementById("card");

 
card.innerHTML=`
  <h5 class="card-title"><strong>${usuarioActivo.nombre}</strong></h5>
  <p class="card-text">Teléfono: ${usuarioActivo.telefono}</p>
  <p class="card-text">Email: ${usuarioActivo.email}</p>
  <a href="" class="btn btn-danger" id="CerrarSesion">Cerrar Sesión</a>
  `;

const btn3 = document.getElementById("CerrarSesion");

btn3.addEventListener("click", e => {
   
        localStorage.removeItem("UsuarioActivo");
        window.location.replace("../iniciarsesion.html");      
    
   
});