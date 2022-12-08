import { useState } from 'react';
import { SearchCity } from './components/SearchCity';

const WeatherApp = () => {
  const [cities, setCities] = useState(['london']);

  const addNewCity = (newCity) => {
    if (cities.includes(newCity)) return;

    setCities([newCity, ...cities]);
    console.log(cities);
  };

  return (
    <>
      <h1>WeatherApp</h1>
      <SearchCity onNewCity={addNewCity} />
    </>
  );
};

export default WeatherApp;
