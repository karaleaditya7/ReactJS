import React from 'react'
import { Grid } from '@mui/material'
import Sidebar from './Sidebar'
import Middle from './Middle'
import RightBar from './Rightbar'

const Home = () => {
  return (
    <div style={{backgroundColor:"#E8E8E8", height:"100vh", padding:"50px"}}>
        <Grid container spacing={4}>
            <Grid item xs={3}>
                <Sidebar/>
            </Grid>
            <Grid item xs={6}>
                <Middle/>
            </Grid>
            <Grid item xs={3}>
                <RightBar/>
            </Grid>
        </Grid>
    </div>
  )
}

export default Home
