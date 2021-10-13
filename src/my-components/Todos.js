import React from 'react';
import {Todoitems } from './Todoitems';

export const Todos = (props) =>{
  const mystyle = {
    minHeight: '70vh', 
    margin: '30px auto',
    background:"#faf4de"
  }
  console.log(props.todos + "from todos .js")
  return ( 
    <div className="container" style = {mystyle}>
        <h1  className='text-center my-3'> This is your todos list</h1>
        {props.todos.length===0 ? "No todos left" : 
      props.todos.map((todo)=>{
         
   return  (  <Todoitems todo ={todo}  key= {todo.sno} onDelete={props.onDelete}/>      )
      
        
                   
           
         
          
      })
       }
    </div>
  )
  } 