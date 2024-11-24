const API_BASE_URL = 'http://localhost:2024/api';

export const fetchQueues = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/queue_messages`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch queues');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching queues:', error);
    throw error; // Re-throw to be handled by the caller
  }
};

export const fetchQueueMessages = async (queueName) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${queueName}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 204) {
      return null; // No content, so return null or a custom message
    }

    if (!response.ok) {
      throw new Error('Failed to fetch queue messages');
    }  
      const data = await response.json();
      return data; // Return the JSON data (assumed to be the messages)
    } catch (error) {
      console.error('Error fetching queue messages:', error);
      throw error; // Re-throw to be handled by the caller
    }
  };