import { useState } from 'react';

export const SearchCity = ({ onNewCity }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputValue);
    onNewCity(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={hanldeSubmit}>
      <input
        type="text"
        placeholder="Search city"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};
