export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

type Person = { name: string };
type Animal = { color: string };
type PersonOrAnimal = Person | Animal;

class Student implements Person {
  constructor(public name: string) {}
}

function showName(obj: PersonOrAnimal) {
  if (obj instanceof Student) console.log(obj.name);
}

showName(new Student('John'));
