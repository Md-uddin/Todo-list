
import React, {useState} from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");


  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) { 
      alert("Title and description cannot be empty")
    }else{
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  } 
  

  return (
    <div className="container my-3">
      <h3>Add a Task!</h3>  
      <form  onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
           Title
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="for-label" >
           Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={desc}
            onChange={(e)=> setDesc(e.target.value)}
          />
        </div>
    
        <button type="submit" className="btn btn-success"  >
         add todos
        </button>
      </form>
    </div>
  );
};
