
import { useState } from 'react'
import img from '../../images/Off White Gold Modern Minimal Floral Zoom Virtual Background (1).png'
import Input from '../component/Input'
import { Button } from '../component/Button';
const Signup = () => {
    const [Username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showPassword,setShowPassword] = useState(false);
  return (
    <div className='flex w-screen h-screen items-center'>
        <div className='flex flex-col  items-center justify-center absolute'>
          <div className=' ml-18 w-[60%]'>
            <h1 className='font-bold text-3xl'>Ready To start storing important tasks</h1>
            <p className='text-lg pt-3' >Signup in our website and start storing you important task to complete it later</p>
            <div className=' flex flex-col justify-center items-center p-5 mt-18 bg-slate-50 rounded-2xl py-16'>
               <Input 
                    type='text' 
                    placeholder='Username' 
                    value={Username}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setUsername(e.target.value)}
               />
               <Input 
                    type={showPassword? "text" : "password"} 
                    placeholder='Password' 
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}
                    visible={()=>setShowPassword(!showPassword)}
                    hidePassword = {showPassword}
                    passwordToggleButton={true}
               />    
               <Input 
                    type={showConfirmPassword? "text" : "password"} 
                    placeholder='Confirm Password' 
                    value={confirmPassword}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setConfirmPassword(e.target.value)}
                    visible={()=>setShowConfirmPassword(!showConfirmPassword)}
                    hidePassword = {showConfirmPassword}
                    passwordToggleButton={true}
               />  
               <div className='pt-4'>
                  <Button varient='Primary' size='md' text='Sign Up' onClick={()=>{}} />  
               </div>
            </div>
          </div>
        </div>
        <div className="h-screen  flex justify-center items-center ml-18">
            <img src={img} className='h-full w-full' >
            </img>
        </div>
    </div>
  )
}

export default Signup
