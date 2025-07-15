
import { useState } from 'react'
import { Button } from '../component/Button'
import Card from '../component/Card'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import AddContentModal from '../component/CreateContentModal'
import Sidebar from '../component/sidebar/Sidebar'
import useContent from '../Hooks/useContent'
function Dashboard() {
  const [modalOpen,setModalOpen] = useState(false);
  const contents = useContent();

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
          <div className='flex gap-4 flex-wrap'>
            {
              contents.map(({title,link,type,_id})=> (
                <Card title={title} link={link} type={type} key={_id} _id={_id}/>
              ))
            }
          </div>

      </div>
        <AddContentModal open={modalOpen} onClose={()=>{setModalOpen(!modalOpen)}}  />

    </div >
  )
}

export default Dashboard
