import React from 'react'



function Button({text,handleChanges,type}) {
    
    return (
        <button onClick={()=>{handleChanges(type)}}>{text}</button>
    )
}
export default Button



// Approach 2
// export default Button

// function Button({text}) {

//     return (
//         <button>{text}</button>

//     )
// }

// export default Button
