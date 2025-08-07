import React from 'react';


function UserIdentity({ name = "John Doe", photoUrl = "https://via.placeholder.com/100" }) {
  return (
    <div className="user-identity">
      <img className="user-photo" src={photoUrl} alt={name} />
      <h2 className="user-name">{name}</h2>
      
    </div>
  );
}

export default UserIdentity;
