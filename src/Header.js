import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="nav">
            <NavLink to="pomodoro">Pomodoro</NavLink>
            <NavLink to="shortBreak">Short Break</NavLink>
            <NavLink to="longBreak">Long Break</NavLink>
        </nav>
    )
}

export default Header
