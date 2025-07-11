import type { ReactElement } from "react"

const varientStyles = {
    "Primary": "bg-purple-600 text-white",
    "Secondary": "bg-purple-300 text-purple-600"
}   

const btnSize = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-8"
}

const defaultStyle = "rounded-md font-normal flex justify-center "

type Varient = "Primary" | "Secondary";
type Size = "sm" | "md" | "lg";

interface ButtonProps{
    varient: Varient,
    size: Size,
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick: ()=>void

}


export const Button = ({varient,size,text,startIcon,endIcon}:ButtonProps) => {
  return <button 
            className={varientStyles[varient]  + " " +
            defaultStyle + " " +
            btnSize[size] + "" } 
        > 
        <div className="pr-1 items-center justify-center">
            {startIcon}
        </div>
            {text}
            {endIcon}
  </button>
}



