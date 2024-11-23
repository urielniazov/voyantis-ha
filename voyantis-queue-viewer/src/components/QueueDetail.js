import React, { useState } from 'react';

const QueueDetail = ({ queue }) => {
  const [response, setResponse] = useState(null);

  const handleGoClick = async () => {
    // Simulate fetching queue data
    const queueMessages = await fetchQueueMessages(queue.name);
    setResponse(queueMessages);
  };

  const fetchQueueMessages = async (queueName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Messages for ${queueName}: [Message 1, Message 2, Message 3]`);
      }, 2000);
    });
  };

  return (
    <div>
      <h2>Queue Details</h2>
      {queue ? (
        <>
          <div id="queue-info">
            <p>Queue Name: {queue.name}</p>
            <p>Number of Messages: {queue.messageCount}</p>
          </div>
          <button onClick={handleGoClick}>Go</button>
          {response && <div id="response">{response}</div>}
        </>
      ) : (
        <p>Select a queue to view details.</p>
      )}
    </div>
  );
};

export default QueueDetail;
