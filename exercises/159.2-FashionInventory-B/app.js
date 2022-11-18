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
    let cont = 0;

      inventory.forEach((disenadores, indDis) => {
          disenadores.shoes.forEach((zapatos, index) => {
              if (disenadores.name != diseAnterior){
                  miArray.push({"name": diseAnterior, "suma" : suma, "unidades" : cont, "averagePrice" : suma/cont});
                  diseAnterior = disenadores.name;
                  suma = zapatos.price;
                  cont = 1;
              }else{
                 suma += zapatos.price;
                 cont += 1;
              }
          });
      });

      // el último se no graba
      miArray.push({"name": diseAnterior, "suma" : suma, "unidades" : cont, "averagePrice" : suma/cont});

    return miArray;

}

console.log("-----------------------------------------------------")
console.log("mi array", renderAverageCostPerDesigner(currentInventory))
console.log("-----------------------------------------------------")
