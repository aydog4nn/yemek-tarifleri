import { useState,useEffect } from "react";

const useFetch = (url,method="GET") => {
    const [data,setData] = useState(null);
    const [isLoading,setIsLoading ] = useState(false);
    const [error,setError] = useState(null);
    const [options,setOptions] = useState(null);

    const postData = (data) => {
        setOptions({
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
    }

    useEffect(() => {
        const fetchData = async (options) => {
            setIsLoading(true);

        try {
            const response = await fetch(url,{...options});
             
            if(!response.ok) {
                throw new Error(response.statusText)
            }

            const data = await response.json();
            setIsLoading(false);
            setData(data);
            }
        catch (err){
            setIsLoading(false);
            setError(err.message);
            
        }  
        }

        if(method === "GET"){
            fetchData();
        }

        if(method === "POST" && options){
            fetchData(options)
        }

      },[url,options,method]) 

      return {
        data, isLoading,error,postData
      }
}

export default useFetch;