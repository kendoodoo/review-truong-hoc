const mongoose = require('mongoose')
const dbname = 'reviewtruonghoc'

mongoose.connect('mongodb://0.0.0.0/' + dbname, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const posts = new mongoose.Schema({
    star_rating: {
      type: Number,
      required: true
    },
    post_user: {
      type: String,
      required: false,
      default: 'ẩn danh'
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true,
    },
    from_school: {
      type: String,
      required: true
    },
    time_posted: {
      type: Date,
      default: Date.now
    }
})

const duck = mongoose.model('posts', posts);
module.exports = duck