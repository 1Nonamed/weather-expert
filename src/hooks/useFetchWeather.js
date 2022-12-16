import { useEffect, useState } from 'react';
import { getWeather } from '../helpers/getWeather';

export const useFetchWeather = (city) => {
  const [current, setCurrent] = useState({});
  const [location, setLocation] = useState({});
  const [forecast, setForecast] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getWeatherData = async () => {
    const { current, location, forecast } = await getWeather(city);
    setCurrent(current);
    setLocation(location);
    setForecast(forecast);
    setIsLoading(false);
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return [current, location, forecast, isLoading];
};
