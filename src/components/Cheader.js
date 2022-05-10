import React from 'react';

class Cheader extends React.Component{
render(){
    return (<div>
            <h1>Hello class component, {this.props.name} {this.props.last}</h1>
            {this.props.child}
            </div>
           )
}
}

export default Cheader;