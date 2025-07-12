
import { useState } from 'react'
import './App.css'
import { Button } from './component/Button'
import Card from './component/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import AddContentModal from './component/CreateContentModal'
function App() {
  const [modalOpen,setModalOpen] = useState(false)

  return (
    <div className=''>
      <Button 
        varient='Primary' 
        text='Add Content' 
        size='md'
        startIcon={<PlusIcon/>} 
        onClick = {()=>{setModalOpen(!modalOpen)}}
      />
      <Button 
        varient='Secondary' 
        text='Share Brain' 
        size='md' 
        onClick={()=>{}}
        startIcon={<ShareIcon/>}
        />
        <div className='flex'>

        <Card title='Project Ideas' link='https://www.youtube.com/watch?v=coGUusRo8TI' type='Youtube'/>
        <Card title='Twitter Post' link='https://twitter.com/SpaceX/status/1732824684683784516?ref_src=twsrc%5Etfw' type='Twitter'/>
        </div>

        <AddContentModal open={modalOpen} onClose={()=>{setModalOpen(!modalOpen)}}  />

    </div >
  )
}

export default App
