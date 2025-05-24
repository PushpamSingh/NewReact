import { Link } from "react-router-dom";
import { postSerive } from "../AppWrite/Post.service";

export const PostCard=({$id,title,featuredImg})=>{
    return (
        <Link to={`/post/${id}`} className=""> 
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img src={postSerive.getFilePreview(featuredImg)} alt={title} 
                     className="rounded-xl"
                    />

                </div>
                <h1
                className="text-xl font-bold"
                >
                    {title}
                </h1>
            </div>
        </Link>
    );
}