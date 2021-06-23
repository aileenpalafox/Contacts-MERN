const mongoose = require('mongoose')
const { Schema } = mongoose;

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const validateLetters = function(name) {
    var re = /^[a-z]+$/i;
    return re.test(name)
};

const validateNumbers = function (value){
    if (!value){return true}
    var regex = /^[\d]{10}$/;
    return regex.test(value)
}

const validateAlphanumeric = function(value){
    if (!value){return true}
    var regex = /^[a-z\d\-_\s]+$/i;
    return  regex.test(value)
};

const contactsSchema = new Schema({
    name:  {
        type: String,
        trim: true,
        unique: false,
        required: 'Name is required',
        validate: [validateLetters, 'Name should contain only letters'],
        minLength: [2, 'Name should have at least 2 characters'],
        maxLength: [70, 'Name is too long']
    },
    lastname: {
        type: String,
        trim: true,
        required: 'Lastname is required',
        validate: [validateLetters, 'Lastname should contain only letters'],
        maxLength: [70, 'Lastname is too long']
    },
    company:   {
        type: String,
        trim: true,
        maxLength: [20, 'Company is too long'],
        validate: [validateAlphanumeric, 'Company should contain letters and numbers']
    },
    phone: {
        type:Number,
        unique:true,
        nullable:true,
        validate : [validateNumbers,'Phone should contain 10 numbers']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        maxLength: [30, 'Email address is too long'],
        validate: [validateEmail, 'Email should have the format email@company.some '],
    }
});

module.exports = mongoose.model("Contact",contactsSchema)