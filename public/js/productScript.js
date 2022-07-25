window.addEventListener("load", function(){
    
    let validacionesCreate = document.querySelector(".formCreate")

    validacionesCreate.addEventListener("submit", function(e){
       
        let erroresC = [];

        let namefield = document.querySelector(".namefield")
        if (namefield.value == "" && namefield.value.length < 5) {
            erroresC.push("Ingrese el nombre del producto")
        }else{
        }

        let pricefield = document.querySelector(".pricefield")
        if (pricefield.value == "") {
            erroresC.push("Ingrese el precio del producto")
        }else{
        }

        let descriptionfield = document.querySelector(".descriptionfield")
        if (descriptionfield.value == "" && descriptionfield.value.length < 20) {
            erroresC.push("Complete la descripcion (minimo 20 caracteres)")
        }else {
        }

        if (erroresC.length > 0){
            e.preventDefault();
                
                let erroresCreate = document.querySelector(".erroresCreate")
                erroresCreate.innerHTML= ""
                for (let i = 0; i < erroresC.length; i++) {
                    
                    erroresCreate.innerHTML += "<li>" + erroresC[i] + "</li>"
                    erroresCreate.classList.add("alert-warning")
                }
            }else{alert("Producto agregado correctamente!")
            } 
    }
    )
    validacionesCreate.addEventListener("input", function(e){
       
        let erroresC = [];

        let namefield = document.querySelector(".namefield")
        if (namefield.value == "" && namefield.value.length < 5) {
            erroresC.push("Ingrese el nombre del producto")
        }else{
        }

        let pricefield = document.querySelector(".pricefield")
        if (pricefield.value == "") {
            erroresC.push("Ingrese el precio del producto")
        }else{
        }

        let descriptionfield = document.querySelector(".descriptionfield")
        if (descriptionfield.value == "" && descriptionfield.value.length < 20) {
            erroresC.push("Complete la descripcion (minimo 20 caracteres)")
        }else {
        }

        if (erroresC.length > 0){
            e.preventDefault();
                
                let erroresCreate = document.querySelector(".erroresCreate")
                erroresCreate.innerHTML= ""
                for (let i = 0; i < erroresC.length; i++) {
                    
                    erroresCreate.innerHTML += "<li>" + erroresC[i] + "</li>"
                    erroresCreate.classList.add("alert-warning")
                }
            }else{
            } 
    }
    )
}
)