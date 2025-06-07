import { Link } from "react-router-dom";
import { postService } from "../AppWrite/Post.service";

export const PostCard=({post})=>{
    // console.log("Post from PostCard: ",post);
    
    return (
        <Link to={`/post/${post?.$id}`} className=""> 
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img 
                    // src={postService.getFilePreview(avatar_url)} 
                    src="https://www.shutterstock.com/image-vector/blg-creative-minimalist-letter-logo-600nw-2598154019.jpg"
                    alt={post?.title} 
                     className="rounded-xl"
                    />

                </div>
                <h1
                className="text-xl font-bold"
                >
                    {post?.title}
                </h1>
            </div>
        </Link>
    );
}