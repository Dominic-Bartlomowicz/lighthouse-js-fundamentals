function range(start,end,step)

{
  
  var Array = [];
  
  if (start === undefined || end === undefined || step === undefined || start > end || step < 0)
  {
    Array = [];
  }
  
  else {
  
    for(start; start <= end; start += step)
 {
      Array.push(start);
    }
  }

  return Array;

}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
