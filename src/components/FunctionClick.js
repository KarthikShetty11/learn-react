import React from 'react';

function FunctionClick(){
    function changeEvent(){
        console.log("Yeas, you have clicked");
    }
    return(
        <div>
          <button onClick={changeEvent}>Click Me</button>
        </div>
    )
}

export default FunctionClick;