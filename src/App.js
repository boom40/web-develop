import React from 'react';
import { Route } from 'react-router-dom';
import LearnPage from './Components/LearnPage';
import { course } from './api/api';

function App() {

  return (
    <Route
      path="/"
      render = {() => (
        <LearnPage course={course}/>
      )}
    />
  );
}

export default App;