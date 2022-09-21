import { animal } from "./Animal";


export class preguiça extends animal{


    constructor(
        nome: string,
        idade: number,
){
     super(nome, idade )
}
som(){
    console.log("Emitindo o som da preguiça");
}
subir(){
    console.log("Subindo na árvore igual a uma preguiça");
}
}