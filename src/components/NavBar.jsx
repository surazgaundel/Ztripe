import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import sublinks from './data'
import { useGlobalContext } from './Context'
import {GiHamburgerMenu} from 'react-icons/gi';


export default function NavBar() {

  const {handleSidebar}=useGlobalContext();
  return (
    <nav>
      <div className='w-[90%] flex justify-around m-1 p-1 items-center'>
        <div className="nav-logo">
            <h1><span id='logo'>z</span>tripe</h1>
        </div>
        <div className="nav-links">
        {sublinks.map((link,index)=>{
            const {page,links}=link;
            return(
                <NavLink key={index} to={`/${page}`}>
                <span>{page}</span>
                </NavLink>
            )
          })}
        </div>
          <button className="md:hidden" onClick={handleSidebar}><GiHamburgerMenu/></button>
    </div>
    <Outlet/>
    </nav>
  )
}
