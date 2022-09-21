export class eletronico{
    tipo: string;
    fabricante: string;
    vendedor: string;
    entradas: string;
    polegadas: number;


    constructor(
        tipo: string, 
        fabricante: string,
        vendedor: string,
        entradas: string,
        polegadas: number,

){
    this.tipo = tipo
    this.fabricante = fabricante
    this.vendedor = vendedor
    this.entradas = entradas
    this.polegadas = polegadas
}
    
}