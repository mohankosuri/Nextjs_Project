 
 "use client"
 
 import React, { useState } from 'react'
  
 import Datafetch from './Data/page'
 import Link from 'next/link'
 import dynamic from 'next/dynamic'
 import CustomeForm from './Components/CustomeForm'
 //import ContactForm from './Components/Contactform'
 import ModeToggle from '../app/Components/Togle'
import ContactForm12 from './Components/Fileupload'
import ContactForm123 from './Components/Fileupload1'
import { createContext } from 'vm'
import Home from './Components/MainForm'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
 
 

 const Contactform = dynamic(()=>import('./Components/Contactform'),{ssr:false,})
 //const PostData = dynamic(()=>import ('./Components/Post'))
 //const FetchData = dynamic(()=>import ('./Fetchdata/page'))

const LazyLoading = dynamic(()=>import ('../app/Components/LazyLoading'),{loading:()=><div>loading......!!</div>})
 
 const page = () => {
  const[show,setShow]=useState(false)

  
   return (
     <div>
      <div className='flex ml-[1100px]'>
      <ModeToggle/>
      </div>
      <Link href='/Fetchdata'>data</Link>
      <button onClick={() => setShow(true)}>Contact Form</button>
      {show && <LazyLoading />}
      {show && <Contactform />}
     
       
      
        
        
          
     </div>
   )
 }
 
 export default page