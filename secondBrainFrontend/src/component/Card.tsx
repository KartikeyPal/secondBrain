import { ShareIcon } from "../icons/ShareIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
type Type = "Twitter" | "Youtube"

interface CardProps {
    title: string,
    link: string,
    type: Type
}




const Card = ({title,link,type}: CardProps)=>{

    function getEmbededYoutubeLink(link: string):string{
        const url = link;
        const id = url.split("?v=")[1];
        return "http://www.youtube.com/embed/" + id;
    }
    return( 
        <div>
            <div className="bg-white rounded-md  border max-w-72 min-w-72 max-h-96 min-h-96 border-slate-200 ml-16 mt-8 overflow-y-scroll overflow-x-hidden">
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
                        <div className="text-gray-500">
                            <DeleteIcon/>
                        </div>
                    </div>
                    
                </div>
                {/* Middle section */}
                
                <div className="w-full rounded-xl p-2 space-y-2">
                    {/* For youTube */}
                    {
                        type === "Youtube" && 
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
                        type === "Twitter" && <div>
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
            </div>
        </div>
    )
}

export default Card;