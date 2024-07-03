import React, {useEffect, useState} from 'react';
import './Assets/CSS/NavigationBar.scss';
import { connect } from 'react-redux';
import logo from './Assets/Images/DeBees.png';
import navbar from '../src/Components/Data/navbar.js';
import Menu from '@mui/icons-material/DragHandle';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';
import { userData } from './Components/Data/dummyData';
import { Logout } from './Redux/Actions/auth';
import User from './Components/RouteComp/User';





const navLinkLeft = navbar.slice(0, 3);
const navLinkRight = navbar.slice(-1);

function NavigatioinBar({Logout, isAuthenticated, user}) {
    const navigate = useNavigate()
    const [isauth, setIsAuth] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleLink = (link) => {
        if(link.url){
            navigate(link.url)
            setIsOpen(false)
        }
    }

    useEffect(() => {
        if(isAuthenticated){
            setIsAuth(true)
        }else{
            setIsAuth(false)
        }
    },[isAuthenticated])
  return (
    <nav>
        <div className='left'>
           <Link to='/'> <span className='logo'><img src={logo}  /> <strong>DeBees R-Estate</strong> </span></Link> 
            {
                navLinkLeft.map((links, index) => {
                    return(
                        <span key={index}> <Link to={links.url}>{links.navLink}</Link> </span>
                    )
                })
            }
        </div>
        <div className='right'>
            {
                isauth ? (

                    <User datas={userData} isAuthenticated={isAuthenticated} user={user} />
                ):
                <>
            {
                navLinkRight.map((links, index) => {
                    return(
                    <>
                        <span><Link to={links.url}>{links.navLink}</Link></span>
                        <span className='sign_up'><Link to='sign-up'>Sign Up</Link></span>
                    </> 
                    )
                })
            }
                </>
            }
       

        <div className='menuIcon' onClick={handleIsOpen}><IconButton size='medium' color='warning'><Menu /></IconButton> </div>
            <div className={isOpen ? "menu active": "menu"}>
                <span className='exit'><IconButton variant="outlined" onClick={handleClose} color="warning"><CloseIcon /></IconButton></span>
                <div className='nav_links'>
                {
                    navbar.map((links, index) => {
                        return(
                            
                                <span onClick={() => handleLink(links)}>
                                    {links.navLink} 
                                </span>  
                           
                        )
                    })
                }
                </div>
            </div>
            <div onClick={handleClose} className={isOpen ? 'clickoutside inactive' : 'clickoutside'}></div> 
        </div>

       
    </nav>
  )
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
})
export default connect(mapStateToProps, {Logout})(NavigatioinBar)