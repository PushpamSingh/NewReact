import { ConfigEnv } from "../ConfigENV/ConfigEnv";
import { Client,ID,Storage,Databases, Query, ImageGravity } from "appwrite";

class PostService{
    Client = new Client();
    Databases;
    bucket;
    constructor(){
        this.Client
        .setEndpoint(ConfigEnv.appwriteUrl)
        .setProject(ConfigEnv.projectId)
        this.Databases=new Databases(this.Client)
        this.bucket=new Storage(this.Client)
    }

    //! Create A Post
    async createPost({title,slug,content,avatar_url,status,userid}){
        try {
            return await this.Databases.createDocument(
                ConfigEnv.databaseId,
                ConfigEnv.collectionId,
                slug,
                {
                    title,
                    content,
                    avatar_url,
                    status,
                    userid
                }
            )
        } catch (error) {
            console.log("AppWrite Aervice :: createPost :: Error:: ",error);
            throw error;
        }
    }
    //! update Post
    async updatePost(slug,{title,content,avatar_url,status,userid}){
        try {
            return await this.Databases.updateDocument(
                ConfigEnv.databaseId,
                ConfigEnv.collectionId,
                slug,
                {
                    title,
                    content,
                    status,
                    avatar_url,
                    userid
                }
            )
        } catch (error) {
             console.log("AppWrite Aervice :: updatePost :: Error:: ",error);
            throw error;
        }
    }

    //! delete Post
    async deletePost(slug){
        try {
            return await this.Databases.deleteDocument(
                ConfigEnv.databaseId,
                ConfigEnv.collectionId,
                slug
            )
        } catch (error) {
             console.log("AppWrite Aervice :: deletePost :: Error:: ",error);
            throw error;
        }
    }
    //! get one Post
    async getPost(slug){
        try {
            return await this.Databases.getDocument(
                ConfigEnv.databaseId,
                ConfigEnv.collectionId,
                slug
            )
        } catch (error) {
            console.log("AppWrite Aervice :: getPost :: Error:: ",error);
            throw error;
        }
    }

    //! get all Post
    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.Databases.listDocuments(
                ConfigEnv.databaseId,
                ConfigEnv.collectionId,
                queries
            )
        } catch (error) {
             console.log("AppWrite Aervice :: getPosts :: Error:: ",error);
            throw error;
        }
    }

    //! appwrite file services
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                ConfigEnv.bucketId,
                ID.unique(),
                file
            )
        } catch (error) {
             console.log("AppWrite Aervice :: uploadFile :: Error:: ",error);
            throw error;
        }
    }

    async getFile(fileId){
        try {
            return await this.bucket.getFile(
                ConfigEnv.bucketId,
                fileId
            )
        } catch (error) {
             console.log("AppWrite Aervice :: getFile :: Error:: ",error);
            throw error;
        }
    }

    async getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(
                ConfigEnv.bucketId,
                fileId,
                ImageGravity.Center
            )
        } catch (error) {
             console.log("AppWrite Aervice :: getFilePreview :: Error:: ",error);
            throw error;
        }
    }
    async deleteFile(fileId){
        try {
            // console.log("File Id: ",fileId);
            return this.bucket.deleteFile(
                ConfigEnv.bucketId,
                fileId
            )
        } catch (error) {
            console.log("AppWrite Aervice :: deleteFile :: Error:: ",error);
            throw error;
        }
    }


}

export const postService=new PostService();