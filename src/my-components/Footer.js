import React from 'react';
// import './sylefooter.css'
export const Footer =() => {
    let footerStyle={
        // position:'relative',
        // top:'70vh',
        width:'100%',
        border:'1px solid green'
    }
    return (
        <footer className = "bg-dark text-light py-4" style={footerStyle}>
            <p className= "text-center">
                copyright &copy; MyTodolist.com
            </p>

        </footer>
    ) 
}