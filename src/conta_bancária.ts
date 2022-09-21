export class conta_bancária{
    banco: string;
    agência: number;
    conta: string;


    constructor(
        banco: string,
        agência: number,
        conta: string,

){
      this.banco = banco
      this.agência = agência
      this.conta = conta
}


}