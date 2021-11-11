import NavBar from 'components/NavBar/NavBar';
import {
  ErrorMessage,
  FastField,
  Field,
  FieldArray,
  FieldArrayRenderProps,
  FieldAttributes,
  Form,
  Formik,
} from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

type FormValues = {
  name: string;
  email: string;
  password: string;
  description: string;
  address: string;
  social: {
    facebook: string;
    twitter: string;
  };
  phoneNumbers: string[];
  phNumbers: string[];
};

const initialValues = {
  name: '',
  email: '',
  password: '',
  description: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers: ['', ''],
  phNumbers: [''],
};

/* Mimic data getting from API call */
const savedData = {
  name: 'Vu Truong',
  email: 'q_truong@example.com',
  password: 'password',
  description: 'This is a description',
  address: '247 Service',
  social: {
    facebook: 'fb@facebook.com',
    twitter: 'tw@twitter.com',
  },
  phoneNumbers: ['', ''],
  phNumbers: [''],
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().required('Required').email('Invalid email address'),
  description: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
});

function validatePassword(value: string) {
  let error;

  if (!value) {
    error = 'Required';
  }

  return error;
}

export default function FormikComponent() {
  const [formData, setFormData] = useState<null | FormValues>(null);

  const onSubmit = (values: FormValues, onSubmitProps: any) => {
    // console.log(values);

    // After getting response from server, we call onSubmitProps.setSubmitting(false) to reset the inSubmitting state
    onSubmitProps.setSubmitting(false);

    // After submitting, we can reset the form data to its initial state
    onSubmitProps.resetForm();
    setFormData(null); // Use this in case we load data from API to formData state
  };

  const cancelHanlder = () => {
    console.log('Cancel is called!');
  };

  return (
    <div className='container'>
      <NavBar />
      <div className='panel'>
        <h2 className='form__title'>FORMIK COMPONENTS</h2>

        {/* Formik component accept props and create kind of context to provide information to its children */}
        <Formik
          initialValues={formData || initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          // This prop is very important that allows formik to fill the form with data from API call after initializing
          enableReinitialize

          // This is used in conjunction with disabling the submit button
          // validationOnMount

          // There are three scenarios that Formik will run the validation
          // 1. When the form is submitted
          // 2. When the values are changed
          // 3. When a field is blurred
          // Formik provides us two props to controll the later two scenarios: validateOnChange and validateOnBlur
          // validateOnChange={false} // default value is true
          // validateOnBlur={false} // default value is true
        >
          {/* By using "Render Prop Pattern" we have access to "formik" object which allow us to have fully access to all functionalities of formik
          
          If we don't want to use "Render Prop Pattern" we can just pass the Form Component to the Formik component as a child component 
          
          A use case for this is when we want to MANUALLY TRIGGER VALIDATION (such as validate the uniqueness of username)*/}
          {(formik) => {
            // console.log(formik.errors);
            return (
              <Form>
                {/* Form Component automatically hook up the onSubmit function with the one provided by Formik Component */}
                <h3 className='form__divider'>Field and FastField Component</h3>
                <div className='form__control'>
                  <label htmlFor='name'>Name</label>
                  {/* Field Components do three things:
                  - Hook up the input with the top level Formik component
                  - Using the "name" attribute to match up with the Formik state
                  - By default Field Component will render an input element */}
                  <Field type='text' id='name' name='name' />
                  <ErrorMessage name='name' component={TextError} />
                </div>

                <div className='form__control'>
                  <label htmlFor='email'>Email</label>
                  {/* The advantage of FastField Component is to prevent the field to be re-render unless its value is changed
              
                FastField Component is recommended to use when 
                  - A form is large with ~30+ fields
                  - A field has very expensive validation requirements */}
                  <FastField type='email' id='email' name='email' />
                  {/* Render Error Message using custom component */}
                  <ErrorMessage name='email' component={TextError} />
                </div>

                {/* Field Level Validation 
          
                A use case for using Field Level Validation is when you want to render fields based on a JSON fetching from an API call */}
                <h3 className='form__divider'>Field Level Validation</h3>
                <div className='form__control'>
                  <label htmlFor='password'>Password</label>
                  <Field
                    type='password'
                    id='password'
                    name='password'
                    validate={validatePassword}
                  />
                  <ErrorMessage name='password' component={TextError} />
                </div>

                {/* By default, Field Component is rendered as input element, we can render other element by using "as" attribute, the value of "as" can be: textarea, checkbox, radio, etc. */}
                <h3 className='form__divider'>Render Field other than &lt;input&gt;</h3>
                <div className='form__control'>
                  <label htmlFor='description'>Description</label>
                  <Field id='description' name='description' as='textarea' />

                  {/* Render Error Message using "Render Props Pattern" */}
                  <ErrorMessage name='description'>
                    {(errMessage) => <div className='form__error'>{errMessage}</div>}
                  </ErrorMessage>
                </div>

                {/* Another way to force Field Component to render other than input element is using a method called "Render Prop Pattern"
          
                The advantage of this pattern is to allow us to use custom components */}
                <h3 className='form__divider'>Render Prop Pattern - Not using Field</h3>
                <div className='form__control'>
                  <label htmlFor='address'>Address</label>
                  <Field name='address'>
                    {(props: FieldAttributes<any>) => {
                      // console.log(props);
                      const { field, form, meta } = props;

                      return (
                        <>
                          <input type='text' id='address' {...field} />
                          {meta.touched && meta.error && (
                            <div className='form__error'>{meta.error}</div>
                          )}
                        </>
                      );
                    }}
                  </Field>
                </div>

                {/* Nested Objects 
              
              NOTICE: the "name" attribute, we use "social.facebook" to match up with the Formik state where facebook is the key of the social object */}
                <h3 className='form__divider'>Nested Objects</h3>
                <div className='form__control'>
                  <label htmlFor='facebook'>Facebook Profile</label>
                  <Field type='text' id='facebook' name='social.facebook' />
                </div>

                <div className='form__control'>
                  <label htmlFor='twitter'>Twitter Profile</label>
                  <Field type='text' id='twitter' name='social.twitter' />
                </div>

                {/* Array of Values 
          
              NOTICE: we access to the phoneNumbers array in the Formik state as we do with a normal array */}
                <h3 className='form__divider'>Array of Values</h3>
                <div className='form__control'>
                  <label htmlFor='phone1'>Phone Number 1</label>
                  <Field type='text' id='phone1' name='phoneNumbers[0]' />
                </div>

                <div className='form__control'>
                  <label htmlFor='phone2'>Phone Number 1</label>
                  <Field type='text' id='phone2' name='phoneNumbers[1]' />
                </div>

                {/* FieldArray Component */}
                <h3 className='form__divider'>FieldArray Component</h3>
                <div className='form__control'>
                  <label>List of Phone Numbers</label>
                  <FieldArray name='phNumbers'>
                    {(fieldArrayProps: FieldArrayRenderProps) => {
                      const { push, remove, form } = fieldArrayProps;
                      const {
                        values: { phNumbers },
                      } = form;

                      return (
                        <div>
                          {phNumbers.map((phNumber: string, index: number) => (
                            <div key={index} style={{ marginBottom: '0.5em' }}>
                              <Field type='text' name={`phNumbers[${index}]`} />
                              {index > 0 && (
                                <button className='btn btn-secondary' onClick={() => remove(index)}>
                                  -
                                </button>
                              )}
                              <button className='btn btn-secondary' onClick={() => push('')}>
                                +
                              </button>
                            </div>
                          ))}
                        </div>
                      );
                    }}
                  </FieldArray>
                </div>

                {/* Disable Submit button when
                1. Form validation is false 
                  - We can use formik.isValid() in conjunction with "validateOnMount" props that applied to Formik component. The disadvantage of this approach is that if there are fields that require expensive validations, it will slow down the form. Therefore, this approach is recommended if the form is small and the form is not expensive to validate.
                  - The second approach is using !(formik.dirty && formik.isValid()) without "validateOnMount" (In plain English, this means "Only disable the button if a user has changed the form and the validation is failed"). However, this will not work if the form is already filled in and user maybe don't modify the form. Because formik.dirty will change to true only if at least one field is modified (its default value is false)

                2. Form submission is in progress
                - To disable the button in this scenario, we use formik.isSubmitting (which has default value is false)
                - NOTICE: formik doesn't know when the submission is complete, therefore we need to MANUALLY set the state of isSubmitting to false in the "onSubmit" function*/}
                <h3 className='form__divider'>Disable Submit Button</h3>
                <div className='center'>
                  <button
                    type='submit'
                    className={`btn ${formik.isValid ? 'btn-primary' : 'btn-disable'}`}
                    disabled={!formik.isValid || formik.isSubmitting}
                    // disabled={!(formik.dirty && formik.isValid)}
                  >
                    Submit
                  </button>

                  {/* This button does the thing specified in the onClick event and doesn't trigger the onSubmit function
            
                  NOTICE: the type is "button" not "submit" */}
                  <button type='button' className='btn btn-primary' onClick={cancelHanlder}>
                    Cancel
                  </button>
                </div>

                <h3 className='form__divider'>Manually Trigger Validation</h3>
                <div className='center'>
                  {/* The condition to show an error of a field including the field had been visited. Therefore, we need to set the field as touched */}
                  <button
                    type='button'
                    className='btn btn-secondary'
                    onClick={() => {
                      formik.setFieldTouched('description');
                      formik.validateField('description');
                    }}
                  >
                    Set Visit and Validate Description
                  </button>
                </div>

                <div className='center mt-1'>
                  {/* With .setTouched() function, we must pass in an object of fields we want to set as touched 
                  
                  If we click this button before clicking the Validate Entire Form button, it just like we have visited and not entering anything. Hence, it will show errors*/}
                  <button
                    type='button'
                    className='btn btn-secondary'
                    onClick={() => {
                      formik.setTouched({
                        name: true,
                        email: true,
                        password: true,
                      });
                    }}
                  >
                    Set Visit Some Specific Fields
                  </button>

                  {/* If we use .validateForm() without setting touched, nothing will show */}
                  <button
                    type='button'
                    className='btn btn-secondary'
                    onClick={() => {
                      formik.validateForm();
                    }}
                  >
                    Validate Entire Form
                  </button>
                </div>

                {/* Loading Saved Data

                NOTICE: To be able to load the data to the form, we MUST use "enableReinitialize" prop in Formik Component*/}
                <h3 className='form__divider'>Load Saved Data to Form</h3>
                <div className='center'>
                  <button
                    type='button'
                    className='btn btn-primary'
                    onClick={() => setFormData(savedData)}
                  >
                    Load Saved Data
                  </button>
                </div>

                {/* Reset Form Data
                There are two scenarios that we want to reset the form data
                - Manually reset the form data
                  + Refer to the examples below
                - Reset the form data after submitting
                  + Refer to the "onSubmit" button where we use the .resetForm() from "onSubmitProps" */}
                <h3 className='form__divider'>Reset Form Data</h3>
                <div className='center'>
                  {/* This button reset all field to the initial values and doesn't trigger the onSubmit function

                  NOTICE: the type is "reset" not "submit" */}
                  <button type='reset' className='btn btn-primary'>
                    Reset
                  </button>

                  {/* This button reset the form data in case a form data state is used
                  
                  The reason the above doesn't work is that the initialValues is set to formData | initialValues, and in this case after loading savedData to formData state, the formData is not null. Hence, the initialValues is set to formData instead*/}
                  <button
                    type='reset'
                    className='btn btn-primary'
                    onClick={() => setFormData(null)}
                  >
                    Reset including State
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

function TextError(props: FieldAttributes<any>) {
  return <div className='form__error'>{props.children}</div>;
}
