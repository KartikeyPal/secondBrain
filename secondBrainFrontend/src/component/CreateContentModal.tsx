import { useState } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import { Button } from "./Button";
import Input from "./Input";
import axios from "axios";
import { backendUrl } from "../../config";

interface ContentType{
    youtube: string,
    twitter: string,
}
const contentType: ContentType =  {
    youtube:"youtube",
    twitter: "twitter"
}

export default function AddContentModal({open,onClose}: { open:Boolean,onClose: ()=>void}){
    const [title,setTitle] = useState("");
    const [link,setLink ]  = useState("");
    const [type, setType] = useState(contentType.youtube);
    const addContent = async () => {
        console.log("title is " + title, "link is " + link, " type is " +type  );   
        await axios.post(`${backendUrl}/api/v1/addContent`,{

            link,title,type
        },{
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        })
        onClose();;
    }

    return (
        <>
            {/* Backdrop with blur effect */}
            {open && (
                <div className="fixed inset-0  backdrop-blur-sm z-10 flex justify-center items-center">
                    {/* Modal content */}
                        <div className="bg-slate-50 flex flex-col p-8 space-4 gap-y-7 border rounded-lg">
                            <div className="flex justify-end  -mt-5  -mr-5 font-bold hover:cursor-pointer " onClick={()=>onClose()} typeof="button"><CloseIcon/></div>
                            <Input type="text" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}} required={true}/>
                            <Input type="text" placeholder="Link" value={link} onChange={(e)=>{setLink(e.target.value)}} required={true}/>
                            <select value={type} onChange={e => setType(e.target.value)}>
                                <option value={contentType.youtube}>youtube</option>
                                <option value={contentType.twitter}>twitter</option>
                            </select>
                           <Button varient="Primary" size="md" text="Submit" onClick={()=>{addContent()}}/>
                        </div>
                </div>
            )}
        </>
    );
}