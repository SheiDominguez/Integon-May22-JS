class Empleado {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
    getNombre() {
        return `El nombre del empleado es : ${this.nombre}`;
    }
    getTelefono() {
        return this.telefono;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setTelefono(telefono) {
        this.telefono = telefono;
    }
}
class Manager extends Empleado {
    constructor(nombre, telefono, numeroEmpleaods) {
        super(nombre, telefono);
        this.noEmpleadosACargo = numeroEmpleaods;
    }
    getNoEmpleadosACargo() {
        return this.noEmpleadosACargo;
    }
    setNoEmpleadosACargo(numero) {
        this.noEmpleadosACargo = numero;
    }
}
let empleado1 = new Empleado("Juan Perez", "123456789");
console.log(empleado1.getNombre());
console.log(empleado1.getTelefono());
let manager1 = new Manager("Sonia Vidal", "987654321", 13);
console.log(manager1.getNombre());
console.log(manager1.getTelefono());
console.log(manager1.getNoEmpleadosACargo());
//# sourceMappingURL=oop.js.map