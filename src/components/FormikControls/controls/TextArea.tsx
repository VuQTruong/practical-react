import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

export default function TextArea(props: any) {
  const { label, name, ...rest } = props;

  return (
    <div className='form__control'>
      <label htmlFor={name}>{label}</label>
      <Field as='textarea' id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
