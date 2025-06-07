import { Container } from "../Container/Container";
import { postService } from "../../AppWrite/Post.service";
import { useEffect, useState } from "react";
import { PostCard } from "../PostCard"
  
export const AllPostPage=()=>{
    const [posts,setPosts]=useState(null);
    // const [name, setname]=useState("Rau")

    useEffect(()=>{
        const fetchPosts=async()=>{
            try {
                const response=await postService.getPosts([]);
                if(response){
                    // console.log("Response from ALLpost: ",response);
                    
                    setPosts(response?.documents)                    
                }
            } catch (error) {
                console.log("Error :: In :: AllPostPage :: ",error);
                throw error;                
            }
        }
        fetchPosts();
    },[])
    // console.log("Post from Allpost: ", posts);

    return (
        <div className="py-8">
            <Container>
            <div className="flex flex-wrap">
                {
                    posts?.map((post)=>{
                          return <div key={post.$id} className="p-2 w-1/4">
                                <PostCard post={post}/>
                          </div> 
                    })
                }
            </div>
            </Container>
        </div>

    );
}