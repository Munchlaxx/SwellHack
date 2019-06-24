import React from 'react';
import data from '../data'


function handleChange (id) {
    console.log(id.target.value)
}

const SearchBox = (props) => {
  return (
    <div>
      <select onChange={handleChange}> 
        <option value="Bonzai Pipeline">Bonzai Pipeline</option>
        <option value="Lower Trestles">Lower Trestles</option>
        <option value="Coco Beach Pier">Coco Beach Pier</option>
      </select>
  
    </div>
  );
}

export default SearchBox;