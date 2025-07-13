import type { ReactElement } from "react"


interface Style {
    button: string,
}

const buttonStyle: Style={
    button: "flex gap-x-4 hover:cursor-pointer  p-2 -mt-1 py-4 bg-slate-200 rounded-md hover:scale-95 ease-in transition-all duration-100 hover:animate-pulse hover:bg-slate-400"
}

interface sideBarButtonProps{
    icon: ReactElement,
    text: string
}

const SidebarButton = (props: sideBarButtonProps) => {
  return (
    <div className={buttonStyle.button}>
        {props.icon}
        <h2>Tags</h2>
    </div>
  )
}

export default SidebarButton