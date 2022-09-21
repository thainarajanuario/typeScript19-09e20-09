import { Cachorro } from "./src/cachorro";
import { preguiça } from "./src/preguiça";
import { cavalo } from "./src/cavalo";

let cachorro1 = new Cachorro("Sam", 5)
console.log (`O nome do seu cachorro é ${cachorro1.nome} e sua idade é ${cachorro1.idade}`)
cachorro1.correr()
cachorro1.som()


let preguiça1 = new preguiça ("Giovana", 11)
console.log (`O nome da sua preguiça é ${preguiça1.nome} e Sua idade é ${preguiça1.idade}`)
preguiça1.som()
preguiça1.subir()


let cavalo1 = new cavalo ("Jean", 9)
console.log (`O nome do seu cavalo é ${cavalo1.nome} e Sua idade é ${cavalo1.idade}`)
cavalo1.correr()
cavalo1.som()