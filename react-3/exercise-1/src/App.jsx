import React, { useState } from 'react';

function App() {
    // adding state here.
    const [change , setChange] = useState()

  // const handleClick = (value) => {
  //   // code here.
    
  // };

  return (
    <div>
      <button onClick={() => setChange('Fullname')}>Fullname</button>
      <button>Age</button>
      <button>Picture</button>
      <DisplayInfo change={change} />
    </div>
  );
}

function DisplayInfo({change}) {

  let returnHTML;
  if (change === 'Fullname') {
    returnHTML = <h2>John Doe</h2>;
  } else if (change === 'Age') {
    returnHTML = <h2>30</h2>;
  } else if (change === 'Picture') {
    returnHTML = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  } else {
    returnHTML = <p>Please select an option.</p>;
  }

  return (
    <div>
      {returnHTML}
    </div>
  );
}

export default App;
