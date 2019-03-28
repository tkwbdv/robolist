import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardsArray = robots.map((user, index) => {
    return (
      <Card
        key={robots[index].id}
        id={robots[index].id}
        name={robots[index].name}
        username={robots[index].username}
        email={robots[index].email} />
    );
    //have to give Card a unique "Key" prop when we loop which does not change (index is not good here because if the array items get moved the index changes). React can uniquely identify each card if it needs to change the DOM
  })

  return (
    <div>
      {cardsArray}  {/*we could replace cardsArray directly with the code written above because it is just a js variable we declared. I leave it as is for readibility */}
    </div>
  );
}

export default CardList;