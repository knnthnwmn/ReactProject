import React from 'react';
import './SearchBar.css'

const SearchBar = (props) => {
    return (
        <div class="topnav">
         <input value={props.userInput} placeholder="Search.." onChange={(event)=>props.changeHandler(event)} />
      </div>
     );
}
 
export default SearchBar;

