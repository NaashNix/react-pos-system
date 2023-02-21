import React from 'react';
import classes from './RecentOrderRecord.module.css'

const RecentOrderRecord = () => {
   return (
      <div className={classes.recordContainer} >
         <span className={classes.orderID} >#O-1232</span>         
         <span className={classes.status}>IN-PROGRESS</span>
      </div>
   );
}

export default RecentOrderRecord;
