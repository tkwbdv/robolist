import React from "react";

const RadioFilter = ({ changeRadio }) => {
  return (
    <div className="flex radio">
      <label>
        <input className="ma1" type="radio" name="filter" value="all" onClick={changeRadio} defaultChecked />
        all
    </label>
      <label>
        <input className="ma1" type="radio" name="filter" value="done" onClick={changeRadio} />
        done
    </label>
      <label>
        <input className="ma1" type="radio" name="filter" value="todo" onClick={changeRadio} />
        todo
    </label>
    </div>
  )
}

export default RadioFilter;