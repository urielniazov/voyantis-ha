import React, { useState } from 'react';
import { fetchQueueMessages } from '../api'; // Import the function to fetch messages

const QueueDetail = ({ queue, onUpdateQueues }) => {
  const [response, setResponse] = useState(null);

  const handleGoClick = async () => {
    if (!queue) return; // Return if no queue is selected

    try {
      // Fetch the next message from the queue
      const message = await fetchQueueMessages(queue.name);
      
      if (message) {
        setResponse(message);
      } else {
        setResponse('No message in the queue.');
      }

      // Call onUpdateQueues to refresh the queue list (message count)
      await onUpdateQueues(); // Ensure this is awaited so the queues are updated before rendering
    } catch (error) {
      console.error("Error fetching queue messages:", error);
      setResponse('Error fetching messages.');
    }
  };

  return (
    <div>
      <h2>Queue Details</h2>
      {queue ? (
        <>
          <div id="queue-info">
            <p>Queue Name: {queue.name}</p>
          </div>
          <button onClick={handleGoClick}>Go</button>
          {response && <div id="response">{JSON.stringify(response)}</div>}

        </>
      ) : (
        <p>Select a queue to view details.</p>
      )}
    </div>
  );
};

export default QueueDetail;
