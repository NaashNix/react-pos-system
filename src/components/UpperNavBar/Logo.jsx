import React from 'react';
import classes from './Logo.module.css';
import logo from "../../assets/main_logo.png";

const Logo = () => {
   return (
      <div className={classes.outer} >
         <img className={classes.image} src={logo} alt="Main Logo" />
      </div>
   );
}

export default Logo;
