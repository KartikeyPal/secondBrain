import { ShareIcon } from "../icons/ShareIcon";

type Type = "Twitter" | "Youtube"

interface CardProps {
    title: string,
    link: string,
    type: Type
}




const Card = ({title,link,type}: CardProps)=>{

    return( 
        <div className="bg-white rounded-md p-4 border max-w-72 border-slate-200">
            <div className="flex justify-between">
                <div className="flex items-center text-md"> 
                    <div className="text-gray-500 p-2">
                        <ShareIcon/>
                    </div>
                    {title}
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <ShareIcon/>
                    </div>
                    <div className="text-gray-500">
                        <ShareIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;