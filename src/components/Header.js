import React from 'react';

/*
function Header(){
    return <h1>This is header component</h1>
}
export default Header;
*/

/*
export const Header = ()=>{
    return <h1>Namaste Header</h1>
}
*/

export const Header = (props)=>{
    return(
        <div>
            <h1>Hello functional component, {props.name} {props.last}</h1>
            {props.children}
        </div>
    )
}



