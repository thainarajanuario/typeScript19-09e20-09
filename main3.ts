import { eletronico } from "./src/produto_eletronico";


let televisão = new eletronico("TipoA", "Samsung", "CasasBahia", "HDMI", 55 );
console.log (`O seu tipo é: ${televisão.tipo} O seu fabricante é: ${televisão.fabricante} O seu vendedor é: ${televisão.vendedor} As sua entradas são: ${televisão.entradas} Suas polegadas são: ${televisão.polegadas} `)
