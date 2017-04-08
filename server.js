/**
 * Created by lifei on 17/4/8.
 */
let express = require('express');
let path = require('path');
let session = require('express-session');
//app的核心是一个请求监听函数
let app = express();
app.use(session({resave:true,saveUninitialized:true,secret:'lifei'}))

//json:{a:'b}
//urlencoded:'a'
//取决于我们的请求
let bodyParser = require('body-parser');

//放在use中的是中间件
//指定public为静态文件根目录
app.use(express.static(path.resolve('public')));
app.use(bodyParser.urlencoded({extended:true}));
//引入模板
app.set('view engine','html');
app.set('views',path.resolve(__dirname,'views'));//设置目录
app.engine('html',require('ejs').__express);//用__express来设置引擎模板
//引入路由
let user = require('./routes/user');
let article = require('./routes/article');
let index = require('./routes/index');

app.use('/user',user);
app.use('/article',article);
app.use('/',index);
//监听8809端口
app.listen(8809);

