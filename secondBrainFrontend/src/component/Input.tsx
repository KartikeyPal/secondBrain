import EyeCloseIcon from "../icons/EyeCloseIcon"
import EyeOpenIcon from "../icons/EyeOpenIcon"

interface InputProps{
    placeholder: string,
    value: string,
    type: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void,
    visible?: ()=>void,
    hidePassword? : Boolean
    passwordToggleButton?: Boolean
}

const Input = ({placeholder,value,type,onChange,visible,hidePassword,passwordToggleButton}: InputProps) => {
  return (
    <div className="relative">
      <div className="flex flex-col ">
        <label htmlFor={placeholder}
        className="px-2 underline text-slate-500 -mb-1 "
        >{placeholder}</label>
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value}
            onChange={onChange} 
            className='px-4 py-2 border rounded m-2 ' 
        />

      </div>
        {passwordToggleButton && (
          <button
            type="button"
            onClick={visible}
            className="absolute right-4 bottom-1 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {hidePassword ? <EyeOpenIcon/> : <EyeCloseIcon/>}
          </button>
        )}
    </div>
  )
}

export default Input