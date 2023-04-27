// let row = 4
// let num = 0
// let store =""
// for(let i=1; i<=row; i++){
//     for(let j=0; j<row-i; j++){
//         store+=" "
//     }
//     for(let k=1; k<(2*i); k++){
//         store+=i
//     }
//     store+="\n"
// }
// console.log(store)

// const width = 7; // width of the pattern
// const height = 4; // height of the pattern

// for (let i = 1; i <= height; i++) {
//   let row = '';
//   const spaces = ' '.repeat(Math.floor((width - (2 * i - 1)) / 2));
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     row += Math.abs(j - i) + 1;
//   }
//   console.log(spaces + row + spaces);
// }

// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 0; j <= n; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k <2* i-1; k++) {
//     string +=0+ i;
//   }
//   string += "\n";
// }
// console.log(string);
   

// let arr = [39.03,89.99,99,70.2]
// let sum = 0
// for(let i=0; i<arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum.toFixed(2))


// let str = "fhs fjkehfkb deiund cuefnd euifnr efiurfn roi"
// for(let i=0; i<str.length; i++){
//     let flag = 0;
//     if(str[i] == " "){
//         flag +=1
//     }
// }

//  let arr1 = [1,4,32,5,4]
//  let arr2 = [3,66,3,5]
 
// //  arr3.push(...arr1,...arr2)
// // console.log(arr3.sort((a, b) => a - b))
// for(let i=0; i<arr2.length; i++){
//     arr1.push(arr2[i])
// }
// console.log(arr1.sort((a,b)=>{a - b}))


// let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       // Swap arr[j] and arr[j+1]
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// console.log(arr); 

// let str = 'my name is vishal kumar '
// let splitStr = str.split('')
// console.log(splitStr)
// let final = []
// let flag = 0


// let arr = [1,33.582,76.882,32.3223]
// let final = [],sum=0
// for(let i=0; i<arr.length; i++){
//     final.push(parseFloat(arr[i].toFixed(2)))
// }
// for(let j=0; j<final.length; j++){
//     sum += final[j]
// }
// console.log(sum.toFixed(2))

// let a="this is a string"
// let x=[]
// let str=""
// b=a.split("")
// for(let i=0; i<b.length ; i++){
//    str+=b[i]
//    if(b[i] == " "){
//        x.push(i)

//    if(x.length%2==0){
//        y="ODD"
//    }
//    else{
//        y="EVEN"
//    }
//   str+=y
   
//    }
// }
//  let z=str.split(" ")
//  let k=z.join("")
//  console.log(k)

//  let arr13 = [1,4,9,6]
//  let arr2 = [2,3,4,4]

//  function addArray(arr1,arr2){
//  let res = [],sum
//  for(let i=0; i<arr1.length; i++){
//     sum = arr1[i] + arr2[i]
//     res.push(sum)
//  }
//  console.log(res)
// }

// addArray(arr13,arr2)

// let arr = {
//   first :{
//     name :"vishal",
//     subject : {
//       english:"tyty"
//     }
//   },
//   two :{
//     age : 24
//   },
//   three: {
//     name :"vishalll",
//     subject : {
//       english:"rtrt"
//     }
//   }
// }

// if(arr.first.subject.english == "tyty"){
//   console.log(arr.first.subject)
// }
// for(let i=0; i<arr.length; i++){
//   // if(arr[i].subject.english == 'tyty'){
//   //   console.log(arr[i].subject.english)
//   //   break
//   // }
//   console.log(arr[i])
// }

// let arr3 = [
//   {
//     firstname : "vishal",
//     lastname : "kumar"
//   },
//   {
//     firstname : "shivani",
//     lastname : "sharma"
//   },
//   {
//     firstname : "rahul",
//     lastname : "sharma"
//   },
//   {
//     firstname : "sonali",
//     lastname : "mehra"
//   }

// ]
// for(let i=0; i<arr3.length; i++){

// // arr3[i].fullname = arr3[i].firstname+ " " + arr3[i].lastname
// if(arr3[i].firstname == "shivani"){
//   break;
// }
// }
// console.log(arr3)