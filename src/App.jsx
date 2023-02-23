// import { useEffect, useState,useCallback, useMemo } from 'react'
// import './App.css'



// function App() {

//   const [userInput,setUserInput] = useState('')
//   const [rdIn,setRdIn] = useState('')

//   const [num1] =useState(7)
//   const [num2] =useState(5)
//   const [result,setResult]=useState(0)

//   const fib=useCallback((n)=>{
//   return (n<=1)?n:fib(n-1)+fib(n-2)
// },[])

//   const fibNumber= useMemo(()=>fib(rdIn),[rdIn,fib])

//   useEffect(()=>{
//     console.log('fibnumber rendered')
//   },[fibNumber])


//   const newArray=useCallback(()=>[num1,num2],[num1,num2])

//   const sum =useCallback(()=>num1 + num2,[num1,num2])
//   useEffect(()=>{
//     console.log(`New sum value is : ${newArray()}`)
//     setResult(newArray())
//   },[newArray])

//   return (
//     <main className="App">
//       <input type="text" placeholder='input' value={rdIn} onChange={(e)=>setRdIn(e.target.value)} />
//     <h1>Fib : {fibNumber || "--"}</h1>
//       <input type="text" placeholder='input' value={userInput} onChange={(e)=>setUserInput(e.target.value)} />
//     <h1>OutPut : {userInput || "--"}</h1>
//     </main>
//   )
// }

// export default App


// import React, { useReducer } from 'react'
// import './App.css'

//   const ACTION={
//     INCREMENT:"increment",
//     DECREMENT:"decrement",
//     USERINPUT:"newUserInput",
//     TGCOLOR:"tgColor"
//   }

//   const reducer=(state,action)=>{
//     switch (action.type) {
//       case ACTION.INCREMENT:
//         return {...state,count:state.count+1}
//       case ACTION.DECREMENT:
//         return {...state,count:state.count-1}
//       case ACTION.USERINPUT:
//         return {...state,userInput:action.payload}
//       case ACTION.TGCOLOR:
//         return {...state,color:!state.color}

//       default:
//         throw new Error();
//     }
//   }


// const App = () => {

//   const [state,dispatch]=useReducer(reducer,{
//     count:0,
//     userInput:'',
//     color:false,
//   })

//   return (
//     <main className='App'>
//       <div>
//         <input type="text" value={state.userInput} onChange={(e)=>dispatch({type:ACTION.USERINPUT,payload:e.target.value})} />
//       <br />
//       <br />
//         <p>{state.count}</p>
//       <section>
//         <button onClick={()=>dispatch({type:ACTION.INCREMENT})} >+</button>
//         <button onClick={()=>dispatch({type:ACTION.DECREMENT})} >-</button>
//         <button onClick={()=>dispatch({type:ACTION.TGCOLOR})} >color</button>
//       </section>
//       <p style={{color:state.color?"red":"green"}} >{state.userInput}</p>
//       </div>

      
//     </main>
//   )
// }

// export default App




import React, { useRef } from 'react'
import './App.css'
import Modal from './Modal'

const App = () => {
  const modalRef= useRef()

  const handleOpenModal=()=>{
    modalRef.current.openModal()
  }

  console.log('parent rendered')

  return (
    <main className='App'>
      <p>parent Components</p>
      <Modal props="Welcome modal" ref={modalRef}/>
      <button onClick={handleOpenModal} >open</button>
      
    </main>
  )
}

export default App

