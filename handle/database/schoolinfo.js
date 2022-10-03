const mongoose = require('mongoose')
const dbname = 'reviewtruonghoc'

mongoose.connect('mongodb://0.0.0.0/' + dbname, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const schools = new mongoose.Schema({
    info: {
      logo_url: {
        type: String,
        required: true
      },
      school_name: {
        type: String,
        required: true
      },
      school_location: {
        type: String,
        required: true
      },
      time_added: {
        type: Date,
        default: Date.now
      },
    },
    star_rating: {
      five: {
        type: Number,
        required: true,
        default: 0
      },
      four: {
        type: Number,
        required: true,
        default: 0
      },
      three: {
        type: Number,
        required: true,
        default: 0
      },
      two: {
        type: Number,
        required: true,
        default: 0
      },
      one: {
        type: Number,
        required: true,
        default: 0
      }
    }
})

const duck2 = mongoose.model('schools', schools);
module.exports = duck2