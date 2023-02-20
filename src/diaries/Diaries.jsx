import React, { useState } from 'react'
import DiaryItem from './DiaryItem';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { getAllPosts } from '../api-helpers/helpers';
// import Loading from './Loading';


const Diaries = () => {
  
  const [posts, setPosts] = useState();
  useEffect(() => {
    
    getAllPosts().then((data) => setPosts(data?.posts))
      .catch((err) => console.log(err))
   


  }, [])

  // console.log("posts", posts)


  return (
    <>
      
            <Box display="flex" flexDirection={"column"} padding={3} justifyContent="center" alignItems={"center"}>

              {" "}
              {posts && posts.map((item, index) => {
                // console.log("item._id", item._id)
                // console.log("item.user",item.user)
                // console.log("itemmm",item)
                return (
                  <DiaryItem  date={new Date(`${item.date}`).toLocaleDateString()} key={index}
                    description={item.description}
                    image={item.image}
                    id={item._id}
                    location={item.location}
                    title={item.title}

                    //user put in the end time
                    user={item?.user?._id}
                    name={item?.user?.name}
                  />

                )
              })}

            </Box>
          





    </>
  )
}

export default Diaries

