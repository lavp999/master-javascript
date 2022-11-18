let currentInventory = [
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

function renderAverageCostPerDesigner(inventory) {
    // your code here
    let miArray = [];
    let diseAnterior = inventory[0].name;
    let suma = 0;
    let cont = 1;

      inventory.forEach((disenadores, indDis) => {
          disenadores.shoes.forEach((zapatos, index) => {
              console.log(disenadores.name, ' - ', zapatos.price, ' - ',diseAnterior);
              if (disenadores.name != diseAnterior){
                  // miArray.push({"name": diseAnterior, "averagePrice" : suma/cont});
                  suma = 0;
                  cont = 1;
              }else{
                 suma += zapatos.price;
                  cont += 1;
              }
              diseAnterior = disenadores.name;
          });
      });

    return miArray;

}

console.log("-----------------------------------------------------")
console.log("mi array", renderAverageCostPerDesigner(currentInventory))
console.log("-----------------------------------------------------")
