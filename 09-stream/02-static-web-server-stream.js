#! usr/bin/node

const http = require('http'),
      fs = require('fs');
http.createServer((req,res)=>{
  if(req.url==='/favicon.ico') retuirn;
  var fileName = __dirname +req.url;
  console.log(fileName);
  fs.createReadStream(fileName).pipe(res);
}).listen(8080);
