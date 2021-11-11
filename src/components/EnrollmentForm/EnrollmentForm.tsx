import FormikControl from 'components/FormikControls/form/FormikControl';
import { Form, Formik } from 'formik';
import NavBar from '../NavBar/NavBar';
import * as Yup from 'yup';

type FormValues = {
  email: string;
  bio: string;
  course: string;
  skills: string[];
  courseDate: Date | null;
};

export default function EnrollmentForm() {
  const initialValues: FormValues = {
    email: '',
    bio: '',
    course: '',
    skills: [],
    courseDate: null,
  };

  const onSubmit = (values: FormValues) => {
    console.log('Form Data', values);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required('Required'),
    bio: Yup.string().required('Required'),
    course: Yup.string().required('Required'),
    skills: Yup.array().min(1, 'Required'),
    courseDate: Yup.date().required('Required').nullable(),
  });

  const courseOptions = [
    { key: 'Select a course', value: '' },
    { key: 'React', value: 'react' },
    { key: 'Angular', value: 'angular' },
    { key: 'Vue', value: 'vue' },
  ];

  const skillsetOptions = [
    { key: 'HTML', value: 'html' },
    { key: 'CSS', value: 'css' },
    { key: 'JavaScript', value: 'javascript' },
  ];

  return (
    <div className='container'>
      <NavBar />
      <div className='panel'>
        <h2 className='form__title'>ENROLLMENT FORM</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => {
            return (
              <Form>
                <FormikControl control='input' type='text' name='email' label='Email' />
                <FormikControl control='textarea' name='bio' label='Bio' />
                <FormikControl
                  control='select'
                  name='course'
                  label='Course'
                  options={courseOptions}
                />
                <FormikControl
                  control='checkbox'
                  name='skills'
                  label='Skillset'
                  options={skillsetOptions}
                />

                <FormikControl control='date' name='courseDate' label='Course Date' />

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
