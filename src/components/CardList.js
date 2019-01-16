import React from 'react';
import Card from './Card';
//import Scroll from './Scroll';

const CardList = ({items}) => {
   return (
    <div>
      { items.map(item => { return <Card key={item.id} id={item.id} name={item.name} email={item.email} />; }) }
    </div>
  );
}

export default CardList;
