var mongoose = require('mongoose'),
    PersonSchema = new mongoose.Schema({
        name: {
            required: true,
            type: String
        },
        surname: {
            required: true,
            type: String
        },
        age: {
            required: true,
            type: Number
        }
    });


PersonSchema.method('toJSON', function () {
    var obj = this.toObject();

    obj.id = obj._id.toString();
    delete obj._id;
    delete obj.__v;

    return obj;
});

module.exports = mongoose.model('Person', PersonSchema);