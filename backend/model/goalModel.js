// goalModel.js is used to define the schema and field for this resource

// initialize mongoose to be able to call mongodb database
const mongoose = require('mongoose');

// initialize goal object schema
const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
    }, {
        timestamps: true,
    }
)

module.exports = mongoose.model('Goal', goalSchema);

