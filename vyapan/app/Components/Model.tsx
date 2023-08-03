import React from 'react'

const Model = ({isVisible,onClose,children}:any) => {
    if(!isVisible) return null



    const Handleclose=(e:any)=>{
         if(e.target.id==='wraper') onClose();
    }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wraper' onChange={Handleclose}>
        <div className='w-[600px]'>
            <div className='text-white flex place-content-end cursor-pointer' onClick={()=>onClose()}>X</div>
            <div className='bg-white p-2 rounded'>{children}</div>
            

        </div>
    </div>
  )
}

export default Model