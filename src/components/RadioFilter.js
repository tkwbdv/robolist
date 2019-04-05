import React from "react";

const RadioFilter = ({ changeRadio }) => {
  return (
    <div className="flex radio">
      <label>
        <input className="ma2" type="radio" name="filter" value="all" onClick={changeRadio} defaultChecked />
        All Tasks
    </label>
      <label>
        <input className="ma2" type="radio" name="filter" value="done" onClick={changeRadio} />
        Done
    </label>
      <label>
        <input className="ma2" type="radio" name="filter" value="todo" onClick={changeRadio} />
        Open
    </label>
    </div>
  )
}

export default RadioFilter;