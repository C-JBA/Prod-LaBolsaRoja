let user = [];
let usuarioActivo = [];
const email = document.getElementById("mail");
const email2 = document.getElementById("mail2");
const password = document.getElementById("txtPassword");
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");
const parrafo = document.getElementById("warnings");
const parrafo2 = document.getElementById("warningsRecuperar");

fetch

if (localStorage.getItem("Users") == null) {

    localStorage.setItem("Users", JSON.stringify(user));
}
user = JSON.parse(localStorage.getItem("Users"));

if (localStorage.getItem("UsuarioActivo") != null) {

    window.location.replace("../perfil.html");
}


btn3.addEventListener("click", e => {
    e.preventDefault();
    let warnings2 = "";
    parrafo2.innerHTML = "";
    let trimEmail2 = email2.value.trim();

    user.forEach(element => {
        let correo = element.mail;
        let name = element.name;
        let id = element.id;
        let telefon = element.telefon;
        let Mensaje = `
            <br>
            <p>Instrucciones de recuperacion de contraseña</p>
            <br>
            `
        if (correo == trimEmail2) {
            console.log("Hola");
            parrafo2.innerHTML =
                `<div  class="alert alert-success d-flex align-items-center" role="alert">
                <svg  height="2rem"width="2rem" class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                <div>
                    Recuperación de contraseña enviada.
                </div>
             </div>`;
            let ebody = `
        <h1>Correo: </h1>${correo}
        <br>
        <h1>Nombre: </h1>${name}
        <br>
        <h1>Id Usuario: </h1>${id}
        <br>
        <h1>Telefono: </h1>${telefon}
        <br>
        <h1>Mensaje: </h1>${Mensaje}
        `;
            Email.send({
                SecureToken: "2beb6908-098a-4ce9-8217-645950d7272e",
                To: correo,
                From: "javadabbado@gmail.com",
                Subject: "Recuperar contraseña",
                Body: ebody
            });
            parrafo2.innerHTML =
                `<div  class="alert alert-success d-flex align-items-center" role="alert">
                <svg  height="2rem"width="2rem" class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                <div>
                    Mensaje enviado correctamente.
                </div>
             </div>`;
        } else {
            warnings2 += `- Email no registrado.<br>`;
            parrafo2.innerHTML = warnings2;
        }
    });

    borderTimeout2();
});

btn1.addEventListener("click", e => {
    e.preventDefault();
    parrafo.innerHTML = "";
    let trimEmail = email.value.trim();
    let trimPassword = password.value.trim();


var raw = "";

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};
  if(trimEmail=="" || trimPassword==""){
            parrafo.innerHTML ="Ingresa Usuario y contraseña.";
            redBorder(email);
            redBorder(password);
            
        }else{
fetch(`http://127.0.0.1:8080/api/login/?email=${trimEmail}&contrasena=${trimPassword}`, requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result);
  localStorage.setItem("UsuarioActivo", JSON.stringify(result));
  if (result!=null){
	    greenBorder(email);
       greenBorder(password);
       parrafo.innerHTML =
                `<div  class="alert alert-success d-flex agn-items-center" role="alert">
            <svg  height="2rem"width="2rem" class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:hf="#check-circle-fill"/></svg>
           <div>
                Inicio de on exitoso. Redirigiendo (...)
          </div>
        </div>`;
        
        window.location.replace("../perfil.html");
         setTimeout(() => { }, 4000);
  }
  
   
	  
  }

  )
  .catch(error => {console.log('error', error)
  
   			redBorder(email);
            redBorder(password);
            parrafo.innerHTML = "Usuario y/o contraseña incorrectas.<br> Intente Nuevamente.";
  });
  }
  borderTimeout();

});

function borderTimeout() {
    setTimeout(() => {
        email.style.border = "";
        password.style.border = "";
        parrafo.innerHTML = "";
    }, 2000);
}

function borderTimeout2() {
    setTimeout(() => {
        email2.style.border = "";
        parrafo2.innerHTML = "";
    }, 2000);
}

function greenBorder(input) {
    input.style.border = "solid 0.2rem green";
}

function redBorder(input) {
    input.style.border = "solid 0.2rem red";
}