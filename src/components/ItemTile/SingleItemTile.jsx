import React from 'react';
import classes from './SingleItemTile.module.css';

const SingleItemTile = () => {
   return (
		<div className={classes.container}>
			<span className={classes.timeTitle}>15 Minutes</span>
			<div className={classes.foodTitles} >
				<span className={classes.mainTitle}>Roast Chicken Buriyani</span>
				<span className={classes.subTitle}>Rs. 500.00</span>
			</div>
		</div>
	);
}

export default SingleItemTile;
