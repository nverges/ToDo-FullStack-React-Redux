// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ToDoListSchema = new Schema({

  article_id: {
    type: String,
  },
  // title is a required string
  title: {
    type: String,
    // required: true
  },
  // link is a required string
  date: {
    type: String,
    // required: true
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  url: {
    type: String,
    // required: true
  }
});

// Create the To-Do model with the ToDoListSchema
var ToDos = mongoose.model("To-Do", ToDoListSchema);

// Export the model
module.exports = ToDos;
