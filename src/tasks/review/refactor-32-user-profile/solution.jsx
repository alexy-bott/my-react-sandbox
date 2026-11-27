import React, { useState, useEffect } from 'react';
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setUser(null);
    setError(false);
    async function fetchUser() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal: controller.signal });
        if (!response.ok) throw new Error('Error fetching user');
        const data = await response.json();
        if (!controller.signal.aborted) setUser(data);
      } catch {
        if (!controller.signal.aborted) setError(true);
      }
    }
    fetchUser();
    // При смене пользователя запоздалый ответ не должен перезаписать новый профиль.
    return () => controller.abort();
  }, [userId]);
  return <div>
    <h1>User Profile</h1>{error && <p>Error loading user data.</p>}
    {user && <><p>Name: {user.name}</p><p>Email: {user.email}</p></>}
  </div>;
}
export default UserProfile;
