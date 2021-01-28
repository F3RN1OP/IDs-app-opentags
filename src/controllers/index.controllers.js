const indexCtrl = {};
const color = require('colors/safe');

const idModel = require('../models/idModel');

indexCtrl.renderIndex = async (req, res) => {
    // Renderizando IDs
    const ids = await idModel.find();
    res.render('index', { ids });
};
// Validation ID
indexCtrl.validation = async (req, res, next) => {
    const idFind = await idModel.findOne({ id: req.body.id });
    if (idFind) {
        req.flash("error_msg", "Write another number");
        res.redirect('/');
    } else if (!(req.body.id)) {
        req.flash("error_msg", "Write a number");
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
    req.flash("success_msg", "ID created");
    res.redirect('/');
};

// Delete
indexCtrl.deleteId = async (req, res) => {
    await idModel.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'ID delete succefully');
    res.redirect('/')
};



module.exports = indexCtrl;