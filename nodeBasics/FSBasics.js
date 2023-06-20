//let FS=require("fs");

//console.log("before");
//let content=FS.readFileSync("testFile.txt");
//console.log(content);

//console.log("after");
//let content1=FS.readFileSync("testFile.txt","utf-8");
//console.log(content1);

//FS.writeFileSync("newFile.txt"," ");
//FS.writeFileSync("newFile1.txt"," i am writing to file");

//FS.appendFileSync("newFile1.txt","appended the content");
//FS.unlinkSync("newFile.txt");

//files and folder
//FS.mkdirSync("new folder");
//FS.rmdirSync("new folder");

//let content=FS.readdirSync("C:\\Users\\mohit\\Documents\\programs\\basicWebdevLearn\\TestFolder");
//console.log(content);

//console.log(__dirname);
//console.log(__filename);
//console.log(process.cwd());

let path=require("path");
let foldername="C:";
let nextfolder="Movies";
let movie="RangDeBasanti";
let actor="Amir khan"

let adress=path.join(foldername,nextfolder,movie,actor);
console.log(adress);

//to take input
let ip=process.argv.slice(2);
console.log(ip);