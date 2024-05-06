import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { Navigate, Outlet} from 'react-router-dom';
import { useLocation } from 'react-router';
import Login from './Login';
import auth from '../../Redux/Reducers/auth';


const ProtectedRoute = ({auth, isAuthenticated}) => {
    const locations = useLocation()
    localStorage.setItem('path', locations.pathname)


    console.log("Hello from here ", )

    useEffect(() => {
        if(isAuthenticated && localStorage.getItem('path')){
            localStorage.removeItem('path')
        }
    },[isAuthenticated])
    
    return isAuthenticated ? <Outlet /> : <Navigate to='/sign-in' replace={true} state={{ from : localStorage.getItem('path')}} />
}

const mapStateToProps = state => ({
    isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps, {auth})(ProtectedRoute);