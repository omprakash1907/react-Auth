import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const UserProtected = () => {
    const navigate = useNavigate();
    const { Component } = props;
    useEffect(() => {
        const loginFlag = JSON.parse(localStorage.getItem("loginFlag"))
        if(loginFlag) navigate('/error');
    })
    return (
        <div>
            <Component />
        </div>
    )
}

export default UserProtected
