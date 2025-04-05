"use client"
import React, { useContext } from 'react'

import { ThemeContext } from '@/Context/ThemeContext'

function DarkMode() {
  const {mode,toggle}=useContext(ThemeContext)
  
  return (
    <div onClick={toggle}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "2px solid blue",
        borderRadius: "30px",
        padding: "7px",
        width: "50px",
        position: "relative",
        cursor:"pointer"
      }}
    >
      <div >🌙</div>
      <div  >🌚</div>
      <div
        style={{
          width: "30px",
          aspectRatio: "1 / 1",
          backgroundColor: "blue",
          borderRadius: "50%",
          position: "absolute",
          ...(mode === "light" ? { left: "5px" } : { right: "5px" }),
        }}
      />
    </div>
  )
}

export default DarkMode
