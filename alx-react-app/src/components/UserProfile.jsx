// src/components/UserProfile.jsx

// The functional component receives 'props' as its argument
const UserProfile = (props) => {
  return (
    <div className="user-profile">
      {/* Access props using dot notation: props.propertyName */}
      <h2>User Profile: {props.name}</h2>
      <p><strong>Age:</strong> {props.age}</p>
      <p><strong>Bio:</strong> {props.bio}</p>
      <hr /> {/* Separator for visual clarity */}
    </div>
  );
};

export default UserProfile;
