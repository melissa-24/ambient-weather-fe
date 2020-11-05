import React, { useState } from 'react'

import NavOptions from './NavOptions'

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <nav>
            <button className='nav-button' onClick={handleToggle}>Family Weather Menu</button>
            {toggleMenu ? <NavOptions handleToggle={handleToggle} /> : ''}
        </nav>
    )
}

export default NavBar