window.addEventListener("load", function(){
    
    let validacionesRegister = document.querySelector(".formRegister")

    validacionesRegister.addEventListener("submit", function(e){
       
        let erroresR = [];

        let firstnamefield = document.querySelector(".firstnamefield")
        if (firstnamefield.value == "") {
            erroresR.push("Ingrese su nombre")
        }else{
        }

        let lastnamefield = document.querySelector(".lastnamefield")
        if (lastnamefield.value == "") {
            erroresR.push("Ingrese su apellido")
        }else{
        }

        let emailfield = document.querySelector(".emailfield")
        if (emailfield.value == "") {
            erroresR.push("Ingrese un correo valido")
        }else {
        }

        let passfield = document.querySelector(".passfield")
        if (passfield.value == "" && passfield.value.length < 8) {
            erroresR.push("Ingrese una contraseña (minimo 8 caracteres)")
        }else{
        }

        if (erroresR.length > 0){
            e.preventDefault();
                
                let erroresRegister = document.querySelector(".erroresRegister")
                erroresRegister.innerHTML= ""
                for (let i = 0; i < erroresR.length; i++) {
                    
                    erroresRegister.innerHTML += "<li>" + erroresR[i] + "</li>"
                    erroresRegister.classList.add("alert-warning")
                }
            }else{alert("Cuenta creada exitosamente!")
            } 
    }
    )
    validacionesRegister.addEventListener("input", function(e){
       
        let erroresR = [];

        let firstnamefield = document.querySelector(".firstnamefield")
        if (firstnamefield.value == "") {
            erroresR.push("Ingrese su nombre")
        }else{
        }

        let lastnamefield = document.querySelector(".lastnamefield")
        if (lastnamefield.value == "") {
            erroresR.push("Ingrese su apellido")
        }else{
        }

        let emailfield = document.querySelector(".emailfield")
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailfield.value.match(mailformat)) {
        }else {erroresR.push("Ingrese un correo valido")
    }

        let passfield = document.querySelector(".passfield")
        if (passfield.value == "" && passfield.value.length < 8) {
            erroresR.push("Ingrese una contraseña(8 caracteres o mas)")
        }else{
        }
        let erroresRegister = document.querySelector(".erroresRegister")
        if (erroresR.length > 0){
            e.preventDefault();
                
                erroresRegister.innerHTML= ""
                for (let i = 0; i < erroresR.length; i++) {
                    
                    erroresRegister.innerHTML += "<li>" + erroresR[i] + "</li>"
                    erroresRegister.classList.add("alert-warning")
                }
            }else{
                erroresRegister.classList.add("errorHide")
            }
    }
    )
}
)