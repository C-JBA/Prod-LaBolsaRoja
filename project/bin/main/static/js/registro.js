const nombre = document.getElementById("name");
const email = document.getElementById("mail");
const tel = document.getElementById("telephone");
const password= document.getElementById("txtPassword");
const password2= document.getElementById("txtPassword2");
const btn = document.getElementById("button");
const parrafo = document.getElementById("warnings");


if (localStorage.getItem("Users") == null ) {
    let user=[{"id":0,
    "name":"test",
    "mail":"test@test.test",
    "telefon":"5512345678",
    "pass":"T35T"}];
    localStorage.setItem("Users",JSON.stringify(user));
  } 
user=JSON.parse(localStorage.getItem("Users"));
let idGlobal;
if(localStorage.getItem("UsuarioActivo") != null ){

    window.location.replace("../perfil.html");

  }
btn.addEventListener("click", e => {
    e.preventDefault();
    console.log("Se ingresa a la función");
    let warnings = "";
    let enviar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexTel = /^(\(\d{3}\)|\d{3})-?\d{3}-?\d{4}$/;
    let regexPassword = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d).*$/;

    parrafo.innerHTML = "";
    //Se crean variables para aplicarles trim()
    let trimName = nombre.value.trim();
    let trimEmail = email.value.trim();
    let trimTelef = tel.value.trim();
    let trimPassword = password.value.trim();
    let trimPassword2 = password2.value.trim();

    if (trimName.length <= 2) {
        warnings += `- El nombre no es válido <br>`;
        enviar = "true";
        redBorder(nombre);

    } else {
        greenBorder(nombre);
    }
    if (!regexEmail.test(trimEmail)) {
        warnings += `- El Email no es válido <br>`;
        enviar = true;
        redBorder(email);
    } else {
        greenBorder(email);
    }
    user.forEach(element => {
        if(element.mail==trimEmail ){
            warnings += `- Email ya registrado<br>`;
            enviar = "true";
            redBorder(email);
        }else{

        }   
    });
    //if(tel.value.length <10)
    if (!regexTel.test(trimTelef)||trimTelef==0) {
        warnings += `- El número telefónico no es válido <br>`;
        enviar = true;
        redBorder(tel);
    } else {
        greenBorder(tel);
    }
    user.forEach(element => {
        if( element.telefon==trimTelef){
            warnings += `- Número ya registrado<br>`;
            enviar = "true";
            redBorder(tel);
        }else{
            
        }
       
    });
    if (!regexPassword.test (trimPassword) ) { //Comparación de contraseñas con expresión regular.
        warnings += `- Contraseña no válida.<br>`;
        enviar = true;
        redBorder(password);
    } else {
        greenBorder(password);
    }
    
    if (!(trimPassword==trimPassword2)|| trimPassword=="") {//Comparación de contraseñas entre sí.
        warnings += `- Las contraseñas no coinciden.<br>`;
        enviar = true;
        redBorder(password2);
        redBorder(password);
    } else {

        if((!regexPassword.test(trimPassword)) || (!regexPassword.test(trimPassword2))){
            warnings += `- La contraseña no cumple con los requerimientos básicos`;
            redBorder(password);
            redBorder(password2);
        }else{
            greenBorder(password2);
        }
    }
    if (enviar) {
        parrafo.innerHTML = warnings;
    } else {
        idGlobal =user.length;
        user.push({id:idGlobal,name:trimName, mail: trimEmail, telefon:trimTelef, pass: trimPassword2});
        localStorage.setItem("Users",JSON.stringify(user));
        localStorage.setItem("UsuarioActivo",JSON.stringify({id:idGlobal,name:trimName, mail: trimEmail, telefon:trimTelef, pass: trimPassword2}));
        parrafo.innerHTML =
        `<div  class="alert alert-success d-flex align-items-center" role="alert">
        <svg  height="2rem"width="2rem" class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
        <div>
            Usuario creado exitosamente. Redirigiendo al perfil.
        </div>
     </div>`;
     setTimeout(()=>{
        window.location.replace("../perfil.html");
        
     },2500);
     
    }
    
});

function borderTimeout(){
    setTimeout( () => {
        nombre.style.border = "";
        email.style.border ="";
        tel.style.border ="";
        password.style.border ="";
        password2.style.border = "";
        parrafo.innerHTML = "";
    },6000);
}

function greenBorder(input){
    input.style.border = "solid 0.2rem green";
}

function redBorder(input){
    input.style.border = "solid 0.2rem red";
}

