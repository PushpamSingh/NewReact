import axios from "axios";
const BaseUrl='https://v6.exchangerate-api.com/v6/4fed3c6a65ee19540612c397/latest'
export const useCurrencyInfo=async(currency)=>{
    try {
        const responce=await axios.get(`${BaseUrl}/${currency}`);
        // console.log("responce: ",responce.data);
        
        return responce.data;
    } catch (error) {
        console.log("Error: ".error);
        throw error;
    }
}