/*
 * Create the function factorial here
 */

 function factorial(n){

   let fac = 1;

   for(let i= 0 ; i<n ;i++){
       fac = fac * (n-i);
   }

   return fac;
}


function main() {
    const n = 4;

    console.log(factorial(n));
}

main()
