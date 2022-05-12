class Author{
    private foto : string;
    private nombre : string;
    private correo : string;
    private puesto : string;
    private departamento : string;
    private fechaIngreso : string;
    private estatus : string;

    constructor(foto : string, nombre : string, correo : string, puesto : string, departamento : string, fechaIngreso : string, estatus: string){
        this.foto = foto;
        this.nombre = nombre;
        this.correo = correo;
        this.puesto = puesto;
        this.departamento = departamento;
        this.fechaIngreso = fechaIngreso;
        this.estatus = estatus;
    }

    getNombre() { return this.nombre; }
    setNombre(nombre:string) { this.nombre = nombre }

    getFoto() { return this.foto }
    setFoto(foto:string) { this.foto = foto }

    getCorreo() { return this.correo; }
    setCorreo(correo:string) { this.correo = correo }

    getPuesto() { return this.puesto; }
    setPuesto(puesto:string) { this.puesto = puesto }

    getDepartamento() { return this.departamento; }
    setDepartamento(departamento:string) { this.departamento = departamento }

    getFechaIngreso() { return this.fechaIngreso; }
    setFechaIngreso(fechaIngreso:string) { this.fechaIngreso = fechaIngreso }

    getEstatus() { return this.estatus; }   
    setEstatus(estatus:string) { this.estatus = estatus } 
}