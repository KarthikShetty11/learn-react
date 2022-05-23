import React from 'react';

class CFucntionClick extends React.Component{
    
    changeEvent(){
        console.log("ha, even this has been clicked")
    }

    render()
    {
    return(
        <div>
            <button onClick={this.changeEvent}>Click here</button>
        </div>
    )
    }
}

export default CFucntionClick;