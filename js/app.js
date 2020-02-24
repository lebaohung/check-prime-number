let num = parseInt(prompt("How many prime number you want to show: "))
if (num <1) {
    alert("Please enter again");
    location.reload();
} else {
    switch (num) {
        case 1:
            document.write("The first prime number is 2");
            break;
        default:
            let count = 1;
            let j = 3;
            let str = "The first " + num + " prime number is 2 " ;
            while (count <  num) {
                if (isPrimeNumber(j)) {
                    str += j + " ";
                    count ++;
                }
                j += 2;
            }
            document.write(str);

    }
}
function isPrimeNumber(x) {
    for(let i=3; i <= x/2; i+=2) {
        if (x % i === 0) return false;
    }
    return true;

}