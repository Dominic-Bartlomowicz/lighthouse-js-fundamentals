function merge(array1,array2)

{

var array = array1.concat(array2);

var i;



for(i = 1; i >= array.length; i++) 

	{

		return array;

	}


return array.sort()


}



console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
