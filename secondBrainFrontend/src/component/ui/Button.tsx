import type { ReactElement } from "react"

const varientStyles = {
    "Primary": "bg-purple-600 text-white",
    "Secondary": "bg-purple-300 text-purple-600"
}   

const size = {
    "sm": "py-1 px-2",
    "md": "py-1.5 px-4",
    "lg": "py-2 px-6",
}

const defaultStyle = "rounded-md "

type Varient = "Primary" | "Secondary";

interface ButtonProps{
    varient: Varient,
    size: "sm" | "md" | "lg",
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick: ()=>void

}


export const Button = (props: ButtonProps) => {
  return <button className={`${varientStyles[props.varient]} ${size[props.size]} ${defaultStyle}`} ><div className="flex">{props.startIcon} {props.text} {props.endIcon}</div></button>
}



