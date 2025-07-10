
import './App.css'
import { Button } from './component/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
function App() {

  return (
    <div className=''>
     <Button varient='Primary' size={"sm"} text={"Button 1"} onClick={()=>{}} startIcon={<PlusIcon size="lg"/>} />
     <Button varient='Secondary'  size={"md"} text={"Button 1"} onClick={()=>{}} />
     <Button varient='Secondary'  size={"lg"} text={"Button 1"} onClick={()=>{}} />
    </div >
  )
}

export default App
