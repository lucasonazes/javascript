// Supports Modules, Promisses and async and await in old Browsers, like Internet Explorer
import 'core-js/stable';
import 'regenerator-runtime/runtime';
/*-------------------------------*/

import Login from './modules/Login';

const register = new Login('.form-register');
const login = new Login('.form-login');
login.init();
register.init();

// import './assets/css/style.css';