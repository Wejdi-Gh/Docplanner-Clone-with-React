import React from 'react';
import docplannerlogo from './docplannerlogo.png'

function Header () {
return (<nav className="navbar docplannernavbar navbar-expand-lg navbar-light ">
  <img className= "docplannerlogo" src={docplannerlogo} />

 
    <ul className="navbar-nav ">
    <li className="nav-item">
        <a className="nav-link" href="#">About US</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Career</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        departments 
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Marketing & PR </a>
          <a className="dropdown-item" href="#">Customer Success & Sales</a>
          <a className="dropdown-item" href="#">Finance & Administration</a>
          <a className="dropdown-item" href="#">HR & more </a>
        </div>
      </li>
    </ul>
  
</nav>);
}
 export default Header
