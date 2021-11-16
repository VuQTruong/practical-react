import NavBar from 'components/NavBar/NavBar';
import React, { useState } from 'react';
import FormInput from './FormInput';

export default function PureForm() {
  const [values, setValues] = useState<{ [input: string]: string }>({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    birthdate: '',
  });

  const input = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage: `Username should be 3-16 characters and shouldn't include any special character!`,
      label: 'Username',
      pattern: '^[a-zA-Z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and should include at least 1 letter, 1 number and 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: 'confirmpassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: `Password doesn't match!`,
      label: 'Confirm Password',
      pattern: values.password,
      required: true,
    },
    {
      id: 5,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      errorMessage: 'Birthday is required!',
      label: 'Birthday',
      required: true,
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submit data', values);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className='container'>
      <NavBar />
      <div className='panel'>
        <h2 className='form__title'>PURE FORM</h2>
        <form onSubmit={handleSubmit}>
          {input.map((item) => (
            <FormInput
              key={item.id}
              {...item}
              value={values[item.name]}
              onChange={onChange}
            />
          ))}

          <div className='center'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
