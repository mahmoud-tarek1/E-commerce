"use client"
import React from 'react'
import Link from 'next/link'
import Styles from "./navebar.module.css"
import Button from '../Button/Button'
import DarkMode from '../DarkModeToggle/DarkMode'

function Navbar() {
  return (
   <div className={Styles.container} 
   style={{display:'flex',justifyContent:"space-between",gap:"10px"}}>
    <div>
    <Link href="/" className={Styles.logo}>
    HEXASHOP</Link></div>
    <div style={{display:"flex" }}>
     <DarkMode/>
        <Link style={{margin:"0 10px",color:"white" ,textDecoration:"none",fontWeight:"bold",fontSize:"20px"}} href="/about" className={Styles.link}>About</Link>
        <Link style={{margin:"0 10px",color:"white" ,textDecoration:"none",fontWeight:"bold",fontSize:"20px"}} href="/portfolio" className={Styles.link}>Portfolio</Link>
        <Link style={{margin:"0 10px",color:"white" ,textDecoration:"none",fontWeight:"bold",fontSize:"20px"}} href="/blog" className={Styles.link}>Blog</Link>
        <Link style={{margin:"0 10px",color:"white" ,textDecoration:"none",fontWeight:"bold",fontSize:"20px"}} href="/contact" className={Styles.link}>Contact</Link>
    <Button/>
    </div>
   </div>
  )
}

export default Navbar
