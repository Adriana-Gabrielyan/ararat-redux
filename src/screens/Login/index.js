import React from 'react';
import {useDispatch} from 'react-redux';
import {login} from 'api/auth';
import './index.scss';
import Button from '../../components/Button/button';
import FormInput from '../../components/FormInput/FormInput';

const Login = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = React.useState({
    username: '',
    password: '',
  });
  const [error, setError] = React.useState('');
  const handleChange = (e) =>
    setUserData({...userData, [e.target.name]: e.target.value});

  const validate = () => {
    if (!userData.username.length) {
      setError('username');
      return;
    }
    if (!userData.password.length) {
      setError('password');
      return;
    }
    return true;
  };

  return (
    <section className="position-relative register-page">
      <img src="/img/thank-you.png" alt="" className="w-100 h-100 bg-img" />
      <div className="register-page-content">
        <form className="input-form">
          <h1 className="text-center">Login</h1>

          <FormInput
            type="text"
            value={userData.username}
            onChange={handleChange}
            name="username"
            placeholder="Username"
            id="username"
            style={error === 'username' ? {borderColor: 'red'} : null}
          />

          <FormInput
            type="password"
            className="Login__input"
            value={userData.password}
            onChange={handleChange}
            name="password"
            placeholder="Password"
            id="password"
            style={error === 'password' ? {borderColor: 'red'} : null}
          />
          <Button
            className="text-white w-100"
            onClick={() => (validate() ? dispatch(login(userData)) : null)}>
            Login
          </Button>
        </form>
        <div className="text-white mt-3 mb-2">
          Don't have account{' '}
          <a href="/register" className="text-gold">
            {' '}
            Register here
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
