import React from 'react'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAddTask }) => {

    const location = useLocation()
    return (

        <header className="header">
            {/* <h1 style={headerStyle}>{title}</h1> */}
            <h1>{title}</h1>
            {location.pathname === '/'
                && <Button color={showAddTask ? 'red' : 'green'}
                    text={showAddTask ? 'Close' : 'Open'}
                    onClick={onAdd} />}
        </header>

    )
}

Header.defaultProps = {
    title: 'Task Manager',
}

// ========== CSS in JS ===================
// const headerStyle = {
//     color:'red'
// }

// const Header = (props) => {
//     return (
//         <header>
//             <h1>{props.title}</h1>
//             <p>{props.title2}</p>
//         </header>
//     )
// }

// Header.defaultProps = {
//     title : 'Task Manager',
//     title2 : 'Add more'
// }

export default Header
