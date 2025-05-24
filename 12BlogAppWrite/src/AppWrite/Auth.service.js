import {Client,Account,ID} from 'appwrite';
import {ConfigEnv} from '../ConfigENV/ConfigEnv'

class AuthService{
    client=new Client();
    Account;
    constructor(){
        this.client
        .setEndpoint(ConfigEnv.appwriteUrl)
        .setProject(ConfigEnv.projectId);
        this.Account = new Account(this.client);
    }
    //! User SignUp methode
    async createAccount({email,password,name}){
        try {
            const userAccount=await this.Account.create(ID.unique(),email,password,name);
            if(userAccount){
                //? we call login method here
                return this.LogIn({email,password});
            }else{
                return userAccount;
            }
        } catch (error) {
            console.log("AppWrite Service :: createAccount :: Error:: ",error);
            throw error;
        }
    }
    //! User LogIn methode 
    async LogIn({email,password}){
        try {
            return await this.Account.createEmailPasswordSession(email,password);
        } catch (error) {
            console.log("AppWrite Service :: LogIn :: Error:: ",error);
            throw error;
        }
    }
    //! User LogOut methode
    async LogOut(){
        try {
            return await this.Account.deleteSessions();
        } catch (error) {
            console.log("AppWrite Service :: LogOut :: Error:: ",error);
            throw error;
        }
    }

    //!Get Current User
    async GetCurrentUser(){
        try {
            return await this.Account.get();
        } catch (error) {
           console.log("AppWrite Service :: GetCurrentUser :: Error:: ",error);
           return null
        }
    }


}
const authService=new AuthService();

export default authService;