
import './App.css'
import { Button } from './component/Button'
import Card from './component/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
function App() {

  return (
    <div className=''>
      <Button 
        varient='Primary' 
        text='Add Content' 
        size='md' onClick={()=>{} } 
        startIcon={<PlusIcon/>} 
      />
      <Button 
        varient='Secondary' 
        text='Share Brain' 
        size='md' 
        onClick={()=>{}}
        startIcon={<ShareIcon/>}
        />
        <Card title='Project Ideas' link='https://www.youtube.com' type='Youtube'/>

    </div >
  )
}

export default App
