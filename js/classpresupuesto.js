class Presupuesto {
    constructor(cerraduras, valorFijo, cantidadCerraduras) {
        this.cerraduras = cerraduras
        this.valorFijo = valorFijo
        this.cantidadCerraduras = cantidadCerraduras 
    }
    
    obtenerPresupuesto() {
        return this.cerraduras.precio * this.valorFijo * this.cantidadCerraduras
    }
}