///Calculadora de cuotas

const cuota3 = (monto,cuotas) => monto * 1.7576
const cuota6 = (monto,cuotas) => monto * 1.6383
const cuota9 = (monto,cuotas) => monto * 1.6079
const cuota12 = (monto,cuotas) => monto * 1.5609

 let monto = parseFloat(prompt("Ingrese costo del producto"))
 let cuotas = parseInt(prompt("¿Quieres sacarlo en 3, 6, 9 o 12 cuotas?"))

 if (cuotas === 3) {
         alert("El monto fijo de tus cuotas es de " + cuota3(monto,cuotas) / cuotas)
   }else if (cuotas === 6){
         alert("El monto fijo de tus cuotas es de " + cuota6(monto,cuotas) / cuotas)
    }else if (cuotas === 9){
         alert("El monto fijo de tus cuotas es de " + cuota9(monto,cuotas) / cuotas)
     }else if (cuotas === 12){  
        alert("El monto fijo de tus cuotas es de " + cuota12(monto,cuotas) / cuotas)
      }else {
            alert("Operacion no valida")
  }
