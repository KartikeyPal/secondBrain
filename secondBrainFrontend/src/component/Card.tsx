import { ShareIcon } from "../icons/ShareIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import axios from "axios";
import { backendUrl } from "../../config";
type Type = "twitter" | "youtube"

interface CardProps {
    title: string,
    link: string,
    type: Type
    _id: string
}




const Card = ({title,link,type,_id}: CardProps)=>{
    function getEmbededYoutubeLink(link: string):string{
        const url = link;
        const id = url.split("?v=")[1];
        return "http://www.youtube.com/embed/" + id;
    }

    async function deleteBrain(){
        console.log("we hit delteBrain api")
        await axios.delete(`${backendUrl}/api/v1/deleteContent/${_id}`).then(()=>console.log("working")).catch((e)=>{console.log(e)})
    }
    return( 
        <div>
            <div className="bg-white rounded-md  border max-w-72 min-w-72 max-h-96 min-h-36 border-slate-200 ml-16 mt-8 overflow-y-scroll overflow-x-hidden">
                {/* Upper Section */}
                <div className="flex justify-between">
                    <div className="flex items-center text-md"> 
                        <div className="text-gray-500 p-2">
                            <DocumentIcon/>
                        </div>
                        {title}
                    </div>
                    <div className="flex items-center">
                        <div className="pr-2 text-gray-500">
                            <ShareIcon/>
                        </div>
                        <button className="text-gray-500" onClick={deleteBrain}>
                            <DeleteIcon/>   
                        </button>
                    </div>
                    
                </div>
                {/* Middle section */}
                
                <div className="w-full rounded-xl p-2 space-y-2">
                    {/* For youTube */}
                    {
                        type === "youtube" && 
                        <iframe 
                            className="w-full rounded-xl " 
                            src={getEmbededYoutubeLink(link)} 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen>
                        </iframe>
                    }
                    {/* For Twitter/X */}
                    {
                        type === "twitter" && <div>
                            <blockquote 
                                className="twitter-tweet w-full rounded-xl">
                                <a 
                                    href={link}>
                                </a>
                            </blockquote>     
                            <script 
                                async src="https://platform.twitter.com/widgets.js" 
                                charSet="utf-8">
                            </script>
                        </div> 
                    }
                </div>
                <div className="bg-red-300 p-3 rounded-lg w-20 m-3"> 
                    {type}
                </div>
            </div>
        </div>
    )
}

export default Card;