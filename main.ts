import { cliente } from "./src/cliente";

let cliente1 = new cliente("Thainara", 28, "Vargem Pequena", "123.858.137-42");
console.log (`O seu nome é:${cliente1.nome} Sua idade é:${cliente1.idade} O seu bairro é:${cliente1.bairro} O seu cpf é:${cliente1.cpf}`)
