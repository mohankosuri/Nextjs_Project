// components/MyComponent.tsx
"use client"
import { useState } from 'react';

export default function MyComponent() {
  const [data, setData] = useState<string>('');

  const TetchData = async () => {
    const response = await fetch('https://contact-49d81-default-rtdb.firebaseio.com/contacts');
    const data = await response.json();
    setData(data);
  };

  const createData = async () => {
    const response = await fetch('https://contact-49d81-default-rtdb.firebaseio.com/contacts.json', {
      method: 'POST',
      body: JSON.stringify({ /* Your data to create */ }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  };

  // Implement updateData and deleteData functions similarly.

  return (
    <div>
      <button onClick={TetchData}>Fetch Data</button>
      <button onClick={createData}>Create Data</button>
      {/* Render the data */}
    </div>
  );
}
