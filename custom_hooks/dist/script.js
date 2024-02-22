const Counter = props => {
  const [counter, setCounter] = React.useState(props.counter);

  const incCounter = () => {
    if (counter < 50) {
      setCounter(counter => counter + 1);
    }
  };

  const decCounter = () => {
    if (counter > -50) {
      setCounter(counter => counter - 1);
    }
  };

  const rndCounter = () => {
    setCounter(+(Math.random() * (50 - -50) + -50).toFixed(0));
  };

  const resetCounter = () => {
    setCounter(props.counter);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "component" }, /*#__PURE__*/
    React.createElement("div", { className: "counter" }, counter), /*#__PURE__*/
    React.createElement("div", { className: "controls" }, /*#__PURE__*/
    React.createElement("button", { onClick: incCounter }, "INC"), /*#__PURE__*/
    React.createElement("button", { onClick: decCounter }, "DEC"), /*#__PURE__*/
    React.createElement("button", { onClick: rndCounter }, "RND"), /*#__PURE__*/
    React.createElement("button", { onClick: resetCounter }, "RESET"))));



};

const RndCounter = props => {
  const [counter, setCounter] = React.useState(props.counter);

  const rndCounter = () => {
    setCounter((Math.random() * (50 - -50) + -50).toFixed(0));
  };

  const resetCounter = () => {
    setCounter(props.counter);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "component" }, /*#__PURE__*/
    React.createElement("div", { className: "counter" }, counter), /*#__PURE__*/
    React.createElement("div", { className: "controls" }, /*#__PURE__*/
    React.createElement("button", { onClick: rndCounter }, "RND"), /*#__PURE__*/
    React.createElement("button", { onClick: resetCounter }, "RESET"))));



};

const App = () => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(Counter, { counter: 0 }), /*#__PURE__*/
    React.createElement(RndCounter, { counter: 5 })));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));