class ValidForm {
    constructor() {
        this.form = document.querySelector('.form');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.fieldsAreValid();
        const validPasswords = this.passwordsAreValid();

        if(validFields && validPasswords) {
            alert('Form was sent');
            this.form.submit();
        }
    }

    fieldsAreValid() {
        let valid = true;

        for(let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for(let field of this.form.querySelectorAll('.valid')) {
            const label = field.previousElementSibling.innerText;

            if(!field.value) {
                this.createError(field, `Field "${label}" has to be filled`);
                valid = false;
            }

            if(field.classList.contains('cpf')) {
                if(!this.validCPF(field)) valid = false;
            }
    
            if(field.classList.contains('user')) {
                if(!this.validUser(field)) valid = false;
            }
        }

        return valid;
    }

    validCPF(field) {
        const cpf = new ValidaCPF(field.value);

        if(!cpf.valida() && field.value) {
            this.createError(field, 'Invalid CPF');
            return false;
        }
        return true;
    }

    validUser(field) {
        const user = field.value;
        let valid = true;

        if(user.length < 3 && field.value || user.length > 12 && field.value) {
            this.createError(field, 'User must have between 3 and 12 characters')
            valid = false;
        }

        if(!user.match(/^[a-zA-Z0-9]+$/g) && field.value) {
            this.createError(field, 'User must contain only letters and numbers')
            valid = false;
        }

        return valid;
    }

    passwordsAreValid() {
        let valid = true;
        const password = this.form.querySelector('.password');
        const repeatPassword = this.form.querySelector('.repeat-password');
        let passwordLength = false;

        if(password.value.length < 6 && password.value || password.value.length > 12 && password.value) {
            this.createError(password, 'Password must have between 6 and 12 characters');
            valid = false;
        } else {
            passwordLength = true;
        }

        if(password.value !== repeatPassword.value && passwordLength && repeatPassword.value) {
            this.createError(password, 'Passwords must be the same');
            this.createError(repeatPassword, 'Passwords must be the same');
            valid = false;
        }
        
        return valid;
    }

    createError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }

}

const valid = new ValidForm();