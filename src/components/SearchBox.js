import React from 'react';
import 'tachyons';

const SearchBox = ({searchField, searchChange}) => {
    return (
    <div className="pa2">
      <input type="Search" placeholder="Search by name" className="pa3 ba b--green" onChange={searchChange} />
    </div>
  );
}

export default SearchBox;
