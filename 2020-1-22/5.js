function GetNumberOfK(data, k)
{
    let left = 0;
    let right = data.length - 1;
    while(true) {
        if(data[left] == k && data[right] == k) break;
        if(data[left] !== k && data[right] == 0) {
            left++;
        }
        if(data[left] == 0 && data[right] !== k) {
            right--;
        }
        if(data[left] !== k || data[right] !== k) {
            left++;
            right--;
        }
    }
    console.log(right , left)
    return right - left + 1;
}

let data = [1,2,3,4,4,4,5,6];
console.log(GetNumberOfK(data,4))