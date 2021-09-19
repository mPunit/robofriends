import React from 'react';

const Card = ({name,email,id}) => {

    return(
        <div>
            <img alt='robo' src={`https://robohash.org/${id}?200x200`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card; 