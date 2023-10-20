const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    register() {
        this.valid();
    }

    valid() {
        this.cleanUp();
        // E-mail must be valid
        // Password must have between 3 and 50 characters
    }

    cleanUp() {
        for(const key in this.body) {
            typeof this.body[key] !== 'string';
        }
    }
}

module.exports = Login;