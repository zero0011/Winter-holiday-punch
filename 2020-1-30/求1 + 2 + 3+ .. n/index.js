function Sum_Solution(n)
{
    return n && Sum_Solution(n - 1) + n;
}
console.log(Sum_Solution(10))