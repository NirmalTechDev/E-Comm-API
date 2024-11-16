
exports.Index = async (req, res) => {
    res.render('dasboard')
}

exports.Simpal_table = async (req, res) => {
    res.render('categorytable')
}

exports.Product_table = async (req,res) => {
    res.render('producttable')
}

exports.User_table = async (req,res) => {
    res.render('usertable')
}

exports.Addcategory = async (req, res) => {
    res.render('addcategory')
}

exports.AddProduct = async (req, res) => {
    res.render('addproduct')
}

exports.Adduser = async (req,res) => {
    res.render('adduser')
}

exports.Calendar = async (req,res) => {
    res.render('calendar')
}