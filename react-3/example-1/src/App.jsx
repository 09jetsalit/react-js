import { useState } from 'react'

const App = () => {
    const [counter,setcounter] = useState(0);
    
    return (
        <div>
            <h3>People is coming from the gate. Please count.</h3>
            <span>{counter}</span>
            &nbsp;
            <button onClick={() => setcounter(counter+1)}>count</button>
            <button onClick={() => setcounter(counter-1)}>decrease</button>
        </div>
    )
}

export default App

