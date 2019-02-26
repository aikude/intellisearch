import React from 'react';

const SearchBox = ({ setSearchValue }) => {
    return (
    <div className="pa2">
      <input type="Search" placeholder="Search by name" className="pa3 ba b--green" onChange={setSearchValue} />
    </div>
  );
}

export default SearchBox;
