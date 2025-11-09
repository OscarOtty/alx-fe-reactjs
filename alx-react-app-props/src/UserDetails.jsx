
import React, { useContext } from 'react'; // Import React and useContext
import { UserContext } from './UserContext'; 

function UserDetails() {
  // Consume the context value directly
  const userData = useContext(UserContext);
  
  // Safety check in case context is not provided
  if (!userData) {
    return <div>User data not available.</div>;
  }

  return (
    <div>
      <h3> User Details (Context API)</h3>
      <p>Name: **{userData.name}**</p>
      <p>Email: **{userData.email}**</p>
    </div>
  );
}

export default UserDetails;
