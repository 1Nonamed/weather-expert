import { getWeather } from '../helpers/getWeather';
import { useFetchWeather } from '../hooks/useFetchWeather';
import { Location } from './Location';

export const City = ({ city }) => {
  console.log(city);
  const [current, location, forecast, isLoading] = useFetchWeather(city);
  return (
    <>
      <div>{city}</div>
      {isLoading && <h2>Loading...</h2>}
      <Location location={location} />
      <pre>{JSON.stringify(location, null, 2)}</pre>
      <pre>{JSON.stringify(current, null, 2)}</pre>
    </>
  );
};
