import React, { useState } from "react";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState(30);

  return (
    <div id="app">
      <Header tempContent={temperature} />
      <Content tempContent={temperature} />
      <Footer setTemperature={setTemperature} temperature={temperature} />
    </div>
  );
}

function Header({ tempContent }) {
  return (
    <header>
      <span>Turn on / off</span>
      <p>Current Temperature: {tempContent} °C</p>
    </header>
  );
}

function Content({ tempContent }) {
  return (
    <div>
      <Temperature tempTemperature={tempContent} />
    </div>
  );
}

function Temperature({ tempTemperature }) {
  return (
    <div id="temperature">
      <span>{tempTemperature} °C</span>
    </div>
  );
}

function Footer({ setTemperature, temperature }) {
  return (
    <footer>
      <button onClick={() => setTemperature(temperature + 1)}>Up</button>
      <button onClick={() => setTemperature(temperature - 1)}>Down</button>
    </footer>
  );
}

export default App;
