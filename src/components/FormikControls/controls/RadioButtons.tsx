import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

export default function RadioButtons(props: any) {
  const { label, name, options, ...rest } = props;
  return (
    <div className='form__control'>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }: any) => {
          return options.map((option: any) => {
            return (
              <div className='radio-option' key={option.key}>
                <input
                  type='radio'
                  id={option.value}
                  {...field} // The position of the spread operator must be exactly here, before setting the value and the checked property. Because this is where the "name" attribute is set, so that we can group the radio buttons together and handle the change of the radio buttons group. More than that, the "field" also has a "value" property, which is the value of the entire group. So we need to override the value property of this input by the "option.value", otherwise, all of the radio buttons will have the same value.
                  value={option.value}
                  checked={field.value === option.value}
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
