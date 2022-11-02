import React from "react";
import { useReducer } from "react";
// import { useContext } from "react";
// import { Context } from "../App";

const intialState = {
  flag : false
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_BUTTON':
      console.log(state, action);
      return {
        ...state,
        flag : !state.flag
      };
  
    default:
     return state;
  }
}

function Functionalbasedcomponents() {

  const [state, dispatch] = useReducer(reducer, intialState)
  console.log(state);
  // const getValueContext = useContext(Context)
  // console.log(getValueContext);

  // const [count, setCount] = useState(0)
  // const [flag, setFlag] = useState(false)
  

  // console.log(count);

  // const countClick = () => {
  //   setCount(count + 3)
  // }

  // useEffect(()=> {
  //   console.log("Effect is Up");
  // },[])

  // useEffect(()=> {
  //   if(count === 12) {
  //     setFlag(true)
  //   }
  // },[count])

  //   useEffect(()=> {
  //     return ()=> {
  //       console.log('MEEK MILL TRASH');
  //     }
  //   })

  return (
    <div>
      {/* <button onClick={countClick}>Click</button>
      Your Counter Value is {count}
      {
        flag && <p>FREE YSL!!!</p>
      } */}
      {/* <button style={{backgroundColor : getValueContext }}>Don't Click</button> */}
      <button onClick={()=> dispatch({type : 'TOGGLE_BUTTON'})}>Toggle </button>
    </div>
  );
}

export default Functionalbasedcomponents;