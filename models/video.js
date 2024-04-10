const mongoose = require('mongoose');
const Schema = mongoose.Schema
const autoIncrementPlugin = require('mongoose-sequence')(mongoose);
const Video = new Schema({
    // username: { type: String, unique: true, maxLenght: 255 },
    // password: { type: String },
    // email: { type: String, unique: true },
    // name: { type: String },
    // avatar: { type: String },
    // age: { type: Number, min: 18, max: 65 },
    // available: { type: String, default: false },

    title: { type: String },
    video: { type: String },
    thumb: { type: String },

    // filePath:{ type: String,required: true}
}, {
    timestamps: true
});
Video.plugin(autoIncrementPlugin, { id: 'id_counters', inc_field: 'id' });

module.exports = mongoose.model('video', Video)