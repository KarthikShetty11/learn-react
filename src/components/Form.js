import React, {Component} from 'react'

class Form extends Component{

    constructor(){
        super();
        this.state={
        username:'',
        useraddress:''
          }
        }
        
      handleUsername=(event)=>{
          this.setState=({
              username:event.target.value
          });
      }

      handleUseraddress=(event)=>{
        this.setState=({
            useraddress:event.target.value
        });
    }
    
    
    handleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.useraddress}`);
        event.preventDefault();
     }


    render(){
    return(
    <form onSubmit={this.handleSubmit}>
      <div>
      <lable>User Name</lable>
      <input type="text" value={this.state.username} onChange={this.handleUsername}></input>  
      </div>
      <div>
      <lable>Address</lable>
      <textarea value={this.state.useraddress} onChange={this.handleUseraddress}></textarea>  
      </div>
      <button>Submit</button>
    </form>
    )
   }
}
export default Form;
