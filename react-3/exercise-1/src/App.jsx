import React, { useState } from 'react';

function App() {
  const [change , setchange] = useState();
    // adding state here.

  // const handleClick = (value) => {
    // code here.
  // };

  return (
    <div>
      <button onClick={() => setchange('Fullname')}>Fullname</button>
      <button onClick={() => setchange('Age')}>Age</button>
      <button onClick={() => setchange('Picture')}>Picture</button>
      <DisplayInfo change={change} />
    </div>
  );
}

function DisplayInfo({change}) {

  let go = change;
  if (go === 'Fullname') {
    go = <h2>John Doe</h2>;
  } else if (go === 'Age') {
    go = <h2>30</h2>;
  } else if (go === 'Picture') {
    go = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  } else {
    go = <p>Please select an option.</p>;
  }

  return (
    <div>
      {go}
    </div>
  );
}

export default App;