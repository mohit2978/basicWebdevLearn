//class 16
 
//we cant pass string directly to [] we need a 
//variable to store key and then we use [] on that variable 
//also if key is not present in object then
//output is undefined
let obj={
    name:"Mohit Kumar",
    college:"MNNIT",
    adress:"j-2978,sainik colony"
}
console.log(obj.name);
let key="college"
console.log(obj[key]);
console.log(obj.school);
console.log("--------------------------------------");
//tell whether obj has a property or not
console.log("college" in obj);
console.log(obj.hasOwnProperty("school"));

console.log("--------------------------------------");
//console.log(obj[adress]); not works put adress as string
console.log(obj["name"]);
let key1="college";
console.log(obj.key1);
//returns undefined as key1 not in obj but this works
//well with []
console.log(obj[key1]);
//works perfect


console.log("--------------------------------------");
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection
// Setup
/*
The updateRecords function takes 4 arguments represented by the following function parameters:

records - an object containing several individual albums
id - a number representing a specific album in the records object
prop - a string representing the name of the album’s property to update
value - a string containing the information used to update the album’s property
Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire records object.
If value is an empty string, delete the given prop property from the album.
If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
If prop is tracks and value isn't an empty string, you need to update the album's tracks array. First, if the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array.
Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object.
*/
let recordCollection = {
    name:"mohit",
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    
    if(value ==="") {
      delete(records[id][prop]);
      return records;
    }
    if(prop!="tracks"){
      records[id][prop]=value;
    }else{
      if(records[id].hasOwnProperty(prop)==false){
          records[id][prop]=[];
      }
      
      records[id][prop].push(value);
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
//traverse an object
  console.log("--------------------------------------");
  for(let key in recordCollection){
    console.log("key is "+key+" value is " +recordCollection[key]);
  }
//another question
console.log("--------------------------------------");
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup
/**
 * Profile Lookup
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.


 */
// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    let nameFound=false;
    for(let i=0;i<contacts.length;i++){
      let contact=contacts[i];
      if(contact.firstName==name){
          nameFound=true;
          if(contact[prop]!=undefined) return contact[prop];
      }
    }
    return nameFound==true?"No such property":"No such contact";
    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");
//arrays
  console.log("--------------------------------------");
  let arr=[1,2,"23",45];
  for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
  }
  let arr1=[[1,2,"23",45],[12,"mohit","rhoh","rneke"]];
  console.log(arr1);
  //adds value to last
  arr1.push(["dav","eit","mnnit"]);
  console.log(arr1);
  //deletes last value
  arr1.pop();
  console.log(arr1);

//adds value to first
arr1.unshift(["dav","eit","mnnit"]);
console.log(arr1);
//deletes first value
arr1.shift();
console.log(arr1);

let a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
console.log(a.slice(2,8));

