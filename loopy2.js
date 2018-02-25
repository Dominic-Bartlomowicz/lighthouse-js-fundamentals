// Submission for the Loopy Lighthouse 2 assignment in the Programming Intro module


function loopyLighthouse(range, multiples, words)

{

// Variable Declaration

var low = range[0];
var high = range[1];

var lowerMultiple = multiples[0];
var upperMultiple = multiples[1];

var string1 = words[0];
var string2 = words[1];


// Testing variable functionality


console.log("\n");
console.log("the lower bound is: " + low);
console.log("the upper bound is: " + high);

console.log("\n");
console.log("the lower multiple is: " + lowerMultiple);
console.log("the upper multiple is: " + upperMultiple);

console.log("\n");
console.log("the first word is: " + string1);
console.log("the second word is: " + string2);

console.log("\n");


// Main code: for loop with if/else statements


for (var i = low; i <= high; i++)

{

if (i % lowerMultiple == 0 && i % upperMultiple == 0)
	{
		console.log(string1 + string2);
	}

else if (i % lowerMultiple == 0)
	{
		console.log(string1);
	}

else if (i % upperMultiple == 0)
	{
		console.log(string2);
	}

else
	{
	console.log(i);
	}

}

}


// Testing the above function with sample inputs 

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

