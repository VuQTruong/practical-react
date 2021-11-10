import NavBar from 'components/NavBar/NavBar';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const onSubmit = (values: FormValues) => {
  console.log(values);
};

const validate = (values: FormValues) => {
  const errors: any = {};

  if (!values.name) {
    errors.name = 'Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().required('Required').email('Invalid email address'),
  password: Yup.string().required('Required'),
});

export default function FormikHook() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit,
    // validate,
    validationSchema,
  });

  return (
    <div className='container'>
      <NavBar />
      <div className='panel'>
        <h2 className='form__title'>FORMIK USING HOOK</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className='form__control'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <p className='form__error'>{formik.errors.name}</p>
            )}
          </div>

          <div className='form__control'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p className='form__error'>{formik.errors.email}</p>
            )}
          </div>

          <div className='form__control'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <p className='form__error'>{formik.errors.password}</p>
            )}
          </div>

          <div className='center'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
