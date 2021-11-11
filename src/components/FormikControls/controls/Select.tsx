import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

export default function Select(props: any) {
  const { label, name, options, ...rest } = props;
  return (
    <div className='form__control'>
      <label htmlFor={name}>{label}</label>
      <Field as='select' id={name} name={name} {...rest}>
        {options.map((option: any, index: number) => {
          return (
            <option key={index} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
