"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button, ToggleButton } from "@mui/material"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';






 function ModeToggle() {
  const { setTheme } = useTheme()

  return (
     <div>


         
          <LightModeIcon onClick={() => setTheme("light")}></LightModeIcon>
        
        
          <DarkModeIcon onClick={() => setTheme("dark")} className="ml-5"/>
        

         

     </div>
  )
}
export default ModeToggle;
