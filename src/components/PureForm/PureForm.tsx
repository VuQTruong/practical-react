import NavBar from 'components/NavBar/NavBar';
import React from 'react';

export default function PureForm() {
  return (
    <div className='container'>
      <NavBar />
      <div className='panel'>
        <h2 className='form__title'>PURE FORM</h2>
        <form>
          <div className='form__control'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className='form__control'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>

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
