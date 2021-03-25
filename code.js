
// 1-5
/*
let arr = [];

for (let i = 0; i<7; i++) {
    arr[i] = Math.floor(Math.random()*100);
    console.log(arr[i]);
}

arr[5] = true;
arr[2] = 'line';

for (let i = 0; i<arr.length; i++) {
    console.log(arr[i]);
}
 */

//7-10
/*
for (let i = 1; i<11; i++){
    document.write(`<div>This element's number - ${i}</div>`);
}

let j = 1;
while (j<21){
    document.write(`<h2>This element's number - ${j}</h2>`);
    j++;
}
 */

//11-17
/*
let arr = [1, 3, 'arr', true, 45, '563', 'line', 'owu', 23, false];

for (let i = 0;i<arr.length; i++) {
    if (typeof (arr[i]) === "boolean"){
        console.log(`this elem is boolean ${arr[i]}`)
    } else if (typeof (arr[i]) === "number"){
        console.log(`this elem is number ${arr[i]}`)
    } else if (typeof (arr[i]) === "string"){
        console.log(`this elem is string ${arr[i]}`)
    }
}
*/
//23
/*
for (let i = 1;i<101; i++){
    if(i%2){
        console.log(`this step's count is ${i}`);
        document.write(`this step's count is ${i} <br>`);
    }
}
 */

//25
/*
for (let h = 0; h< 2; h++){
    for (let m = 0; m < 60; m++){
        for (let s = 0; s<60; s++){
            console.log(`there is ${h}:${m}:${s} now`)
        }
    }

}
 */

//38
/*
let arr = [1, 2, 3];
let newArr = [];
for (let i = arr.length-1; i>=0; i--){
    newArr.push(arr[i]);
}
console.log(newArr);

let newArr2 = arr.reverse();
console.log(newArr2);
 */

//47
/*
let arr = [1, 2, 3, 4, 5];
let splicedArr = arr.splice(1, 0, 'a','b');
let splicedArr2 = arr.splice(6, 0, 'c');
let splicedArr3 = arr.splice(8, 0,'e');
console.log(arr)
//[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
 */

//50
/*
let arr = [];

for (let i = 0; i < 20; i++){
    let random = Math.floor(Math.random()*100);
    let randomNum = Math.floor(random);
    arr.push(randomNum);
}
console.log(arr)

let arr2 = arr.reverse();
console.log(arr2);

 */

//56-63
/*
let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
let swapTrue = 'okten';

while (i<arr.length) {
    if (!(i%2)){
        console.log(arr[i]);
    }
i++;
}

for (let j = 0; j < arr.length; j++) {
    if (!(arr[j]%3)){
        arr[j] = swapTrue;
    }
}

console.log(arr);
console.log(arr.reverse());
 */
//66
/*
let arr = [];

for (let i = 0; i < 20; i++){
    let randomNum = Math.floor(Math.random()*100);

    //if(!(randomNum%2)){    для парного масиву
    if(randomNum%2){        // для непарного масиву
        arr.push(randomNum);
    }
}
console.log(arr);
 */

//86
/*
let arr = [];
for (let i = 0; i < 20; i++){
    let randomNum = Math.floor(Math.random()*100);
    arr.push(randomNum);
}
console.log(arr);

let secondArr = [];
for (let i = 0; i < arr.length; i++) {
    secondArr[i] = arr[i]*5;
}

console.log(secondArr);
 */

//87

let arr = ['arr', 'okten', false, true, '123', 2312, 23, 'string', 12432];
let onlyNumbers = [];

for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) === "number"){
        onlyNumbers.push(arr[i]);
    }
}
console.log(onlyNumbers);