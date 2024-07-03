import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import NavigatioinBar from '../NavigatioinBar'
import { checkAuthentiated } from '../Redux/Actions/auth'


const Layout = (props) => {
  useEffect(() => {
    props.checkAuthentiated()
  },[props.isAuthentication])

  return (
    <div className='Layout'>
        <NavigatioinBar />
        <div className='content'>
          {
              props.children
          }
        </div>
    </div>
  )
}
const mapStateToProps = state => ({
  isAuthentication: state.auth.isAuthentication
})
export default connect(mapStateToProps, {checkAuthentiated})(Layout);