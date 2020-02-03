function Find(target, array)
{
    let len = array.length;
    let i = 0;
    let j = len - 1;
    while(i < len && j >= 0) {
        if(target == array[i][j]) {
            return true;
        } else if(target < array[i][j]) {
            j--;
        } else if(target > array[i][j]) {
            i++;
        }
    }
    return false;
}

let arr = [[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
// console.log(arr)
console.log(Find(10,arr))