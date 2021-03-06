import React from 'react';

const Card = ({id, name, email}) => {
   return (
    <div className="tc bg-light-blue dib pa3 ma2 grow bw3 shadow-5">
      <img src={`https://robohash.org/${id}?set=set4&size=200x200`} alt="Robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
