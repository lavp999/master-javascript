function detectOutlierValue(string) {
    // your code here
    let arrBinario = string.split(' ').map((e)=>{ return parseInt(e)%2 == 0 ? 0 :1 }); 
    let posPar = 0;
    let posImpar = 0;
    let par = 0;
    let impar = 0;

        arrBinario.forEach((e, i) => {
            if(e == 0){
                posPar = i;
                par++;
            }else{
                posImpar = i;
                impar++;
            } 
        });
        if (par > impar) return posImpar+1;
        else             return posPar+1;    
}
 

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2