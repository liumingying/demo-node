const http = require('http');
const fs = require('fs');
const qs = require('queryString');

var logincount = 0;
http.createServer((req,res) => {
    var data = '';
    var file = __dirname;
    if(typeof req.headers['cookie'] === 'undefined'){
        count = 1;
    }else {
        var pair = req.headers['cookie'].split('=');
        count = Number(pair[1])+1;
    }
    if(req.url === '/login'){
        res.writeHead(200,{'Count-Type':'text/html'});
        fs.readFile(file,'utf-8',(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                res.end(data);
            }
        });
    }
    console.log(req.headers); //
    req.on('data',(chunk) => {data += chunk});
    req.on('end', () => {
        var account = qs.parse(data);
        // console.log('user: %s, password: %s', account.user, account.password);
        if(account.user === 'zhangsan' && account.password === '123') {
           
            // count+=1;
            showHome(res);
          }
    });

}).listen(8081);
function showHome(res){
    res.end(`
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>
                    保持状态
                    </title>
                    <body>
                        <h1>zhangsan这是您第${logincount}次登录</h1>
                    </body>
                </head>
            </html>
    `);
}