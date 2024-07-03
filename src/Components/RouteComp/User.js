import React from 'react'
import { connect } from 'react-redux';
import '../../Assets/CSS/User.scss';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link, useNavigate} from 'react-router-dom';
import { Logout } from '../../Redux/Actions/auth';
const isImage = false


function User({datas, Logout,  isAuthenticated, logout, user}) {

  const navigate = useNavigate()

  const handleLogout = () => {
    
    const response = window.confirm("Are you sure you want to logout?")

      if(response){
         Logout()
        navigate('/sign-in')
      }
    else{
        navigate('')
    }
}
const email = JSON.stringify(user?.email)?.substring(2, 10)
  return (
    <div className='user_container'>
        {
            isImage ? <img src={datas.img} alt='' />
            :
            <div className='first_word'>{user?.name ? user?.name.slice(0, 1) : ''}</div>
        }
        
        <span className='name' style={{textTransform:'lowercase'}}>{user?.email ? email : ''}...</span>

        <div className='profile' >
            <Link className='span' to='/user' style={{margin: '0.5rem'}}>
                 <Button variant="text" color="primary" size='small'><Typography variant="text" color="initial">Profile</Typography> </Button>
            </Link>

            <span style={{margin: '0.5rem'}}>
                 <Button onClick={handleLogout} variant="text" color="primary" size='small'><Typography variant="text" color="initial">Logout</Typography> </Button>
            </span>
        </div>
    </div>
  )
}
export default connect(null, {Logout})(User)