import { conta_bancária } from "./src/conta_bancária";



let conta = new conta_bancária("Bradesco", 6615, "135976" );
console.log (`O seu banco é: ${conta.banco} A sua agência é: ${conta.agência} A sua conta é: ${conta.conta}` )