import React from "react"

const AllUsersButton = ({ userFilter, ShowAllUsersHandler, userTodos }) => {
  if (userFilter.length === userTodos.length) {
    return <div></div>
  }
  return (
    <div>
      <button className="f6 br2 ph3 pv2 white bg-dark-green" onClick={ShowAllUsersHandler}>All Users</button>
    </div>
  )
}

export default AllUsersButton;