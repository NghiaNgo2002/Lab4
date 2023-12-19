// PeopleContainer.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Person from './Person';
import PeopleList from './PeopleList'; // Assuming you have a PeopleList component
import people from './people.json'; // Assuming you have your people data here

const PeopleContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<PeopleList />} />
      {/* Define the route to display person's details */}
      <Route path=":id" element={<Person />} />
    </Routes>
  );
};

export default PeopleContainer;
