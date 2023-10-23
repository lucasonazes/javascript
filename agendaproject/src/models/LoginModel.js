const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require=('bcryptjs');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register() {
        this.valid();
        if(this.errors.length > 0) return;

        await this.userExists();

        if(this.errors.length > 0) return;
        
        try {
            const salt = bcryptjs.genSaltSync();
            this.body.password = bcryptjs.hashSync(this.body.password, salt);
            this.user = await LoginModel.create(this.body);
        } catch(e) {
            console.log(e);
        }
    }

    valid() {
        this.cleanUp();
        // E-mail must be valid
        if(!validator.isEmail(this.body.email)) this.errors.push('Invalid e-mail.');
        // Password must have between 3 and 50 characters
        if(this.body.password.length < 3 || this.body.password.lenght > 50) this.errors.push('The password must have between 3 and 50 characters.');
    }

    async userExists() {
        const user = await LoginModel.findOne({ email: this.body.email });
        if(user) this.errors.push('User already exists.');
    }

    cleanUp() {
        for(const key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Login;