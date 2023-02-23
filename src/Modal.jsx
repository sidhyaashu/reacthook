import React, { useImperativeHandle, useState,forwardRef } from 'react'
import './App.css'

const Modal = ({props,ref}) => {
    const [modalState,setModalState] = useState(false)
    useImperativeHandle(ref,()=>({
        openModal:()=>setModalState(true)
    }))
    console.log('child render')

    if(!modalState) return null
  return (
    <div className='modal'>
        <p>This is modal</p>
        {props}
        <button onClick={()=>setModalState(false)} >Close</button>
      
    </div>
  )
}

export default forwardRef(Modal)
