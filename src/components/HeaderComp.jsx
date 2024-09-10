import React from 'react'
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

const HeaderComp = () => {
    return (
        <header>
            <div className='init'>
                    <h1>Anturia Hassani Mzé</h1>
                    <h3>Aspirante Développeuse Full Stack</h3>
                    <div className="links">
                        <div className="link-item">
                            <LinkedinOutlined />
                        </div>
                        <div className="link-item">
                            <GithubOutlined />
                        </div>
                    </div>
            </div>

            

        </header>
    )
}

export default HeaderComp


