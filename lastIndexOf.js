function lastIndexOf(array,value)

{

console.log("\n");

var end = false;
var result;		

for (var i = array.length; i >= 0; i--)
	
	{

		if ((array[i]) == value)
			
			{
				result = i;
				end = true;
			
				break;
			}
	}		

	
		if (end == true)

			{
				return result;
			} 
		else 
			{
				console.log("-1");
			}


	}


lastIndexOf([ 0, 1, 4, 1, 2 ], 1)
lastIndexOf([ 0, 1, 4, 1, 2 ], 2)
lastIndexOf([ 0, 1, 4, 1, 2 ], 3)
lastIndexOf([ 5, 5, 5 ], 5)
lastIndexOf([], 3)
