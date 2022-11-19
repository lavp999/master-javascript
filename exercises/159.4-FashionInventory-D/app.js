let inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

function getLaceNameDataForShoes(inventory) {
    // your code here
    let miArray = [];
    let palabras = [];
    let pos = 0; // posicion de la palabra mas larga
    let len = 0; // Auxiliar para controlar la longitud

    inventory.forEach((disenador, indDis) => {
        disenador.shoes.forEach((detalle, index) => {
            palabras = Object.values(detalle);
            palabras.array.forEach((palabra, x) => {
                if (palabra.length > len){
                    len = palabra.length;
                    por = x;
                }
            });
            miArray.push({"nameWords": palabras, "targetWordIndex": pos});
        });
    });

    return miArray;
}

console.log("-----------------------------------------------------")
console.log("mi array", getLaceNameDataForShoes(inventory))
console.log("-----------------------------------------------------")

