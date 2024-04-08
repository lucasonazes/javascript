import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstname: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstname, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    // System under test
    const sut = createIndividualCustomer('Lucas', 'Onazes', '111.222');
    expect(sut).toHaveProperty('firstName', 'Lucas');
    expect(sut).toHaveProperty('lastName', 'Onazes');
    expect(sut).toHaveProperty('cpf', '111.222');
  });

  it('should have methods to get and idn', () => {
    // System under test
    const sut = createIndividualCustomer('Lucas', 'Onazes', '111.222');
    expect(sut.getName()).toBe('Lucas Onazes');
    expect(sut.getIDN()).toBe('111.222');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    // System under test
    const sut = createEnterpriseCustomer('Lafort', '111.222');
    expect(sut).toHaveProperty('name', 'Lafort');
    expect(sut).toHaveProperty('cnpj', '111.222');
  });

  it('should have methods to get and idn', () => {
    // System under test
    const sut = createEnterpriseCustomer('Lafort', '111.222');
    expect(sut.getName()).toBe('Lafort');
    expect(sut.getIDN()).toBe('111.222');
  });
});
