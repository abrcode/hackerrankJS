/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {

    let vowel = 'aeiou';
    let constants ='';

  for(let i=0 ; i < s.length ; i++){
      if(vowel.includes(s[i])){
        console.log(s[i])
      }else{
           constants += s[i] + '\n';
      }
  }
  console.log(constants.trim())

}


function main() {
    // const s ;

    vowelsAndConsonants("JavascriptLoops");
}

main()
