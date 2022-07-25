window.addEventListener("load", function(){
    
    let validacionesEdit = document.querySelector(".formEdit")

    validacionesEdit.addEventListener("submit", function(e){
       
        let erroresE = [];

        let namefield = document.querySelector(".namefield")
        if (namefield.value == "" && namefield.value.length < 5) {
            erroresE.push("Ingrese el nombre del producto")
        }else{
        }

        let pricefield = document.querySelector(".pricefield")
        if (pricefield.value == "") {
            erroresE.push("Ingrese el precio del producto")
        }else{
        }

        let descriptionfield = document.querySelector(".descriptionfield")
        if (descriptionfield.value == "" && descriptionfield.value.length < 20) {
            erroresE.push("Complete la descripcion (minimo 20 caracteres)")
        }else {
        }

        if (erroresE.length > 0){
            e.preventDefault();
                
                let erroresEdit = document.querySelector(".erroresEdit")
                erroresEdit.innerHTML= ""
                for (let i = 0; i < erroresE.length; i++) {
                    
                    erroresEdit.innerHTML += "<li>" + erroresE[i] + "</li>"
                    erroresEdit.classList.add("alert-warning")
                }
            }else{alert("Producto editado correctamente!")
            } 
    }
    )
    validacionesEdit.addEventListener("input", function(e){
       
        let erroresE = [];

        let namefield = document.querySelector(".namefield")
        if (namefield.value == "" && namefield.value.length < 5) {
            erroresE.push("Ingrese el nombre del producto")
        }else{
        }

        let pricefield = document.querySelector(".pricefield")
        if (pricefield.value == "") {
            erroresE.push("Ingrese el precio del producto")
        }else{
        }

        let descriptionfield = document.querySelector(".descriptionfield")
        if (descriptionfield.value == "" && descriptionfield.value.length < 20) {
            erroresE.push("Complete la descripcion (minimo 20 caracteres)")
        }else {
        }

        if (erroresE.length > 0){
            e.preventDefault();
                
                let erroresEdit = document.querySelector(".erroresEdit")
                erroresEdit.innerHTML= ""
                for (let i = 0; i < erroresE.length; i++) {
                    
                    erroresEdit.innerHTML += "<li>" + erroresE[i] + "</li>"
                    erroresEdit.classList.add("alert-warning")
                }
            }else{
            } 
    }
    )
}
)