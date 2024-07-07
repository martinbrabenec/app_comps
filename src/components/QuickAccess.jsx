import React, { useEffect, useState } from 'react';
import './QuickAccess.css';

function QuickAccess() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = Array.from({ length: 8 }, (_, i) => 
      `https://picsum.photos/100?random=${i}`
    );
    setItems(newItems);
  }, []);

  return (
    <div className="quick-access-container">
      <div className="quick-access">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="quick-item">
            <img src={item} alt={`Item ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickAccess;
