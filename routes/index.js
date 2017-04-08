/**
 * Created by lifei on 17/4/8.
 */
let express =require('express');
//运行Router 方法后返回一个路由中间件实例 传给server
let router =express.Router();
//子路径
router.get('/',function (req,res) {
	res.send('首页')
});
module.exports = router;
