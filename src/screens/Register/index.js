import React from 'react';
import {useDispatch} from 'react-redux';
import {login} from 'api/auth';
import './index.scss';
import Button from '../../components/Button/button';
import FormInput from '../../components/FormInput/FormInput';

const Register = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = React.useState({
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    confirm_password: '',
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
          <h1 className="text-center">Register</h1>

          <FormInput
            type="text"
            value="gyuyu"
            onChange={handleChange}
            name="first_name"
            placeholder="First Name"
            id="first_name"
            style={error === 'first_name' ? {borderColor: 'red'} : null}
          />
          <FormInput
            type="text"
            value=""
            onChange={handleChange}
            name="last_name"
            placeholder="Last Name"
            id="last_name"
            style={error === 'last_name' ? {borderColor: 'red'} : null}
          />
          <FormInput
            type="email"
            value={''}
            onChange={handleChange}
            name="username"
            placeholder="Email"
            id="username"
            style={error === 'username' ? {borderColor: 'red'} : null}
          />

          <FormInput
            type="password"
            value={''}
            onChange={handleChange}
            name="password"
            placeholder="Password"
            id="password"
            style={error === 'password' ? {borderColor: 'red'} : null}
          />
          <FormInput
            type="password"
            value=""
            onChange={handleChange}
            name="confirm_password"
            placeholder="Confirm Password"
            id="confirm_password"
            style={error === 'confirm_password' ? {borderColor: 'red'} : null}
          />
          <Button
            className="text-white w-100"
            onClick={() => (validate() ? dispatch(login(userData)) : null)}>
            Register
          </Button>
        </form>
        <div className="text-white mt-3 mb-2">
          Already have an account
          <a href="/login" className="text-gold">
            {' '}
            Login
          </a>
        </div>
      </div>
    </section>
  );
};

export default Register;
