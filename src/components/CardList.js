import React from "react";
import Card from "./Card";

const CardList = ({ todos, deleteChange }) => {
  const cardsArray = todos.map((user, index) => {
    return (
      <Card
        key={todos[index].id}
        id={todos[index].id}
        userId={todos[index].userId}
        title={todos[index].title}
        completed={todos[index].completed}
        deleteChange={deleteChange}
      />
    );
    //have to give Card a unique "Key" prop when we loop which does not change (index is not good here because if the array items get moved the index changes). React can uniquely identify each card if it needs to change the DOM
  })

  return (
    <div className="list w-90">
      {cardsArray}  {/*we could replace cardsArray directly with the code written above because it is just a js variable we declared. I leave it as is for readibility */}
    </div>
  );
}

export default CardList;