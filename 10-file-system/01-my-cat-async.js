#!/usr/bin/node

const fs = require('fs'),
  file = process.argv[2] || __filename;

//fs.readFile(file,function(err,data){
//if(err){
// console.error(err.message);
//    process.exit(1);
// }else{
// console.log(1);
// }
//boot console.log(data.toString('utf'));
//})
try{
  console.log(fs.readFileSync(file).toString('utf8'));
}catch(err){
  console.error(err.message);
  process.exit(1);
}
