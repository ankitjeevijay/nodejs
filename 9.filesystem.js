const fs = require('fs');
//console.log(fs);

//async method
fs.readFile(__dirname+"/8.teacher.txt",'utf8',(error,data)=>{
    console.log(data);
})
console.log('how are you')
