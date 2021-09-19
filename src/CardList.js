import React from 'react';
import Card from './card.js';

const Cardlist = ({robots}) => {
    const arr = robots.map((user,i) => {return  <Card key={i} id={robots[i].id} name={robots[i].name} email = {robots[i].email} /> });
    return (
    <div className="flex-container">
        {arr}
    </div>
    );
}

export default Cardlist;