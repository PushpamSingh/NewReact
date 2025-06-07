import { Container } from "../Container/Container";
import { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { postService } from "../../AppWrite/Post.service";
import { PostForm } from "../Post-Form/PostForm";

export const EditPostPage=()=>{
    const [post,setPost]=useState(null);
    const navigate=useNavigate();
    const {slug}=useParams();

    useEffect(()=>{
        const fetchPost=async()=>{
            try {
                const response=await postService.getPost(slug);
                if(response){
                    setPost(response);
                }else{
                    navigate('/')
                }
            } catch (error) {
                 console.log("Error :: In :: EditPostPage :: ",error);
                throw error;
            }
        }
        fetchPost()
    },[slug,navigate])

    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
    ) : null
}