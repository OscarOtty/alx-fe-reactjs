import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function UserProfile() { // 👈 Component name updated to match file
  const userData = useContext(UserContext);
  
  if (!userData) {
    return <div>User data not available.</div>;
  }

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}
export default UserProfile;
