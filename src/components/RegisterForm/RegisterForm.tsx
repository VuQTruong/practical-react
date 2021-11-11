import NavBar from '../../components/NavBar/NavBar';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import FormikControl from 'components/FormikControls/form/FormikControl';

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
  contactMode: string;
  phoneNumber: string;
};

export default function RegisterForm() {
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    contactMode: '',
    phoneNumber: '',
  };

  const onSubmit = (values: FormValues) => {
    console.log('Form Data', values);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .required('Required'),
    contactMode: Yup.string().required('Required'),
    phoneNumber: Yup.string().when('contactMode', {
      is: 'via telephone',
      then: Yup.string().required('Required'),
    }),
  });

  const contactModeOptions = [
    { key: 'Email', value: 'via email' },
    { key: 'Telephone', value: 'via telephone' },
  ];

  return (
    <div className='container'>
      <NavBar />
      <div className='panel'>
        <h2 className='form__title'>REGISTER FORM</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => {
            return (
              <Form>
                <FormikControl control='input' type='text' name='email' label='Email' />
                <FormikControl control='input' type='password' name='password' label='Password' />
                <FormikControl
                  control='input'
                  type='password'
                  name='confirmPassword'
                  label='Confirm Password'
                />
                <FormikControl
                  control='radio'
                  name='contactMode'
                  label='Mode of Contact'
                  options={contactModeOptions}
                />
                <FormikControl control='input' type='text' name='phoneNumber' label='Phone' />

                <div className='center'>
                  <button type='submit' className='btn btn-primary' disabled={!formik.isValid}>
                    Submit
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
