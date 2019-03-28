import React from "react";

const Card = ({ name, email, id }) => { /* props is the passed argument but we destructure it. we grab name, email, id from props. dont have to write props.name etc. */
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots"></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;