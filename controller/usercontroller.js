var user = require('../model/usermodel');
// var bcrypt = require('bcrypt')
// var storage = require('node-persist');storage.init()

exports.Add_User = async (req,res) => {
    // var b_pass = await bcrypt.hash(req.body.password,10)
    // req.body.password = b_pass;
    var data = await user.create(req.body);
    // res.status(200).json({data})
    res.redirect('/admin/adduser')
}
exports.View_User = async (req,res) => {
    var data;
    if(!req.params.id){
         data = await user.find();
    }else{
         data = await user.findById(req.params.id)
    }
    // res.status(200).json({data})
    res.render('usertable',{data})
}
exports.Update_User = async (req,res) => {
    var data = await user.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json({data})
}
exports.Delete_User = async (req,res) => {
    var data = await user.findByIdAndDelete(req.params.id);
    res.status(200).json({data})
}
exports.Login_User = async (req,res) => {
    var data = await user.find({"email":req.body.email});
    // var LoginId = await storage.getItem('loginid');
    // if(LoginId==null){
        if(data.length==1){
            // bcrypt.compare(req.body.password,data[0].password, function(err, result){
                if(req.body.password==data[0].password){
                    // storage.setItem('loginid',data[0].id)
                    res.status(200).json({status:"user login successfuly..."})
                }else{
                    res.status(200).json({status:"chack your email and password !"})
                }
            // })
        }else{
            res.status(200).json({status:"chack your email and password !"})
        } 
    // }else{
    //     res.status(600).json({status:"user alredy login !"})
    // } 
}
exports.Logout_user = async (req,res) => {
    // storage.clear();
    res.status(200).json({status:"user logout..."})
}
