import React, { useState, useEffect } from 'react';
import './App.css';
import QueueList from './components/QueueList';
import QueueDetail from './components/QueueDetail';
import { fetchQueues } from './api';  // Import the fetchQueues API call

const App = () => {
  const [queues, setQueues] = useState([]);
  const [selectedQueue, setSelectedQueue] = useState(null);

  // Fetch queues on initial load
  useEffect(() => {
    const getQueues = async () => {
      try {
        const data = await fetchQueues();
        setQueues(data);
      } catch (error) {
        console.error('Error fetching queues:', error);
      }
    };

    getQueues();
  }, []);

  const handleSelectQueue = (queue) => {
    setSelectedQueue(queue);
  };

  // Function to update queues (called after popping a message)
  const updateQueues = async () => {
    try {
      const updatedQueues = await fetchQueues(); // Fetch updated queues
      setQueues(updatedQueues); // Update the state with new queue data
    } catch (error) {
      console.error('Error updating queues:', error);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Voyantis Queue Viewer</h1>
      </header>
      <main>
        <section id="queues">
          <QueueList queues={queues} onSelectQueue={handleSelectQueue} />
        </section>
        <section id="queue-detail">
          <QueueDetail 
            queue={selectedQueue} 
            onUpdateQueues={updateQueues}  // Pass updateQueues to QueueDetail
          />
        </section>
      </main>
    </div>
  );
};

export default App;
