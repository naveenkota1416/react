
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';




 


function Navbar() {
  return (
    <div className='nav'>
        <ul>  
                   <li>COMPANY</li>
           <Link to='/'><li>Growth</li></Link>
           <Link to='/about'><li>INCOME</li></Link>
           <Link to='/services'><li>PRODUCTS</li></Link>
           <Link to='/contact'><li>CONNECTIVTY</li></Link>
        </ul>
    </div>
  )
}

export default Navbar