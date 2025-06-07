import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { postService } from "../../AppWrite/Post.service";
import { Container } from "../Container/Container";
import { Button } from "../Button";
import parse from 'html-react-parser'

export const PostPage=()=>{
    const [post,setPost]=useState([]);
    const {slug} = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state)=>state.authReducers.userData)

    const isAuthor=post && userData ? post.userid === userData.$id : false

    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const response=await postService.getPost(slug);
            if(response){
                // console.log("Post from POstPage: ",response);
                // console.log("Image URl from PostPage: ",(await postService.getFilePreview(response.avatar_url)).href);
                
                setPost(response)
            }else{
                navigate('/')
            }
            } catch (error) {
                console.log("Error :: In :: PostPage :: ",error);
                throw error;     
            }
        }

        if(slug){
            fetchData()
        }else{
            navigate('/')
        }
    },[slug,navigate])

    const DeletePost=async()=>{
        try {
            const response=await postService.deletePost(post?.$id)
            if(response){
                postService.deleteFile(post?.avatar_url)
                navigate('/')
            }else{
                navigate('/')
            }
        } catch (error) {
            console.log("Error :: In :: DeletePost :: ",error);
            throw error;
        }
    }
    
    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        // src={postService.getFilePreview(post?.avatar_url).href}
                        src="https://www.shutterstock.com/image-vector/blg-creative-minimalist-letter-logo-600nw-2598154019.jpg"
                        alt={post.title}
                        className="rounded-xl w-100 h-100"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgcolor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgcolor="bg-red-500" onClick={DeletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(String(post.content))}
                    </div>
            </Container>
        </div>
    ) : null;
}