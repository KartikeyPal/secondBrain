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
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value}
            onChange={onChange} 
            className='px-4 py-2 border rounded m-2' 
        />
        {passwordToggleButton && (
          <button
            type="button"
            onClick={visible}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {hidePassword ? <EyeOpenIcon/> : <EyeCloseIcon/>}
          </button>
        )}
    </div>
  )
}

export default Input