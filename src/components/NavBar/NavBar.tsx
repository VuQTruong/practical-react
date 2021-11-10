import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='panel'>
      <Link to='/' className='btn btn-primary btn-primary--blue navbar__btn'>
        Home
      </Link>
      <Link to='/pureform' className='btn btn-primary navbar__btn'>
        Pure Form
      </Link>
      <Link to='/formikhook' className='btn btn-primary btn-primary--purple navbar__btn'>
        Formik with Hook
      </Link>
      <Link to='/formikelement' className='btn btn-primary btn-primary--orange navbar__btn'>
        Formik with Element
      </Link>
    </div>
  );
}
