const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendSchema = new Schema({
    name: {
        type: String,
    },
    mobno: {
        type: Number,
    },
    address: {
        type: String,
    },
});

const friendmodel = mongoose.model("friendmodel", friendSchema);
module.exports = friendmodel;   