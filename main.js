const input = 'a whale of a deal!';
const vowels = ['a','e','i','o','u'];
let resultArray= [];
for (let i= 0; i < input.length; i++) {
//console.log('i is ' + i); } 
 {
 for (let v= 0; v < vowels.length; v++ ) {
//console.log('v is '+ v);
 if (input[i] === vowels[v]) {

 if (input[i] === 'e' || input[i] === 'u') {
     resultArray.push(input[i]);
   } 
   else {
     resultArray.push(input[i]);
   }
   }
 }
 }
}
console.log(resultArray.join('').toUpperCase());