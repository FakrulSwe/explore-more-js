const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student ={
    id:301,
    class:11,
    name: 'Rupok'
}
const friends = [12, 14, 17, 20, 60];
function add(num1, num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends));
console.log(typeof add);

//-----------
console.log(friends.includes(17));
console.log(friends.includes(1));

if(friends.indexOf(252) !== -1){

}

//concat : 
const newFriends = [20, 54, 13, 47];
const allFriends = newFriends.concat(friends);
console.log(allFriends);




