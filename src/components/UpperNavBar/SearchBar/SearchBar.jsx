import React from 'react';
import searchIcon from '../../../assets/search.png';
import classes from './SearchBar.module.css';

const SearchBar = () => {
   return (
      <div className={classes.container} >
         <img className={classes.searchIcon}  src={searchIcon} alt="Search Icon" />
         <input className={classes.inputBox} type="text" />
         <span className={classes.searchSpan} >Search</span>
      </div>
   );
}

export default SearchBar;
