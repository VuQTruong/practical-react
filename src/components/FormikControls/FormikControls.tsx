import NavBar from '../NavBar/NavBar';
import FormikContainer from './form/FormikContainer';

export default function FormikControls() {
  return (
    <div className='container'>
      <NavBar />
      <div className='panel'>
        <h2 className='form__title'>FORMIK CONTROLS</h2>
        <FormikContainer />
      </div>
    </div>
  );
}
