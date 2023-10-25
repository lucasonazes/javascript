import validator from 'validator';

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector('formClass')
    }

    init() {
        this.events();
    }

    events() {
        if(!this.forms) return;
        this.form.addEventListener('click', e => {
            e.preventDefault();
            this.validate();
        })
    }

    validate() {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email');
        const passwordInput = el.querySelector('input[name="password');
        let error = false;

        if(!validator.isEmail(emailInput.value)) {
            alert('Invalid E-mail');
            error = true;
        }

        if(passwordInput.value.length <= 3 || passwordInput.value.length >= 50) {
            alert('Password must have between 3 and 50 characters');
            error = true;
        }

        if(!error) el.submit();
    }
}