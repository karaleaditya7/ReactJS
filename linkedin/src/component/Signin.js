import React, { useState } from 'react'
import { Grid, TextField, Button } from '@mui/material'
import linklogo from '../images/linklogo.png'
import developer from '../images/developer.jpg'
import { signInWithPopup } from 'firebase/auth'
import { auth, database, googleProvider } from '../firebase/setup'
import { addDoc, collection } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {

  const [username, setUsername] = useState("")

  const addUser = async () => {
    const userRef = collection(database, "Users")
    try {
      await addDoc(userRef, {
        username: username
      })
    } catch (err) {
      console.error(err)

    }
  }

  const signInWithGoogle = async() => {
  //   try {
  //     debugger
  //     if (username === "") {
  //       toast.warning("Please enter username")
  //     } 
  //     else {
  //       await signInWithPopup(auth, googleProvider)
  //       addUser()
  //     }
  //   } 
  //   catch (err) {
  //     console.error(err)
  //   }
  // }

      !username && toast.warning("Please enter username")
      try{
        username && await signInWithPopup(auth, googleProvider)
        username && addUser()

      }
      catch(err){
          console.error(err)
      }
}



    return (
      <div>
        <Grid container>
          <Grid item xs={6} sx={{ paddingLeft: "80px", paddingTop: "15px" }}>
            <ToastContainer autoClose={2000} position='top-right'></ToastContainer>
            <img style={{ width: "130px" }} src={linklogo} alt="putting inkedin logo" />
            <h2 style={{ fontWeight: "100", fontSize: "60px", color: "#E79F1A" }}>Find jobs through this clone</h2>
            <label style={{ color: "grey" }}>Enter Username</label>
            <br />
            <TextField onChange={(e) => setUsername(e.target.value)} variant='outlined' label="Username" sx={{ width: "400px", mt: "5px" }} />
            <br />
            <Button onClick={signInWithGoogle} size='large' variant='contained' sx={{ width: "400px", borderRadius: "50px", mt: "25px", height: "50px" }}>Signin</Button>
          </Grid>
          <Grid item xs={6}>
            <img style={{ width: "1000px" }} src={developer} alt="adding developer pic" />
          </Grid>
        </Grid>
      </div>
    )
  }


export default Signin
