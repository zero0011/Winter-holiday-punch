function jumpFloorII(number)
{
    let arr = [];
    arr[0] = 1;
    arr[1] = 1;
    let i = 2;
    while(i <= number) {
        arr[i] = 2 * arr[i - 1];
        i++;
    }
    return arr[number];
}

let number = 2;
console.log(jumpFloorII(number))