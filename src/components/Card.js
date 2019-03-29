import React from "react";

const Card = ({ userId, title, completed, deleteChange, id, toggleCompleted }) => { /* props is the passed argument but we destructure it. we grab name, email, id from props. dont have to write props.name etc. */
  return (
    <div className="flex justify-between bg-light-green br3 pa1 ma2 bw2 shadow-5 bg-animate hover-bg-blue hover-white">
      <span className="flex items-center">
        <label className="flex items-center pointer">
          <img className="mr2 h2" src={`https://robohash.org/${userId}.png?size=50x50`} alt="todos"></img>
          <input className="mr2 checkbox pointer" type="checkbox" checked={completed} onChange={toggleCompleted} id={id} />
          <h2>{title}</h2>
        </label>
      </span>
      <span className="flex">
        <button className="pointer" onClick={deleteChange} id={id}>delete</button>
      </span>
    </div>
  );
}

export default Card;