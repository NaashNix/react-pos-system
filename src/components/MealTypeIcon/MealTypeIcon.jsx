import React, { useState } from "react";
import classes from "./MealTypeIcon.module.css";
import breakfast_cup from "../../assets/breakfast.png";

const MealTypeIcon = (props) => {
	const [mouseEnter, setMouseEnter] = useState(false);
	return (
		<div
			style={{
				backgroundColor: !mouseEnter ? props.defColor : props.onColor,
			}}
			onMouseEnter={() => {
				setMouseEnter(true);
			}}
			onMouseLeave={() => {
				setMouseEnter(false);
			}}
			className={`${classes.outer__Div}`}
		>
			<img className={classes.smallIcon} src={breakfast_cup} alt="" />
			<span className={classes.mainHeading}>Breakfast</span>
			<span className={classes.subHeading}>13 Items</span>
		</div>
	);
};

export default MealTypeIcon;
