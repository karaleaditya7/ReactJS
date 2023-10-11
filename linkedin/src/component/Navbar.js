import React from 'react'
import { Grid } from '@mui/material'
import logo from "../images/logo.png"
import search from "../images/search.png"
import message from "../images/message.png"
import profile from "../images/profile.png"
import home from "../images/home.png"
import network from "../images/network.png"


const Navbar = () => {
  return (
    <div style={{padding:"10px",borderBottom:"1px solid #C9C7C4"}}>
      <Grid container>
            <Grid item xs={6}>
            <img style={{width:"55px",marginLeft:"80px"}} src={logo} alt="for main page" />
            <img style={{width:"45px",marginLeft:"20px"}} src={search} alt="for searchingx" />
            </Grid>
            <Grid item xs={6}>
            <img style={{width:"45px",marginLeft:"20px"}} src={home} alt="diff option" />
            <img style={{width:"35px",marginLeft:"20px"}} src={message} alt="for messaging option" />
            <img style={{width:"45px",marginLeft:"20px"}} src={profile} alt="for profileing option" />
            <img style={{width:"45px",marginLeft:"20px"}} src={network} alt="for profileing option" />
            </Grid>

      </Grid>
    </div>
  )
}

export default Navbar
