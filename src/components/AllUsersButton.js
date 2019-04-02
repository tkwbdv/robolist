import React from "react"

const AllUsersButton = ({ userFilter, ShowAllUsersHandler, userTodos }) => {
  if (userFilter.length === userTodos.length) {
    return <div></div>
  }
  return (
    <div>
      <button onClick={ShowAllUsersHandler}>All Users</button>
    </div>
  )
}

export default AllUsersButton;