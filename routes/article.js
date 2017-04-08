/**
 * Created by lifei on 17/4/8.
 */

let express =require('express');
let router =express.Router();
router.get('/add',function (req,res) {
	res.send('发表文章')
});
router.get('/list',function (req,res) {
	res.send('查看文章列表')
});
module.exports = router;
