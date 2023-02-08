var catNameIdeas = ["Morris","Tofu","Bagel","Ralph"];
var coolNumbers = [97, 21, 55, 66];
var booleanArray = [true, false, true, false];

// The pop method takes out the last element listed in an array.
catNameIdeas.pop();

// The unshift method adds on a element to the start of an array, 
// and when ran, returns the new lenght of the array.
console.log(coolNumbers.unshift(88));

// The push method adds on a element to the end of an array, and when ran, 
// returns the new lenght of the array.
booleanArray.push(false);


// Index position describes the number an element is an array. A common misconception
// would be that the first element is 1, when it is actually 0. I will call upon some 
// elements from the arrays created above and predict the output.

console.log(catNameIdeas[1]);
// expected output: Tofu

console.log(coolNumbers[0]);
// expected output: 88; this number was added on from the unshift method

console.log(booleanArray[0]);
// expected output: true