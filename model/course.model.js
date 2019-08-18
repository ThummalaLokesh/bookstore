const mongoose = require('mongoose');
 
//Attributes of the Course object
var bookSchema = new mongoose.Schema({
bookName: {
type: String,
required: 'This field is required!'
},
bookISBN: {
type: String
},
bookAuthor: {
type: String
},
bookPrice: {
type: String
}
});
 
mongoose.model('Course', bookSchema);