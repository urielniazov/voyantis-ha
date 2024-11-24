import React from 'react';

const QueueList = ({ queues, onSelectQueue }) => {
  return (
    <div>
      <h2>Available Queues</h2>
      <ul>
        {queues.map((queue) => (
          <li key={queue.name} onClick={() => onSelectQueue(queue)}>
            {queue.name} - {queue.message_count} messages
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueueList;
