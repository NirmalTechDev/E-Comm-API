var admin = require('../model/ADMINModel')
var login_status = 0;



exports.Index = async (req, res) => {
    res.render('index',{login_status})
}

exports.Admin_login = async (req, res) => {
    var data = await admin.find({'email':req.body.email});
    if (data.length==1 && data[0]!== null) {
        if(data[0].password == req.body.password)
        {
            login_status=0;
            res.redirect('/admin');
            // res.status(200).json({status:"Admin Login Success..."})
        }
        else{
            login_status=1
            res.redirect('/');
            // res.status(200);
            // res.status(200).json({status:"Chack your email and password !"})
        }
    } else {
        login_status=1
        res.redirect('/')
        // res.status(200).json({status:"Chack your email and password !"})
    }
}