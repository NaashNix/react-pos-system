import React from 'react';
import classes from './ItemTileContainer.module.css';
import SingleItemTile from './SingleItemTile';

const ItemTileContainer = () => {
   return (
      <div className={classes.outer} >
         <SingleItemTile />
         <SingleItemTile />
         <SingleItemTile />
         <SingleItemTile />
         <SingleItemTile />
      </div>
   );
}

export default ItemTileContainer;
