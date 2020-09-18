const indexCtrl = {};
const color = require('colors/safe');

const idModel = require('../models/idModel');

indexCtrl.renderIndex = async (req, res) => {
    // Renderizando IDs
    console.log(color.blue(req.body.id));
    const ids = await idModel.find();
    res.render('index', { ids });
};
// Validation ID
indexCtrl.validation = async (req, res, next) => {
    const idFind = await idModel.findOne({ id: req.body.id });
    console.log(color.green(req.body.id));
    if (idFind) {
        console.log(color.red('error igual'));
        req.flash("error_msg", "Introduce otro numero");
        res.redirect('/');
    } else if (!(req.body.id)) {
        console.log(color.red('error nada'));
        req.flash("error_msg", "Introduce un numero");
        res.redirect('/');
    } else {
        next();
    };
};


// Save ID
indexCtrl.newId = async (req, res) => {
    let success = {};
    const { id } = req.body;
    const newId = new idModel({
        id
    });
    await newId.save();
    req.flash("success_msg", "ID creado");
    res.redirect('/');
};

// Delete
indexCtrl.deleteId = async (req, res) => {
    console.log(color.yellow(req.body._id));
    await idModel.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Note Delete Succefully');
    res.redirect('/')
};



module.exports = indexCtrl;