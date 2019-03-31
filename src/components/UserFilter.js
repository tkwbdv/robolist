import React from "react";




const UserFilter = ({ userFilterChange, userArray }) => {

  const userAvatars = userArray.map((userId) => {
    //Generate array with matching userimages
    return (
      <span key={userId} onClick={userFilterChange}>
        <img src={`https://robohash.org/${userId}.png?size=50x50`} alt="todos" className="pointer" id={userId} />
      </span>
    )
  })

  return (
    <div>
      {userAvatars}
    </div>
  );
}

export default UserFilter;