
const friends = [45, 15, 78, 15, 63, 10, 82, 49, 18, 24, 67, 15];

//Slice
const partial = friends.slice(2, 5);
console.log(partial);
console.log(friends);


// Splice
const partial2 = friends.splice(2, 5);
console.log(partial2);
console.log(friends);