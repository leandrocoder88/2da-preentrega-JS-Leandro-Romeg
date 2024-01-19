const valorFijo = 1.85      
let tipoCerradura = {}         
let cantidadCerraduras = 0                    

const cerraduras = [{ codigo: 1, tipo: 'Cerraduras de placard', precio: 3249 },
                    { codigo: 2, tipo: 'Cerraduras de habitacion', precio: 4810 },
                    { codigo: 3, tipo: 'Cerraduras de puertas corredizas', precio: 5600 },
                    { codigo: 4, tipo: 'Cerraduras de roperos', precio: 6100 },
                    { codigo: 5, tipo: 'cerraduras de caja fuerte', precio: 59946 }]

function iniciarPresupuesto() {
    let codigo = prompt("✍ingresa el codigo del servicio que necesites.✍ \n👨‍🔧El costo de mano de obra esta incluido en el precio final.👩‍🔧")
    tipoCerradura = cerraduras.find((cerradura)=> cerradura.codigo === parseInt(codigo))

    if (tipoCerradura === undefined) {
        alert("⛔️ Momentaneamente disponemos de 5 codigos.🙅‍♂️ \n👉Ingresa un codigo existente entre 1 y 5👈")
        return 
    }

    cantidadCerraduras = prompt("🛠Ingresa las cantidades de cerraduras para reparar y colocar:🛠")
    cantidadCerraduras = parseInt(cantidadCerraduras)       

    if (cantidadCerraduras < 1 || cantidadCerraduras > 15) {
        alert("🚧🔴 El presupuesto esta sujeto a un limite de 1 a 15 cerraduras. \nCuidamos la salud de nuestros empleados y limitamos el peso que pueden cargar 🔴🚧")
        return 
    }

    const presupuestoCerrajero = new Presupuesto(tipoCerradura, valorFijo, cantidadCerraduras)
    let precioFinal = presupuestoCerrajero.obtenerPresupuesto()

    console.log("💲💲 El presupuesto estimado del trabajo es: $", precioFinal.toLocaleString("es-AR"))
    console.log("📱 🙋‍♂️En breve un especialista cerrajero,se comunicara con vos,para ultimar detalles.🙋‍♂️📱 \n✨✨Muchas gracias por confiar en nosotros!✨✨")
}