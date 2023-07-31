//servicio de facturacion

let passEstandar = "qwerty"
let NombreyApellido = "Daniel Sebastian Lopez"



const login = () => {
    let ingresar = false

    for(let i = 2;i > 0; i --){
        
        passIngresada = prompt (`ingresa tu contraseña. tienes ${i} intentos`)

        if(passIngresada === passEstandar){
            alert("Bienvenido "+ NombreyApellido )
            ingresar = true
            break
        }else{
            alert("tu contraseña es incorrecta")
        }
    }
    return ingresar
}

if(login()){
let Deuda = 5000
let option = prompt(`Opciones:
                     \n 1- Monto a pagar
                     \n 2- Ingresar monto a pagar
                     \n Escribe "Salir" para salir`).toUpperCase()

while(option != "Salir"){
    switch(option){
        case "1":
             alert(`Tu deuda actual es $${Deuda}`)
        case "2":
            let montoapagar = +(prompt("ingresar monto a pagar"))

            if(isNaN(montoapagar)){
                alert(" Ingrese un monto en numeros")
            }else{     
            if(montoapagar <= Deuda){    
                Deuda -= montoapagar
                alert(`Tu saldo a pagar es de $${Deuda}`) 
            }else{
                alert("El monto es mayor a la deuda que tenes")
            }
            break 
            }
    }
    option = prompt(`Opciones:
    \n 1- Monto a pagar
    \n 2- Ingresar monto a pagar
    \n Escribe "Salir" para salir`).toUpperCase()
}

}else{
    console.log("tu usurio fue bloquedo")
}