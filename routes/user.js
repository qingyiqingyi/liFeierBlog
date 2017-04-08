/**
 * Created by lifei on 17/4/8.
 */

let express =require('express');
//引入数据库便于保存
//require('../model') 相当于exports
let Blog = require('../model').Blog;
//运行Router 方法后返回一个路由中间件实例 传给server
let router =express.Router();
//子路径

router.get('/signup',function (req,res) {
	res.render('user/signup',{title:"用户注册"})
});
router.post('/signup',function (req,res) {
	let user= req.body;
	console.log(user)
	/*获取请求体*/
/*
	Blog.create(user,function (err,doc) {
    if(err){
    	//返回上一级 哪里来就去哪里
	    res.redirect('back')
    }else{
	    res.redirect('/user/signin')
    }

	 });
*/
	/*res.redirect()*/
	/*res.render('user/signup',{title:"用户注册"})*/
});
router.get('/signin',function (req,res) {
	res.render('user/signin',{title:"登录"})
});
router.post('/signin',function (req,res) {
	let user = req.body;
	/*获取请求体 find 返回是空数组  则是成功 所以用findOne*/
	Blog.findOne(user, function (err, doc) {
		if (err) {
			//返回上一级 哪里来就去哪里
			res.redirect('back')
		} else {
			if (doc) {
				req.session.user == doc;
				res.redirect('/')
			} else {
				res.redirect('back')
			}
		}
	});
	/*如何保持登录状态  session*/
});
router.get('/signout',function (req,res) {
	res.send('退出')
});

module.exports = router;
