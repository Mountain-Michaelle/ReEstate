import React, {useState} from 'react';
import './Assets/CSS/NavigationBar.scss';
import logo from './Assets/Images/DeBees.png';
import navbar from '../src/Components/Data/navbar.js';
import Menu from '@mui/icons-material/DragHandle';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { userData } from './Components/Data/dummyData';
import User from './Components/RouteComp/User';





const navLinkLeft = navbar.slice(0, 3);
const navLinkRight = navbar.slice(-1);

const user = true;

function NavigatioinBar() {

    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }
  return (
    <nav>
        <div className='left'>
           <Link to='/'> <span className='logo'><img src={logo}  /> <strong>DeBees R-Estate</strong> </span></Link> 
            {
                navLinkLeft.map((links, index) => {
                    return(
                        <span key={index}>{links.navLink}</span>
                    )
                })
            }
        </div>
        <div className='right'>
            {
                user ? (

                    <User datas={userData} />
                ):
                <>
            {
                navLinkRight.map((links, index) => {
                    return(
                    <>
                        <span>{links.navLink}</span>
                        <span className='sign_up'>Sign Up</span>
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
                            
                                <span>
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

export default NavigatioinBar