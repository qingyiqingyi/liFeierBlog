/**
 * Created by lifei on 17/4/8.
 */
//引入mongoose模块  来操作数据库的集合
let mongoose = require('mongoose');
//链接数据库 要指定一个数据库的url的地址
//http://mail.guazi.com/su
/*
 结构:
 协议://域名或者IP/数据库名称 数据库的名字任意指定 不需要提前创建
 * */
//                协议       服务      路径
mongoose.connect('mongodb://127.0.0.1/lifeiBlog');
//如何手工指定  在Schema后面加个参数{collection:'blogs'}  就是强制的指定blog
let UserSchema = new mongoose.Schema({
	//js中的基本数据类型就可以
	username:String,
	password:String,
	email:String,
},{collection:'blogs'});
let Blog = mongoose.model('Blog',UserSchema);
exports.Blog = Blog;


