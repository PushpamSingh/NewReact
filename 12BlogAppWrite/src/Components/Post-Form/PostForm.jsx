import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {Input} from "../Input"
import {Select} from "../Select"
import { RTE } from "../RTE";
import {postService} from '../../AppWrite/Post.service'
import { Button } from "../Button";

export const PostForm=({post})=>{
    const {register, handleSubmit, control, watch, setValue, getValues}=useForm({
        defaultValues:{
            title:post?.title || "",
            slug:post?.slug || "",
            content:post?.content || "",
            status:post?.status || "active"
        }
    })
    const navigate=useNavigate();
    const userData = useSelector((state)=>state.authReducers.userData);
    const FormSubmit=async(data)=>{
        // console.log("UseData from add post: ",UserData);
        
        if(post){
            const file=data?.image[0] && await postService.uploadFile(data?.image[0]);
            // if(file){
            //     console.log("File From post form:  ",post);
            //     await postService.deleteFile(post?.avatar_url);
            // }
            const dbPost=await postService.updatePost(post.$id,{
                ...data,
                avatar_url:file?file.$id:undefined
            })
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }

        }else{
            const file=await postService.uploadFile(data?.image[0])

            if(file){
                data.avatar_url=file?.$id;
                const dbPost=await postService.createPost({...data,userid:userData?.$id})
                // console.log("DBPost from postForm: ",dbPost);
                

                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }
    const slugTransformation=useCallback((value)=>{
        if(value && typeof value === 'string'){
            return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z/d/s]+/g,'-')
            .replace(/\s+/g,'-')
        }
        return "";
    })
    useEffect(()=>{
        const subscription=watch((value,{name})=>{
            if(name==='title'){
                const slug=slugTransformation(value.title)
                setValue('slug',slug,{shouldValidate:true})
            }
        })

        return ()=>subscription.unsubscribe()
    },[slugTransformation,watch,setValue])
    return(
        <form onSubmit={handleSubmit(FormSubmit)} className="flex flex-wrap">
                <div className="w-2/3 px-2">
                        <Input
                         type="text"
                         label="Title: "
                         placeholder="Enter Title"
                         className="mb-4"  
                         {...register('title',{required:true})}                
                        />
                        <Input
                        type="text"
                        label="Slug: "
                        placeholder="Slug here.."
                        className="mb-4"
                        {...register('slug',{required:true})}
                        onInput={((e)=>{
                            setValue('slug',slugTransformation(e.currentTarget.value),{shouldValidate:true})
                        })}
                        readonly
                        />
                        <RTE name="content" label='Content: ' control={control} defaultValue={getValues('content')}/>
                </div>
                <div className="w-1/3 px-2">
                        <Input 
                        type="file"
                        label="Featured Image: "
                        className='w-4'
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register('image',{required:true})}
                        />
                        {
                            post && (
                                <div className="w-full mb-4"> 
                                    <img 
                                    // src={postService.getFilePreview(post?.avatar_url)} 
                                    src="https://www.shutterstock.com/image-vector/blg-creative-minimalist-letter-logo-600nw-2598154019.jpg"
                                    alt={post?.title} className="rounded-lg" />
                                </div>
                            )
                        }
                        <Select
                        options={["active", "inactive"]}
                        label="Status"
                        className="mb-4"
                        {...register("status", { required: true })}
                         />
                        <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                            {post ? "Update" : "Submit"}
                        </Button>
                </div>
        </form>
    );
}