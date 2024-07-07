import React, { useState } from 'react';
import './HealthTracker.css';

function HealthTracker() {
  const [foodCount, setFoodCount] = useState(0);
  const [activityCount, setActivityCount] = useState(0);

  return (
    <div className="health-tracker">
      <div className="tracker food">
        <span>Food! {foodCount}</span>
        <button className="minus" onClick={() => setFoodCount(Math.max(0, foodCount - 1))}>-</button>
        <button className="plus" onClick={() => setFoodCount(foodCount + 1)}>+</button>
      </div>
      <div className="tracker activities">
        <span>Activities! {activityCount}</span>
        <button className="minus" onClick={() => setActivityCount(Math.max(0, activityCount - 1))}>-</button>
        <button className="plus" onClick={() => setActivityCount(activityCount + 1)}>+</button>
      </div>
      <div className="feeling-crazy">
        <span>I'm feeling crazy</span>
      </div>
    </div>
  );
}

export default HealthTracker;
