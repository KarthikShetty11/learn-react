import React from 'react';

class Channel extends React.Component
{
  constructor(){
    super(); 
    this.state={
        message:'this is a brand new channel' 
    } 
  } 
    
  subscribe(){
      this.setState({message:'thanks for subscribing our channel'})
  }
render(){
          return( <div>
                  <h2>{this.state.message}</h2>
                  <button onClick={()=>{this.subscribe()}}>Subscribe</button>
                  </div>
                 )
        }
}

export default Channel;