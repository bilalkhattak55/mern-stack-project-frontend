import React, { useState } from 'react';
import { Card, CardHeader, IconButton, Avatar, CardContent, Typography, CardActions, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import { Link } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { postDelete } from '../api-helpers/helpers';
//id, user, name //
const DiaryItem = ({ title, description, image, location, date,id, user, name}) => {
    console.log("iddd", id)

    // snackbar
    const [open, setOpen] = useState(false)
    const isLooggedInUser = () => {
        if (localStorage.getItem("userId") === user) {
            console.log("userIDDD", localStorage.getItem("userId"))
            return true;
        }
        return false;


    }
    // console.log("uuser", user)

    // console.log("id", id, title)

    //delete
    const handleDelete = () => {
        postDelete(id).then((data) => console.log(data)).catch((err) => console.log(err))
        setOpen(true)
    }
    return (
        <>

            <Card sx={{ width: "55%", height: "67vh", margin: 1, padding: 1, display: 'flex', flexDirection: "column", boxShadow: "5px 5px 10px #ccc" }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            {name.charAt(0)}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            {<EditLocationAltIcon />}
                        </IconButton>
                    }
                    // title="Shrimp and Chorizo Paella"
                    // header="September 14, 2016"
                    title={location}
                    header={location}
                    subheader={date}
                />
                <img

                    height="194"
                    // src='https://images.unsplash.com/photo-1558471461-a0c5cb3e8f56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80'
                    // alt="Paella dish"
                    src={image}
                    alt={title}
                />
                <CardContent>
                    <Typography paddingBottom={1} variant="h6" color="text.secondary">
                        {title}
                    </Typography>
                    <hr />
                    <Box paddingTop={1} display='flex'>
                        <Typography width={"170px"} fontWeight={"bold"} variant="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </Box>
                </CardContent>


                {
                    isLooggedInUser() && (
                        <CardActions sx={{ marginLeft: "auto" }}>
                            <IconButton onClick={handleDelete} color="warning">
                                <DeleteForeverIcon />
                            </IconButton>
                            <IconButton LinkComponent={Link} to={`/post/${id}`} color="error">
                                <EditIcon />
                            </IconButton>
                        </CardActions>
                    )
                }

                <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
                    <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
                        This is a success message!
                    </Alert>
                </Snackbar>
            </Card>
            
        </>
    )
}

export default DiaryItem;