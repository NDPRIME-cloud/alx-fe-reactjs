
import React from 'react'

const fakeAuth ={
  isAuthenicated : false,
  login(cb){
    this.isAuthenicated =true
    setTimeout (cb, 100)


  },
  logout(cb){
    this.isAuthenicated = false
    setTimeout(cb, 100)
  }
}

export default fakeAuth