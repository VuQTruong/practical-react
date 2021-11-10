import NavBar from 'components/NavBar/NavBar';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const onSubmit = (values: FormValues) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().required('Required').email('Invalid email address'),
  password: Yup.string().required('Required'),
});

export default function FormikComponent() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <div className='container'>
      <NavBar />
      <div className='panel'>
        <h2 className='form__title'>FORMIK USING FORMIK COMPONENTS</h2>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <div className='form__control'>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' name='name' />
            </div>

            <div className='form__control'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' />
            </div>

            <div className='form__control'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' name='password' />
            </div>

            <div className='center'>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
