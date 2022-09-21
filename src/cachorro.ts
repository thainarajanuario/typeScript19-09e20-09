import { animal } from "./Animal";

export class Cachorro extends animal{


    constructor(
        nome: string,
        idade: number,

){
     super(nome, idade )
     this.nome= nome
     this.idade = idade
     
    }
    correr(){
        console.log("Correndo igual a um cachorro");
    }
     som(){
        console.log("Latindo igual a um cachorro");
     }
     }   
    
