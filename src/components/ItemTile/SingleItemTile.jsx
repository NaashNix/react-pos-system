import React from 'react';
import classes from './SingleItemTile.module.css';

const SingleItemTile = () => {
   return (
      <div className={classes.container} >
         <span className={classes.timeTitle} >15 Minutes</span>
         <span className={classes.mainTitle} >Roast Chicken</span>
         <span className={classes.subTitle} >Rs. 500.00</span>
      </div>
   );
}

export default SingleItemTile;
