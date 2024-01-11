import React from "react";
import "./App.css";

function App() {
  return (
    <div id="app">
      <h1>Enter Data</h1>
      <RunningForm />
      <TableDisplay />
    </div>
  );
}

const RunningForm = () => {
  return (
    <>
      <form id="data-form">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <br />

        <label for="age">Age:</label>
        <input type="number" id="age" name="age" />
        <br />
        <br />

        <label for="weight">Weight:</label>
        <input type="number" id="weight" name="weight" />
        <br />
        <br />

        <label for="running">Current Running (Minutes):</label>
        <input type="number" id="running" name="running" />
        <br />
        <br />

        <button type="button" onClick="addData()">
          Add Data
        </button>
      </form>
    </>
  );
};

const TableDisplay = () => {
  let datarender = [
    { name: "erfre", age: "66", weight: "70", running: "30", status: "good" },
    { name: "dfe", age: "55", weight: "44", running: "33", status: "good" },
  ];
  return (
    <>
      <h1>Entered Data</h1>
      <table id="data-table" border="1" width="100%">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Weight</th>
          <th>Current Running (Minutes)</th>
          <th>Good Running</th>
        </tr>
        <tbody>
          {datarender.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.weight}</td>
              <td>{data.running}</td>
              <td>{data.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
