import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import PureForm from './components/PureForm/PureForm';
import FormikHook from './components/FormikHook/FormikHook';
import FormikComponent from './components/FormikComponent/FormikComponent';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pureform' element={<PureForm />} />
          <Route path='/formikhook' element={<FormikHook />} />
          <Route path='/formikelement' element={<FormikComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
