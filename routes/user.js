var express = require('express')
var router = express.Router()

var user = require('../controller/usercontroller');

// ============user==================
router.post('/',user.Add_User);
router.get('/view_user',user.View_User);
router.get('/view_user/:id',user.View_User);
router.post('/update_user/:id',user.Update_User);
router.get('/delete_user/:id',user.Delete_User);
router.post('/login_user',user.Login_User);
router.post('/logout_user',user.Logout_user);

module.exports = router;