import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import FormikControl from './FormikControl';

export default function FormikContainer() {
  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
  ];

  const radioOptions = [
    { key: 'Option 1', value: 'rOption1' },
    { key: 'Option 2', value: 'rOption2' },
    { key: 'Option 3', value: 'rOption3' },
  ];

  const checkboxOptions = [
    { key: 'Option 1', value: 'cbOption1' },
    { key: 'Option 2', value: 'cbOption2' },
    { key: 'Option 3', value: 'cbOption3' },
  ];

  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOptions: [],
    htmlDate: '',
    date: new Date('01/01/2019'),
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOptions: Yup.array().min(1, 'Required'),
    htmlDate: Yup.date().required('Required'),
    date: Yup.date().required('Required').nullable(),
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {(formik) => {
        console.log(formik.values);
        console.log(formik.errors);
        return (
          <Form>
            <FormikControl control='input' type='email' name='email' label='Email' />

            <FormikControl control='textarea' name='description' label='Description' />

            <FormikControl
              control='select'
              name='selectOption'
              label='Select a Topic'
              options={dropdownOptions}
            />

            <FormikControl
              control='radio'
              name='radioOption'
              label='Radio Topic'
              options={radioOptions}
            />

            <FormikControl
              control='checkbox'
              name='checkboxOptions'
              label='Checkbox Topics'
              options={checkboxOptions}
            />

            {/* Since the built-in HTML date picker returns a date string instead of a date object and it's really hard to format the date (it depends on the setting of the Operating System that the app is running), it is recommended to use the second method, which is the react-datepicker package */}
            <FormikControl
              control='htmlDate'
              name='htmlDate'
              label='Pick a Date with HTML date input'
            />

            {/* NOTICE: The value return from react-datepicker is not a string, thus if the initial value of date is a string we must convert the date from string to date object before putting it into the initialValues otherwise the app will crash 
            To do the conversion, using "new Date("date-string")"*/}
            <FormikControl
              control='date'
              name='date'
              label='Pick a Date with react-datepicker package'
            />

            <div className='center'>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
