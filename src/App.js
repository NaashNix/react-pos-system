import './App.css';
import SingleItemTile from './components/ItemTile/SingleItemTile';
import MealIconContainer from './components/MealTypeIcon/MealIconContainer';
import RecentOrdersContainer from './components/RecentOrders/RecentOrdersContainer';
import UpperNavBar from './components/UpperNavBar/UpperNavBar';

function App() {
  return (
    <div className="App">
      {/* <UpperNavBar /> */}
      {/* <RecentOrdersContainer /> */}
      {/* <MealIconContainer /> */}
      <SingleItemTile />
    </div>
  );
}

export default App;
