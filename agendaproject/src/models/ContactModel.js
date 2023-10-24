const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    phone: { type: String, required: false, default: '' },
    creationDate: { type: Date, default: Date.now }
});

const ContactModel = mongoose.model('Contact', ContactSchema);

function Contact(body) {
    this.body = body;
    this.errors = [];
    this.contact = null;
}

Contact.prototype.register = async function() {
    this.valid();
    if(this.errors.length > 0) return;

    this.contact = await ContactModel.create(this.body);
}

Contact.prototype.valid = function() {
    this.cleanUp();
    // E-mail must be valid
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Invalid e-mail.');
    if(!this.body.name) this.errors.push('Name is required.')
    if(!this.body.email && !this.body.phone) this.errors.push('At least one contact method must be filled out: Email or Phone.');
}
Contact.prototype.cleanUp = function() {
    for(const key in this.body) {
        if(typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }

    this.body = {
        name: this.body.name,
        lastName: this.body.name,
        email: this.body.name,
        phone: this.body.name
    }
}

module.exports = Contact;