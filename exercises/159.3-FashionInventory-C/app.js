let inventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];

function renderInventory(shoeList) {
  let miArray = [];
  let arrZapato;

      shoeList.forEach((disenador, indDis) => {
          disenador.shoes.forEach((detalle, index) => {
            arrZapato =Object.values(detalle);
            if(arrZapato[0].includes('black'))
                   miArray.push([disenador.name].concat(arrZapato));
          });
      });

  return miArray;
}

console.log("-----------------------------------------------------")
console.log("mi array", renderInventory(inventory))
console.log("-----------------------------------------------------")