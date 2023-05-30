//class 15
//simple print
console.log("hello");
console.log("-----------------------------------");
//simple function

//function def
function a(){
    console.log("in function");
}
// function call
let rval=a();
//here rval is undefined as 
//we are not returning anything jo jha 
//pe kuch nii hota vha pe undefined aata hai naa ki null
console.log(rval);
console.log("------------------------------------");
//function with param
function sum( a,b) {
    return a+b;
}
console.log("function with num param "+sum(3,2));
console.log("function with string param "+sum("mohit ","Kumar"));
console.log("------------------------------------");

//types in js null,undefined,number,string,boolean
console.log(5/2);
console.log(typeof(5/2));
console.log(typeof("a"));
console.log(typeof('a'));
console.log("------------------------------------");
//for loop,while loop ,if-else
console.log("for loop");
for(let i=1;i<=10;i++){
    if(i%2==0){
        console.log(i);
    }
}
console.log("------------------------------------");
console.log("while loop");
let i=1;
while(i<=10){
    if(i%2!=0){
        console.log(i);
    }
    i++;
}

//example of function
console.log("------------------------------------");
function decToBinary(num) {
    let res=0
    let pow=1;
    while(num!=0){
        res=res+(num%2)*pow;
        pow=pow*10;
        num=Math.floor(num/2);
    }
    return res;
}
console.log(decToBinary(14));
console.log(decToBinary(15));

//arrays 
//arrays in js is not a collection of similar objects
//it can have anything
console.log("------------------------------------");
function displayArr(arr) {
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
    
}
let arr=[1,2,'mohit',"rohit",true,1.4,3.14,null,undefined];
displayArr(arr);

//objects-->non primitive datatype ,collection of key:value pair
let coll1={
    name:"mohit",
    id:"1234",
    adress:"SainikColony Faridabad",
    arr1:[1,2,"shaam","shivi"],
    arr2:arr,
    coll2:{
        fatherName:"Mohinder",
        Bday:"2 May 1968"
    }
}
console.log(coll1);
//get a key value of a object by dot 
console.log(coll1.arr1);