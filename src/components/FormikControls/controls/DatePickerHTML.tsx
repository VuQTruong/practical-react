import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

export default function DatePickerHTML(props: any) {
  const { label, name, ...rest } = props;
  return (
    <div className='form__control'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest}>
        {({ field }: any) => {
          return <input type='date' {...field} />;
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
