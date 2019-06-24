import React from 'react';

const SearchBox = (props) => {
  function handleChange (id) {
    props.findSpot(id.target.value);
}
  return (
    <div>
      <select onChange={handleChange}> 
        <option value="Select">Select Spot</option>
        <option value="Banzai Pipeline">Bonzai Pipeline</option>
        <option value="Lower Trestles">Lower Trestles</option>
        <option value="Coco Beach Pier">Coco Beach Pier</option>
      </select>
  
    </div>
  );
}

export default SearchBox;