// const http = require('http'),
//       qs   = require('querystring'),
//       fs = require('fs');

// var isLogin;
// var logcount = 0;

// http.createServer((req, res) => {
//   var data = '';
//   if(typeof req.headers['cookie'] === 'undefined') {
//     isLogin = false;
//   } else {
//     var pair = req.headers['cookie'].split('=');
//     isLogin = (pair[1] === 'true');
//   }

//   console.log(isLogin);

//   if(req.method === 'POST' && req.url === '/login') {
//     req.on('data', (chunk) => { data += chunk; });
//     req.on('end', () => {
//       var account = qs.parse(data);

//       if(account.user === 'zhangsan' && account.password === '123') {
//         console.log('user: %s, password: %s', account.user, account.password);
//         isLogin = true;
//         logcount+=1;
//         showHome(res);
//       } else {
//         showLogin(res);
//       }
//     });
//   }

//   if(req.method === 'GET') {
//     if(isLogin) {
//       if(req.url === '/logout') {
//         isLogin = false;
//         res.setHeader('Set-cookie', `login=${isLogin}; max-age=600`);
//         showLogin(res);
//       } else {
//         showHome(res);
//       }
//     } else {
//       showLogin(res);
//     }
//   }
// }).listen(8081);

// function showLogin(res) {
//   var file=__dirname;
//         file+='/login.html'; 
//         res.writeHead(200,{'Content-Type':'text/html'});
//         fs.readFile(file,'utf-8',(err,data)=>{
//           if(err){
//             console.log(err);
//           }
//           else{
//             res.end(data);
//           }
//         });
//         // res.end(data);
// }

// // function showHome(res) {
// //   var html = '<!DOCTYPE html>'
// //             + '<html>'
// //             + '  <head>'
// //             + '    <meta charset="UTF-8">'
// //             + '    <title>home</title>'
// //             + '  </head>'
// //           + '    <body>'
// //           + '       <h1>zhangsan这是你第'
// //           +  logcount
// //           +'次登陆</h1>'
// //           + '    </body>'
// //           + '</html>';

// //   res.setHeader('Content-Type', 'text/html');
// //   res.setHeader('Content-Length', Buffer.byteLength(html));
// //   res.setHeader('Set-cookie', `login=${isLogin}; max-age=600`);

// //   res.statusCode = 200;
// //   res.end(html);
// // }

// function showHome(res){
//   res.end(`
//       <!DOCTYPE html>
//           <html lang="en">
//               <head>
//                   <meta charset="UTF-8">
//                   <title>
//                   保持状态
//                   </title>
//                   <body>
//                       <h1>zhangsan这是您第${logincount}次登录</h1>
//                   </body>
//               </head>
//           </html>
//   `);
// }

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