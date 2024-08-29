const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

let operaciones = 1

botones.forEach (boton =>{
     boton.addEventListener("click", () => {
        const botonApretado =boton.textContent;

        

        if (boton.id === "c"){ //boton C clear
            pantalla.textContent="0";
            return;
        }



        if (boton.id === "borrar"){ //boton ← borrar
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0,-1);
            }
          return;
        }

        if (boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            } catch{
                pantalla.textContent= "Error!";
            }
            return;
        }
        const ultimoCaracter = pantalla.textContent.slice(-1);
        if ("+-*/".includes(ultimoCaracter) && "+-*/".includes(botonApretado)) {
            // Si el último carácter y el nuevo botón son operadores, no hacer nada
            return;
        }

        

        if (pantalla.textContent==="0" || pantalla.textContent=== "Error!"){
            pantalla.textContent = botonApretado;
        }else {
            pantalla.textContent +=  botonApretado;
        }
     })
});
