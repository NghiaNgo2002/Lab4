// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PeopleContainer from './PeopleContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/people/*" element={<PeopleContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
