import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"


export default function Header(Props) {
    return (
        <> 
          
        {/* nav bar  */} 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div  className="container-fluid">
    <Link  className="navbar-brand" to="/">{Props.title}</Link>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
        <li  className="nav-item">
          <Link  className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li  className="nav-item">
          <Link  className="nav-link" to="/about">About</Link>
        </li>
       
      </ul>
     {Props.searchBar === true ?       <form  className="d-flex">
                <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button  className="btn btn-outline-success" type="submit">Search</button>
            </form> : "no search bar "}
    </div>
  </div>
</nav>
    </>
    )
}
Header.defaultProps = {      //setting default values which will pass when not given
    title:"your title here",
    searchBar:true
}

Header.propTypes = {
    title:PropTypes.string, //telling react that header will only be string
    searchBar:PropTypes.bool.isRequired  //telling react that search bar will only be boolean and it is compasary required 

}