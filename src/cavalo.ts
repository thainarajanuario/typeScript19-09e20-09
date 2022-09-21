import { animal } from "./Animal";

export class cavalo extends animal{

    constructor(
        nome: string,
        idade: number,
){
    super(nome, idade )

}
    correr(){
        console.log("Correndo igual a um cavalo");
}
    som(){
        console.log("Rinchando igual a um cavalo");
        
}  
    }
