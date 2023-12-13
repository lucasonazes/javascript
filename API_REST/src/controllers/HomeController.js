class HomeController {
  async index(req, res) {
    res.json('API is running');
  }
}

export default new HomeController();
