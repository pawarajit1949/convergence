const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    type: {
        type: String,
        required: true,
    }

});


exports.Resource = mongoose.model('Resource', resourceSchema);
exports.resourceSchema = resourceSchema;