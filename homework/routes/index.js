var express = require('express');
var router = express.Router();
const data = require('../views/data.json');
var Judge = false;

// // 使用ejs模板引擎，默认找views这个目录
// app.set('view engine','ejs');
// // 配置public 目录为我们的静态资源 托管静态界面
// app.use(express.static('public'));

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login');
});
;
var lists = data.chapterList;

router.post('/',function(req,res){
   Judge = false;
   if(req.body.username === data.users[0].username && req.body.password === data.users[0].password){
    Judge = true;
    console.log('shuhdsdjsdjhfjddhfdhffjhjvbnvnbvjnbvjcb');
    res.redirect('/list');
  }else{
    res.redirect('/index');
  }
});


router.get('/list',function(req,res){
  if(Judge){
    res.render('list',
      {title0:lists[0].title,views0:lists[0].views,
      title1:lists[1].title,views1:lists[1].views,
      title2:lists[2].title,views2:lists[2].views});
  }else{
    res.render('index',{title:'Please login first.'})
  }
});
router.get('/index',function(req,res){
  res.render('index',{title:'用户名或密码错误。'});
});

//获取登录提交的数据
// router.post('/doLogin', function(req, res, next) {
//   console.log(req.body);/*获取post提交的数据*/ 
// });
// router.get('/data',(req,res)=>{
//   res.write(JSON.stringify(chapterList));
//   res.end();
// });
module.exports = router;




