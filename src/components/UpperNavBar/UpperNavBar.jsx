import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar/SearchBar';
import classes from './UpperNavBar.module.css';

const UpperNavBar = () => {
   return (
      <div className={classes.container} >
         <Logo />
         <SearchBar />
      </div>
   );
}

export default UpperNavBar;
