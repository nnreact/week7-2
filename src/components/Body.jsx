// Approach 1

// import React, { useState } from 'react'

// function Body() {

//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   }
//   const handleDecrement = () => {
//     if(count !== 0){
//       setCount(count - 1);
//     }
//   }

//   return (
//     <div className='body'>

//       <div className="counter">{count}</div>

//       <div className='btn-cont'>
//         <button onClick={handleIncrement} >Increment</button>
//         <button onClick={handleDecrement}>Decrement</button>
//       </div>

//     </div>
//   )
// }

// export default Body


// Approach 2

// import React, { useState } from 'react'

// function Body() {

//   const [count, setCount] = useState(0);

//   const handleChanges = (type) => {
//     // if (type === "increment") {
//     //   setCount(count + 1);
//     // } else {
//     //   if (count !== 0) {
//     //     setCount(count - 1);
//     //   }
//     // }

//     type === "increment" ? setCount(count + 1) : (count !== 0) ? setCount(count - 1) : "";

//   }

//   return (
//     <div className='body'>

//       <div className="counter">{count}</div>

//       <div className='btn-cont'>
//         <button onClick={() => { handleChanges("increment") }} >Increment</button>
//         <button onClick={() => { handleChanges("decrement") }}>Decrement</button>
//       </div>

//     </div>
//   )
// }

// export default Body



// Approach 3


import Button from "./Button";

function Body({count,handleChanges}) {



  return (
    <div className='body'>

      <div className="counter">{count}</div>

      <div className='btn-cont'>
        {/* <button onClick={() => { handleChanges("increment") }} >Increment</button>
        <button onClick={() => { handleChanges("decrement") }}>Decrement</button> */}

          <Button type="increment" handleChanges={handleChanges} text="+"/>
          <Button type="decrement" handleChanges={handleChanges} text="-"/>

      </div>

    </div>
  )
}

export default Body
