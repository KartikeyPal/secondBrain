import { CloseIcon } from "../icons/CloseIcon";
import { Button } from "./Button";
import Input from "./Input";


export default function AddContentModal({open,onClose}: { open:Boolean,onClose: ()=>void}){


    const inputCSS = "p-3  outline-slate-400 font-semibold border border-slate-300 "

    return (
        <>
            {/* Backdrop with blur effect */}
            {open && (
                <div className="fixed inset-0  backdrop-blur-sm z-10 flex justify-center items-center">
                    {/* Modal content */}
                        <div className="bg-slate-50 flex flex-col p-8 space-4 gap-y-7 border rounded-lg">
                            <div className="flex justify-end  -mt-5  -mr-5 font-bold hover:cursor-pointer " onClick={()=>onClose()} typeof="button"><CloseIcon/></div>
                            <Input type="text" placeholder="Title" value="" onChange={()=>{}} required={true}/>
                            <Input type="text" placeholder="Link" value="" onChange={()=>{}} required={true}/>
                           
                           <Button varient="Primary" size="md" text="Submit" onClick={()=>{}}/>
                        </div>
                </div>
            )}
        </>
    );
}