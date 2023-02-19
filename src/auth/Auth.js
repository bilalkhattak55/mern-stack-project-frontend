// import React, { useState } from 'react';
// import { Box, FormLabel, Typography, TextField, Button } from "@mui/material";
// // import e from 'cors';
// import { sendAuthRequest } from '../api-helpers/helpers';
// import { useDispatch } from 'react-redux';
// import { authActions } from '../store';


// const Auth = () => {
//   const dispatch = useDispatch();

//   const [isSignup, setIsSignup] = useState(true);
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs);

//     if (isSignup) {
//       sendAuthRequest(true, inputs)
//       .then((data) => localStorage.setItem('userId', data.user._id))
//       .then(()=> {
//         dispatch(authActions.login()) 
//       })
//       .catch((err) => console.log(err));
//     }else {
//       sendAuthRequest(false, inputs).then((data) => localStorage.setItem("userId", data.id))
//       .then(()=> {
//         dispatch(authActions.login()) 
//       })
//       .catch(err => console.log(err))
//     }
//   };

//   const [inputs, setInputs] = useState({name:"", email:"", password:""});
//   const handleChange = (e) => {
//      setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name] : e.target.value,
//      }))
//   };
  

//   return <Box width="40%" borderRadius={10} boxShadow={"5px 5px 10px #ccc"} margin="auto" marginTop={10}>
//     <form onSubmit={handleSubmit}>
//       <Box display="flex" flexDirection={"column"} width="60%" padding={5} margin="auto">
//         <Typography padding={2} variant='h4' textAlign="center">
//           {
//             isSignup ? "SignUp" : "Login"
//           }

//         </Typography>

//        {isSignup && <><FormLabel>name</FormLabel>
//           <TextField onChange={handleChange} value={inputs.name} name="name" required margin="normal" /></>
//        }
//         <FormLabel>email</FormLabel>
//         <TextField onChange={handleChange} value={inputs.email} name='email' type='email' required margin="normal" />
//         <FormLabel>password</FormLabel>
//         <TextField onChange={handleChange} value={inputs.password} name='password' required margin="normal" />



//         <Button sx={{ mt: 2, borderRadius: 10 }} type="submit" variant='contained'>
//           {
//             isSignup ? "SignUp" : "Login"
//           }
//         </Button>
//         <Button sx={{ mt: 2, borderRadius: 10 }} variant='outlined' onClick={()=>setIsSignup(!isSignup)}>Change to{isSignup ? " Login" : " Signup"}</Button>
//       </Box>
//     </form>
//   </Box>
// }

// export default Auth;

















import React, { useState } from "react";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import { sendAuthRequest } from "../api-helpers/helpers";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const [isSignup, setIsSignup] = useState(true);
  const onResReceived = (data) => {
    if (isSignup) {
      localStorage.setItem("userId", data.user._id);
    } else {
      localStorage.setItem("userId", data.id);
    }
    dispatch(authActions.login());
    naviagte("/diaries");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);

    if (isSignup) {
      sendAuthRequest(true, inputs)
        .then(onResReceived)
        .catch((err) => console.log(err));
    } else {
      sendAuthRequest(false, inputs)
        .then(onResReceived)
        .catch((err) => console.log(err));
    }
  };
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Box
      width="40%"
      borderRadius={10}
      boxShadow={"5px 5px 10px #ccc"}
      margin="auto"
      marginTop={10}
    >
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          width="60%"
          padding={5}
          margin="auto"
        >
          <Typography padding={1} variant="h4" textAlign="center">
            {isSignup ? "Signup" : "Login"}
          </Typography>
          {isSignup && (
            <>
              <FormLabel>Name</FormLabel>
              <TextField
                onChange={handleChange}
                value={inputs.name}
                name="name"
                required
                margin="normal"
              />
            </>
          )}
          <FormLabel>Email</FormLabel>
          <TextField
            onChange={handleChange}
            value={inputs.email}
            name="email"
            type="email"
            required
            margin="normal"
          />
          <FormLabel>Password</FormLabel>
          <TextField
            onChange={handleChange}
            value={inputs.password}
            name="password"
            type="password"
            required
            margin="normal"
          />
          <Button
            sx={{ mt: 2, borderRadius: 10 }}
            type="submit"
            variant="contained"
          >
            {isSignup ? "Signup" : "Login"}
          </Button>
          <Button
            onClick={() => setIsSignup(!isSignup)}
            sx={{ mt: 2, borderRadius: 10 }}
            variant="outlined"
          >
            Change to {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Auth;
