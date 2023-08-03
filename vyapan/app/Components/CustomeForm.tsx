import React, { Fragment, useState } from 'react'
import Model from './Model'
 

import dynamic from 'next/dynamic'


const LoginForm = dynamic(()=>import ('./Login'),{loading:()=><div>loading......!!</div>})

const Paragraph =  dynamic(()=>import ('./Paragraph'),{loading:()=><div>loading......!!</div>})

const CustomeForm = () => {
    const[shomodel,setShowmodel]=useState(false)
    const[shomodel1,setShowmodel1]=useState(false)
    const[shomodel2,setShowmodel2]=useState(false)

     

  return (
    <Fragment>
    <div className='p-10 text-center'>
        <button className='text-white bg-blue-700 hover:bg-blue-900 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5' onClick={()=>setShowmodel(true)}>Text Model</button>
        <button className='text-white bg-blue-700 hover:bg-blue-900 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5' onClick={()=>setShowmodel1(true)}>Video Model</button>
        <button className='text-white bg-blue-700 hover:bg-blue-900 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5' onClick={()=>setShowmodel2(true)}>Form Model</button>
        <Model isVisible ={shomodel} onClose ={()=>setShowmodel(false)}>Model
         <Paragraph/>
        </Model>
        <Model isVisible ={shomodel1} onClose ={()=>setShowmodel1(false)}>
         <iframe width="580" height="315" src="https://www.youtube.com/embed/nwJK-jo91vA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </Model>
        <Model isVisible ={shomodel2} onClose ={()=>setShowmodel2(false)}> <LoginForm/></Model>
    </div>
    </Fragment>
  )
}

export default CustomeForm