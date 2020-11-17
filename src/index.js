import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

var usuario = "Renan";

function tick() {
  const element = (
    <div>
      <h1>Oi, <span id='user'>{usuario}</span>!</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  );

  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);
