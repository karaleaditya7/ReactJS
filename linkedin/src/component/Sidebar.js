import React from 'react'
import reactjs from "../images/reactjs.jpeg"
import profile from "../images/profile.png"

const Sidebar = () => {
  return (
    <div style={{backgroundColor:"white", border:"1px solid #C9C7C4",width:"210px",height:"500px",borderRadius:"15px"}}>
      <img style={{height:"65px", width:"210px", borderTopRightRadius:"15px", borderTopLeftRadius:"15px"}} src={reactjs} alt="react background" />
      <div style={{position:"relative",left:"30%"}}>
      <img style={{width:"80px"}} src={profile} alt="profiles" />
      <h3>Name</h3>
      </div>
      <h4 style={{color:"#6F6F6F",position:"relative",left:"25%"}}>Designation</h4>
      <div style={{color:"#6F6F6F", border:"1px solid #D6D6D6",paddingLeft:"10px"}}>
        <h5 style={{fontWeight:"100"}}>Connections</h5>
        <h5 style={{fontWeight:"100"}}>Invitations</h5>
      </div>

    </div>
  )
}

export default Sidebar
