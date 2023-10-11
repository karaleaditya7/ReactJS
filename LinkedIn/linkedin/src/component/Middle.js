import React from 'react'
import profile from '../images/profile.png'
import { Card, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import image from "../images/image.png"
import video from "../images/video.png"
import article from "../images/article.png"
import steve from "../images/steve.jpeg"


const Middle = () => {
  return (
    <div>
      <div style={{backgroundColor:'white', padding:"15px", borderRadius:"10px"}}>
        <img style={{width:"65px"}} src={profile} alt="for middle" />
        <TextField variant='outlined' label="start a post" style={{width:"450px", marginLeft:"20px"}} InputProps={{sx:{borderRadius:150}}}/>
        <img style={{width:"75px",marginLeft:"210px"}} src={image} alt="for middle section" />
        <img style={{width:"45px",marginLeft:"100px"}} src={video} alt="for middle section" />
        <img style={{width:"45px",marginLeft:"100px"}} src={article} alt="for middle section" />
      </div>
      <div style={{paddingTop:"20px"}}>
        <Card>
            <CardContent>
            <div style={{display:"flex"}} >

               <img src={profile} style={{width:"30px"}} alt="" />
              <div style={{marginLeft:"10px"}}>
                <Typography>Name</Typography>
                <Typography sx={{color:"#DCD6D6"}}>Designation</Typography>
              </div>
            </div>
            <h5>Description</h5>

            </CardContent>
            <CardMedia>
            
              component="img"
              height={300}
              image={steve}

            </CardMedia>
        </Card>
      </div>
    </div>
  )
}

export default Middle
