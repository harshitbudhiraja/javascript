const fs = require("fs");


function syncFunc(){
    const data = fs.readFileSync("read.txt" , "utf8")
    console.log(data);
    console.log("after data");
}


function asyncFunc(){
    fs.readFile("read.txt" , "utf8" , (err,data) =>{
        console.log(data);
    });
    // console.log(data);
    
    console.log("after data" );
}


syncFunc();

console.log('\n')

asyncFunc();