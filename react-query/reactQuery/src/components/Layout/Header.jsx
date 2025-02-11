import React from 'react'
import { NavLink } from 'react-router-dom'
export const Header = () => {
  return (
    <header>
        <div> 
            <ul>
                <li>
                    <NavLink to="/">ThapaReactQuery</NavLink>
                </li>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/trad">FetchOld</NavLink>
                </li>
                <li>
                    <NavLink to="/rq">FetchRQ</NavLink>
                </li>
            </ul>
        </div>
    </header>
  )
}
