import BrainIcon from "../../icons/BrainIcon";
import { DocumentIcon } from "../../icons/DocumentIcon";
import LinkIcon from "../../icons/LinkIcon";
import TagIcon from "../../icons/TagIcons";
import TwitterIcon from "../../icons/TwitterIcons";
import VideoIcon from "../../icons/VideoIcon";
import SidebarButton from "./SidebarButton";

export default function Sidebar(){
    return <div className="h-screen bg-slate-100 border-r-2 w-60 position-fixed">
        <div className="flex gap-x-4 items-center p-2">
            <div className="text-violet-700 "><BrainIcon/></div>
            <h1 className="font-bold text-xl">Second Brain</h1>
        </div>
        <div className="p-3 translate-x-1 space-y-3  ">
            {/* all button here */}
            <SidebarButton icon={<TwitterIcon/>} text="Twitter"/>
            <SidebarButton icon={<VideoIcon/>} text="Vidos"/>
            <SidebarButton icon={<DocumentIcon/>} text="Documents"/>
            <SidebarButton icon={<LinkIcon/>} text="Links"/>
            <SidebarButton icon={<TagIcon/>} text="Tags"/>
        </div>
    </div>
}