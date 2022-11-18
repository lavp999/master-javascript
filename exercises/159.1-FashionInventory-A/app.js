let currentInventory = [
    {
        name: 'Brunello Cucinelli',
        shoes: [
            { name: 'tasselled black low-top lace-up', price: 1000 },
            { name: 'tasselled green low-top lace-up', price: 1100 },
            { name: 'plain beige suede moccasin', price: 950 },
            { name: 'plain olive suede moccasin', price: 1050 }
        ]
    },
    {
        name: 'Gucci',
        shoes: [
            { name: 'red leather laced sneakers', price: 800 },
            { name: 'black leather laced sneakers', price: 900 }
        ]
    }
];

function renderInventory(inventory) {
    // your code here
    // hint: before you just dive into coding...
    // it's a good idea to sketch out a skeleton like you've been seeing earlier in this module...
    let miArray = [];

        inventory.forEach((disenador, indDis) => {
            miArray.push([]);
            disenador.shoes.forEach((detalle, index) => {
                console.log(detalle);
                miArray[indDis].push(disenador.name);
                miArray[indDis] = miArray[indDis].concat(Object.values(detalle));
            });
        });

    return miArray;
}

console.log("-----------------------------------------------------")
console.log(renderInventory(currentInventory))
console.log("-----------------------------------------------------")
