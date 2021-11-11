import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import PureForm from './components/PureForm/PureForm';
import FormikHook from './components/FormikHook/FormikHook';
import FormikComponent from './components/FormikComponent/FormikComponent';
import FormikControls from './components/FormikControls/FormikControls';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import EnrollmentForm from './components/EnrollmentForm/EnrollmentForm';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pureform' element={<PureForm />} />
          <Route path='/formikhook' element={<FormikHook />} />
          <Route path='/formikelement' element={<FormikComponent />} />
          <Route path='/formikcontrols' element={<FormikControls />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/enroll' element={<EnrollmentForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
