import React from 'react';

const QueueList = ({ queues, onSelectQueue }) => {
  return (
    <div>
      <h2>Available Queues</h2>
      <ul>
        {queues.map((queue) => (
          <li key={queue.name} onClick={() => onSelectQueue(queue)}>
            {queue.name} - {queue.messageCount} messages
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueueList;