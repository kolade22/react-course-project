// import { createContext } from 'react';
import { useEffect, useState } from 'react';
import './App.css';
// import FunctionalBasedComponents from './components/FunctionalBasedComponents';

//  export const Context = createContext('light');
// console.log(Context);

function App() {

  const [count, setCount] = useState(0)
  
  useEffect(()=> {
    setCount(60)
  }, [])

  return (
    // <Context.Provider value='#3f6ad8'>
    //   <div className="App">
    //   <FunctionalBasedComponents/>
    //   </div>
    // </Context.Provider>
    <div className="App">
    {/* <FunctionalBasedComponents/> */}
    <button type="" onClick={() => setCount((prevCount)=> prevCount + 1)}>+</button>
    <h1>{count}</h1>
    <button type="" onClick={()=> setCount((prevCount)=> prevCount - 1)}>-</button>
    </div>
  );
}

export default App;
