import React from "react";
import 'antd/dist/antd.css';
import './Header.css';
import NavBar from "../NavBar/NavBar";
import { CheckSquareOutlined } from '@ant-design/icons'
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import CustomLink from "../../conponents/CustomLink/CustomLink";

function Header(){
    return(
        <div className="header">
            <div className="header-start">
                <CheckSquareOutlined/>
                <p className="logo-title">ProductManager</p>
            </div>
            <div className="header-end">
                <NavBar/>
                <Button className="family-btn" type="primary" ><CustomLink to="/family">Family</CustomLink></Button>
                <Button className="profile-btn" type="primary" shape="circle" icon={<UserOutlined />} />
            </div>
        </div>
    );
}

export default Header;