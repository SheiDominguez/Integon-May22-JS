class Empleado{
    public nombre: string;
    private telefono: string;

    constructor(nombre: string, telefono: string)
    {
        this.nombre = nombre;
        this.telefono = telefono;
    }

    getNombre(){ 
        return `El nombre del empleado es : ${this.nombre}`;
    }

    getTelefono()
    {
        return this.telefono;
    }

    setNombre(nombre : string) {
        this.nombre = nombre;
    }

    setTelefono(telefono : string) {
        this.telefono = telefono;
    }
}

class Manager extends Empleado {
    private noEmpleadosACargo : number;

    constructor(nombre: string, telefono: string, numeroEmpleaods: number){
        super(nombre, telefono);
        this.noEmpleadosACargo = numeroEmpleaods;
    }

    getNoEmpleadosACargo()
    {
        return this.noEmpleadosACargo;
    }

    setNoEmpleadosACargo(numero: number)
    {
        this.noEmpleadosACargo = numero;
    }
}

let empleado1 = new Empleado("Juan Perez", "123456789");
console.log(empleado1.getNombre());
console.log(empleado1.getTelefono());

let manager1 = new Manager("Sonia Vidal","987654321",13);
console.log(manager1.getNombre());
console.log(manager1.getTelefono());
console.log(manager1.getNoEmpleadosACargo());