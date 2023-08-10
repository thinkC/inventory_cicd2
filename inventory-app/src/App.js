import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items when the component mounts
    fetchItems();
  }, []);

  const fetchItems = () => {
    // Replace 'your-backend-url' with your actual backend URL
    const backendURL = 'http://ec2-44-211-192-49.compute-1.amazonaws.com:5000/api';

    axios.get(`${backendURL}/items`)
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  };

  return (
    <div>
      <h1>Inventory Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            Name: {item.name}, Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

