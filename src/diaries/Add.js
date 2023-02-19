import React, { useState } from 'react';
import { Box, Typography, FormLabel, TextField, Button } from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { addPost } from '../api-helpers/helpers';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({ title: "", description: "", location: "", imageUrl: "", date: "" });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };

    const onRecieved =(data)=> {
        console.log(data)
        setInputs({ title: "", description: "", location: "", imageUrl: "", date: "" })
        navigate('/diaries')
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(inputs);
        addPost(inputs).then(onRecieved).catch((err)=> console.log(err))

        // addPost(inputs).then((res) => {
        //     console.log(res);
        //     setInputs({ title: "", description: "", location: "", imageUrl: "", date: "" })
        //     .catch((err)=>console.log(err))
        // })
        
        
    }
    return (
        <Box display='flex'
            flexDirection={'column'}
            width='100%'
            height='100%'
        >
            <Box display='flex' margin='auto' padding={2} >
                <Typography variant='h4' fontWeight={'bold'} fontFamily={"Dancing Script,cursive"}>
                    Add your travel diary
                </Typography>
                <TravelExploreIcon sx={{ fontSize: '40px', paddingLeft: 1, color: "lightcoral" }} />
            </Box>
            <form onSubmit={handleSubmit}>
                <Box padding={3} display="flex" width='80%' margin='auto' flexDirection={'column'}>
                    <FormLabel sx={{ fontFamily: "quicksand" }}>Title</FormLabel >
                    <TextField
                        name='title'
                        onChange={handleChange}
                        value={inputs.title}
                        variant="standard" margin='normal' />
                    <FormLabel sx={{ fontFamily: "quicksand" }}>Description</FormLabel >
                    <TextField
                        name='description'
                        onChange={handleChange}
                        value={inputs.description} variant="standard" margin='normal' />
                    <FormLabel sx={{ fontFamily: "quicksand" }}>ImageUrl</FormLabel >
                    <TextField
                        name='imageUrl'
                        onChange={handleChange}
                        value={inputs.imageUrl}
                        variant="standard" margin='normal' />
                    <FormLabel sx={{ fontFamily: "quicksand" }}>Location</FormLabel >
                    <TextField
                        name='location'
                        onChange={handleChange}
                        value={inputs.location}
                        variant="standard" margin='normal' />
                    <FormLabel sx={{ fontFamily: "quicksand" }}>Date</FormLabel >
                    <TextField
                        name='date'
                        type="date"
                        onChange={handleChange}
                        value={inputs.date}
                        variant="standard" margin='normal' />
                    <Button type='submit' color='warning' sx={{ mt: 2, width: "50%", margin: "auto", borderRadius: 7 }} variant='contained'>Post</Button>
                </Box>
            </form>
        </Box>

    )

}

export default Add
