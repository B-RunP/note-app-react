import React from 'react';
import PropTypes from 'prop-types';

function RegisterInput({ register }) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function onNameChange(event) {
        setName(event.target.value);
    }

    function onEmailChange(event) {
        setEmail(event.target.value);
    }

    function onPasswordChange(event) {
        setPassword(event.target.value);
    }

    function onSubmitHandler(event) {
        event.preventDefault();

        register({
            name: name,
            email: email,
            password: password,
        });
    }

    return (
        <form onSubmit={onSubmitHandler} className='register-input'>
            <input type="text" placeholder="Nama" value={name} onChange={onNameChange} />
            <input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
            <input type="password" placeholder="Password" autoComplete='current-password' value={password} onChange={onPasswordChange} />
            <button>Register</button>
        </form>
    )
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
};

export default RegisterInput;