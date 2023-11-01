import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Lucas',
      lastName: 'Onazes',
      email: 'lucas@gmail.com',
      age: 18,
      weight: 300,
      height: 2.5,
    });
    res.json(newStudent);
  }
}

export default new HomeController();
