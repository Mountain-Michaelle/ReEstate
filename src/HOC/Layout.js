import React from 'react'
import NavigatioinBar from '../NavigatioinBar'

const Layout = (props) => {
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

export default Layout