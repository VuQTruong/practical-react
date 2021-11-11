import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='flex col panel'>
      <div style={{ marginBottom: '1em' }}>
        <Link to='/' className='btn btn-primary btn-primary--blue navbar__btn'>
          Home
        </Link>
        <Link to='/pureform' className='btn btn-primary navbar__btn'>
          Pure Form
        </Link>
        <Link to='/formikhook' className='btn btn-primary btn-primary--purple navbar__btn'>
          Formik Hook
        </Link>
        <Link to='/formikelement' className='btn btn-primary btn-primary--orange navbar__btn'>
          Formik Components
        </Link>
      </div>
      <div>
        <Link to='/formikcontrols' className='btn btn-primary btn-primary--red navbar__btn'>
          Reuseable Formik Controls
        </Link>
        <Link to='/login' className='btn btn-primary btn-primary--black navbar__btn'>
          Login
        </Link>
        <Link to='/register' className='btn btn-primary btn-primary--yellow navbar__btn'>
          Registration
        </Link>
        <Link to='/enroll' className='btn btn-primary btn-primary--indigo navbar__btn'>
          Enroll
        </Link>
      </div>
    </div>
  );
}
