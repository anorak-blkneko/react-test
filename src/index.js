import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Welcome extends React.Component {
  render() {
    return (
      <h1>
        Oi, <span id="usuario">{this.props.nome}</span>
      </h1>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      data: new Date(),
    });
  }

  render() {
    var day = this.state.data.getDay();
    var dayString;
    switch (day) {
      case 1:
        dayString = "Segunda";
        break;
      case 2:
        dayString = "Terça";
        break;
      case 3:
        dayString = "Quarta";
        break;
      case 4:
        dayString = "Quinta";
        break;
      case 5:
        dayString = "Sexta";
        break;
      case 6:
        dayString = "Sábado";
        break;
      default:
        dayString = "Domingo";
        break;
    }

    return (
      <div>
        <h2 id="hora">{this.state.data.toLocaleTimeString()}</h2>
        <h2 id="data">
          {dayString + ", " + this.state.data.toLocaleDateString()}
        </h2>
      </div>
    );
  }
}

ReactDOM.render(<Welcome nome={"Renan"} />, document.getElementById("welcome"));

ReactDOM.render(<Clock />, document.getElementById("clock"));
