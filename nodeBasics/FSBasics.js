let FS=require("fs");

//console.log("before");
//let content=FS.readFileSync("testFile.txt");
//console.log(content);

//console.log("after");
//let content1=FS.readFileSync("testFile.txt","utf-8");
//console.log(content1);

//FS.writeFileSync("newFile.txt"," ");
//FS.writeFileSync("newFile1.txt"," i am writing to file");

FS.appendFileSync("newFile1.txt","appended the content");
FS.unlinkSync("newFile.txt");