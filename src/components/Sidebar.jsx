import React from 'react'
import { useGlobalContext } from './Context'
import sublinks from './data'
import {AiOutlineClose} from 'react-icons/ai'


export default function Sidebar() {
    const {isSidebar,handleSidebar}=useGlobalContext();
  return (
    <aside className={`${!isSidebar ? 'show-sidebar':''} md:hidden sidebar-wrapper`}>
        <div className="close-btn">
            <button onClick={handleSidebar}><AiOutlineClose/></button>
        </div>
        <div className="sidebar-links">
        {sublinks.map((index,item)=>{
            const {page,links}=item;
            return(
                <article key={`${index}${page}`}>
                <h2>{page}</h2>
                </article>
            )
        })}
        </div>
    </aside>
  )
}
