const mongoose = require('mongoose');
const { Schema } = mongoose;

const idSchema = new Schema({
    id: { type: Number, required: true, unique: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('idModel', idSchema);