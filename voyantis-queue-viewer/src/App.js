import React, { useState } from 'react';
import './App.css';
import QueueList from './components/QueueList';
import QueueDetail from './components/QueueDetail';

const App = () => {
  const [selectedQueue, setSelectedQueue] = useState(null);

  const queues = [
    { name: 'Queue 1', messageCount: 5 },
    { name: 'Queue 2', messageCount: 10 },
    { name: 'Queue 3', messageCount: 15 },
  ];

  const handleSelectQueue = (queue) => {
    setSelectedQueue(queue);
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
          <QueueDetail queue={selectedQueue} />
        </section>
      </main>
    </div>
  );
};

export default App;
