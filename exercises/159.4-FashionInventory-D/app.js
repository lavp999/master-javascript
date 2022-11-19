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

    inventory.forEach((disenador, indDis) => {
        disenador.shoes.forEach((shoes, index) => {
            if (shoes.name.indexOf("lace") != -1){
              palabras = shoes.name.split(' ');
              palabras.forEach((palabra, indice) => {
                console.log(palabra);
                if (palabra.indexOf("lace") != -1)
                    miArray.push({"nameWords": palabras, "targetWordIndex": indice});
              });
            }
        });
    });

    return miArray;
}

console.log("-----------------------------------------------------")
console.log("mi array", getLaceNameDataForShoes(inventory))
console.log("-----------------------------------------------------")

