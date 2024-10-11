export class Vehiculo{
    placa: string;
    modelo: string;
    color_vehiculo: string;
    marca: string;
    id: number;
    color_vehiculo_nombre: string;

    public constructor(id:number, placa:string, modelo:string, color_vehiculo:string, marca:string,color_vehiculo_nombre: string){
        this.color_vehiculo=color_vehiculo;
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
        this.id = id;
        this.color_vehiculo_nombre = color_vehiculo_nombre;
    }
}