import React from "react";

import NavListData from "../data/NavListData";
import NavListItem from "../components/NavListItem";

import './header.css'
import Search from "../components/Search";
import Button from "../components/Button";
const Header=()=>{
    return <header>

        <a href="/" className="logo">Cinema</a>

        <nav>
            <ul>
             {NavListData.map(item => <NavListItem key={item._id} name={item.name} link={item.link}/>)}         
            </ul>
        </nav>

        <Search/>

        <Button icon={<ion-icon name="log-in-outline" ></ion-icon>} name="Sign In"/>
    </header>
}

export default Header