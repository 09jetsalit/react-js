import "./App.css";

function App() {
  const members1 = [
    {
      name: "Mock J",
      age: 99,
      weight: 66,
      running: 40,
      status: "Balance",
    },
    {
      name: "Mean Mock",
      age: 55,
      weight: 64,
      running: 70,
      status: "Extreme",
    },
    {
      name: "Mock J",
      age: 2,
      weight: 8,
      running: 12,
      status: "Good",
    },
  ];
  const members2 = [
    {
      name: "Mock J",
      age: 99,
      weight: 66,
      running: 40,
      status: "Balance",
    },
    {
      name: "Mean Mock",
      age: 55,
      weight: 64,
      running: 70,
      status: "Extreme",
    },
    {
      name: "Mock J",
      age: 2,
      weight: 8,
      running: 12,
      status: "Good",
    },
  ];

  const allmembers = [...members1 , ...members2]

  return (
    <div id="app">
      <h1>Enter Data</h1>
      <RunningForm />
      <TableDisplay data={allmembers} />
    </div>
  );
}

const RunningForm = () => {
  return (
    <form id="data-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <br />
      <br />

      <label htmlFor="age">Age:</label>
      <input type="number" id="age" name="age" />
      <br />
      <br />

      <label htmlFor="weight">Weight:</label>
      <input type="number" id="weight" name="weight" />
      <br />
      <br />

      <label htmlFor="running">Current Running (Minutes):</label>
      <input type="number" id="running" name="running" />
      <br />
      <br />

      <button type="button">Add Data</button>
    </form>
  );
};

const TableDisplay = ({data}) => {
  return (
    <>
      <h1>Entered Data</h1>
      <table id="data-table" border="1" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Weight</th>
            <th>Current Running (Minutes)</th>
            <th>Good Running</th>
          </tr>
        </thead>
        <TableBody tablebodydata = {data} />
      </table>
    </>
  );
};

// const TableBody = ({tablebodydata}) => {
//   {tablebodydata.map((todo , index) => {
//     return (
//       <tr key = {index}>
//         <td>{todo.name}</td>
//         <td>{todo.age}</td>
//         <td>{todo.weight}</td>
//         <td>{todo.running}</td>
//         <td>{todo.status}</td>
//       </tr> 
//     )})}
//  }

 const TableBody = ({ tablebodydata }) => {
  return (
    <tbody>
      {tablebodydata.map((todo, index) => (
        <tr key={index}>
          <td>{todo.name}</td>
          <td>{todo.age}</td>
          <td>{todo.weight}</td>
          <td>{todo.running}</td>
          <td>{todo.status}</td>
        </tr>
      ))}
    </tbody>
  );
};


  
    
 



// const TableBody = ({ tablebodydata }) => {
//   return (
//     <tbody>
//       {tablebodydata.data.map((todo, index) => (
//         <tr key={index}>
//           <td>{todo.name}</td>
//           <td>{todo.age}</td>
//           <td>{todo.weight}</td>
//           <td>{todo.running}</td>
//           <td>{todo.status}</td>
//         </tr>
//       ))}
//     </tbody>
//   );
// };


export default App;
