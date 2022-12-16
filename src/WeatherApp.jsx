import { useState } from 'react';
import { City } from './components/City';
import { SearchCity } from './components/SearchCity';

const WeatherApp = () => {
  const [city, setCity] = useState('bogota');

  const addNewCity = (newCity) => {
    console.log(newCity);
    if (newCity === city) return;

    setCity(newCity);
  };

  return (
    <>
      <h1>WeatherApp</h1>
      <SearchCity onNewCity={addNewCity} />
      <City city={city} />
    </>
  );
};

export default WeatherApp;
