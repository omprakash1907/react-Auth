import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const navigate = useNavigate();
    const { Component } = props;
    useEffect(() => {
        const loginFlag = JSON.parse(localStorage.getItem("loginFlag"))
        console.log(loginFlag);
        if(!loginFlag) navigate('/login');
    })
    return (
        <div>
            <Component />
        </div>
    )
}

export default ProtectedRoute
