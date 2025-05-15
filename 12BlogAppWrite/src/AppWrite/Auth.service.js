import {Client,Account,ID} from 'appwrite';
import {ConfigEnv} from '../ConfigENV/ConfigEnv'

class AuthService{
    client=new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(ConfigEnv.appwriteUrl)
        .setProject(ConfigEnv.projectId);
        this.account = new Account(this.client);
    }
    //! User SignUp methode
    async createAccount({email,password,name}){
        try {
            const userAccount=await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                //? we call login method here
                return this.LogIn({email,password});
            }else{
                return userAccount;
            }
        } catch (error) {
            console.log("AppWrite Aervice :: createAccount: Error:: ",error);
            throw error;
        }
    }
    //! User LogIn methode 
    async LogIn({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            console.log("AppWrite Aervice :: LogIn: Error:: ",error);
            throw error;
        }
    }
    //! User LogOut methode
    async LogOut(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("AppWrite Aervice :: LogOut: Error:: ",error);
            throw error;
        }
    }

    //!Get Current User
    async GetCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
               console.log("AppWrite Aervice :: GetCurrentUser: Error:: ",error);
            throw error;
        }
    }


}
export const authService=new AuthService();

export default AuthService;