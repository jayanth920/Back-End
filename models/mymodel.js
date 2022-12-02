
const mongoose = require("./connection");


const TodoSchema = new mongoose.Schema({
       task: String,
});

module.exports = mongoose.model("Todo", TodoSchema)