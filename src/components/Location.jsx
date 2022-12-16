import React from 'react';

export const Location = ({ location }) => {
  console.log(location);
  return (
    <div>
      <h1>{location.name}</h1>
      <p>{location.country}</p>
    </div>
  );
};
