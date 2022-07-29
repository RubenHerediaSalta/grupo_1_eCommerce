window.addEventListener("load", function(){
    
    let validacionesLogin = document.querySelector(".formLogin")

    validacionesLogin.addEventListener("submit", function(e){
       
        let errores = [];
        let emailfield = document.querySelector(".emailfield")
        if (emailfield.value == "") {
            errores.push("Ingrese un correo valido")
        }else {
        }

        let passfield = document.querySelector(".passfield")
        if (passfield.value == "") {
            errores.push("Completa la contraseña")
        }else{
        }

        if (errores.length > 0){
            e.preventDefault();
                
                let erroresLogin = document.querySelector(".erroresLogin")
                erroresLogin.innerHTML= ""
                for (let i = 0; i < errores.length; i++) {
                    
                    erroresLogin.innerHTML += "<li>" + errores[i] + "</li>"
                    erroresLogin.classList.add("alert-warning")
                }
            }else{
                erroresLogin.innerHTML= ""
                erroresLogin.classList.remove("alert-warning")
            } 
    }
    )
    validacionesLogin.addEventListener("input", function(e){
       
        let errores = [];
        let emailfield = document.querySelector(".emailfield")
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (emailfield.value.match(mailformat)) {
        }else {errores.push("Ingrese un correo valido")
    }

        let passfield = document.querySelector(".passfield")
        if (passfield.value == "") {
            errores.push("Completa la contraseña")
        }else{
        }
        let erroresLogin = document.querySelector(".erroresLogin")
        if (errores.length > 0){
            e.preventDefault();
                
                
                erroresLogin.innerHTML= ""
                for (let i = 0; i < errores.length; i++) {
                    
                    erroresLogin.innerHTML += "<li>" + errores[i] + "</li>"
                    erroresLogin.classList.add("alert-warning")
                }
            }else{
                erroresLogin.innerHTML= ""
                erroresLogin.classList.remove("alert-warning")
            }
    }
    )
}
)