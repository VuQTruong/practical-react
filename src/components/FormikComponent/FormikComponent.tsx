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

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().required('Required').email('Invalid email address'),
  password: Yup.string().required('Required'),
});

export default function FormikComponent() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit,
    validationSchema,
  });

  return (
    <div className='container'>
      <NavBar />
      <div className='panel'>
        <h2 className='form__title'>FORMIK USING FORMIK COMPONENTS</h2>
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
