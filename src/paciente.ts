export class paciente{
    nome: string;
    idade: number;
    endereço: string;
    sintomas: string;

    constructor(
        nome: string,
        idade: number,
        endereço: string,
        sintomas: string,
){
    this.nome = nome
    this.idade = idade
    this.endereço = endereço
    this.sintomas = sintomas
}
}