import './App.css';
import MealIconContainer from './components/MealTypeIcon/MealIconContainer';
import RecentOrdersContainer from './components/RecentOrders/RecentOrdersContainer';
import UpperNavBar from './components/UpperNavBar/UpperNavBar';

function App() {
  return (
    <div className="App">
      {/* <MealIconContainer /> */}
      <UpperNavBar />
      <RecentOrdersContainer />
    </div>
  );
}

export default App;
