const mongoose = require("mongoose");

const schema = mongoose.schema;
const exerciseSchema = new schema({
    name: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    weight: {
        type: Number
    },
    duration: {
        type: Number,
        required: true
    }
});

const Exercise = mongoose.model("Exercises", exerciseSchema);

module.exports = Exercise;