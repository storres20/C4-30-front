// import React from 'react'
// import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
// // import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// // import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

// const FormLogin=({handleChange})=>{

//     const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
//     const avatarStyle={backgroundColor:'#1bbd7e'}
//     const btnstyle={margin:'8px 0'}
//     return(
//         <Grid>
//             <Paper  style={paperStyle}>
//                 <Grid align='center'>
//                      <Avatar style={avatarStyle}>prueba</Avatar>
//                     <h2>Sign In</h2>
//                 </Grid>
//                 <TextField label='Username' placeholder='Enter username' fullWidth required/>
//                 <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
//                 <FormControlLabel
//                     control={
//                     <Checkbox
//                         name="checkedB"
//                         color="primary"
//                     />
//                     }
//                     label="Remember me"
//                  />
//                 <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
//                 <Typography >
//                      <Link href="#" >
//                         Forgot password ?
//                 </Link>
//                 </Typography>
//                 <Typography > Do you have an account ?
//                      <Link href="#" onClick={()=>handleChange("event",1)} >
//                         Sign Up 
//                 </Link>
//                 </Typography>
//             </Paper>
//         </Grid>
//     )
// }

// export default FormLogin

import { useState } from "react";
import { Link } from "react-router-dom";
// import SocialMedia from "../SocialMedia";
import './Formularios.scss';

const Login = ({ isSelectedLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");

    try {
    } catch (error) {
      console.warn("Login error", error);
    }

    // after successful submission remove the text from the fields
    setUserName("");
    setPassword("");
  };

  return (
    <div id="login" role="tabpanel" className={`single__tabs__panel tab-pane fade ${isSelectedLogin ? "in active" : ""}`}>
      <form className="login" onSubmit={handleSubmit}>
        <div className="input-loginReg">
          <p className="textInput">Email</p>
          <input type="text" placeholder="nombre@ejemplo.com*" onChange={(e) => setUserName(e.target.value)} />
          <p className="textInput">Password</p>
          <input type="password" placeholder="mín. 8 carácteres" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="tabs__checkbox">
          <input type="checkbox" />
          <span> Remember me</span>
          <span className="forget">
            <Link to="#">Forget Pasword?</Link>
          </span>
        </div>
        <div className="htc__login__btn mt--30">
          <button type="submit">Login</button>
        </div>
      </form>

      <div className="htc__social__connect">
        <h2>Or Login With</h2>
        <ul className="htc__soaial__list">
          {/* <SocialMedia bgName="instagram" icon="instagram" />
          <SocialMedia bgName="facebook" icon="facebook" />
          <SocialMedia bgName="googleplus" icon="google-plus" /> */}
        </ul>
      </div>
    </div>
  );
};

export default Login;