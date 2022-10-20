//Check the number is prime or not
let num=23;
for(let i=1;=i<=num;i++)
{
if(num%i==0)
{
count++;
}
}
if(count==2)
{
console.log(num, "is a prime number");
}
else
{
console.log(num, "is not a prime number");
}
