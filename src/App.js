import React, { useState } from "react";
import initData from "./data"
import Tours from "./components/Tours";

const App = () => {

  const [tours, setTours] = useState(initData);
  const removeTour = (id) => {
    const updatedTours = tours.filter(tour => tour.id !== id);
    setTours(updatedTours)
  }
  const refreshData = () => {
    setTours(initData);
  }
  if(tours.length === 0) {
    return (<div className='refresh'>
      <h2>No Tours Left</h2>
      <button className="btn-white" onClick={refreshData}>Refresh Now</button>
    </div>)
  }
  return <div className = 'App'>
    <Tours tours={tours} removeTour={removeTour}/>
  </div>;
};

export default App;
