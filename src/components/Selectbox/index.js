import React from 'react';
 
const Selectbox = ({ options, classes, handleOnChange }) => {
  const createOptions = options =>
    options.map(o => (
      <option value={o.value} key={o.value}>
        {o.label}
      </option>
    ));

  return (
    <select onChange={e => handleOnChange(e.target.value)} className={classes}>
      {createOptions(options)}
    </select>
  );
};
 

export default Selectbox;
