import NavBar from '../../components/NavBar/NavBar';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import FormikControl from 'components/FormikControls/form/FormikControl';

type FormValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });

  return (
    <div className='container'>
      <NavBar />
      <div className='panel'>
        <h2 className='form__title'>LOGIN FORM</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => {
            return (
              <Form>
                <FormikControl control='input' type='email' name='email' label='Email' />

                <FormikControl control='input' type='password' name='password' label='Password' />

                <div className='center'>
                  <button type='submit' className='btn btn-primary' disabled={!formik.isValid}>
                    Sign In
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
