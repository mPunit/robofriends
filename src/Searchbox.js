import React from 'react'; 

const Searchbox = ( {searchchange}) => {
return <input type="search" placeholder="Search Robots" onChange={searchchange} ></input>;
}

export default Searchbox; 
