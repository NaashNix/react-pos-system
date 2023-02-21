import React from 'react';
import RecentOrderRecord from './RecentOrderRecord';
import classes from './RecentOrdersContainer.module.css';

const RecentOrdersContainer = () => {
   return (
      <div className={classes.container} >
         <span className={classes.title} >RECENT ORDERS</span>
         <RecentOrderRecord />
         <RecentOrderRecord />
         <RecentOrderRecord />
         <RecentOrderRecord />
         <RecentOrderRecord />
      </div>
   );
}

export default RecentOrdersContainer;
