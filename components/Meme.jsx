import React from 'react'
import data from '../data'

export default function Meme(){
  const [memeImage, setMemeImage ] = React.useState("")

  function getMemeImage(){
    const memesArray = data.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
  }
  return(
    <main>
      <div className="form">
        <input className="form-input" type="text" placeholder="Top text" />
        <input className="form-input" type="text" placeholder="Bottom text" />
          <button className='form-button' onClick={getMemeImage}>Get a new meme image</button>
      </div>
      <img src={memeImage} alt="" style={{maxWidth: "100%", marginTop: "10px"}} />
    </main>
  )
}


// One thing most people fail to do is utilize the use of social media, when they see the success of others they get overwhelmed by it, and then pressure sets it.