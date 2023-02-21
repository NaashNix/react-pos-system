import React from 'react';
import MealTypeIcon from './MealTypeIcon';
import classes from './MealIconContainer.module.css';

const MealIconContainer = () => {
   return (
		<div className={classes.outer}>
			<MealTypeIcon
				mainHeading="Breakfast"
				subHeading="13 Items"
				defColor="#B4FFF6"
				onColor="#75FFEE"
			/>
			<MealTypeIcon
				mainHeading="Dinner"
				subHeading="40 Items"
				defColor="#A4FFB8"
				onColor="#65FF87"
			/>
			<MealTypeIcon
				mainHeading="Lunch"
				subHeading="14 Items"
				defColor="#A4FFB8"
				onColor="#65FF87"
			/>
			<MealTypeIcon
				mainHeading="Drinks"
				subHeading="25 Items"
				defColor="#A4FFB8"
				onColor="#65FF87"
			/>
			<MealTypeIcon
				mainHeading="Drinks"
				subHeading="25 Items"
				defColor="#A4FFB8"
				onColor="#65FF87"
			/>
			<MealTypeIcon
				mainHeading="Drinks"
				subHeading="25 Items"
				defColor="#A4FFB8"
				onColor="#65FF87"
			/>
		</div>
	);
}

export default MealIconContainer;
