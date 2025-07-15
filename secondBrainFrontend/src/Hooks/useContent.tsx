import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../../config";


export default function useContent(){
    const [contents,setContents ] = useState([]);

    const refresh =async ()=>{
        const res = await axios.get(`${backendUrl}/api/v1/getContent`,{
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        setContents(res.data.content);
    }

    useEffect(()=>{
        refresh();
       let interval =  setInterval(refresh,10*1000);
       return ()=>{
        clearInterval(interval);
       }
    },[])
    return contents;
}