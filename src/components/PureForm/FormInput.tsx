import React, { useState } from 'react';

export default function FormInput(props: any) {
  const [focused, setFocused] = useState(false);
  const { errorMessage, label, onChange, id, ...inputProps } = props;
  return (
    <div className='form__control'>
      <label htmlFor={props.name}>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={() => setFocused(true)}
        onFocus={() => {
          inputProps.name === 'confirmpassword' && setFocused(true);
        }}
        focused={focused.toString()}
      />
      <span className='form__error'>{errorMessage}</span>
    </div>
  );
}
