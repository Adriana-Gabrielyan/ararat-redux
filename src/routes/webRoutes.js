import {route, withParams} from 'utils/helper';

const webRoutes = [
  route('/', 'Home', {auth: true}),
  route('/welcome', 'Welcome', {auth: true}),
  route('/about', 'About', {auth: true}),
  route('/products', 'Products', {auth: true}),
  route('/login', 'Login'),
  route('/register', 'Register'),
  route('/cart', 'Cart', {auth: true}),
  route('/product/:id', 'ProductSingle', {auth: true}),
];

export default withParams(webRoutes);
