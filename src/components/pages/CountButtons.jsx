import React from "react";

export default () => {
  // set of buttons' titles
  const buttons = ["btn1", "btn2"];
  // initial state using buttons' titles
  const initState = buttons.reduce((state, btn) => {
    state[btn] = 0;
    return state;
  }, {});
  // state for buttons' counters
  const [state, setState] = React.useState(initState);

  const handleClick = event => {
    event.stopPropagation();
    const { id } = event.target;
    setState({ ...state, [id]: state[id] + 1 });
  };

  const handleReset = () => setState(initState);

  return (
    <div id="counter-buttons-page">
      {buttons.map(btn => (
        <section>
          <p>{state[btn]}</p>
          <button id={btn} onClick={handleClick}>
            {btn}
          </button>
        </section>
      ))}
      <section>
        <p>-</p>
        <button onClick={handleReset}>reset counts</button>
      </section>
    </div>
  );
};
