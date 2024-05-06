import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import NavigatioinBar from '../NavigatioinBar'
import { checkAuthentiated } from '../Redux/Actions/auth'


const Layout = (props) => {
  useEffect(() => {
    props.checkAuthentiated()
  },[])

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

export default connect(null, {checkAuthentiated})(Layout);