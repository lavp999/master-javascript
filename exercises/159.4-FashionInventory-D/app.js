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

    inventory.forEach((disenador, indDis) => {
        disenador.shoes.forEach((detalle, index) => {
            miArray.push({"nameWords": Object.values(detalle), "targetWordIndex": 2});
        });
    });

    return miArray;
}

console.log("-----------------------------------------------------")
console.log("mi array", getLaceNameDataForShoes(inventory))
console.log("-----------------------------------------------------")

