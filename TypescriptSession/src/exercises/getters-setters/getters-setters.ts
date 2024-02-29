export class Person {
  constructor(
    private name: string,
    private lastName: string,
    private age: number,
    private _cpf: string,
  ) {}

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const person = new Person('Lucas', 'Onazes', 18, '092.404.059-92');

person.cpf = '1000000';
console.log(person.cpf);
