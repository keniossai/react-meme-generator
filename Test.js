import React from 'react'



export default function Test (){
  const [count, setCount] = React.useState(0)

  function add(){
    setCount(prevCount => prevCount + 1)
  }

  function minusCount(){
    setCount(prevCount => prevCount - 1)
  }
  // function add(){
  //   setCount(count + 1)
  // }

  // function minusCount(){
  //   setCount(count - 1)
  // }
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}} >
      <button onClick={minusCount} style={{padding: "10px"}}>-</button>
      <div style={{padding: "10px"}}>
        <h1 style={{padding: "10px 40px", backgroundColor: "black", color: "white", borderRadius: "100%", fontSize: "80px", textAlign: "center"}}>{count}</h1>
      </div>
      <button onClick={add} style={{padding: "10px"}}>+</button>
    </div>
  )
}
// export default function Test (){
//   const [isImportant, setIsImportant] = React.useState("Yes")

//   function handleClick(){
//     setIsImportant("NO")
//   }
//   return (
//     <div>
//       <h1>Is state important to know</h1>
//       <div onClick={handleClick}>
//         <h1>{isImportant}</h1>
//       </div>
//     </div>
//   )
// }

// export default function Test(){
//   const [things, setThing] = React.useState(["Things 1", "Things 2"])
//   function addItem(){
//     const newThingsItems = `Thing ${things.length + 1}`
//     setThing(prevState => [...prevState, newThingsItems])
//   }
//   const thingsElelments = things.map(things => <p key={things}>{things}</p>)
//   return (

//     <div>
//       <button onClick={addItem} style={{backgroundColor: "transparent", border: "", alignItems: "center", display: "block", padding: "10px", borderRadius: "50px"}}>Add Item</button>
//       <br />
//       {thingsElelments}
//     </div>
//   )
// }

