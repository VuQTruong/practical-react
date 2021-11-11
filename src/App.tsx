import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import PureForm from './components/PureForm/PureForm';
import FormikHook from './components/FormikHook/FormikHook';
import FormikComponent from './components/FormikComponent/FormikComponent';
import FormikControls from './components/FormikControls/FormikControls';

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
