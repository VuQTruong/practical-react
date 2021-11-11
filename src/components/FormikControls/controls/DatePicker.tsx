import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

export default function DatePicker(props: any) {
  const { label, name, ...rest } = props;

  return (
    <div className='form__control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field, form }: any) => {
          const { setFieldValue } = form; // Allow us to manually set the value of the field
          const { value } = field; // Get the current value of the field

          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(date: any) => setFieldValue(name, date)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
