import React from 'react';
import RecentOrderRecord from './RecentOrderRecord';
import classes from './RecentOrdersContainer.module.css';

const RecentOrdersContainer = () => {
   return (
      <div className={classes.container} >
         <RecentOrderRecord />
      </div>
   );
}

export default RecentOrdersContainer;
