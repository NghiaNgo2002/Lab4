// Person.js
import React from 'react';
import { useParams } from 'react-router-dom';
import people from './people'; // Assuming your people data is stored here

const Person = () => {
  const { id } = useParams();
  const person = people.find(p => p.id.toString() === id);

  if (!person) {
    return <div>Person not found!</div>;
  }

  return (
    <div className="Person">
      <h1>{person.name}</h1>
      <p>ID: {id}</p>
      <p>Address: {person.address}</p>
      <p>Department: {person.department}</p>
      {/* Display other information here */}
    </div>
  );
};

export default Person;
