import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Welcome(propriedade) {
  return (
    <h1>
      Oi, <span id="usuario">{propriedade.nome}</span>
    </h1>
  );
}
const element_welcome = <Welcome nome="Renan" />;
ReactDOM.render(element_welcome, document.getElementById("welcome"));

function tick() {
  const element_clock = (
    <div>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element_clock, document.getElementById("time"));
}

setInterval(tick, 1000);
