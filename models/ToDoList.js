// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ToDoListSchema = new Schema({

  title: {
    type: String,
  },
  // title is a required string
  category: {
    type: String,
    // required: true
  },
  // link is a required string
  dueDate: {
    type: String,
    // required: true
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  comments: {
    type: String,
    // required: true
  }
});

// Create the To-Do model with the ToDoListSchema
var ToDos = mongoose.model("To-Do", ToDoListSchema);

// Export the model
module.exports = ToDos;
