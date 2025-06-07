import { Container } from "../Container/Container";
import { PostForm } from "../Post-Form/PostForm";

export const AddPostPage=()=>{
    return (
        <div className="py-8">
            <Container>
                <PostForm/>
            </Container>
        </div>
    );
}