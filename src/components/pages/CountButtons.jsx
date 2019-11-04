import React, { useState } from "react";

export default () => {
  // set of buttons' titles
  const buttons = ["btn1", "btn2"];
  // initial state using buttons' titles
  const initState = buttons.reduce((state, btn) => {
    return { ...state, [btn]: 0 };
  }, {});
  // state for buttons' counters
  const [state, setState] = useState(initState);

  const handleClick = event => {
    event.stopPropagation();
    const { id } = event.target;
    setState({ ...state, [id]: state[id] + 1 });
  };

  const handleReset = () => setState(initState);

  return (
    <div id="counter-buttons-page">
      {buttons.map(btn => (
        <section key={btn}>
          <p>{state[btn]}</p>
          <button type="button" id={btn} onClick={handleClick}>
            {btn}
          </button>
        </section>
      ))}
      <section>
        <p>-</p>
        <button type="button" onClick={handleReset}>
          reset counts
        </button>
      </section>
    </div>
  );
};
