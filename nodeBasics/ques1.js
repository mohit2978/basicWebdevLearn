//given a folder web dev as input create it
//ab uske andar uske modules die hue then us module ke naam se ek folder bn
//jana chahie and also lecture no dia hua so uske andar utne lecture ke folder bn jae
//eg webdev html 6 css 4 js 3 toh webdev mai html folder uske andar 6 txt folder
let FS=require("fs");
let path=require("path");
let iparr=process.argv.slice(2);

FS.mkdirSync(iparr[0]);
let outerpath=path.join(__dirname,iparr[0])
for(let i=1;i<iparr.length;i++){
    let innerpath=path.join(outerpath,iparr[i]);
    FS.mkdirSync(innerpath);
    i++;
    for(let j=0;j<iparr[i];j++){
        
        let filename="file "+j+".txt";
        let filepath=path.join(innerpath,filename);
        FS.writeFileSync(filepath," ");
    }
}