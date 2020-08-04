/* change: i replace user inout into array values
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */

function isPositive(a) {

    if(a === 0){
     return "Zero Error";
    }else if(a > 0){
        return "YES";
    }else{
        return "Negative Error";
    }
}


function main() {
    const n = [1,-3,5,0];

    for (let i = 0; i < n.length; i++) {
        const a = n[i];

        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }
}

main()
