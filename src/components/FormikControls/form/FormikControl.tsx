import React from 'react';
import Input from '../controls/Input';
import TextArea from '../controls/TextArea';
import Select from '../controls/Select';
import RadioButtons from '../controls/RadioButtons';
import CheckboxGroup from '../controls/CheckboxGroup';
import DatePickerHTML from '../controls/DatePickerHTML';
import DatePicker from '../controls/DatePicker';

type Props = {
  control: string;
} & Partial<any>;

export default function FormikControl(props: Props) {
  const { control, ...rest } = props;

  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <TextArea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'radio':
      return <RadioButtons {...rest} />;
    case 'checkbox':
      return <CheckboxGroup {...rest} />;
    case 'htmlDate':
      return <DatePickerHTML {...rest} />;
    case 'date':
      return <DatePicker {...rest} />;
    default:
      return null;
  }
}
