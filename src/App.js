import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header';
import Cheader from './components/Cheader';
import Channel from './components/Channel';
import FunctionClick from './components/FunctionClick';
import CFucntionClick from './components/CFuntionClick';

function App(){
  return(
         <div>
           <Header name="Karthik" last="Shetty"/>
           <p>Hi There, im functional components child</p>
           <Cheader name="Karthik" last="Shetty"/>
           <p>Hi There, im Class components child</p>
           <Channel />
           <FunctionClick/>
           <CFucntionClick/>
         </div> 
        );
}




//FUNCTIONAL COMPONENET
/*
const name = <span>Heyyaa</span>
const newelement = React.createElement("h1",{className:"newelement"},"im h1 tag");

const test = ()=>{
  alert("Welcome to the app")
}

const age = (a)=>{
  if(a>18)
  {
    return <span>You are eligible</span>
  }
  else{
    return <span>Your are not eligible</span>
  }
}

function App() {
  return (
    <div className="App">
         {newelement}
        <button onClick={test}>Click for surprise</button>
        <br/>
        {age(24)}
        <br/>
        <a className="App-link"
           href="https://karthikvshetty.netlify.app/"
           target="_blank"
           rel="noopener noreferrer">{name} visit my site</a>
     
    </div>
  );
}
*/

//CLASS COMPONENET
/*
class App extends React.Component{
render(){
  return <h1>Helloo!!</h1>
  }
}
*/

export default App;
