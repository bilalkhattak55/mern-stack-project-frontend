import React from 'react';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import {Link} from 'react-router-dom';


const Home = () => {
  return (
    <>
    <Box position={"relative"} width="100%" height="90vh">
   <img src="/road.jpg" alt="" width={"100%"} height="70%" />
   <Typography fontFamily={"Dancing Script,cursive"} fontWeight={"bold"} variant='h3' textAlign={"center"} width="100%"  sx={{
          position: "absolute",
          top: "0px",
          color: "#111115de",
          background: "#B2C8DF",
        }}>
    Dare to live the lif you always wanted
   </Typography>
   <Box 
   width="100%"
    height="30%"
    display={"flex"}
    flexDirection="column"
   >
    <Typography fontFamily={"quicksand"} textAlign={"center"} variant="h4" padding={4}>
    share your travel diaries with us
    </Typography>

    <Box margin="auto">
  <Button variant='outlined' sx={{mr:2}}> share your story</Button>
  <Button LinkComponent={Link} to="/diaries" variant='contained' sx={{ml:2}}>view diaries</Button>
    </Box>
    

   </Box>
    </Box>
    

    </>
  )
}

export default Home;
