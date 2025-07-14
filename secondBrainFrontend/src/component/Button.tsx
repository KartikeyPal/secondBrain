import type { ReactElement } from "react"

const varientStyles = {
    "Primary": "bg-purple-600 text-white hover:not-focus:bg-purple-400",
    "Secondary": "bg-purple-300 text-purple-600 hover:not-focus:bg-purple-200"
}   

const btnSize = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-8"
}

const defaultStyle = "rounded-md font-normal flex justify-center hover:cursor-pointer hover:scale-95 duration-200 ease-in"

type Varient = "Primary" | "Secondary";
type Size = "sm" | "md" | "lg";

interface ButtonProps{
    varient: Varient,
    size: Size,
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick?: ()=>void
    customCss?: string

}


export const Button = ({varient,size,text,startIcon,endIcon,onClick,customCss}:ButtonProps) => {
  return <button 
            className={varientStyles[varient]  + " " +
            defaultStyle + " " +
            btnSize[size] + " " + customCss } 
            onClick={onClick}
        > 
        <div className="pr-1 items-center justify-center">
            {startIcon}
        </div>
            {text}
            {endIcon}
  </button>
}



