const mongoose = require('mongoose');
const Schema = mongoose.Schema
const autoIncrementPlugin = require('mongoose-sequence')(mongoose);
const Products = new Schema({
    // username: { type: String, unique: true, maxLenght: 255 },
    // password: { type: String },
    // email: { type: String, unique: true },
    // name: { type: String },
    // avatar: { type: String },
    // age: { type: Number, min: 18, max: 65 },
    // available: { type: String, default: false },
    
    title:{ type: String },
    price:{ type: Number },
    image: {type: String}
}, {
    timestamps: true
});
Products.plugin(autoIncrementPlugin, { id: 'id_counter', inc_field: 'id' });

module.exports = mongoose.model('products', Products)