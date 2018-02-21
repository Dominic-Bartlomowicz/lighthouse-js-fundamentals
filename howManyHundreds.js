function howManyHundreds(num)
{
var division = num / 100;
var x = Math.floor(division);
return x;
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));
