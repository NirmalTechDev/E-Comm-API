var express = require('express');
var router = express.Router();

var admin = require('../controller/ADMINController');

router.get('/',admin.Index);
router.post('/',admin.Admin_login)



module.exports = router