import React from "react";




const UserFilter = ({ userFilterChange, todos, userArray }) => {
  // userArray(todos);

  const userAvatars = userArray(todos).map((userId) => {
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