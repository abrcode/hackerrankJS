function reverseString(s) {
    if(typeof s !== 'string'){
        console.log("s.split is not a function")
    }else{
       s = s.split('').reverse().join('')
    }
    console.log(s)
}


function main() {
    const s = 1234;

    reverseString(s);
}

main()
