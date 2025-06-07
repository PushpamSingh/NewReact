import { Container } from "../Container/Container"
import { postService } from "../../AppWrite/Post.service"
import { useState,useEffect } from "react"
import { useSelector } from "react-redux"
import { PostCard } from "../PostCard"

export const HomePage=()=>{
    const [posts,setPosts]=useState([])
    const authStatus=useSelector((state)=>state.authReducers.status)
    useEffect(()=>{
        const fetchPosts=async()=>{
            try {
                const response=await postService.getPosts();
                if(response){
                    setPosts(response?.documents)
                }
            } catch (error) {
                console.log("Error :: In :: HomePage :: ",error);
                throw error;  
            }
        }
        fetchPosts()
    },[])
  
    if(posts?.length===0 && !authStatus){
            return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
        
    }else if(authStatus && posts?.length===0){
            return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                You successfully logged in but 0 Post availabale here
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
        
    }
    
    else{
        return (
            <div className="py-8">
                <Container>
                <div className="flex flex-wrap">
                    {
                        posts.map((post)=>{
                                return <div key={post.$id} className="p-2 w-1/4">
                                    <PostCard post={post}/>
                                </div> 
                        })
                    }
                </div>
                </Container>
            </div>
        )
    }
}