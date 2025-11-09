// src/components/UserProfile.jsx

// The functional component receives 'props' as its argument
const UserProfile = (props) => {
  return (
    <div className="user-profile" style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      {/* Access props using dot notation: props.propertyName */}
      <h2 style={{ color: 'blue' }}>User Profile: {props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p><strong>Bio:</strong> {props.bio}</p>
      <hr /> {/* Separator for visual clarity */}
    </div>
  );
};

export default UserProfile;
