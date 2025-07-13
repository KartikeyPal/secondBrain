
import { useState } from 'react'
import { Button } from '../component/Button'
import Card from '../component/Card'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import AddContentModal from '../component/CreateContentModal'
import Sidebar from '../component/sidebar/Sidebar'
function Dashboard() {
  const [modalOpen,setModalOpen] = useState(false)

  return (
    <div className='flex'>
      <div>
        <Sidebar/>
      </div>
      <div className='w-full'>
        <div className='flex gap-x-2 j p-5 items-center '> 
          <div className='flex justify-start font-bold text-3xl text-slate-600   '>
            <h1 >Notes</h1>
          </div>
          <div className=' w-full flex justify-end gap-2'>
            <Button 
              varient='Secondary' 
              text='Share Brain' 
              size='md' 
              onClick={()=>{}}
              startIcon={<ShareIcon/>}
              />
            <Button 
              varient='Primary' 
              text='Add Content' 
              size='md'
              startIcon={<PlusIcon/>} 
              onClick = {()=>{setModalOpen(!modalOpen)}}
            />
          </div>
        </div>
          <div className='flex'>
            <Card title='Project Ideas' link='https://www.youtube.com/watch?v=coGUusRo8TI' type='Youtube'/>
            <Card title='Twitter Post' link='https://twitter.com/SpaceX/status/1732824684683784516?ref_src=twsrc%5Etfw' type='Twitter'/>
          </div>

      </div>
        <AddContentModal open={modalOpen} onClose={()=>{setModalOpen(!modalOpen)}}  />

    </div >
  )
}

export default Dashboard
