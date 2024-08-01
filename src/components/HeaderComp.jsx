import React from 'react'
import avatar from "../assets/images/avatar.png"
import { GithubOutlined, LinkedinOutlined, MessageOutlined } from '@ant-design/icons'
import { Button } from "antd";

const HeaderComp = () => {
    return (
        <header>
            <div className='left'>
                <img src={avatar} alt="user" />
                <div className="user-infos">
                    <h1>Anturia Hassani Mzé</h1>
                    <h3>Développeuse web - mobile</h3>
                    <div className="contacts">
                        <div className="contact-item">
                            <LinkedinOutlined />
                        </div>
                        <div className="contact-item">
                            <GithubOutlined />
                        </div>
                    </div>
                </div>
            </div>
            <div className='right'>
                <Button className="contact-btn" icon={<MessageOutlined />}>
                    Contactez-moi
                </Button>
            </div>
        </header>
    )
}

export default HeaderComp


