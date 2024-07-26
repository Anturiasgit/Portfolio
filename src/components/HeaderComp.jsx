import React from 'react'
import avatar from "../assets/images/avatar.png"

const HeaderComp = () => {
    return (
        <header>
            <div className='left'>
                <img src={avatar} alt="" />
            </div>
            <div className='right'>
            </div>
        </header>
    )
}

export default HeaderComp