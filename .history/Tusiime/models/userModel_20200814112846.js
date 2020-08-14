const mongoose = require("mongoose");

var formSchema = new mongoose.Schema({

    surname: {
        type: String
    },
    given_name: {
        type: String
    },

    dob: {
        type: String
    },

    placeofresidence: {
        type: String
    },

    occupation: {
        type: String
    },

    nationality: {
        type: String
    },

    gender: {
        type: String
    },

    category: {
        type: String
    }

});

module.exports = mongoose.model("Virus", formSchema)