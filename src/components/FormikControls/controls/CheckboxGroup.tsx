import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

export default function CheckboxGroup(props: any) {
  const { label, name, options, ...rest } = props;
  return (
    <div className='form__control'>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }: any) => {
          return options.map((option: any) => {
            return (
              <div className='cb-option' key={option.key}>
                <input
                  type='checkbox'
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
