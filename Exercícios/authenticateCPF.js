function AuthenticateCPF(cpfSend) {
    Object.defineProperty(this, 'cpfClean', {
        enumerable: true,
        get: function() {
            return cpfSend.replace(/\D+/g, '');
        }
    });
};

AuthenticateCPF.prototype.Authenticate = function() {
    if(typeof this.cpfClean === 'undefined') return false;
    if(this.cpfClean.length !== 11) return false;
    if(this.isSequency()) return false;

    const cpfPartial = this.cpfClean.slice(0,-2);
    const digit1 = this.createDigit(cpfPartial);
    const digit2 = this.createDigit(cpfPartial + digit1)

    const newCpf = cpfPartial + digit1 + digit2
    return newCpf === this.cpfClean;
};

AuthenticateCPF.prototype.createDigit = function(cpfPartial) {
    const cpfArray = Array.from(cpfPartial);
    let contRegressive = cpfArray.length + 1;
    const total = cpfArray.reduce((ac,val) => {
        ac += (contRegressive * Number(val));
        contRegressive--;
        return ac;
    }, 0);

    const digit = 11 - (total % 11);
    return digit > 9 ? '0' : String(digit); 
};

AuthenticateCPF.prototype.isSequency = function() {
    const sequency = this.cpfClean[0].repeat(this.cpfClean.length);
    return sequency === this.cpfClean;
};

const cpf = new AuthenticateCPF('070-987-720-03');

if(cpf.Authenticate()) {
    console.log('Valid CPF');
} else {
    console.log('Invalid CPF');
}